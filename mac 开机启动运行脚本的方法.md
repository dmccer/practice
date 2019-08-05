# mac 开机启动运行脚本的方法

- [系统偏好设置] > [用户与群组] > [当前用户] > [登录项] > 点击[+] > 选择脚本并添加

  ![example](https://img-blog.csdn.net/20160930094645111)

- 打开终端(terminal) > 执行下面命令:

  ```bash
  # /path/to/script 就是 bash 脚本路径
  sudo defaults write com.apple.loginwindow LoginHook /path/to/script
  ```

- 在文件 `~/.bash_profile` 中加入如下命令:

  ```bash
  source /path/to/script
  ```
