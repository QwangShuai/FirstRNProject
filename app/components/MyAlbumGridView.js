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

const Stylecss = require('../common/Stylecss');
export default class MyAlbumGridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {key: 0, url: require('../res/images/add_image.png')},
            ],
            isShowSelectImage: false,
        }
    }

    static defaultProps = {
        itemInfo: {
            images:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
            date: '2017年2月1日',
        },
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
            key: this.state.images.length,
            url: obj,
        }
      //  this.state.images.splice(this.state.images.length - 1, 1);
        this.state.images.push(item);
       // this.state.images.push({key: this.state.images.length, url: require('../res/images/add_image.png')});
        let data = this.state.images.concat();
        let backData=this.state.images.concat();
        backData.splice(0,1);
        this.props.selectImages && this.props.selectImages(backData);
        this.setState({
            images: data
        });
    }
    setItemView(item,index){
        if(index===0){
            return(
                    <View style={styles.imageStyle}>
                        <TouchableHighlight style={styles.imageStyle}
                                            onPress={this.addImage.bind(this)}
                                            underlayColor={'#f8f8f8'}>
                            <Image
                                source={require('../res/images/add_image.png')}/>
                        </TouchableHighlight>
                    </View>
            )
        } else {
            return(
                <View style={styles.container}>
                    <View style={styles.imageStyle}>
                            <Image style={styles.imageStyle}
                                source={item.url} resizeMode='stretch'/>
                        <TouchableHighlight style={styles.imageDeleteStyle}
                                            onPress={this.deleteImage.bind(this, item, index)}
                                            underlayColor={'#f8f8f8'}>
                            <Image style={styles.imageStyle}
                                   source={require('../res/images/delete.png')} resizeMode='stretch'/>
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.dataStyle}>{this.props.itemInfo.date}</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={2}
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
    container:{
        backgroundColor: '#fff'
    },
    imageStyle:{
        margin:UtilScreen.getWidth(25),
        alignItems:'center',
        justifyContent:'center',
        width:UtilScreen.getWidth(300),
        height:UtilScreen.getHeight(200),
        borderRadius:UtilScreen.getWidth(10),
        backgroundColor:'#f9f9f9',
    },
    dataStyle:{
        marginLeft:UtilScreen.getWidth(40),
        marginTop:UtilScreen.getHeight(15),
        fontSize:12,
        color:'#333333',
    },
    imageDeleteStyle:{
        position:'absolute',
        right:UtilScreen.getWidth(16),
        top:UtilScreen.getHeight(16),
        width:UtilScreen.getWidth(30),
        height:UtilScreen.getHeight(30),
    },
})