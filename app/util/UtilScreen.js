import {
    Dimensions,
    PixelRatio,
} from 'react-native';
const BASE_WIN_HEIGHT = 1334;
const BASE_WIN_WIDTH = 750;
const currentPixel = PixelRatio.get()  // 当前为iPhone6，值为2
const UtilScreen = {
    getHeight(h) {
        if (!this.height) {
            const {height} = Dimensions.get('window');
            this.height = height*currentPixel;
        }
        return h  * (this.height / BASE_WIN_HEIGHT)/currentPixel;
    },

// 根据实际屏幕尺寸转换对应的像素宽度
    getWidth(w) {
        if (!this.width) {
            const { width} = Dimensions.get('window');
            this.width = width*currentPixel;
        }
        return w  * (this.width/BASE_WIN_WIDTH)/currentPixel;
    }

}
export default UtilScreen;