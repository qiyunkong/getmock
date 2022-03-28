

GetMock 是一个轻量级生成随机数据  HTTP WebAPI接口工具。
不在苦等后端接口，快速实现人机交互效果。
想要什么数据结构，就给什么数据结构。

## 功能特性

- 数据类型丰富
- 延迟响应
- 通过随机数据，模拟各种场景

## 版本说明

最新版本：0.0.2

## 快速开始

```shell
$ npm install getmock
$ npx getmock
```

## 基本使用
``` js
axios(
  {
    headers: {
    'Content-Type': 'application/json;charset=UTF-8'
    },
    method: 'POST',
    url: 'http://192.168.1.18:3000/',
    data: {
      "mock": {
        "list|3-5": [
          {
            "name|1": ["MockAPI", "CSS", "HTML", "JS"],
            "avatar": "@image('200x100', '#3F48CC', '#FFF', 'MockAPI')",
            "tagColor": "@color()"
          }
        ]
      }
    }
  }).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
```

## 参考写法
普通获取
延迟获取
获取列表

## 参考文档

[mock.js](http://mockjs.com/)

## 体验改进计划说明