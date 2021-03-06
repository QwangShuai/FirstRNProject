import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from './pickerview/view/DatePicker';

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: ['年', '月', '日'],
            startYear: 1900,
            endYear: 2050,
        }
    }

    componentDidUpdate() {
        this.props.isShow ? this.DatePicker.show() : this.DatePicker.dismiss();
    }

    btClick() {

    }

    render() {
        return (
            <DatePicker
                title={this.props.title}
                cancelText={''}
                confirmTextSize={15}
                HH={false}
                mm={false}
                ss={false}
                endYear={this.state.endYear}
                confirmTextColor={'#FF9D00'}
                itemTextColor={0x444444ff}
                itemSelectedColor={0x000000ff}
                unit={this.state.unit}
                startYear={this.state.startYear}
                onCoverPress={()=>{this.props.callBack('',0)}}
                onPickerConfirm={(value) => {
                    this.props.callBack(value,1);
                }}
                onPickerCancel={() => {
                    alert('cancel')
                }}
                ref={ref => this.DatePicker = ref}
            />
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