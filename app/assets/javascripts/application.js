// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  // $('input').focusin(function() {
  //   $(this).addClass('select');
  // });
  // $('input').focusout(function() {
  //   $(this).removeClass('select');
  // });

  // $('.username').keyup(function() {
  //   if ($(this).val())) {
  //     $(this).css("border-bottom", "2px solid green");
  //   }
  // });



  $('.email').keyup(function () {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test($(this).val())) {

        $(this).css("border-bottom", "2px solid green");

      } else {

        $(this).css("border-bottom", "2px solid red");
      }
    });

    $('.username').keyup(function () {
      var value = $(this).val();
      if ( value.length > 3 ) {
        $(this).css("border-bottom", "2px solid green");
        // $(this).css("color", "green");
      } else {
        $(this).css("border-bottom", "2px solid red");
        // $(this).css("color", "red");
      }
    });

    $('.password').keyup(function () {
      var value = $(this).val();
      if ( value.length > 7 ) {
        $(this).css("border-bottom", "2px solid green");
      } else {
        $(this).css("border-bottom", "2px solid red");
      }
    });

    $('.password_confirmation').keyup(function () {
      var value = $(this).val();
      var password = $('.password').val();
      if ( value == password ) {
        $(this).css("border-bottom", "2px solid green");
      } else {
        $(this).css("border-bottom", "2px solid red");
      }
    });

});
