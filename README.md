## 国际学校

### 1. 不同点 -  学校大全  模块

1. 北上广国际学校
   - 图片是学校的背景图
2. 深圳国际学校
   - 图片是学校的`logo`
   - 学校名称下面有一条横线

-------

## 移动端注意点

### 1. 开头引入的代码

```scss
$txt-color: #f05630; // 字体颜色
$bg-color: #6a80ea; // 背景颜色
$browser-default-font-size: 75px!default;;
@function pr($px){
  @return $px / $browser-default-font-size * 1rem;
}

$padding-size: pr(20px);

body {
  font-size: pr(16px);
  color: #444444;
  padding-bottom: pr(170px);
}

.wrap{
  max-width: pr(750px);
  margin: 0 auto;
  overflow: hidden;
}

p {
  line-height: 1.6;
}

a:hover {
  color: $txt-color;
}

li {
  list-style: none;
}

img {
  border: none;
  margin: 0;
  padding: 0;
}

i {
  font-style: normal;
}

input[type="text"],
select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none; // 去除safari浏览器的内阴影
  &::-webkit-input-placeholder {
    color: #999;
    font-size: inherit;
  }
  &:-moz-placeholder {
    color: #999;
    font-size: inherit;
  }
  &::-moz-placeholder {
    color: #999;
    font-size: inherit;
  }
  &:-ms-input-placeholder {
    color: #999;
    font-size: inherit;
  }
}

input[type="submit"] {
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

input, textarea, select {
  background-color: transparent;
  font-family: '微软雅黑';
}

select {
  border: none;
  text-indent: 1em;
}

option {
  text-indent: 1em;
  font-family: '微软雅黑';
}

input[type='text'], select {
  border: none;
  text-indent: 1em;
}

input[type="submit"] {
  border: none;
}

%one {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

%in-b {
  display: inline-block;
  *zoom: 1;
  *display: inline;
}

%clearfix {
  zoom: 1;
  &:after {
    clear: both;
  }
  &:before,
  &:after {
    content: "";
    display: table;
  }
}
```

### 2. `js`的引入

```html
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
  <title>北上广国际学校</title>
  <script type="text/javascript" src="https://img.thea.cn/public/js/jquery-1.12.3.min.js"></script>
  <script type="text/javascript" src="https://img.thea.cn/public/js/thea.debug.js"></script>

  <link rel="stylesheet" type="text/css" href="https://img.thea.cn/public/css/base.css">
  <link rel="stylesheet" href="css/index.css">
</head>

<body>
    <script type="text/javascript">
  var _echatServer = ['v.rainbowred.com'];
  window._echat=window._echat||function(){(_echat.q=_echat.q||[]).push(arguments)};_echat.l=+new Date;
  _echat('initParam', { companyId: 378});
  _echat('initParam', { echatTag:'竞价-国际'});
  (function () {
    var echat = document.createElement('script');
    echat.type = 'text/javascript';
    echat.async = true;
    echat.id = 'echatmodulejs';
    echat.setAttribute('charset','UTF-8');
    echat.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'vs.rainbowred.com/visitor/echat.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(echat, s);
  })();
</script>
<script type="text/javascript" src="https://img.thea.cn/public/js/thea.ms.form.js"></script>
<script src="js/index.js"></script>
</body>
```

### 3. `800` 的调用

```js
<!-- PC：<a href="javascript:void(0)" onclick="ECHAT.customNewWinChat()"></a> -->
<!-- 手机：<a href="javascript:void(0)" onclick="ECHAT.customMiniChat()"></a> -->
```

### 4. `FTP`缓存问题

- 如果刷新`FTP`页面之后，页面没有变化，可以去 钉钉 -> 工作 -> 编辑后台 -> `CDN`刷新 -> `CDN`刷新，把要刷新的页面放进去，点击 确认提交

