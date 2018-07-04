package com.firstrnproject;

import android.os.Bundle;
import android.support.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.netease.im.RNNeteaseImModule;
import com.netease.im.ReceiverMsgParser;
import com.netease.im.uikit.permission.MPermission;
import com.oblador.vectoricons.VectorIconsPackage;
import com.horcrux.svg.SvgPackage;
import com.imagepicker.ImagePickerPackage;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "FirstRNProject";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        if(ReceiverMsgParser.checkOpen(getIntent())){//在后台时处理点击推送消息
            RNNeteaseImModule.launch = getIntent();
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        MPermission.onRequestPermissionsResult(this, requestCode, permissions, grantResults);
    }
}
