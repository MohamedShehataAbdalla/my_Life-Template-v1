/* global $ */

$(function () {
  'use strict';
  $('.info-list li').click(function (){
    $(this).addClass('selected').siblings('li').removeClass('selected');
  });
});
