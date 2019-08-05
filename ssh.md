# ssh

## 常用 ssh 命令

1. 登录远程服务器

   - ```bash
     ssh -p 2222 user@ip
     ```

2. 上传文件到远程服务器

   - ```bash
     # 上传单个文件
     scp -P 2222 /local_path/xxx.tar.gz user@ip:/remote_path
     # 上传多个文件
     scp -P 2222 /local_path/xx1.tar.gz /home/path/xx2.tar.gz user@ip:/remote_path
     # 上传整个目录
     scp -P 2222 -r /local_path user@ip:/remote_path
     ```

3. 从远程服务器下载文件

   - ```bash
     # 下载单个文件
     scp -P 2222 user@ip:/remote_path/xxx.tar.gz /local_path
     # 下载多个文件
     scp -P 2222 user@ip:"/remote_path/xx1.tar.gz /remote_path/xx2.tar.gz" /local_path
     # 下载目录
     scp -P 2222 -r user@ip:/remote_path /local_path
     ```

## 常见问题

1. 免密登录远程服务器

   - `SSH` 公钥登录

     1. 客户端上生成

        ```bash
        # 可以不输入密码，直接回车
        ssh-keygen
        # 上传 ~/.ssh/id_rsa.pub 到服务器
        scp ~/.ssh/id_rsa.pub user@ip:~
        ```

     2. 服务器生成与添加

        ```bash
        # 检查服务器是否有 ~/.ssh 目录，没有可以自行创建
        mkdir -p ~/.ssh
        touch ~/.ssh/authorized_keys
        chmod 600 ~/.ssh/authorized_keys
        cat ~/id_rsa.pub >> ~/.ssh/authorized_keys
        rm ~/id_rsa.pub
        ```

     3. 配置完成，测试能否免密登录

        ```bash
        ssh user@ip

        # 如果不能，客户端使用 debug 方式连接，查看验证信息
        ssh -v user@ip

        # 服务端可以查看 /var/log/secure 文件，寻找失败原因
        cat /var/log/secure

        # 常见原因 bad ownership or modes for directory…
        # SSH公钥认证必须设置合适的权限:
        # `.ssh` 目录的权限为 700
        # `authorized_keys` 的权限为 600
        chmod 700 ~/.ssh
        ```

   - [`expect` 脚本](http://xstarcd.github.io/wiki/shell/expect.html)

2. 远程执行命令

   - 直接执行

   ```bash
   # 在服务器创建目录 /home/test
   ssh user@ip mkdir -p /home/test
   ```

   - 运行脚本

   ```bash
   # 运行服务器指定目录下的 bash 脚本，并传入参数
   ssh user@ip /home/test/scripts/deploy.sh arg1 arg2
   ```

## 实用工具

- SecureCRT + SecureFX
