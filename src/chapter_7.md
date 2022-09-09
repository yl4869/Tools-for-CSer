# 元编程

维基百科释义：<https://en.wikipedia.org/wiki/Metaprogramming>

# Makefile

参考：

- Learn Makefiles: <https://makefiletutorial.com/#makefile-syntax>

TODO： 手把手写出模板文件的教程

## 最简单的模板

这里假设正在编译某个 C++ OpenGL 项目。其文件树如下：

```
.
├── include
│   └── Utils.h
├── Makefile
├── src
│   ├── main.cpp
│   └── Utils.cpp
├── fragShader.glsl
└── vertShader.glsl
```

如你所见，该文件内的头文件都在 `./include` 中，源文件都在 `./src` 中。可以编译其的 Makefile 内容如下：

``` makefile
SRCDIR  = ./src
SRC 	= $(shell find $(SRCDIR) -name *.cpp)
OBJS	= $(patsubst $(SRCDIR)/%.cpp, %.o, $(SRC))
EXE		= main

CXX  	= $(shell ls /bin | grep g++ | grep x86_64 | grep linux)
CXXFLAGS= -Wall -O2
LDFLAGS = -lGL -lglfw -lGLEW -lsoil2

all: $(EXE)

$(EXE): $(OBJS)
	$(CXX) $^ $(LDFLAGS) $(CXXFLAGS) -o $(EXE)

$(OBJS): %.o: $(SRCDIR)/%.cpp
	$(CXX) $(LDFLAGS) $(CXXFLAGS) $^ -c

clean:
	rm $(OBJS) $(EXE)
```

接下来逐一说明。

### 命名惯例

首先，是 Makefile 内的一些命名惯例：

- `CC`: C 语言编译器
- `CXX`: C++ 编译器
- `CFLAGS`: 给 C 语言编译器的 flag 参数
- `CXXFLAGS`: 给 C++ 编译器的 flag 参数
- `CPPFLAGS`: 给预处理器的 flag 参数
- `LDFLAGS`: 传递给链接器，链接一些指定的库

其次是以上模板的命名含义，这些含义是按照大部分惯例命名的：

- `SRCDIR`: 源文件的文件夹
- `SRC`: 源文件
- `OBJS`: 目标文件
- `EXE`: 可执行文件

当需要区分 `C` 还是其他语言的源文件的时候，可以添加诸如 `C`，`CXX`，`PY` 等前缀。

变量命名实际上可以随自己想法任意命名，不过也有命名惯例可以通过这里了解：[Makefile-Conventions](https://www.gnu.org/software/make/manual/html_node/Makefile-Conventions.html)

### Makefile 语法

一个 Makefile 包含许多规则。每一个规则是如下格式：

``` makefile
targets: prerequisites
	command
	command
	command
```

- targets: 目标
- prerequisites: 依赖
- command: 指令

说明：

- 目标可以是一个或多个文件名，也可以是非文件目标；
- 依赖是一个或多个文件名，该文件可以与目标有关，也可以与目标无关；
- 指令都是使用当前 shell 在当前文件夹内执行的。
- 每个目标只有在依赖存在时候，才会执行接下来的 command，其中对对依赖的查找是从 Makefile 所处位置开始的。

> 注意，Makefile 的缩进是需要的，同时需要硬制表符而不是四个空格这样的经过转换的制表符。如果有 `Makefile:2: *** missing separator.  Stop.` 这样的报错大多是制表符问题。

标准目标都在 [Makefile-Conventions](https://www.gnu.org/software/make/manual/html_node/Makefile-Conventions.html) 里有说明。

常见的是 `all`、`install`、`clean` 等。其中，`all` 是默认目标。

当在 Makefile 存在的目录下，执行 `make` 的时候，`make` 会在当前文件夹下查找 `Makefile`，如果找不到就会寻找 `makefile`。实际上会最先寻找 `GNUmakefile`，但是该名称并不被推荐，除非特别指定是一个 `GNU` 的 `make`。如果以上都找不到则会报错。

但是，也可以通过 `-f name` 或 `--file=name` 的方式指定 Makefile 的名称。

当找到 Makefile 以后，便会开始执行 `all` 目标，它会先检查是否存在，如果依赖都存在那么直接执行接下来的指令。否则它会寻找是否有以该依赖作为目标的规则，找到后会先执行该规则然后再执行 `all` 目标。其他目标也有一样的逻辑。

如果想指定某个目标，可以用 `make target-name` 的格式，譬如 `make clean` 的方式执行 `clean` 目标。如果没指定目标就会如上述所说的默认执行 `all`。

### 定义变量

该模板 Makefile 开头定义了一些变量，含义如上所述。

Makefile 赋值语句将等号左侧看作变量，右侧看作字符串。字符串从等号后立刻开始，一直到遇到表示注释的 `#` 或者换行。

``` makefile
a = abc     # 保存字符串 " abc     "
b = 'abc'   # 保存字符串 " 'abc'   "
c = "abc"   # 保存字符串 " \"abc\"   "
```

> 注意，以上列出的变量保存的值是有空格的

Makefile 的变量存储的都是字符串。

同时，它在处理字符串的时候，会将以空格分割的字符串当作字符串数组。输出内容的时候则是输出整体。

### 获取变量内容

获取变量中的值作为字符串，可以使用 `$(variable)` 的格式。

``` makefile
a =abc
b ='abc'
c ="abc"

all:
	echo a $(a) $(b) $(c)
```

如果要执行 Makefile 的内容，只需要在包含 Makefile 的文件夹内执行 `make` 指令，就可以执行 `all:` 开始的指令。如下是输出情况：

``` bash
$ make
echo a abc 'abc' "abc"
a abc abc abc
```

可以看出，第一个 `a` 并没有被展开，而后面的内容因为包裹在 `$()` 中而被展开。

### 设置目标与依赖

``` makefile
all: something
    echo "Oh, you get all!"

something:
    echo "You need something."
    touch something
```

执行 `make` 后便会有如下输出：

``` bash
$ make
echo "You need something."
You need something.
touch something
echo "Oh, you get all!"
Oh, you get all!
```

### 执行 shell 命令并获取输出

会因为 shell 不同有多种方法，譬如在 bash 中，可以用左上角的引号符号（？）额外执行指令获得输出。比如：

``` bash
$ ls `echo '.'`
```

以上指令会先执行特殊的引号的内容获得结果然后再执行 `ls` 获取当前文件夹下的信息。

所以我们可以做如下变量

``` makefile
inner-command =`ls | grep .*\.cpp`
```

然后该变量就可以作为一个句中 shell 指令执行。

不过，以上方法依赖于特定的 shell。bash 是以上的操作，fish 就可能不是这样的语法了。同时，该方法获得的输出无法处理，只能是原始内容，这对后续处理是非常不方便的。

在 Makefile 内有一个比较通用的方法执行 shell 命令，并获取输出保存到变量中。如下面的例子：

``` makefile
CXX = $(shell ls | grep .*\.cpp)
```

看起来和 `lisp` 很相似，它的语法格式是 `$(command args)` 获得的输出可以立即当作 `args` 使用也可以保存到变量里等待接下来继续处理。

而执行 shell 命令就是做如下替换

- command: shell
- args: shell 要执行的命令

光就如上命令有等价的另一种写法：

``` makefile
CXX = $(wildcard *.cpp)
```

不过

``` makefile
CXX = *.cpp
```

只会保存字符串 ` *.cpp` 而不会用通配符搜索。

更多额外的指令可以查询：[Quick-Reference](https://www.gnu.org/software/make/manual/html_node/Quick-Reference.html)

比如 `$` + `^`，`%` 类似这样内容的用法也都在上述链接中可以找到。建议慢慢熟悉，到需要用的时候查找。

### 回到最初的模板

Makefile 模板，接下来就可以很好的描述 Makefile 模板的含义：

1. 定义源代码文件夹变量 `SRCDIR` 为 ` ./src`
2. 之后在展开源代码文件夹变量后，就是从源代码文件夹中搜索名称以 `.cpp` 结尾的文件，因为是从 Makefile 位置开始搜索，所以会保留 `./src` 的前缀。将该结果保存到 `SRC` 中。
3. 接下来使用 `patsubs` 操作，对一空格分割的字符串数组中的每一项，获得源文件去除文件路径前缀和拓展名的基础名，将其加上 `.o` 后缀，作为目标文件的文件名。
4. 定义输出的可执行文件名是 `main`
5. 在 `/bin` 中查找一个 `g++`，该 `g++` 是 `x86_64` 的且在 `linux` 平台下。将其作为编译器。而实际上，正常的应该只需要 `g++` 即可，不需要做这么多细分。
6. 设置 C++ 编译 flag 为 `-Wall` 和 `-O2`。
7. 设置链接 flag 为 `-lGL` `-lglfw` `-lGLEW` `-lsoil2` 用于链接需要的库。
8. `all` 目标依赖 `main`，且没有其他操作。
9. `main` 依赖目标文件，如果满足以后，则会用依赖替换 `$^` 的位置。展开其他内容后执行指令。
10. `$(OBJS)` 内以空格分割为字符串数组，且每个模式是 `%.o` 形式，此时 `%` 指代对应的目标文件的基本名称，需要来自 `SRCDIR` 的对应的 `%.cpp` 文件。如果满足，则会用 `$(SRCDIR)/%.cpp` 替换 `$^` 然后执行指令编译。
11. `clean` 目标删除当前文件夹下的指定目标文件和可执行文件。

> 可能会好奇为什么要获取源文件的基本名称并转换为目标文件的名称，而不是直接使用带路径的名称。原因是 g++ 默认生成目标文件放在执行指令的文件夹下。所以如果带了路径，可能会进入到源文件所在的文件夹内去寻找目标文件。

不过这只是一个起步的文件，在 GNU 的 reference 里还有很多的指令没能在这个简单的 Makefile 中展示出来。

# CMake

参考：

- Modern CMake for C++ Discover a better approach to building, testing and packaging your software (Rafał Świdziński)

> 很多未接触 `cmake` 的都会望而却步，然而，就算是接触的人实际上也不愿意折腾 `cmake`。

TODO: cmake 简易教程

接下来给出通用模板：

``` cmake
cmake_minimum_required(VERSION 3.20)

project(glt)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED True)

include_directories(/usr/include/opencv4)

file(GLOB CSRC ./*.cpp)

link_libraries(GL glfw GLEW soil2)

add_executable(glt ${CSRC})
```

说明：

- `cmake_minimum_required(VERSION 3.20)`: 设置 cmake 需要满足的最小版本，这里设置为 `3.20`；
- `project(glt)`: 设置项目名称，这里设置为 `glt`
- `set(CMAKE_CXX_STANDARD 20)`: 设置项目的 `C++` 版本，这里设置为 `20`。实际上，不设置是可以用默认版本的。只是在使用 `vscode`: 等工具开发的时候，可能就会在使用 `C++ 20` 标准开发时候报错。所以如果想用指定版本 `C++` 配合编辑器开发，推荐设置。
- `set(CMAKE_CXX_STANDARD_REQUIRED True)`: 是否需要满足 `C++` 版本需求。这里设置为 `True`。
- `include_directories(/usr/include/opencv4)`: 额外包含头文件的文件夹位置。一些头文件文件夹位置可能不能通过默认路径找到，故需要自己指定。该函数相当于使用 `-I` 指定头文件路径。这里设置了 `/usr/include/opencv4`，包含 `opencv4` 头文件文件夹。这里因为使用了绝对路径，所以可移植性很差，推荐使用 cmake 的查找找到包，不过这就需要一定的 `cmake` 脚本编写能力。
- `file(GLOB CSRC ./*.cpp)`: 获取文件名满足第三个参数的文件，并将文件以字符串形式保存到 `CSRC` 变量中，其中 `GLOB` 获取方式无法将 `CSRC` 内容继承到子文件夹里的 CMakeLists.txt 中。
- `link_libraries(GL glfw GLEW soil2)`: 连接额外库，将库名或者绝对路径放入即可。这里指定了四个 lib。
- `add_executable(glt ${CSRC})`: 设定可执行文件名称为 `glt`，源文件是 `CSRC` 变量中的内容对应的文件。