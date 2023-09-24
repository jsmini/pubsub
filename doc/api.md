# 文档

pubsub是一个小而美的发布订阅者模式库。

## PubSub

调度中心实例构造函数

可以生成调度中心实例，实例上都可以挂载订阅者

函数参数和返回值

- return {object} 调度实例

举个例子

```js
new PubSub(); // 调度中心实例
```

## subscribe / sub

添加订阅者

订阅特定的消息，当消息被 emit 时调用传入的订阅函数

函数参数和返回值

- param {string} channel 订阅的消息名
- param {function} 订阅函数当消息被 emit 时调用该函数
- return {object} 传入的参数所组成的对象

举个例子

```js
subscribe('hello', (...args) => {
  //...
});
// 下面方式作用相同：
sub('hello', (...args) => {
  //...
});
```

## unsubscribe / unsub

注销订阅者

针对特定消息注销指定的订阅函数

函数参数和返回值

- param {string} channel 订阅的消息名
- param {function} 该函数的指针
- return {undefined}

举个例子（要包含代码用例）

```js
const cb = (...args) => {
  //...
};
subscribe('hello', cb);

unsubscribe('hello', cb); // 注销了cb
// 下面方式作用相同：
unsub('hello', cb);
```

## publish / pub

发送指定消息

发送消息后会调用该消息下挂载的所有订阅函数

函数参数和返回值

- param {string} channel 订阅的消息名
- param {\*} ...args 传递给每个回调函数的参数
- return {undefined}

举个例子（要包含代码用例）

```js
const cb = (...args) => {
  //...
};
subscribe('hello', cb);

publish('hello', 1, [2], { foo: 3 }); // 此处执行 cb(1, [2], {foo: 3})
// 下面方式作用相同：
pub('hello', 1, [2], { foo: 3 }); // 此处执行 cb(1, [2], {foo: 3})
```
