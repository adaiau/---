//标签切换
$(function () {
  // Simple filter controls
  $(".simplefilter li").click(function () {
    $(".simplefilter li").removeClass("active");
    $(this).addClass("active");
  });
  //Multifilter controls
  $(".multifilter li").click(function () {
    $(this).toggleClass("active");
  });
  //Shuffle control
  $(".shuffle-btn").click(function () {
    $(".sort-btn").removeClass("active");
  });
  //Sort controls
  $(".sort-btn").click(function () {
    $(".sort-btn").removeClass("active");
    $(this).addClass("active");
  });
});

//定义数组，给图片筛选器赋值
$(function () {
  var imgArry = [
    "images/industrial_1.jpg",
    "images/industrial_2.jpg",
    "images/industrial_3.jpg",
    "images/city_2.jpg",
    "images/city_1.jpg",
    "images/city_3.jpg",
    "images/nature_1.jpg",
    "images/nature_2.jpg",
    "images/nature_3.jpg",
  ];
  $(".img-responsive").each(function (index, element) {
    // console.log(element.className);
    $(element).attr("src", imgArry[index]);
  });
});

//发送邮件按钮失效判断
$(document).ready(function () {
  var email = $.trim($("#email").val());
  var email_theme = $.trim($("#name").val());
  var content = $.trim($("#message").val());
  // $('#success .btn').addClass('disabled')
  // if ((email == "")|(email_theme == "")|(content == "")) {
  $(".btn-success").prop("disabled", true);
  // }
});
//监听input输入
$(document).bind("input propertychange", function () {
  //清空显示层中的数据
  // $('.btn-default').
  $(".text-danger").html("");
  var email = $.trim($("#email").val());
  var email_theme = $.trim($("#name").val());
  var content = $.trim($("#message").val());

  //获取id对应的元素的值，去掉其左右的空格
  // var email = $.trim($('#email').val());
  //验证邮箱格式的js正则表达式
  var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  //清空显示层中的数据
  // $("#emailMess").html("");
  if (email == "") {
    $(".danger-Waring").html("<font color='red'>" + "邮箱不能为空" + "</font>");
  } else if (!isEmail.test(email)) {
    $(".danger-Waring").html(
      "<font color='red'>" + "邮箱格式不正确" + "</font>"
    );
  }

  if (!(email == "") & !(email_theme == "") & !(content == "")) {
    // $('#success .btn').removeClass('btn-default');
    // $('#success .btn').addClass('btn-success');
    $(".btn-success").prop("disabled", false);
  }
});

//发送邮件
$(".btn-success").click(function () {
  var email = $.trim($("#email").val());
  var email_theme = $.trim($("#name").val());
  var content = $.trim($("#message").val());

  var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (email == "") {
    // $(".danger-Waring").html("<font color='red'>"+"邮箱不能为空"+"</font>");
    alert("邮箱不能为空");
  } else if (!isEmail.test(email)) {
    // $(".danger-Waring").html("<font color='red'>"+"邮箱格式不正确"+"</font>");
    alert("邮箱格式不正确");
  } else {
    // $('.btn-default').addClass(btn-success)
    // console.log(email,email_theme,content);

    location =
      "mailto:adai548524@gmail.com?subject=test&cc=" +
      email +
      "&subject=" +
      email_theme +
      "&body=" +
      content;
  }
});

//点击滚动到指定位置
//点击菜单跳转到指定位置
function menuChange(menuType) {
  //定义id
  var menuTypeId;
  switch (menuType) {
    // case 0:
    //     menuTypeId =".jumbotron";
    //     break;
    case 0:
      menuTypeId = "#midup2";
      break;
    case 1:
      menuTypeId = ".project";
      break;
    case 2:
      menuTypeId = ".majorSkill";
      break;
    case 3:
      menuTypeId = "#testimonial";
      break;
    default:
      menuTypeId = "#contact";
      break;
  }
  $("html, body").animate(
    {
      scrollTop: $(menuTypeId).offset().top - 50,
    },
    { duration: 500, easing: "swing" }
  ); //scrollTop:指定相关模块回到指定位置（该位置要去掉菜单导航栏高度）。
}

// //调整水平垂直居中设置
// $(window).resize(function () {
//     // console.log('56556');
//     var width = ($('#footer').width() - $('.container-mine').outerWidth())/2;
//     var height = ($('#footer').height() - $('.container-mine').outerHeight())/2;
//     $('#footer').css({
//             position:'relative',
//         });
//    $('.container-mine').css({
//
//        position:'absolute',
//        left:width,
//        top: height,
//    }) ;
// });
//
// $(function(){
//     // console.log('fdsdsfgdsf');
//     $(window).resize();
// });

//标题随浏览器变化而变化

$(function () {
  $(window).resize(function () {
    var scrWidth = $(window).width();
    if (scrWidth >= 733) {
      $("h1,brand-heading").css("font-size", "50px");

      $("intro-text").css("font-size", "25px");
    } else if (scrWidth <= 600) {
      $("h1,brand-heading").css("font-size", "25px");
      $("intro-text").css("font-size", "25px");
    } else {
      $("h1,brand-heading").css("font-size", "35px");
      $("intro-text").css("font-size", "15px");
    }
  });
});

$(".filtr-container img").click(function () {
  // $(this).css('href','https://gitee.com/grx_1990/projects');
  location.href = "https://github.com/adaiau";
});
