# 静态文件服务器配置

## 需求介绍

### nginx 配置需求

1. 能正确返回静态资源
2. 设置静态资源的过期时间
3. 设置静态资源特定域名
4. 设置静态资源存放的根目录
5. 开启 gzip，并调整压缩参数
6. 负载均衡
7. 设置请求错误页面

### 上传七牛服务器

1. 申请账号并认证
2. 创建空间，配置镜像存储、默认域名、HTTPS
3. 可以刷新缓存
4. 上传静态文件到七牛空间
5. 使用命令行辅助上传工具

## 参考资源

* [nginx 配置从零开始](http://oilbeater.com/nginx/2014/12/29/nginx-conf-from-zero.html)
* [开启 Nginx 的 Gzip 压缩功能](https://www.insp.top/open-nginx-gzip-module)
* [Nginx 开发从入门到精通](http://tengine.taobao.org/book/#)
* [crontab 定时任务](http://linuxtools-rst.readthedocs.org/zh_CN/latest/tool/crontab.html)
* [rsync同步的艺术](http://roclinux.cn/?p=2643)
* [nginx 官方文档](http://nginx.org/en/docs/)