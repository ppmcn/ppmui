import './index.scss';

(typeof ppmcn == 'undefined') && (window.ppmcn = {});

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
  var boxClass = 'ppmcn-loading';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmcn-message-status"></i>' + msg + '</div>');

  // clearTime = setTimeout(function () {
  //   _clear()
  // }, 2300)
}

function close() {
  _clear()
}

function _clear() {
  // clearTimeout(clearTime)
  $('.ppmcn-loading').remove()
}

ppmcn.loading = loading;
