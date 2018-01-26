import './index.scss';

(typeof ppmcn == 'undefined') && (window.ppmcn = {});

var clearTime = ''

function msg(msg) {
  var boxClass = 'ppmcn-msg';
  _clear()

  $('body').after('<div class="' + boxClass + '">' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function info(msg) {
  var boxClass = 'ppmcn-info';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmcn-message-status"></i>' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function error(msg) {
  var boxClass = 'ppmcn-error';
  _clear()

  $('body').after('<div class="' + boxClass + '"><i class="ppmcn-message-status"></i>' + msg + '</div>');

  clearTime = setTimeout(function () {
    _clear()
  }, 2300)
}

function _clear() {
  clearTimeout(clearTime)
  $('.ppmcn-msg, .ppmcn-info, .ppmcn-error').remove()
}

ppmcn.msg = msg;
ppmcn.info = info;
ppmcn.error = error;