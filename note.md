# 基础

## 介绍

`naive-admin-vite` 是一个后台前端解决方案，它基于 `vue3`、`naive-ui`、`TS`、`vite` 等实现。使用了最新的前端技术栈。

## 布局

页面的整体布局框架结构，包含导航、侧边栏、面包屑、多标签以及内容等

### Layout

`@/layout`

### app-main

`@/layout/components/AppMain`

1. `keep-alive` 是为了缓存 `<router-view>` 用的，配合 `tabs-view` 标签导航使用
2. `transition` 定义了页面之间切换动画，可根据自己需要调整 `transition` 的 `name`

## 路由和侧边栏

### 配置项

```ts
interface RouteMeta {
  // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
  // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
  // 若你想不管路由下面的 children 声明的个数都显示你的根路由
  // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
  alwaysShow?: boolean
  // 是否隐藏菜单 默认为false
  hidden?: boolean
  // 设置该路由进入的权限，支持多个权限叠加
  roles?: string[]
  // 设置该路由在侧边栏和面包屑中展示的名字
  title?: string
  // 设置该路由的图标
  icon?: Component
  // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
  noCache?: boolean
  // 如果设置为false，则不会在breadcrumb面包屑中显示(默认 true)
  breadcrumb?: boolean
  // 如果设置为true，它则会固定在tags-view中(默认 false)
  affix?: boolean
  // 当路由设置了该属性，则会高亮相对应的侧边栏
  // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
  //  点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
  activeMenu?: string
}
```

```ts
// 当设置为 noRedirect 的时候该路由在面包屑导航中不可被点击
redirect: 'noRedirect',
// 设定路由的名称，一定要填写，需要在 <keep-alive> 中使用
// 注：path 现不支持外链的形式，只能以 '/' 开头，后续可能使用 name 属性做菜单路由跳转
name: 'router-name'
```

### 路由

分为两种：`constantRoutes` 和 `asyncRoutes`

1. `constantRoutes`：不需要做倒台判断和添加的路由，如 登录页、404 等
2. `asyncRoutes`：需要通过动态判断权限并通过 `addRoute` 动态添加的页面

### 侧边栏

主要基于 `naive-ui` 的 `NMenu` 组件构建

#### 重定向

### 面包屑

## 权限验证

## 快捷导航（标签栏导航）

### visitedViews && cachedViews

目前 `tags-view` 仿照 `vue-element-admin`

1. `visitedViews`： 用户访问过的页面 就是标签栏导航显示的一个个 tag 数组集合
2. `cachedViews`；实际 `<keep-alive>` 的路由，可以在配置路由的时候通过 `meta.noCache` 来设置是否需要缓存这个路由 默认都缓存

### 注意

keep-alive 生效的前提是：需要将路由的 name 属性及对应的页面的 name 设置成一样。因为：
include - 字符串或正则表达式，只有名称匹配的组件会被缓存

```ts
//router 路由声明
{
  path: 'create-form',
  component: ()=>import('@/views/form/create'),
  name: 'createForm',
  meta: { title: 'createForm', icon: 'table' }
}
```

```ts
//路由对应的view  form/create
export default {
  name: 'createForm',
}
```

### Affix 固钉

当在声明路由是 添加了 `Affix` 属性，则当前`tag`会被固定在 `tags-view`中（不可被删除）

## 新增页面

### 新增 view

### 新增 api

### 新增 组件

### 新增 样式

## 样式
