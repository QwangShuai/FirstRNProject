import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight,
} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import SelectYesOrNo from '../components/SelectYesOrNo';
import GetPhotoFromPhone from "../util/GetPhotoFromPhone";


export default class UploadImageGridView extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            images: [
                {key: 0, url: require('../res/images/add_image.png')},
            ],
            isShowSelectImage: false,
        }
    }

    static defaultProps = {
        maxNumber: 3,
    }
    static navigationOptions = {
        headerStyle: {height: 0},
    }

    addImage() {
        this.setState({
            isShowSelectImage: true,
        });
    }

    deleteImage(item, index) {
        this.state.images.splice(index, 1);
        let data = this.state.images.concat();
        this.setState({
            images: data,
        },()=>{
            this.state.images.splice(this.state.images.length - 1, 1);
            this.props.selectImages && this.props.selectImages(this.state.images.concat());
            this.state.images.push({key: this.state.images.length, url: require('../res/images/add_image.png')});
        });
    }

    takerPhotoOrSelect(type) {
        this.setState({
            isShowSelectImage: false,
        });
        if (type != 0) {
            let getPhoto = new GetPhotoFromPhone(this);
            if (type === 1) {
                getPhoto.takerPhoto();
            } else {
                getPhoto.selectPhoto();
            }
        }
    }

    /**
     * 拍照或者选择照片回调，返回链接对象
     * @param obj
     */
    photoResult(obj) {
        let item = {
            key: this.state.images.length - 1,
            url: obj,
        }
        this.state.images.splice(this.state.images.length - 1, 1);
        this.state.images.push(item);
        this.props.selectImages && this.props.selectImages(this.state.images.concat());
        this.state.images.push({key: this.state.images.length, url: require('../res/images/add_image.png')});
        let data = this.state.images.concat();
        this.setState({
            images: data
        });
    }

    setItemView(item, index) {
        if (this.state.images.length === (index + 1) && index != this.props.maxNumber) {
            return (
                <View style={styles.item}
                >
                    <TouchableHighlight style={styles.add_item_container}
                                        onPress={this.addImage.bind(this)}
                                        underlayColor={'#f8f8f8'}
                    >
                        <View style={styles.add_item_container}>
                            <Image
                                source={item.url}/>
                            <Text style={styles.imageCount}>{this.state.images.length - 1}/{this.props.maxNumber}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
        } else if (index < this.props.maxNumber) {
            return (
                <View style={styles.item}>
                    <View style={styles.item_container}>
                        <Image style={styles.itemImage} source={item.url} resizeMode='stretch'
                        />
                    </View>
                    <TouchableHighlight
                        style={styles.itemDeleteContainer}
                        onPress={this.deleteImage.bind(this, item, index)}
                        underlayColor={'#f8f8f8'}
                    >
                        <Image style={styles.itemDelete} source={require('../res/images/delete.png')}
                               resizeMode='stretch'
                        />
                    </TouchableHighlight>
                </View>
            );

        }

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    columnWrapperStyle={styles.flatliststyle}
                    numColumns={3}
                    data={this.state.images}
                    renderItem={({item, index}) => {
                        return this.setItemView(item, index);
                    }}
                    keyExtractor={item => item.key}
                ></FlatList>
                <SelectYesOrNo yesOrNo={this.takerPhotoOrSelect.bind(this)} isShow={this.state.isShowSelectImage}
                               topTitle={'拍照'} bottomTitle={'从相册中选择'}/>
            </View>

        );
    }
}


const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff'
        },
        add_item_container: {
            width: UtilScreen.getWidth(180),
            height: UtilScreen.getHeight(120),
            borderColor: '#666666',
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        item_container: {
            backgroundColor: 'yellow',
            width: UtilScreen.getWidth(180),
            height: UtilScreen.getHeight(120),
        },
        flatliststyle: {
            marginTop: UtilScreen.getHeight(40),
        },
        item: {
            backgroundColor: '#fff',
            width: UtilScreen.getWidth(250),
            height: UtilScreen.getHeight(160),
            alignItems: 'center',
            justifyContent: 'center',
        },
        imageCount: {
            color: '#333',
            fontSize: 12,
            position: 'absolute',
            right: 2,
            top: 0,
        },
        itemImage: {
            width: UtilScreen.getWidth(180),
            height: UtilScreen.getHeight(120),
        },
        itemDeleteContainer: {
            top: 0,
            right: UtilScreen.getWidth(15),
            position: 'absolute',
            width: UtilScreen.getWidth(40),
            height: UtilScreen.getWidth(40),
        },
        itemDelete: {
            width: UtilScreen.getWidth(40),
            height: UtilScreen.getWidth(40),
        }

    })
;