/**
 * Created by Administrator on 2017/7/19.
 */
$(function () {
    //轮播自动播放
    $('#myCarousel').carousel({
        //自动4秒播放
        interval : 4000,
    });
    $(window).load(function () {
        $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
        $('.text').eq(0).css('margin-top', ($('.auto').eq(0).height() - $('.text').eq(0).height()) / 2 + 'px');
        $('.text').eq(1).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(1).height()) / 2 + 'px');
        $('.text').eq(2).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(1).height()) / 2 + 'px');
        $('.text').eq(3).css('margin-top', ($('.auto').eq(1).height() - $('.text').eq(1).height()) / 2 + 'px');
    })
    //设置垂直居中
    $(window).resize(function () {
        var Iheight = $('.carousel-inner img').eq(0).height() ||
            $('.carousel-inner img').eq(1).height() ||
            $('.carousel-inner img').eq(2).height() ||
            $('.carousel-inner img').eq(3).height();
        $('.carousel-control').css('line-height', Iheight + 'px');
    });
    $(".pic1").hover(function () {
        $(".pic1 img").animate({
            opacity:.4
        },400,function () {
            $(".pic1").animate({
                "background-size":80
            },600)
        })
    },function () {
        $(".pic1 img").animate({
            opacity:1
        },function () {
          $(".pic1").css('background-size',10)
        })
    })
    $(".pic2").hover(function () {
        $(".pic2 img").animate({
            opacity:.4
        },400,function () {
            $(".pic2").animate({
                "background-size":80
            },600)
        })
    },function () {
        $(".pic2 img").animate({
            opacity:1
        },function () {
            $(".pic2").css('background-size',10)
        })
    })
    $(".pic3").hover(function () {
        $(".pic3 img").animate({
            opacity:.4
        },400,function () {
            $(".pic3").animate({
                "background-size":80
            },600)
        })
    },function () {
        $(".pic3 img").animate({
            opacity:1
        },function () {
            $(".pic3").css('background-size',10)
        })
    })
    $(".pic4").hover(function () {
        $(".pic4 img").animate({
            opacity:.4
        },400,function () {
            $(".pic4").animate({
                "background-size":80
            },600)
        })
    },function () {
        $(".pic4 img").animate({
            opacity:1
        },function () {
            $(".pic4").css('background-size',10)
        })
    })

});