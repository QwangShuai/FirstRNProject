import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {DatePicker} from 'react-native-pickers';

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            unit: ['年', '月', '日'],
            startYear: 1900,
            endYear:2050,
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
                onPickerConfirm={(value) => {
                    this.props.callBack(value);
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