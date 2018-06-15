import React,{Component} from 'react';
import {View,Image} from 'react-native';
import Swiper from 'react-native-swiper';
import UtilScreen from '../util/UtilScreen';
export default class IndexPageBanner extends Component{
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
        );
    }
}