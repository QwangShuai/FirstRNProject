import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AreaPicker from './pickerview/view/AreaPicker';
import AreaJson from './Area.json';

export default class SelectArea extends Component {
    constructor(props) {
        super(props);

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