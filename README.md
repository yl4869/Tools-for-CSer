# Tools for CSer
一份 CSer 常用技术和工具的助学讲义（完善中）  

[网页链接](yl4869.github.io/Tools-for-Cser) 

## branch
mian: 主分支，包含网站内容源码和提交用 Makfile （自用，可以根据需要完善)

gh-pages: 构建后的网站源码，使用 github pages 进行部署

## 使用要求
安装 **mdbook** 。
克隆仓库到本地，可以选择本地直接运行```mdbook server```

## 提交
参考 Makefile       

```make commit```   将源码提交 main 分支

```make build``` ```make deploy```  将生成网站提交到 gh-pages 分支
> 注意，deploy 前必须 build ，以确保网站源码被生成

## 贡献
可以在 issue 或直接 qq 联系（如果可以找到我），来承担感兴趣的章节。
