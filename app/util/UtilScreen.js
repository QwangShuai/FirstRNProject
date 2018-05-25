import {
    Dimensions,
    PixelRatio,
} from 'react-native';
const BASE_WIN_HEIGHT = 667;
const BASE_WIN_WIDTH = 375;
const currentPixel = PixelRatio.get()  // 当前为iPhone6，值为2
const UtilScreen = {
    getHeight(h) {
        if (!this.height) {
            const {height} = Dimensions.get('window');
            this.height = height;
        }
        return h / currentPixel * (this.height / BASE_WIN_HEIGHT);
    },

// 根据实际屏幕尺寸转换对应的像素宽度
    getWidth(w) {
        if (!this.width) {
            const { width} = Dimensions.get('window');
            this.width = width;
        }
        return w / currentPixel * (this.width / BASE_WIN_WIDTH);
    }

}
export default UtilScreen;