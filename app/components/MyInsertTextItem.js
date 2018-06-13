import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');


export default class MyInsertTextItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            insertText:'队友的插文，想说什么就说什么呗！',
            state:'待审核',
            imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            location:'插文位置：03/士大夫',
            title:'参与的活动：标题标题标题标题标题标题标题标 题标题标题标题标题',
            lastTime:'上次编辑时间：2018-04-12 14:33:33',
        }
    }

    editor(){

    }

    delete(){

    }

    render(){
        return(
            <View style={Styless.styles.container}>
                <Text style={Styless.styles.it_insertTextStyle}>{this.props.itemInfo.insertText}</Text>
                <Text style={[Styless.styles.it_stateStyle,{color:'#f71f1f',marginTop:UtilScreen.getHeight(20),}]}>{this.props.itemInfo.state}</Text>
                <Image style={Styless.styles.it_imageStyle} source={this.props.itemInfo.imageUrl} />
                <Text style={[Styless.styles.it_stateStyle,{marginTop:UtilScreen.getHeight(30)}]}>{this.props.itemInfo.location}</Text>
                <Text style={[Styless.styles.it_stateStyle,{width:UtilScreen.getWidth(588)}]}>{this.props.itemInfo.title}</Text>
                <Text style={Styless.styles.it_stateStyle}>{this.props.itemInfo.lastTime}</Text>
                <View style={Styless.styles.light_E5E5E5} />
                <View style={Styless.styles.it_myView}>
                    <TouchableHighlight style={[Styless.styles.it_smallImageStyle,{right:UtilScreen.getWidth(188)}]} onPress={this.editor.bind(this)}>
                        <Image style={Styless.styles.it_smallImageStyle} source={require('../res/images/editor-b.png')} resizeMode='contain'/>
                    </TouchableHighlight>
                    <Text style={[Styless.styles.it_textStyle,{right:UtilScreen.getWidth(130)}]} onPress={this.editor.bind(this)}>编辑</Text>
                    <TouchableHighlight style={[Styless.styles.it_smallImageStyle,{right:UtilScreen.getWidth(52)}]} onPress={this.delete.bind(this)}>
                        <Image style={Styless.styles.it_smallImageStyle} source={require('../res/images/delete-b.png')} resizeMode='contain'/>
                    </TouchableHighlight>

                    <Text style={[Styless.styles.it_textStyle,{right:0}]} onPress={this.delete.bind(this)}>删除</Text>
                </View>
                <View style={Styless.styles.light_F8F8F8} />
            </View>
        )
    }
}