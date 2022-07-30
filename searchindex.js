Object.assign(window.search, {"doc_urls":["chapter_0.html#开设此课程的动机","chapter_1.html#准备工作","chapter_1.html#准备一个unix-like系统环境","chapter_1.html#linux虚拟机","chapter_1.html#linux双系统","chapter_1.html#wsl适用于linux的windows子系统","chapter_1.html#云服务器","chapter_1.html#macos","chapter_1.html#参考资料","chapter_11.html#持续集成部署","chapter_12.html#markdown","chapter_13.html#vscode"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":1,"title":0},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":2,"title":1},"11":{"body":0,"breadcrumbs":2,"title":1},"2":{"body":5,"breadcrumbs":1,"title":1},"3":{"body":3,"breadcrumbs":1,"title":1},"4":{"body":4,"breadcrumbs":1,"title":1},"5":{"body":12,"breadcrumbs":1,"title":1},"6":{"body":1,"breadcrumbs":0,"title":0},"7":{"body":4,"breadcrumbs":1,"title":1},"8":{"body":2,"breadcrumbs":0,"title":0},"9":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"正如The missing semester of your CS education中所说, 传统的计算机科学课程往往重视理论教育, 却忽视了 各种工具的使用. 尽管一些课程提供了课程设计或实验等方式的实践练习, 但观察国内(其实就是我们学校)的课 程, 这些课程往往只重视问题的目的性, 相关工具甚至可以追溯到父辈的计算机教育方式, 对现代工具的高效使用 是严重缺乏的. 针对于此, 我们希望能有一门简单的课程让学生可以学会使用那些高效的工具, 并贯穿他的计算机 学习(工作)生涯. The missing semester of your CS education 是一门很好的计算机工具类课程教学, 但对于国内而言他有些“不 接地气”, 我们相信你可以通过他学会相关的工具使用, 但我们更希望能有更贴合的教学方案帮助到大家, 因此选 择创作这门课程. 针对课程, 我们希望有完善的讲义能够让你只经过阅读就学习到完全内容, 同样我们也考虑录制视频进行讲解作为 讲义的部分补充.","breadcrumbs":"0 » 开设此课程的动机","id":"0","title":"开设此课程的动机"},"1":{"body":"","breadcrumbs":"准备工作 » 准备工作","id":"1","title":"准备工作"},"10":{"body":"","breadcrumbs":"Markdown » Markdown","id":"10","title":"Markdown"},"11":{"body":"","breadcrumbs":"Vscode » Vscode","id":"11","title":"Vscode"},"2":{"body":"相对于Windows系统, 学术界围绕Unix-like系统的教材多, 质量好. 同时大公司的服务器基本是以Linux内核为基 础构建, 课程所提供的工具也都为命令行工具, 而大多数Unix-like系统安装命令行工具都很简单, 方便. 不需要 繁琐的配置本地环境过程. 因此我们建议你准备一个Unix-like系统环境, 以下是我们推荐的几种方案.","breadcrumbs":"准备工作 » 准备一个Unix-like系统环境","id":"2","title":"准备一个Unix-like系统环境"},"3":{"body":"Linux作为目前最常见的Unix-like系统之一, 你可以在网上查找到很多如何安装一款Linux发行版的教程, 其中一 安装方式就是使用虚拟机, 利用Vmware等软件, 你可以直接在虚拟机中使用Linux系统而不用担心误操作带来的风 险, 而虚拟机也可以满足课程所需要掌握的内容, 当然, 由于虚拟化的原因, 你需要给你的虚拟机分配一部分内存 和磁盘空间, 这对于你的系统性能需要一定的要求.","breadcrumbs":"准备工作 » Linux虚拟机","id":"3","title":"Linux虚拟机"},"4":{"body":"相对于虚拟机, 双系统对于系统性能的要求降低很多, 现在的常见Linux发行版也提供了图形化安装方式, 安装起 来也很简便, 你依然可以在需要使用Windows时选择进入Windows操作系统使用, 但你无法像虚拟机一样同时使用 Windows和Linux了, 同时, 由于Linux本身是作为实机使用, 你需要谨慎操作, 避免误操作带来的灾难(如不小心格 式化系统)等.","breadcrumbs":"准备工作 » Linux双系统","id":"4","title":"Linux双系统"},"5":{"body":"适用于 Linux 的 Windows 子系统 (WSL) 可让开发人员直接在 Windows 上按原样运行 GNU/Linux 环境（包括大 多数命令行工具、实用工具和应用程序），且不会产生传统虚拟机或双启动设置开销。 这是一种我们十分推荐的方案, 现在你可以在Windows下直接使用微软为你提供的Linux虚拟机服务了, 不过需要注 意WSL2无法与虚拟机共同使用, 如果你需要使用Vmware的同时还想体验WSL, 你可以选择WSL1, 如果你并没有使用 虚拟机的需求, 那么WSL2是一个好的选择. 他比传统的Vmware更快, 但你对Linux操作系统的控制权限也会减少一 部分. 当然, 应对我们的课程还是绰绰有余了. 关于WSL的更多信息, 可以查看官网.","breadcrumbs":"准备工作 » WSL(适用于Linux的Windows子系统)","id":"5","title":"WSL(适用于Linux的Windows子系统)"},"6":{"body":"Linux 是一个可以实现多用户登录的操作系统, 因此组一台云服务器一起用(当然也可以自己用)也是很方便的, 课 程中所介绍的也都是终端操作, 图形化界面并不必要, 因此使用云服务器也是一个选择, 目前国内各种云服务平台 也对学生有一定优惠, 不过租用云服务器也确实是一笔开销.","breadcrumbs":"准备工作 » 云服务器","id":"6","title":"云服务器"},"7":{"body":"如果你是苹果电脑的使用者, macOS本身也是一种unix-like系统, Linux下的终端操作很大一部分都可以直接使用 macOS解决, 你也会发现提供给Linux的命令行工具多数也都会提供macOS的安装. 在这种情况下, 请直接使用macOS 的终端吧.","breadcrumbs":"准备工作 » macOS","id":"7","title":"macOS"},"8":{"body":"WSL文档 Linux发行版(Ubuntu) 清华镜像站 推荐维护中 的长期发行版 计算机教育中缺失的一课","breadcrumbs":"准备工作 » 参考资料","id":"8","title":"参考资料"},"9":{"body":"","breadcrumbs":"持续集成&部署 » 持续集成&部署","id":"9","title":"持续集成&部署"}},"length":12,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"c":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":6,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0}},"作":{"df":0,"docs":{},"为":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"最":{"df":0,"docs":{},"常":{"df":0,"docs":{},"见":{"df":0,"docs":{},"的":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}},"发":{"df":0,"docs":{},"行":{"df":0,"docs":{},"版":{"(":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.7320508075688772}},"s":{"df":0,"docs":{},"本":{"df":0,"docs":{},"身":{"df":0,"docs":{},"也":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"种":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"v":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}},"的":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"df":0,"docs":{},"还":{"df":0,"docs":{},"想":{"df":0,"docs":{},"体":{"df":0,"docs":{},"验":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"和":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"时":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"进":{"df":0,"docs":{},"入":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"l":{"(":{"df":0,"docs":{},"适":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"的":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"1":{"df":1,"docs":{"5":{"tf":1.0}}},"2":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":2,"docs":{"5":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"c":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"/":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}},"df":0,"docs":{}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":6,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":2.0},"5":{"tf":1.4142135623730951},"6":{"tf":1.0},"7":{"tf":1.0}},"作":{"df":0,"docs":{},"为":{"df":0,"docs":{},"目":{"df":0,"docs":{},"前":{"df":0,"docs":{},"最":{"df":0,"docs":{},"常":{"df":0,"docs":{},"见":{"df":0,"docs":{},"的":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}}}},"发":{"df":0,"docs":{},"行":{"df":0,"docs":{},"版":{"(":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":1,"docs":{"8":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":2.0}},"s":{"df":0,"docs":{},"本":{"df":0,"docs":{},"身":{"df":0,"docs":{},"也":{"df":0,"docs":{},"是":{"df":0,"docs":{},"一":{"df":0,"docs":{},"种":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"7":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}}}},"v":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"3":{"tf":1.0},"5":{"tf":1.0}},"的":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"df":0,"docs":{},"还":{"df":0,"docs":{},"想":{"df":0,"docs":{},"体":{"df":0,"docs":{},"验":{"df":0,"docs":{},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":2,"docs":{"2":{"tf":1.0},"5":{"tf":1.4142135623730951}},"s":{"df":0,"docs":{},"和":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":1,"docs":{"4":{"tf":1.0}}}}}}}},"时":{"df":0,"docs":{},"选":{"df":0,"docs":{},"择":{"df":0,"docs":{},"进":{"df":0,"docs":{},"入":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"l":{"(":{"df":0,"docs":{},"适":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"的":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"1":{"df":1,"docs":{"5":{"tf":1.0}}},"2":{"df":1,"docs":{"5":{"tf":1.4142135623730951}}},"df":2,"docs":{"5":{"tf":1.4142135623730951},"8":{"tf":1.0}}}}}}},"title":{"root":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}},"m":{"a":{"c":{"df":0,"docs":{},"o":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"n":{"df":1,"docs":{"10":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"11":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"(":{"df":0,"docs":{},"适":{"df":0,"docs":{},"用":{"df":0,"docs":{},"于":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"的":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});