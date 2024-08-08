# st-plugin-multiple-secrets

[SillyTavern](https://github.com/SillyTavern/SillyTavern)的服务端插件，用于同时使用多个密钥，在每次发送消息后自动在给定的密钥列表中切换一次

# 安装方法

首先在终端进入SillyTavern主目录并键入以下命令修改配置使SillyTavern启用服务器插件，或者自己用文本编辑器在config.yaml将enableServerPlugins的值修改为true
```bash
sed -i 's@enableServerPlugins@enableServerPlugins: true@' ./config.yaml
```

然后还是在终端进入SillyTavern主目录并键入以下命令开始下载安装插件，需要重启SillyTavern
```bash
cd ./plugins && git clone https://github.com/zhongerxll/st-plugin-multiple-secrets
```

# 需要配合该客户端第三方扩展使用

https://github.com/zhongerxll/st-extension-multiple-secrets
