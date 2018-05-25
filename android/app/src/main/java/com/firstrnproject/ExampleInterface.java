package com.firstrnproject;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2018/5/18.
 */

public class ExampleInterface extends ReactContextBaseJavaModule{

    public ExampleInterface(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "ExampleInterface";
    }
    @ReactMethod
    public void HandleMessage(String aMessage){
        Log.i("RNMessage","这条消息来自RN："+aMessage);
    }
}
