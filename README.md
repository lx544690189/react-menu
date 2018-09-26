# scorpio-menu
[![NPM](https://nodei.co/npm/scorpio-menu.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/scorpio-menu)

### [查看demo](https://lx544690189.github.io/react-menu/)

## 介绍
基于react的右键菜单

## 安装

```sh
npm i scorpio-menu
```

## Attributes

参数 | 类型 | 默认值 | 说明
---|---|---|---
data | object[] | - | 菜单数据，看下面详情
show | boolean | false | 显示/隐藏
onClose | Function(e: React.MouseEvent) | - | 隐藏按钮时的回调（点击非按钮区域）
onMenuClick | Function(d: data) | - | 点击某一选中菜单的回调，回调参数为菜单data数据

## data对象
key | 说明
---|---
label | 菜单显示名称
disabled | 是否禁用
subMenu | 子菜单object
