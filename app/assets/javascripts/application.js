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

  $('.email').keyup(function () {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test($(this).val())) {

        $(this).css("border-bottom", "2px solid green");
        $('.wrong-email').hide();
        $('.right-email').show();

      } else {

        $(this).css("border-bottom", "2px solid red");
        $('.right-email').hide();
        $('.wrong-email').show("slow");
      }
    });


    $('.username').keyup(function () {
      var value = $(this).val();
      if ( value.length > 3 ) {
        $(this).css("border-bottom", "2px solid green");
        $('.wrong-username').hide();
        $('.right-username').show();
      } else {
        $(this).css("border-bottom", "2px solid red");
        $('.right-username').hide();
        $('.wrong-username').show("slow");
      }
    });

    $('.password').keyup(function () {
      var value = $(this).val();
      if ( value.length > 7 ) {
        $(this).css("border-bottom", "2px solid green");
        $('.wrong-password').hide();
        $('.right-password').show();
      } else {
        $(this).css("border-bottom", "2px solid red");
        $('.right-password').hide();
        $('.wrong-password').show("slow");
      }
    });

    $('.password_confirmation').keyup(function () {
      var value = $(this).val();
      var password = $('.password').val();
      if ( value == password ) {
        $(this).css("border-bottom", "2px solid green");
        $('.wrong-confirmation').hide();
        $('.right-confirmation').show();
      } else {
        $(this).css("border-bottom", "2px solid red");
        $('.right-confirmation').hide();
        $('.wrong-confirmation').show("slow");
      }
    });

});
