## 模块化加载

- amd
- cmd
- global


## 配置

- previousBackbone
- array 和部分功能
- 版本号
- $
- noConfilict
- emulateHTTP
- emulateJSON

## Events
- on
- once
- off
- trigger
- stopListening

## eventSplitter
- 用于分割事件名 `click focus` 分成[click,focus]

## eventsAPi
- 封装用与处理 `on`,`off`,`once`,`trigger`

## triggerEvents
- 用于触发`trigger`事件， 根据传入参数callback

## listenMethods
- `key`: `val` listenTo && listenToOnce 分别调用 on && once

## _each(listenMethods)
- 将listenTo && listenToOnce 加到Events方法上，默认是用on 和 once 实现






## 疑问

###### exports

###### // 冲突机制，不理解   Backbone.noConflict

###### eventSplitter 用来匹配 传入事件的空格。 /\s+/;

###### eventsApi 有些不解

###### underscore once 实现思路

###### void 0; 在解绑事件的时候为什么不写  undefined

###### triggerEvents 为什么不是用统一的 callback.apply去实现，而是分参数个数去判断