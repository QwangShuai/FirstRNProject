import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AreaPicker from './pickerview/view/AreaPicker';
import AreaJson from './Area.json';
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
export default class SelectArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            json:'',
        }
    }
    componentWillMount(){
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_public/all_city');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_public/all_city',{
            method:'POST',
            body: formData,
        }) .then((response) => response.text() )
            .then((responseData)=>{
                var bf = new Buffer(responseData , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                if (result.code===200){
                    console.log('area',result);
                    // this.setState({
                    //     json:result.obj,
                    // })
                    for(let i=0;i<result.obj.length;i++){
                        if(result.obj[i].ParentId==100000){

                        }
                    }

                } else {
                    console.log('area',result.message);
                }
            })
    }
    componentDidUpdate() {
        this.props.isShow ? this.AreaPicker.show() : this.AreaPicker.dismiss();
    }
    render() {
        return (
            <AreaPicker
                areaJson={AreaJson}
                selectedValue={['北京市', '北京市', '东城区']}
                onCoverPress={()=>{ this.props.callBack(['北京市', '北京市', '东城区'],0)}}
                onPickerCancel={() => {
                    this.props.callBack(['北京市', '北京市', '东城区'],0);
                }}
                onPickerConfirm={(value) => {
                    this.props.callBack(value,1);
                }}
                ref={ref => this.AreaPicker = ref}/>
        );
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        mark: {
            flex: 1,
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
        },
    }
)