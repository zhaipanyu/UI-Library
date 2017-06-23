<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>原型_Dom事件</title>
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
    <style>
        .btn{
            position: fixed;
            bottom: 10px;
            right: 10px;
            border: 1px solid red;
            padding: 5px 10px;
            border-radius: 2px;
        }
    </style>
</head>

<body>
    <p>回顶部了</p>
    <script>
        var GoTop = function () {
            this.ct = $('Body')
            this.target = $('<div class="btn">点我回顶部</div>')
        }
        GoTop.prototype.bindEvent = function () {
            this.target.on('click', function () {
                $(window).scrollTop(0)
            })
        }
        GoTop.prototype.createNode = function () {
            this.ct.append(this.target)
        }

        var btn = new GoTop()
        btn.bindEvent()
        btn.createNode()

/*
创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。拥有以下属性和方法

1. `ct`属性，GoTop 对应的 DOM 元素的容器
2.  `target`属性， GoTop 对应的 DOM 元素
3.  `bindEvent` 方法， 用于绑定事件
4 `createNode` 方法， 用于在容器内创建节点*/
    </script>
</body>

</html>