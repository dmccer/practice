# phonegap 实践
从无到有创建一个基于 phonegap 的 APP， 涉及到的设备功能有拍照，预览，文件处理

## 安装环境(OS X)

1. 下载并安装 [JDK](http://www.oracle.com/technetwork/cn/java/javase/downloads/index.html)
2. 下载并安装 [Nodejs](https://nodejs.org/)
3. 下载并安装 [git 客户端](http://git-scm.com/)
4. 安装 cordova: `sudo npm install -g cordova`
5. 下载并安装 [android studio](http://developer.android.com/tools/studio/index.html)
6. 下载并安装 [Android SDK](http://developer.android.com/sdk/index.html#Other)
7. 配置 Android SDK 环境变量

## 创建 APP

1. 创建 APP: `cordova create inspector-app com.example.inspector Inspector`
2. `cd inspector-app`
3. `cordova platform add android`
4. `cordova build`
5. `cordova emulate android`

## 添加插件

* `cordova plugin add org.apache.cordova.device`
* `cordova plugin add org.apache.cordova.splashscreen`
* `cordova plugin add org.apache.cordova.network-information`
* `cordova plugin add org.apache.cordova.file`
* `cordova plugin add org.apache.cordova.file-transfer`
* `cordova plugin add org.apache.cordova.geolocation`
* `cordova plugin add org.apache.cordova.console`
* `cordova plugin add git@github.com:shaithana/cordova-plugin-wezka-nativecamera.git`
* `cordova plugin add git@github.com:keensoft/FullScreenImage-Cordova-Plugin.git`

## 自定义 hook 获取静态包

## 生成签名并加入配置，自动发布

## 踩到的坑

1. 小米平板无法安装 apk 

	断网安装
	
2. 拍照和照片预览插件会导致 APP 自动重启或退出

	自定义拍照，使用 Phonegap 提供的 Thread pool
	
3. MX4 USB 调试，ADB 无法识别

	将 0x2a45 添加到文件 ~/.android/adb_usb.ini 末尾