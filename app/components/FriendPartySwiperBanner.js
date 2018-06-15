import React,{Component} from 'react';
import {View,Image,TouchableHighlight,Text} from 'react-native';
import Swiper from 'react-native-swiper';
import UtilScreen from '../util/UtilScreen';
export default class FriendPartySwiperBanner extends Component{
    constructor(props){
        super(props);
        this.state = {
            banners: [
                {key: 0, imageURL: require('../res/images/1.jpg')},
                {key: 1, imageURL: require('../res/images/2.jpg')},
                {key: 2, imageURL: require('../res/images/3.jpg')},
            ],
        }
    }
    render(){
        return(
            <View style={{width:'100%',height:UtilScreen.getHeight(465)}}>
            <Swiper
                autoplay={true}
                paginationStyle={{bottom: 10}}
                showsButtons={false}
                height={UtilScreen.getHeight(375)}
                removeClippedSubviews={false}
                showsPagination={true}
                dotColor="white"
                autoplayTimeout={4}
                loop={true}
                activeDotColor='red'
                autoplayDirection={true}
                horizontal={true}>
                {
                    this.state.banners.map((item, index) => {
                        console.log(item, index)
                        //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                        return (<Image style={{height: UtilScreen.getHeight(375), width: '100%'}} key={index}
                                       resizeMode='stretch'
                                       source={item.imageURL}/>);
                    })
                }

            </Swiper>
                <View style={{width:'100%',height:UtilScreen.getHeight(90),flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <TouchableHighlight>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#333',marginLeft:UtilScreen.getWidth(10),fontSize:12}}>选择城市</Text>
                            <View  style={{marginLeft:UtilScreen.getWidth(10),alignSelf:'center',justifyContent:'space-between',height:UtilScreen.getHeight(30)}}>
                            <Image
                                style={{width:UtilScreen.getWidth(15),height:UtilScreen.getHeight(10)}}
                                source={ require('../res/images/triangle_up.png')}
                                resizeMode='stretch'
                            />
                                <Image
                                    style={{width:UtilScreen.getWidth(15),height:UtilScreen.getHeight(10)}}
                                    source={ require('../res/images/triangle_down.png')}
                                    resizeMode='stretch'
                                />
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#333',marginLeft:UtilScreen.getWidth(10),fontSize:12}}>选择标签</Text>
                            <View  style={{marginLeft:UtilScreen.getWidth(10),alignSelf:'center',justifyContent:'space-between',height:UtilScreen.getHeight(30)}}>
                                <Image
                                    style={{width:UtilScreen.getWidth(15),height:UtilScreen.getHeight(10)}}
                                    source={ require('../res/images/triangle_up.png')}
                                    resizeMode='stretch'
                                />
                                <Image
                                    style={{width:UtilScreen.getWidth(15),height:UtilScreen.getHeight(10)}}
                                    source={ require('../res/images/triangle_down.png')}
                                    resizeMode='stretch'
                                />
                            </View>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'#333',fontSize:12}}>查询领队</Text>
                            <Image
                                style={{marginLeft:UtilScreen.getWidth(10),alignSelf:'center'}}
                                source={ require('../res/images/serach_lead.png')}
                            />
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}