import './index.scss'

$(function () {
  $('body').on('change', '.select select', function () {
    $(this).blur()
  })
})