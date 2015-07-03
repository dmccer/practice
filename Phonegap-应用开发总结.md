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
	
	# 使用 shelljs 包装下面两条命令
	curl http://d.example.com/fe/project_name/0.0.1.tar.gz > ./www.tar.gz
	tar zxvf ./www.tar.gz

## 生成签名并加入配置，自动发布

1. 生成 keystore
	
		# 进入您想要保存 keystore 文件的目录
		cd /Users/kane/work 
		keytool -genkey -alias test.keystore -keyalg RSA -validity 10000 -keystore test.keystore
	
	* -genkey: 产生密钥
	* -alias test.keystore: 别名 test.keystore
	* -keyalg RSA: 使用 RSA 算法对签名加密
	* -validity 10000: 证书有效天数 10000
	* -keystore demo.keystore: keystore 的文件名
	* 国家代码: CN 表示中国


2. 加入 phonegap build 配置

	在 `inspector-app/platforms/android/` 目录中创建 `ant.properties` 文件并输入下面内容:
	
		key.store=/Users/kane/work
		key.alias=test.keystore
		key.store.password=xxxxxxx
		key.alias.password=xxxxxxx

## 调试

1. chrome 调试 android, chrome 地址栏输入 `chrome://inspect`, 然后选择 `Devices`；android 设备开启 USB 调试

## 踩到的坑

1. 小米平板无法安装 apk 

	断网安装
	
2. 拍照和照片预览插件会导致 APP 自动重启或退出

	自定义拍照，使用 Phonegap 提供的 Thread pool
	
3. MX4 USB 调试，ADB 无法识别

	将 0x2a45 添加到文件 ~/.android/adb_usb.ini 末尾

4. 小米平板和手机打开开发者模式与开启 USB 调试

	* 设置 -> 关于平板/手机 -> 连续点击 `MIUI 版本`
	
	* 其他高级设置 -> 开发者选项 -> USB 调试  
	
5. 更换应用图标不更新

	重启手机或平板
	
6. Phonegap 页面中播放音频文件

	* 使用 cordova 插件 `org.apache.cordova.media`
	
	* 使用 audio 标签，文件地址必须使用绝对地址