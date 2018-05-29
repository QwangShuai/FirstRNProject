import React, {Component} from 'react';
import InputDialog from './pickerview/view/InputDialog';

export default class MyInputDialog extends Component {
    constructor(props) {
        super(props);

    }

    componentDidUpdate() {
        this.props.isShow ? this.InputDialog.show() : this.InputDialog.dismiss();
    }


    render() {
        return (
            <InputDialog ref={ref => this.InputDialog = ref}
                         title={this.props.inputProps.title}
                         placeholder={this.props.inputProps.placeholder}
                         onCoverPress={this.props.onCoverPress.bind(this)}
                         onSubmit={(text) => {
                             this.props.callBack(text);
                         }}/>
        );
    }
}
