# Ubuntu/Centos 服务器环境配置

系统安装及环境配置实践总结

## windows 10 、Ubuntu 18.04 双系统安装

1. 下载 [Ubuntu 18.04.2 LTS ISO](https://cn.ubuntu.com/download) 文件
2. 下载 Ubuntu 官网推荐的 USB 启动盘制作工具 [Rufus](https://rufus.ie/)
3. 制作 Ubuntu 18.04 USB 启动盘

   - U 盘插入电脑，打开 Rufus, 点击 `选择`， 添加 `Ubuntu 18.04.2 LTS`, 其他设置如图所示，点击 `开始`, 后面一直选择 `OK`
     ![Rufus设置](./img/rufus-settings.jpg)

4. 关闭 Win 10 快速启动 [操作步骤](https://jingyan.baidu.com/article/ca00d56c7a40e6e99febcf4f.html#!/article/ca00d56c7a40e6e99febcf4f)

5. 磁盘分区

   - 快捷键 `window + x`，`Ctrl + k` 打开 `磁盘管理`
   - 选择剩余空间较大的可分配磁盘，点击`右键`，选择`压缩卷`，压缩 50~80 G。**只需要压缩即可，无须新建简单卷。**[详见压缩教程](https://jingyan.baidu.com/article/54b6b9c09515222d593b475c.html)

6. BIOS 设置，重启电脑，按 `F12`、`F2`、`F8`

   1. Boot 设置
      - Boot Mode: UEFI
      - USB Boot: Enabled
   2. Security 设置
      - Secure Boot: Disabled
   3. 设置完成，按 `F10`, 重启过程中，按 `F12`、`F2`、`F8`，选择从 `U 盘` 启动

7. 开始安装

   - 安装类型，选择 `其他选项`, 进行分区

## Ubuntu 环境配置

### 无线网卡驱动安装

```bash
# 方法一
sudo apt update
sudo apt install rtl8812au-dkms

# 方法二
# 下载及安装: https://github.com/diederikdehaas/rtl8812AU/tree/driver-5.6.4
sudo apt install dkms
sudo cp -r rtl8812AU-driver-5.6.4 /usr/src
sudo dkms add -m rtl8812AU-driver -v 5.6.4
sudo dkms build -m rtl8812AU-driver -v 5.6.4
sudo dkms install -m rtl8812AU-driver -v 5.6.4
```

### wifi 经常断开问题

```bash
# 1. 方法一
sudo vi /etc/ppp/options
# 找到下面配置修改，保存后重启网络
lcp-echo-failure 4 改为 lcp-echo-failure 15

# 2. 方法二
sudo vi /etc/modprobe.d/iwlwifi.conf
# 加上下面这句
options iwlwifi 11n_disable=1
# 保存并重启网络
```

### Ubuntu 18.04 换国内源

```bash
# 1. 备份源
sudo cp /etc/apt/sources.list /etc/apt/sources.list.bak
sudo vi /etc/apt/sources.list
# 在文件最前面添加以下条目，四选一

# 中科大源
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

# 阿里源
deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse

# 163 源
deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse

# 清华源
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

# 然后保存
sudo apt update
sudo apt upgrade
```
