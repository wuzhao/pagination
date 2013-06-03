# Pagination

---

## 1.0.5

`tag:improve` 添加 PaginationComplex 对象，自生成UI时使用。

## 1.0.4

`tag:improve` 去除工厂方法对 onTurn 的依赖，因为后面可能会干掉 onXxx 这种方法。

## 1.0.3

`tag:improve` 添加 PaginationCreator 对象，用于提供工厂构造方法。

## 1.0.2

`tag:improve` 修改 examples。

## 1.0.1

`tag:improve` 如果组件定义了 onTurn 自定义翻页事件，则只处理自定义事件，不进行一般的翻页处理；否则执行一般的翻页处理。

`tag:add` 增加 urlRule 定义各页面的 URL 规则，便于 Widget 模式加载的处理。

`tag:add` 增加 pageEscape 定义 URL 规则中的页码转义符。

## 1.0.0

正式版