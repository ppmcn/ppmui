## Modal

```html
<div modal hidden>
  Dialog
</div>
```

## 基本弹窗
```html
<a class="button button-blue" modal-href="demo">打开弹窗</a>

<div modal="demo" hidden class="bgfff">
  <div class="padding-20">Dialog</div>
</div>
```

## 复杂弹窗
```html
<a class="button button-blue" modal-href="demo2">打开弹窗</a>

<div modal="demo2" hidden class="bgfff someclass">
  <div class="modal-header">
    <i class="icon-16 icon-info margin-right-10 margin-left-20"></i>选择教辅
    <a class="modal-close" modal-close></a>
  </div>
  <div class="modal-content">
    <div class="align-center">
      <h1 class="f20 margin-top-20">望月有怀_百度汉语</h1>
      <h2 class="margin-top-10">作者：李白</h2>
      <p class="margin-top-10 margin-bottom-20">
        清泉映疏松，不知几千古。<br>
        寒月摇清波，流光入窗户。<br>
        对此空长吟，思君意何深。<br>
        无因见安道，兴尽愁人心。<br>
      </p>
    </div>
  </div>
  <div class="modal-footer">
    <a class="margin-right-15 c555" modal-close>取消</a>
    <a class="button button-blue margin-right-20" modal-close>确定</a>
  </div>
</div>

<style>
  .someclass {
    width: 500px;
  }
</style>
```

## API
```html
<a class="button button-blue" onclick=javascript:$('[modal="demo2"]').modal('open');>JS打开弹窗</a>
<a class="button button-blue" onclick=javascript:$('[modal="demo2"]').modal('close');>JS关闭弹窗</a>
```