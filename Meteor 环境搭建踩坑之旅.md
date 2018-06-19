# Meteor 环境搭建踩坑之旅

## 安装 Meteor

[官方安装](https://www.meteor.com/install)方法 `OSX/Linux`

```bash
curl https://install.meteor.com/ | sh
```

慢到怀疑人生，装成功是种奢望。。。。。。

下面有种有效提速的方法：

1. 首先下载官方安装脚本

```bash
curl https://install.meteor.com/ >> install-meteor.sh
```

2. 用文本编辑器打开文件 `install-meteor.sh` , 找到 `TARBALL_URL` 定义处，在其后加入两行代码，然后运行，复制输出的链接使用迅雷加速下载

   * ```bash
     TARBALL_URL="https://static-meteor.netdna-ssl.com/packages-bootstrap/${RELEASE}/meteor-bootstrap-${PLATFORM}.tar.gz"
     # 加入如下两行 start
     echo $TARBALL_URL
     exit 0
     # end
     ```

3. 下载完成之后，继续修改 `install-meteor.sh`文件的 `TARBALL_URL`处，使用下载下来的压缩包绝对路径加上`file://`协议替换原来的链接，并删除之前加入的两行，然后运行即可顺利安装完成

   * ```bash
     TARBALL_URL="file:///Users/lords/Downloads/1.7.0.3/meteor-bootstrap-os.osx.x86_64.tar.gz"
     ```

     

