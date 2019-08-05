# API 文档工具 - apiary

基于 Blueprint API 规范

## 功能介绍

1. 可在线或本地编写 API;
2. 可导出 html 文件，并本地打开预览 API 文档
3. 可在线预览 API 文档
4. apiary.io 提供在线 mock server
5. Blueprint 官网提供 sublime / atom /vim 等编辑器的插件，方便编写 Blueprint 文档
6. Blueprint 官网提供可和文档对接的 mock server / test tool
7. apiary.io 可同步 github 上的文档

## 安装配置步骤

1. [注册账户](https://apiary.io)
2. 获取自己的 [token](https://login.apiary.io/tokens), 建议新生成一个
3. 配置环境变量 `APIARY_API_KEY` 为 `自己的 token`
4. 安装 [Ruby](http://rubyinstaller.org/)
5. 命令行执行 `gem install apiaryio` (如有必要加上 sudo, Windows 用户以管理员方式打开命令行，再执行)
6. 查看是否安装成功 `apiary --help`

## 使用方法

1. 注册公司 [gitlab](http://192.168.1.26) 账号
2. 将文档放在项目目录中(如: `docs/api.apib`)，并在 [apiary.io](https://app.apiary.io) 上 `Create New API`(如：`ttyhuo`)
3. 根据 Blueprint API 规范编写 API 文档
4. 本地预览: `apiary preview --path="docs/api.apib" --output="docs/api.html"`, 浏览器打开 `docs/api.html`
5. `apiary publish --path="docs/api.apib" --api-name="ttyhuo"`
6. 其他命令见 [apiary cli](https://help.apiary.io/tools/apiary-cli/)

## 硬伤

1. 要翻墙！要翻墙！要翻墙！

## 相关链接

1. [Blueprint](https://apiblueprint.org/)
2. [apiary.io](https://apiary.io)
3. [Ruby](http://rubyinstaller.org/)
