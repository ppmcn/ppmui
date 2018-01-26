import './indes.scss';

$.fn.extend({
  modal: function (config) {
    var moc = '';
    var bg = $('[modal-bg]');
    var offsetTop = 220;

    switch (config) {
      case "open":
        open(this);
        break;
      case "close":
        close(this);
        break;
      default:
        init();
        break;
    };

    function init(selector) {
      if (bg.length <= 0) {
        bg = $("<div>").attr('modal-bg', '');
        $('body').append(bg);
      };
      $(selector).find('[modal-close]').off('click').on('click', function () {
        close(selector);
      });
      bg.off('click').on('click', function () {
        close(selector);
      })

    }

    function close(selector) {
      $(selector).attr('hidden', '');
      bg.attr('hidden', '');
    }

    function open(selector) {
      init(selector);
      moc = $(selector);
      moc.removeAttr('hidden');
      // var cssTop = (($(window).height() - moc.outerHeight()) / 2); // top 算法
      // if (cssTop >= offsetTop) {
      //   cssTop = offsetTop
      // }
      // moc.css({
      //   'top': 0
      // })
      // moc.animate({
      //   'top': cssTop
      // }, 200);
      bg.removeAttr('hidden')
    }
  }
})

$(function () {
  $('body').on('click', "[modal-href]", function () {
    var selector = $(this).attr('modal-href');
    $('[modal=' + selector + ']').modal('open');
  });
})