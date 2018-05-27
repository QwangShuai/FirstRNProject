/*该组件只能在 react-native中使用
 * 先安装 yarn add  react-native-picker
 * 然后 链接 react-native link react-native-picker
 * cback -- 选择后的回调方法 返回值
 * type -- 组件类型 看 componentWillMount() 方法定义
 * 还可以定义其他的，自己传数据，需要进行扩展，但是有缺陷，就是 只能按照这种格式，去到的值也是文字，而不能是id，
 * 如果后端需要id就不能用这个组件
 * */
import React, {Component} from 'react';
import {View} from 'react-native';
import Picker from 'react-native-picker';

var _Picker = null;

class PickerData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: this.props.title,
            data: [],
        };
    }

    //组件渲染前
    componentWillMount() {
    }

    //组件渲染后
    componentDidMount() {
    }

    componentDidUpdate() {
        this.props.isShow ? this.pickerType() : _Picker && _Picker.hide();
    }

    //组件销毁
    componentWillUnmount() {
        _Picker && _Picker.hide();
    }

    pickerType = () => {
        //根据类型判断 要显示的 组件数据
        switch (this.props.type) {
            case 'time'://时间
                this.time();
                break;
            case 'date'://日期
                this.createDateData();
                break;
            case 'dateMonth'://日期选择年月份
                this.dateMonth();
                break;
            case 'dateYear'://日期选择年份份
                this.dateYear();
                break;
        }
    }
    //时间
    time = () => {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let data = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            []
        ]
        for (let i = 0; i < 60; i++) {
            data[1].push(i);
        }
        this.pickerInit(data, [h, m]);
    }
    //日期 - 天
    dates = () => {
        let date = new Date();
        let y = date.getFullYear();
        let m = String(date.getMonth() + 1);
        let d = String(date.getDate());
        let data = [];
        let year = null;
        let month = null;
        let maxY = y + 0;
        let minY = y - 10;
        for (let i = minY; i <= maxY; i++) {
            year = new Object();
            year[i] = [];
            for (let j = 1; j <= 12; j++) {
                month = new Object();
                month[j] = [];
                let monthDay = currentMonth(j, i);
                let day = [];
                for (let k = 1; k <= monthDay; k++) {
                    month[j].push(k);
                }
                year[i].push(month);
            }
            data.push(year);
        }
        this.pickerInit(data, [y, m, d]);
    }
    //日期 - 月份
    dateMonth = () => {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let maxY = y + 10;
        let minY = y - 10;
        let data = [
            [],
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ]
        for (let i = minY; i <= maxY; i++) {
            data[0].push(i);
        }
        this.pickerInit(data, [y, m]);
    }
    //日期 - 年份
    dateYear = () => {
        let y = new Date().getFullYear();
        let maxY = y + 10;
        let minY = y - 10;
        let data = []
        for (let i = minY; i <= maxY; i++) {
            data.push(i);
        }
        this.setState({
            data: data
        }, function () {
            this.pickerInit([y]);
        }.bind(this));

    }


    render() {
        return (
            <View/>
        );
    }
     createDateData(){
        let date = {};
        for(let i=2000;i<2019;i++){
            let month = {};
            for(let j = 1;j<13;j++){
                let day = [];
                if(j === 2){
                    for(let k=1;k<29;k++){
                        day.push(k+'日');
                    }
                }
                else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                    for(let k=1;k<32;k++){
                        day.push(k+'日');
                    }
                }
                else{
                    for(let k=1;k<31;k++){
                        day.push(k+'日');
                    }
                }
                month[j+'月'] = day;
            }
            date[i+'年'] = month;
        }
         let mDate = new Date();
         let y = mDate.getFullYear();
         let m = String(mDate.getMonth() + 1);
         let d = String(mDate.getDate());
         this.pickerInit(date, [y, m, d]);
    }
    //组件初始化
    pickerInit = (data, selectedValue) => {
        Picker.init({
            pickerData: data,
            selectedValue: selectedValue,
            pickerTitleText: this.props.title,
            pickerConfirmBtnColor: [252, 164, 22, 1],
            pickerTitleColor: [51, 51, 51, 1],
            pickerToolBarBg: [229, 229, 229, 1],
            pickerBg: [255, 255, 255, 1],
            pickerToolBarFontSize: 15,
            wheelFlex: [1, 1, 1],
            pickerFontSize: 15,
            pickerFontColor: [51, 51, 51, 1],
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '',
            //确定
            onPickerConfirm: data => {
                switch (this.props.type) {
                    case 'time'://时间
                        data = data.join(':');
                        break;
                    case 'date'://日期
                        data = data.join('-');
                        break;
                    case 'dateMonth'://日期选择年月份
                        data = data.join('-');
                        break;
                    case 'dateYear'://日期选择年份
                        this.dateYear();
                        break;
                }
                this.setState({
                    val: data
                });
                this.props.selectDate(data);
                _Picker = null;
            },
            //取消
            onPickerCancel: data => {
                console.log(data);
            },
            //选择
            onPickerSelect: data => {
                console.log(data);
            }
        });
        _Picker = Picker;
        _Picker.show();
    }
}


//计算当月天数
currentMonth = (m, y) => {
    var monthDay = 0;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            monthDay = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            monthDay = 30;
            break;
        case 2:
            if (y % 4 == 0 && y % 100 != 0 || y % 400 == 0) {
                monthDay = 29;

            } else {
                monthDay = 28;
            }
    }
    return monthDay;
}
export default PickerData;