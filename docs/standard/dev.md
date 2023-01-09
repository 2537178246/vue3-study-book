# 前端开发规范

## 综述
- 1、该手册用于保证公司前端所产出的代码的质量稳定且良好，使代码拥有良好的可读性，以避免为后续开发、维护、协作及交付带来困难，同时可以帮助开发者避免由于一些语法陷阱所带来的问题。
- 2、该手册适用于公司前端所有代码（包括但不限于移动端应用、专题页等），现有代码若不符合该手册且仍需长久维护，需将其列为技术债务，择期修改。

> 注1：现有某些注意事项已在部分项目中使用 eslint 进行检测，但仍有遗漏，需择期完善。

> 注2：老版 PC 端代码不受该手册约束。
## 文件及目录命名

**所有文件名及目录名均使用串式命名风格进行命名（all-lowercase-with-dashes），只能包含小写字母、数字及连字符，且必须以小写字母开头。**

**不可使用任何其它标点字符，除非有特殊要求（如 SASS or LESS 中约定文件名使用下划线前缀表示样式模块）。**

**若某文件用于定义一个模块，则该文件名应与其输出的模块名称保持一致，若模块名称使用其它命名风格，则将其用于文件名时应转换成串式命名风格（比如在某个文件中定义了一个 useProp 钩子函数，该函数名为「useProp」，则其文件名应定义为「use-prop.ts」）。**
###### 代码示例
> **Bad**
> account_management.js  // 使用了下划线分割单词
> encodeURL.js           // 使用驼峰命名风格
> /overseasShop
{.is-danger}

> **Good**
> index.js
> account-management.js
> encode-url.js
> _tabs.scss // SASS 约定文件名前缀下划线表示样式模块，类似这种情况可按其约定添加标点字符。
> /overseas-shop
{.is-success}

**注：文件命名大多使用三种风格：驼峰命名风格（accountManagement.js）、串式命名风格（account-management.js）及下划线命名风格（account_management.js），经分别试用后认为这三种命名风格的易识别度以下划线命名风格最高，串式命名风格次之，驼峰命名风格最差。而在前端中，大多使用驼峰命名风格或串式命名风格，因此两项权衡之下选择使用串式命名风格。**

---


### 编码

**所有文本文件必须使用 UTF-8 编码格式，除非所在项目有特殊编码要求（如要求使用 GBK 编码）。**

---

### 缩进

**所有代码使用两个空格作为一次缩进量。**

**在语法结构上包含嵌套关系的代码，被嵌套内容必须缩进一次。**

###### 代码示例
**Bad**
```javascript 
// 使用 Tab 字符（制表符）缩进
let name = 'world',
    obj;
 
// 使用四个空格进行缩进
let name = 'world',
    obj;
```
**Good**
```javascript 
let name = 'world',
  obj;
 
if (name) {
  obj = {
    say: function() {
      console.info('hello, ' + name + '!')
  	}
  }
} else {
  throw 'name is undefined'
}
```
当一行代码过长时，应酌情换行，此时可添加额外的缩进量使其按语法结构进行对齐，以保证代码清晰明了，比如以下换行情况：

###### 代码示例
**HTML 标签内换行**
```html
<input 
  name="account"
  value="tuzhixiang"
  placeholder="You'r account name"
  required />
```
**JavaScript 表达式换行**
```javascript
const name = user.nickname
  ? 'nickname: ' + user.nickname
	: user.account
		? 'account: ' + user.account
		: 'Not Set'
```

***注：行最大长度不应超过150***

### 行尾空白字符

所有文本文件禁止在行尾添加任何空白字符。

这种空白字符往往是没有任何意义的，虽然它一般不会引起什么严重的问题，但却会为开发带来很多困扰，比如不必要的提交内容、影响编辑器的跳转行尾快捷键的行为、增加文件体积等等等。因此，该手册明确禁止添加这种空白字符。

***注：在 Markdown 语法中，行尾可以使用一个空白字符来表示换行符，但更好的建议是，直接使用 \<br> 标签来明确声明。***

### 注释

需要说明或提示的代码，应添加相应注释。

### 换行符

统一使用 unix 风格的换行符（既 \n）。

不同的开发者使用各自不同的换行符风格会导致提交信息混乱，难以从提交中获取真实的修改内容，因此必须保证各开发者使用统一的换行符风格。

### 样板代码
尽量避免出现大量样板代码。

这里的样板代码指的是大量重复出现的代码片段，并在其基础上进行很少地改动甚至没有改动。这种代码往往是冗余的，而且更加严重的是当进行改动时有时会由于疏忽而引发问题。因此当这种代码大量出现时（一般是三次或三次以上），就应该将其通用部分抽象出来。

###### 代码示例
**Bad**
```javascript
const apiService = {
  ajax: function(config) {
    ...
  },
  get: function(url, config) {
    return this.ajax(Object.assign({}, config, {
      method: 'get',
      url: url
    }));
  },
  post: function(url, config) {
    return this.ajax(Object.assign({}, config, {
      method: 'post',
      url: url
    }));
  },
  delete: function(url, config) {
    return this.ajax(Object.assign({}, config, {
      method: 'delete',
      url: url
    }));
  }
}
```
**Good**
```javascript
const apiService = {
  ajax: function(config) {
    ...
  }
}
 
const apiMethods = ['get', 'post', 'delete']
 
apiMethods.forEach(function(method) {
  apiService[method] = function(url, config) {
    return this.ajax(Object.assign({}, config, {
      method: method,
      url: url
    }))
  }
})
```

[组件式开发思路分享➡️➡️➡️](https://blog.csdn.net/qq_43806604/article/details/124019047?spm=1001.2014.3001.5501)

### 失效代码

当在修改了某些代码之后，会有部分代码或文件联带着变为失效状态，这些代码或文件不再被项目使用，但依然存在于项目中。有时我们会考虑这些代码之后会被再次用到，因此会保留这些代码或只是将其注释掉。但这些方式都是不可取的，长久以往，这些代码会让项目变得臃肿而丑陋，进而难以维护，更甚的是那些未被注释掉的代码，会在项目编译、运行时依然占用资源。

**所以，所有已知的失效代码都应该被立即移除。**

另外，这些失效代码在将来都很难会被再次使用到。若真的希望后续在需求还原时复用它们，可以通过检索 GIT 的提交记录的方式，从中获取之前被删去的代码；或者，将这部分代码相关的知识点及代码示例记录在 wiki 或其它地方。总之，不能让这些代码继续留在项目中。

###### 代码示例
**Bad**
```css
.box {
	//background: url('./images/box-bg.png');
}
```

以上代码修改中将 background 属性移除，则整个 .box 样式规则都已变为失效代码，应移去，另外 background 属性中引用的图片若不再被其它地方引用，则也应删除。

## CSS

### 行内样式及内联样式
严禁使用行内样式及内联样式，除非有明确的特殊需求。

###### 代码示例
**Bad**

```html

<html lang="">
<head>
  <style type="text/css">
    body {
      font: 12px/1.5 sans-serif;
    }
  </style>
  <title></title>
</head>
<body>
<div style="width: 200px; height: 200px; border: 1px solid #ddd;">This is a box.</div>
</body>
</html>
```
**Good**

```html

<html lang="">
<head>
  <link href="/path/to/style.css" rel="stylesheet" type="text/css">
  <title></title>
</head>
<body>
<div class="box">This is a box.</div>
</body>
</html>

- style.css -
body {
font: 12px/1.5 sans-serif;
}

.box {
width: 200px;
height: 200px;
border: 1px solid #ddd;
}
```

### 设计稿还原度

样式实现须 **100% 与设计稿一致**，除非以下情况：
- 1、因浏览器的文字渲染引擎与 Photoshop 的渲染引擎不一致，导致文字呈现效果与设计稿不同；
- 2、客户端系统中未安装设计稿中所用字体，导致实际所用字体与设计稿不同；
- 3、设计稿存在问题；

### 格式
样式规则之间使用一个空行区分。

###### 代码示例
**Bad**
```css
.box {
  color: #fff;
}
.tab {
  color: #000;
}
```
**Good**
```css
.box {
  color: #fff;
}

.tab {
  color: #000;
}
```
多条选择器之间需进行换行。
###### 代码示例
**Bad**
```css
.box, .tab {
  color: #fff;
}
```
**Good**
```css
.box,
.tab {
  color: #fff;
}
```

左花括号之前需添加一个空格。
###### 代码示例
**Bad**
```css
.tab{
  color: #fff;
}
```
**Good**
```css
.tab {
  color: #fff;
}
```

右花括号需单独一行。
###### 代码示例
**Bad**
```css
.tab {
  color: #fff; }
```
**Good**
```css
.tab {
  color: #fff;
}
```

多条属性之间需进行换行。
###### 代码示例
**Bad**
```css
.tab {
  color: #fff; background: #000;
}
```
**Good**
```css
.tab {
  color: #fff;
  background: #000;
}
```

每条属性的冒号「:」后面需添加一个空格。
###### 代码示例
**Bad**
```css
.tab {
  color:#fff;
}
```
**Good**
```css
.tab {
  color: #fff;
}
```

每条属性都应使用一个分号结尾。
###### 代码示例
**Bad**
```css
.tab {
  color: #fff
}
```
**Good**
```css
.tab {
  color: #fff;
}
```

使用逗号分割的多个属性值，需在逗号后面添加一个空格，或当属性值过多过长时，属性值之间需换行。
###### 代码示例
**Bad**
```css
.tab {
  font: 12px/1.5 tahoma,arial,sans-serif;
  box-shadow: 0 1px 1px rgba(0,0,0,0.5),0 1px 3px rgba(0,0,0,0.1);
}
```
**Good**
```css
.tab {
  font: 12px / 1.5 tahoma, arial, sans-serif;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.1);
}
```
无需为 0 值指定单位(常见由**蓝湖**复制粘粘属性)。
###### 代码示例
**Bad**
```css
.tab {
  border: 0px;
}

```
**Good**
```css
.tab {
  border: 0;
}
```

### 命名
class 及 id 的命名方式与文件名相同，既使用串式命名风格进行命名（all-lowercase-with-dashes），只能包含小写字母、数字及连字符，且必须以小写字母开头。

### 选择器

#### 标签选择器
应尽量避免使用标签选择器定义样式，例如： .box span {...} 。

首先浏览器在匹配选择器时，会从右向左进行匹配，如果选择器中以标签选择器结尾，如上例中，则浏览器会先检索出当前页面中所有的 span 元素，再从中查找出哪些拥有 .box 父元素并为其附加该规则的样式。若页面内有大量的 span 元素，会使该规则的匹配效率变得非常低。

另外，使用标签选择器会使样式及 HTML 变得难于扩展及维护。

#### 通配符选择器
尽量不要使用通配符选择器，除非有非常明确的理由且没有任何更好的方案（如修改全局 box-sizing 设置）。

###### 代码示例
**Bad**
```css
* {
  margin: 0;
  padding: 0;
}

```
**Good**
```css
body,
ul, ol, dl, dd,
h1, h2, h3, h4, h5, h6, p, pre,
form, fieldset, legend, input, textarea, select, button,
blockquote, th, td, hr, article, aside, details,
figcaption, figure, header, footer, section, hgroup, menu, nav {
  margin: 0;
  padding: 0;
}
```

#### 选择器数量
一条选择器表达式内，应尽量避免出现太多选择器，建议不要超过 3 个选择器，并禁止出现 5 个或更多的选择器。

##### 代码示例
**Bad**
```css
// 包含五个选择器，匹配效率过低
.side-bar .nav .item a:hover {
  color: #fff;
}

```
**Good**
```css
.side-bar .item-text:hover {
  color: #fff;
}
```

### 简写属性
应尽量使用简写属性，除非有特殊需要。
###### 代码示例
**Bad**
```css
.side-bar {
  padding-top: 10px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
}

```
**Good**
```css
.side-bar {
  padding: 10px 5px;
}
```

### 字号
尽量避免设置小于 12 像素的字号。

在部分浏览器中，会限制最小字号的大小，其中桌面端及移动端的 chrome 浏览器是所有浏览器中限制值最大的，既 12 像素，在这些浏览器中，所有小于 12 像素的文字都会按照 12 像素显示，这往往会破坏页面的布局结构。因此我们应该避免设置小于 12 像素的字号。

但若有明确的设计上的考虑，为了页面美观等原因必须设置小于 12 像素的字号，则一般有两种处理方式：
- 1、若设计允许，则不做特殊处理，仅保证在大部分浏览器下能够按照小的字号显示，同时保证在 Chrome 等浏览器中以较大字号显示时不会引起页面布局错乱即可；
- 2、对于简单的文本内容，设置为 12 px 后再使用 transform 进行缩放，使其缩小到实际所需的字号大小（但使用这种方案需要注意 transform 只会改变元素的可视化模型，其实际占用尺寸不会改变）

###### 代码示例
**Bad**
```html
<div class="box">Text Message</div>
 
// 该元素中的文字会溢出
.box {
  height: 10px;
  font-size: 8px;
  line-height: 10px;
}


```
**Good**
```css
// 方式 1: 保证在 Chrome 等浏览器中以较大字号显示时不会引起页面布局错乱即可
.box {
  font-size: 8px;
  line-height: 1.25;
}
 
// 方式 2: 使用 transform 进行缩放，使其缩小到实际所需的字号大小
.box {
  height: 15px;
  font-size: 12px;
  line-height: 15px;

  transform: scale3d(0.67, 0.67, 1);

  // 需要额外注意下实际尺寸不会缩放的问题
  // 需根据具体情况进行特殊处理
}
```

### 文本
若需限定某元素内的文本行数，则必须设置该元素的高度，并添加 overflow: hidden 属性。若限定为单行文本，则需明确是否需要在文本溢出时显示省略号。

### 浮动
若某个元素内的子元素为浮动元素，则必须在该元素内清除浮动，除非该元素有额外设置触发 BFC 的属性或有设置高度值。

###### 代码示例
**Bad**
```css
.box .item {
  float: left;
}
```
**Good**
```css
.box {
  *zoom: 1;   /* if support ie6 or ie7, has this. */
}
 
.box:before,
.box:after {
  content: " ";
  display: table;
}
 
.box:after {
  clear: both;
}
 
.box .item {
  float: left;
}

```

### 图片
需在 CSS 中明确限定图片的尺寸，以防止引起页面错乱。

###### 代码示例
**Bad**
```css
.banner-image {
  border: 1px solid #ddd;
}
 
.user-avatar {
  border: 1px solid #ddd;
  border-radius: 50%;
}
```
**Good**
```css
.banner-image {
  /* 该处横幅图片需横向填充容器，高度自动缩放，因此仅需限定其宽度，高度无需设置 */
  width: 100%;
  border: 1px solid #ddd;
}
 
.user-avatar {
  /* 该处头像需保证为正方形，因此应明确设置其宽高值 */
  width: 50px;
  height: 50px;

  border: 1px solid #ddd;
  border-radius: 50%;
}
```

### 布局
PC 端一般无需做响应式布局，但各模块内依然建议使用流式布局方式，不要所有元素尺寸全都写死，以保证后续需要修改页面宽度时便于调整。

移动端必须使用流式布局方式，并酌情使用响应式布局方式，以保证在各尺寸设备下都能完美适配。

### 可交互元素
所谓可交互元素，既可响应用户的点击、滑动或拖放等交互行为以触发某些事件的元素。

对于这种可交互元素，推荐优先考虑使用 button 或 a 元素定义，其中 button 元素用于触发某些操作，而 a 元素用于视图跳转。

### :first-child 及 :last-child
有时需要为列表（或表格）中的第一项或最后一项指定不同的样式，一般相对于通过添加额外的 class 来实现之外，更推荐通过使用 :first-child 及 :last-child 伪类来实现。但需注意，IE8 浏览器不支持 :last-child 伪类，仅支持 :first-child。

## JavaScript

### 变量声明

禁止使用var定义全局变量，以免污染全局作用域

必须在函数顶部统一声明该函数内所用到的所有变量，以免出现变量冲突或其它函数级作用域所带来的问题。

不要重复声明同一个变量，不要声明与函数参数同名的变量。

### 变量名
所有变量名全都使用驼峰命名格式；

常量名使用全大写形式，每个单词间使用下划线分割。

页面私有属性建议使用 ‘_’ + 驼峰命名格式

**Good**
```javascript
const age: number = 18
const LEGAL_ADULT_AGE = 18;
const user = new class{
  provite _age: number
  _adultAge: number
	constructor(age) {
    this._age = age
    this._adultAge = LEGAL_ADULT_AGE
  }
	isAdult() {
    return this._age >= this._adultAge
  }
}(age)
```

### 空格
在左花括号前添加一个空格。
###### 代码示例
**Bad**
```javascript
function say(name){
  return 'Hi, ' + name
}
```
**Good**
```javascript
function say(name) {
  return 'Hi, ' + name
}
```

在二元及三元运算符的左右两边添加空格。

###### 代码示例
**Bad**
```javascript
const id=count+1
const name=isLogin?user.name:'default name'

```
**Good**
```javascript
const id = count + 1
const name = isLogin ? user.name : 'default name'
```

在条件语句及循环语句的左括号前添加一个空格，而函数声明及调用语句则不需要添加空格。
###### 代码示例
**Bad**
```javascript
if(isLogin) {
    alert (name);
}
 
for(let i = 0; i < friends.length; i++) {
    alert (friends[i].name);
}
```
**Good**
```javascript
if (isLogin) {
  alert(name)
}
 
for (let i = 0; i < friends.length; i++) {
  alert(friends[i].name)
}
```

在函数声明及调用语句中每个参数之间添加一个空格。
###### 代码示例
**Bad**
```javascript
function login(username,password) {
  ...
}
login(myname,mypassword)
```
**Good**
```javascript
function login(username, password) {
    ...
}
login(myname, mypassword)
```
代码块的最后，下一个语句之前，添加一个空行，代码块之前不需要空行。

###### 代码示例
**Bad**
```javascript
function say(name) {
  if (!name) {
    name = 'default name'
  }
  return 'Hi, ' + name
}
say('biossun')
```
**Good**
```javascript
function say(name) {
  if (!name) {
    name = 'default name'
  }
  return 'Hi, ' + name
}

say('biossun')
```

### 分号

不必使用分号。

如赋值语句、函数调用语句、跳转语句及 throw 语句等。

块级语句本身无需添加分号，如条件语句、循环语句、函数声明语句及异常捕获语句。

**注：在 JavaScript 的语法规范中，分号并不是一个强制要求使用的特性，是否使用分号在社区中也一直是一个颇受争论的问题，这两种方式各自都有其各自的优点，也都有其需要注意的地方。因此可以说是否使用分号仅仅只是一个代码风格上的问题。但本手册还是必须要对此进行选择以统一我们的代码风格，而考虑到我们现有代码中所使用的风格，因此选择所有语句末尾不必添加分号。**

## ASI
JavaScript 引擎提供自动分号插入机制，即 ASI。但是，该机制有时会带来一些问题需要开发者注意。
### return

当在函数中返回某个值时，return 关键字和所返回的值之间不要有换行。

###### 代码示例
**Bad**
```javascript
function XX() {
  return
  {
    name: 'biossun'
  }
}
```
上面代码的本意是返回一个对象，而实际是返回了一个 undefined，原因就是 ASI 机制会将该代码处理为如下形式：

**Bad**
```javascript
function XX() {
  return;
  {
    name: 'biossun'
  }
}
```
要避免该问题也很简单，只要保证 return 后面有一个未关闭的表达式即可：

**Good**
```javascript
function X() {
  return {
    name: 'biossun'
  }
}

```

### 相等性判断

尽量使用 `===` 来判断两个值是否相等。

在 JavaScript 中，`==` 会隐式的对所判断的值进行类型转换，有时，这会带来不必要的性能损耗，或在它人阅读理解代码时带来困难，甚至会引发一些潜在的问题（比如下面的示例）。

**Bad**
```javascript
if (x == 10) {
  x += 5
}
```
在该示例中，若传入的 `x` 是一个字符串 "10"，则结算结果为 "105"，而不是数值 15。因此更保险的做法是使用 `===`：
**Good**
```javascript
if (x === 10) {
  x += 5
}
```
若不确定 x 的类型是什么，那么应显示进行类型转换：
**Good**
```javascript
x = parserInt(x, 10)

if (x === 10) {
  x += 5
}
```
[拓展，`==`和`===`的区别是什么？](https://www.zhihu.com/question/31442029)
### 图片
#### 文件名
图片文件的命名方式基本与 `综述` -> `文件名` 中所述一致。但在做移动端切图时，应添加多倍屏后缀，如 `@2x`，`@3x`。

**Good**
```
index-banner.png     // 1 倍图，无需添加后缀
index-banner@2x.png  // 2 倍图
index-banner@3x.png  // 3 倍图
```

#### 格式
在保证图片质量不会过度丧失的前提下，应尽可能选择合适的图片格式，以尽可能降低图片大小。

以下为常用的几种图片格式的特点及适用类型：

- 1、PNG-24：索引表，24 位真彩色，8 位 Alpha 通道半透明，无损压缩；适合尺寸较小或色值不是很多的图片，以及需要半透明色值或不适合进行有损压缩的图片，如图标、矢量绘图、文字绘图等；
- 2、PNG-8：索引表，8 位 256 色，全透明；适合色值数量在 256 个以内且无需半透明色值的静态图片；
- 3、JPG：24 位真彩色，不支持透明/半透明色值，有损压缩；适合尺寸较大或色值较多的图片，如照片、海报等图片；
- 4、GIF：索引表，8 位 256 色，全透明，动画；适合色值数量在 256 个以内且无需半透明色值的动态图片；

#### 压缩
在保证图片质量的前提下，应尽可能压缩图片大小。（若条件允许，应选用压缩工具在构建时自动压缩图片）

若使用 Photoshop，一定注意只能使用 web 格式导出图片，不能使用「存储为...」。

在导出 PNG-24 格式的图片时，若图片中没有半透明色，则应取消勾选「透明度」。

在导出 JPG 格式的图片时，应在保证图片质量没有明显降低的前提下，尽可能的降低图片品质值。

## 为什么要写开发规范

规范结合培训，推广以及检查，规范就活了，产生价值了。

建立规范的同时，重点是设计推广和检查机制，这个最难了，比规范难，因为要追求效果的同时，考虑成本。

规范的全面不是那么重要，无需偏执的追求，规范哪怕只有一条，落地了就有价值


## 模板项目地址
- 1、 [vue3模版](https://hxgit.hxgis.com/front/vue3-template)
- 2、 [三维模版](https://hxgit.hxgis.com/front/2022/vite-3d-template.git)
- 3、大屏模板
