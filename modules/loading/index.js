import './index.scss';

(typeof ppmui == 'undefined') && (window.ppmui = {});

var clearTime = '';

function loading(operate) {
  switch (operate) {
    case 'close':
      close();
      break;

    default:
      open(operate);
      break;
  }
}

function open(msg) {
  msg = msg || '正在加载中';
  var boxClass = 'ppmui-loading';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmui-message-status"></i>' + msg + '</div>');

  // clearTime = setTimeout(function () {
  //   _clear()
  // }, 2300)
}

function close() {
  _clear()
}

function _clear() {
  // clearTimeout(clearTime)
  $('.ppmui-loading').remove()
}

ppmui.loading = loading;
