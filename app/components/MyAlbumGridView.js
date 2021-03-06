import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableHighlight,
    ImageBackground,
    AsyncStorage,
    Alert
} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import SelectYesOrNo from '../components/SelectYesOrNo';
import GetPhotoFromPhone from "../util/GetPhotoFromPhone";
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
const Stylecss = require('../common/Stylecss');
export default class MyAlbumGridView extends Component {
    static defaultProps = {
       /* itemInfo: {
            images: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
            date: '2017年2月1日',
        },*/
    }

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    key: 0,
                    url: require('../res/images/add_image.png'),
                    date: '',
                    id:'',
                },
            ],
            isShowSelectImage: false,
        }
    }

    addImage() {
        this.setState({
            isShowSelectImage: true,
        });
    }

    deleteImage(item, index) {
        this.state.images.splice(index, 1);
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/deleteAlbum');
        let params=md5.hex_md5(param);
        formData.append("listid", item);
        formData.append('app_key',params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/deleteAlbum',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                           if(result.code===200){
                               alert('操作成功!');
                               return false;
                           }
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
        let data = this.state.images.concat();

        this.setState({
            images: data,
        }, () => {
            // this.state.images.splice(this.state.images.length - 1, 1);
            // this.props.selectImages && this.props.selectImages(this.state.images.concat());
            // this.state.images.push({key: this.state.images.length, url: require('../res/images/add_image.png')});
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

    componentWillMount() {
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/AlbumList');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/AlbumList',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            for(var i = 0;i<result.obj.length;i++){
                                this.props.itemInfo.push({key:i, url:{uri:result.obj[i].upicurl}, date: result.obj[i].utime,id:result.obj[i].uid});
                            }
                           for (let i = 0; i < this.props.itemInfo.length; i++) {
                                this.state.images.push(this.props.itemInfo[i]);
                               let data = this.state.images.concat();
                               this.setState({
                                   images: data
                               });
                            }
                            console.log(this.state.images);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })


    }
    login(){
        this.props.navigation.navigate('Home');
    }

    /**
     * 拍照或者选择照片回调，返回链接对象
     * @param obj
     */
    photoResult(obj) {
        let source = {uri: obj,type: 'multipart/form-data', name: 'a.jpg'};
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/Photoalbum');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        formData.append("albumimg",source);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/Photoalbum',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            let item = {
                                key: this.state.images.length,
                                url: {uri: obj},
                                id:result.obj.id,
                            }
                            this.state.images.push(item);
                            let data = this.state.images.concat();
                            this.setState({
                                images: data
                            });
                            console.log('responseData',result);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
        //  this.state.images.splice(this.state.images.length - 1, 1);

        // this.state.images.push({key: this.state.images.length, url: require('../res/images/add_image.png')});

        // let backData = this.state.images.concat();
        // backData.splice(0, 1);
        // this.props.selectImages && this.props.selectImages(backData);

    }

    setItemView(item, index) {
        if (index === 0) {
            return (
                <View style={styles.imageStyle}>
                    <TouchableHighlight style={{
                        width: UtilScreen.getWidth(300),
                        height: UtilScreen.getHeight(200),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                                        onPress={this.addImage.bind(this)}
                                        underlayColor={'#f8f8f8'}>
                        <Image
                            source={require('../res/images/add_image.png')}/>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={{width:UtilScreen.getWidth(300),height:UtilScreen.getHeight(200),marginLeft: UtilScreen.getWidth(40),
                        marginTop: UtilScreen.getWidth(24),marginRight:UtilScreen.getWidth(20),
                        borderRadius: UtilScreen.getHeight(10),}}>
                    <Image style={{width: UtilScreen.getWidth(300),
                        height: UtilScreen.getHeight(200),borderRadius: UtilScreen.getHeight(10)}}
                                     source={item.url} />
                        <TouchableHighlight style={styles.imageDeleteStyle}
                                            onPress={this.deleteImage.bind(this, item.id, index)}
                                            underlayColor={'#f8f8f8'}>
                            <Image style={{width:UtilScreen.getWidth(30),height:UtilScreen.getHeight(30)}}
                                   source={require('../res/images/delete.png')} resizeMode='contain'/>
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
    container: {
        backgroundColor: '#fff'
    },
    imageStyle: {
        marginLeft: UtilScreen.getWidth(40),
        marginTop: UtilScreen.getWidth(24),
        marginRight: UtilScreen.getWidth(20),
        alignItems: 'center',
        justifyContent: 'center',
        width: UtilScreen.getWidth(300),
        height: UtilScreen.getHeight(200),
        borderRadius: UtilScreen.getHeight(10),
        backgroundColor: '#f9f9f9',
    },
    dataStyle: {
        marginLeft: UtilScreen.getWidth(40),
        marginTop: UtilScreen.getHeight(15),
        fontSize: 12,
        color: '#333333',
    },
    imageDeleteStyle: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: UtilScreen.getWidth(30),
        height: UtilScreen.getHeight(30),
        marginRight:UtilScreen.getWidth(10),
        marginTop:UtilScreen.getHeight(10),
    },
})