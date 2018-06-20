'use strict';
import React, {Component}from 'react';
import  {
    StyleSheet,
    View,
    WebView,
    Text,
    Platform,
    Alert,
    TouchableOpacity,
    ListView,
    Dimensions,
    ScrollView,
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast';


const SECTIONHEIGHT = 30;
const ROWHEIGHT = 40
var totalheight = [];//每个字母对应的城市和字母的总高度


const {width, height} = Dimensions.get('window');
// const URL = 'http://xxxxxxxxx.com/api/city/list';

import DATA_JSON from './city-list.json'


var that;

export default class CityIndexListView extends Component {

    constructor(props) {
        super(props);


        var getSectionData = (dataBlob, sectionID) => {
            return sectionID;
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID][rowID];
        };
        this.state = {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
            letters: [],
        };

        that = this;
    }

    _getSortLetters(dataList) {
        let list = [];

        for (let j = 0; j < dataList.length; j++) {
            let sortLetters = dataList[j].sortLetters.toUpperCase();

            let exist = false;
            for (let xx = 0; xx < list.length; xx++) {
                if (list[xx] === sortLetters) {
                    exist = true;
                }
                if (exist) {
                    break;
                }
            }
            if (!exist) {
                list.push(sortLetters);
            }
        }


        return list;
    }

    componentDidMount2() {
        let dataList = {"A": ["阿里", "阿坝"], "B": ["北京", "北方"]};
        let sectionIDs = Object.keys(dataList);
        let rowIDs = sectionIDs.map(sectionID => {
            let thisRow = [];
            let count = dataList[sectionID].length;
            for (let ii = 0; ii < count; ii++) {
                thisRow.push(ii);
            }
            return thisRow;
        });
        this.setState({
            letters: sectionIDs,
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataList, sectionIDs, rowIDs)
        });


    }
    componentDidMount(){
        let ALL_CITY_LIST = DATA_JSON.allCityList;
        let HOST_CITY_LIST = DATA_JSON.hotCityList;

        let letterList = this._getSortLetters(ALL_CITY_LIST);

        let dataBlob = {};

        ALL_CITY_LIST.map(cityJson=> {
            let key = cityJson.sortLetters.toUpperCase();

            if (dataBlob[key]) {
                let subList = dataBlob[key];
                subList.push(cityJson);
            } else {
                let subList = [];
                subList.push(cityJson);
                dataBlob[key] = subList;
            }
        });


        let sectionIDs = Object.keys(dataBlob);
        let rowIDs = sectionIDs.map(sectionID => {
            let thisRow = [];
            let count = dataBlob[sectionID].length;
            for (let ii = 0; ii < count; ii++) {
                thisRow.push(ii);
            }

            var eachheight = SECTIONHEIGHT + ROWHEIGHT * thisRow.length;
            totalheight.push(eachheight);

            return thisRow;
        });


        this.setState({
            letters: sectionIDs,
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });


        //   Alert.alert('读取list数据', 'sectionIDs.length=>' + sectionIDs.length + ", rowIDs.length=>" + rowIDs.length);

        console.log(sectionIDs);
        console.log(rowIDs);
        console.log(dataBlob);


        this.setState({
            letters: letterList,
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }

    componentDidMount3() {
        fetch(URL, {method: 'GET'}).then((response)=> {
            if (response.ok) {
                return response.json()
            } else {
                Alert.alert('读取list数据', '服务器错误1');
            }
        }).then((json)=> {
            let ALL_CITY_LIST = json.allCityList;
            let HOST_CITY_LIST = json.hotCityList;

            let letterList = this._getSortLetters(ALL_CITY_LIST);

            let dataBlob = {};

            ALL_CITY_LIST.map(cityJson=> {
                let key = cityJson.sortLetters.toUpperCase();

                if (dataBlob[key]) {
                    let subList = dataBlob[key];
                    subList.push(cityJson);
                } else {
                    let subList = [];
                    subList.push(cityJson);
                    dataBlob[key] = subList;
                }
            });

            let sectionIDs = Object.keys(dataBlob);
            let rowIDs = sectionIDs.map(sectionID => {
                let thisRow = [];
                let count = dataBlob[sectionID].length;
                for (let ii = 0; ii < count; ii++) {
                    thisRow.push(ii);
                }
                var eachheight = SECTIONHEIGHT + ROWHEIGHT * thisRow.length;
                totalheight.push(eachheight);

                return thisRow;
            });
            this.setState({
                letters: sectionIDs,
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
            });

            //   Alert.alert('读取list数据', 'sectionIDs.length=>' + sectionIDs.length + ", rowIDs.length=>" + rowIDs.length);
            console.log(sectionIDs);
            console.log(rowIDs);
            console.log(dataBlob);
            this.setState({
                letters: letterList,
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
            });
        }).catch((error)=> {
            Alert.alert('读取list数据', '服务器错误2' + error.toString());
        }).done();
    }

    _cityNameClick(cityJson) {
        //this.refs.toast.show(cityJson.name, DURATION.LENGTH_SHORT);
        this.props.nav.pop();
    }
    _scrollTo(index, letter) {
        this.refs.toast.close();
        let position = 0;
        for (let i = 0; i < index; i++) {
            position += totalheight[i]
        }
        this._listView.scrollTo({
            y: position
        });
        this.refs.toast.show(letter, DURATION.LENGTH_SHORT);
    }
    _renderRightLetters(letter, index) {
        return (
            <TouchableOpacity
                key={'letter_idx_' + index}
                activeOpacity={0.6}
                onPress={()=> {
                    this._scrollTo(index, letter)
                }}>
                <View style={styles.letter}>
                    <Text style={styles.letterText}>{letter}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    _renderListRow(cityJson, rowId) {
        return (
            <TouchableOpacity
                key={'list_item_' + cityJson.id}
                style={styles.rowView}
                onPress={()=> {
                    that._cityNameClick(cityJson)
                }}>
                <View style={styles.rowdata}>
                    <Text style={styles.rowdatatext}>{cityJson.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    _renderListSectionHeader(sectionData, sectionID) {
        return (
            <View style={  styles.sectionView }>
                <Text style={styles.sectionText}>
                    {sectionData}
                </Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainner}>
                    <ListView
                        ref={listView => this._listView = listView}
                        contentContainerStyle={styles.contentContainer}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderListRow}
                        renderSectionHeader={this._renderListSectionHeader}
                        enableEmptySections={true}
                        initialListSize={500}
                    />
                    <View style={styles.letters}>
                        {this.state.letters.map((letter, index) => this._renderRightLetters(letter, index))}
                    </View>
                </View>
                <Toast
                    ref="toast"
                    position='top'
                    positionValue={200}
                    fadeInDuration={750}
                    fadeOutDuration={1000}
                    opacity={0.8}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F4F4F4',
        // paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
    },
    listContainner: {
        height: Dimensions.get('window').height,
        marginBottom: 10
    },
    contentContainer: {
        flexDirection: 'row',
        width: width,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    letters: {
        position: 'absolute',
        height: height,
        top: 0,
        bottom: 0,
        right: 10,
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    letter: {
        height: height * 3.3 / 100,
        width: width * 3 / 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterText: {
        textAlign: 'center',
        fontSize: height * 1.1 / 50,
        color: '#e75404'
    },
    sectionView: {
        paddingTop: 5,
        paddingBottom: 5,
        height: 30,
        paddingLeft: 10,
        width: width,
        backgroundColor: '#F4F4F4',
    },
    sectionText: {
        color: '#e75404',
        fontWeight: 'bold'
    },
    rowView: {
        height: ROWHEIGHT,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomColor: '#F4F4F4',
        borderBottomWidth: 0.5,
    },
    rowdata: {
        paddingTop: 10,
        paddingBottom: 2,
    },
    rowdatatext: {
        color: 'gray',
        width: width,
    },
});