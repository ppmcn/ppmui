## Hyperapp

```html
<div id="view"></div>

<script>
var h = hyperapp.h;
var app = hyperapp.app;

var state = {
  count: 0
}

var actions = {
  down: (function () {
    return function (state) {
      return { count: state.count - 1 };
    };
  }),
  up: (function(){
    return function(state){
      return {count: state.count + 1 };
    }
  })
}

var view = function(state, actions){
  return h(
    'div', {}, [
      h('button', {onclick:actions.down}, '-'),
      h('strong',{}, state.count),
      h('button', {onclick:actions.up}, '+'),
    ]
  )
}

app(state, actions, view, document.getElementById('view'))
</script>
```

参考：[docs](https://github.com/hyperapp/hyperapp/tree/master/docs)