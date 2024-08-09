# st-plugin-multiple-secrets

[SillyTavern](https://github.com/SillyTavern/SillyTavern)的服务端插件，用于同时使用多个密钥，在每次发送消息后自动在给定的密钥列表中切换一次

# 看不懂的，嫌麻烦的，用喵喵脚本的人直接看这个傻瓜式命令，全自动安装

用喵喵脚本的，记得先输入0退出脚本，然后输入点一下ctrl再点一下d退出proot环境，因为会影响效率

最后再输入命令，这个命令会自动寻找酒馆安装路径进行安装，包括服务端插件和客户端扩展，客户端扩展将为现有全部用户进行安装，一行搞定，主打傻瓜式
```bash
cd $(find $PREFIX/.. -type d -name "SillyTavern" -exec bash -c 'git -C {} remote get-url origin | grep -q SillyTavern/SillyTavern && echo {}' \; 2>/dev/null) && sed -i 's@^.*enableServerPlugins.*$@enableServerPlugins: true@' ./config.yaml && cd ./plugins/ && rm -rf ./st-plugin-multiple-secrets && git clone https://github.com/zhongerxll/st-plugin-multiple-secrets && cd .. && find ./data/ -maxdepth 1 -mindepth 1 -type d ! -name '_uploads' ! -name '_storage' -exec bash -c "cd {}/extensions/ && rm -rf st-extension-multiple-secrets && git clone https://github.com/zhongerxll/st-extension-multiple-secrets" \;
```

# 安装方法

首先在终端进入SillyTavern主目录并键入以下命令修改配置使SillyTavern启用服务器插件，或者自己用文本编辑器在config.yaml将enableServerPlugins的值修改为true
```bash
sed -i 's@^.*enableServerPlugins.*$@enableServerPlugins: true@' ./config.yaml
```

然后还是在终端进入SillyTavern主目录并键入以下命令开始下载安装插件，需要重启SillyTavern
```bash
cd ./plugins && git clone https://github.com/zhongerxll/st-plugin-multiple-secrets
```
然后最查看下方链接再安装客户端扩展配合本插件就可以用了

# 需要配合该客户端第三方扩展使用

https://github.com/zhongerxll/st-extension-multiple-secrets
