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
var main = function() {
    var topnav = $('#nav1');

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $(topnav).addClass('sticky');
        } else {
            $(topnav).removeClass('sticky');
        }
    });
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });

    $('#navi').click(function() {
        $('#nav').slideToggle(1000);
    });

};
  $('.picwrap').click(function(){
        var listparent = $(this).parent().attr('class');
        $('.'+listparent+'list').slideToggle(1000);
    });

    var icons = {
        header: "fa fa-plus",
        activeHeader: "fa fa-minus"
    };
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: "content",
        icons: icons
    });

    $('.showall, .hideall').on("click", function(){
        var findhide = $(this).siblings().each(function(){
            $('.container').find('.sectionhide');
        });
        if (findhide = true ) {
            $('.sectionhide').slideToggle(1000);
            $('.contbtn').slideToggle(1500)
            $('.showall').slideToggle(500);
            $('.hideall').slideToggle(500);
        }
    });

    $('.sectiontitle').hover(function(){
        $('.sectionheader span', this).css('transform', 'translateY(-102%)');
    },
    function(){
        $('.sectionheader span', this).css('transform', 'translateY(0)');
    });

    $('.contbtn').click(function(){
        var contid = $(this).attr('id');
        $('#'+contid+'show').slideDown(1000);
        $(this).hide(1000);
    });

    $('.minushide').click(function(){
        var sbtn = $(this).closest('.sectionhide').siblings('.sectionbtn').find('div[id]');
        var sid = $(sbtn).attr('id');
        $('#'+sid+'show').slideUp(1000);
        $('#'+sid).slideDown(1000);
    });

};
$(document).ready(main);
