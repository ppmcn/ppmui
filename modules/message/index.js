import './index.scss';

(typeof ppmui == 'undefined') && (window.ppmui = {});

var clearTime = ''

function msg(msg) {
  var boxClass = 'ppmui-msg';
  _clear()

  $('body').after('<div class="' + boxClass + '">' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function info(msg) {
  var boxClass = 'ppmui-info';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmui-message-status"></i>' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function error(msg) {
  var boxClass = 'ppmui-error';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmui-message-status"></i>' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function _clear() {
  clearTimeout(clearTime)
  $('.ppmui-msg, .ppmui-info, .ppmui-error').remove()
}

ppmui.msg = msg;
ppmui.info = info;
ppmui.error = error;