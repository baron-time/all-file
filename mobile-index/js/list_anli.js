(function($){
    $(".mui-scroll-wrapper").scroll({
        bounce: false,//滚动条是否有弹力默认是true
        indicators: false, //是否显示滚动条,默认是true
    });
})(mui);
$('.screening div').on('touchstart', function () {
	$(this).addClass('active').find('.arrows1').hide().parent().siblings().removeClass('active').find('.arrows1').show().siblings().hide()
	if ($(this).addClass('active').find('.arrows1').hide()) {
		$(this).addClass('active').find('.arrows2').show()
	}
})
// 搜索弹框页面的搜索
var i = 1;
$('.discover').on('touchstart', function () {
	$('.list').show()
	i++;
	if (i % 1 == 0) {
		$('.list').show()
		$('.al1').hide()
		$('.al2').show()
	} else {
		$('.list').hide()
		$('.al1').show()
		$('.al2').hide()
	}
})
var lis = $('.list li').text()
var dis = $('.discover').text()
var a = 1;
$('.list li').on('touchstart', function () {
	$('.list').hide()
	a++;
	if (a % 2 == 0) {
		$('.discover').text(lis)
		$('.list li').text(dis)
	} else {
		$('.discover').text(dis)
		$('.list li').text(lis)
	}
});



// 返回按钮
$('.fanhui').on('touchstart',function() {
	$('.seek').animate({'top':100 + '%'})
})
$('.searchs').on('touchstart',function() {
	$('.seek').animate({'top':0 + '%'})
})
// 筛选的下拉
$('.screening>div').on('touchstart',function() {
	$('.dispn').show()
var down = $(this).index()
	$('.hide .pull-down').eq(down).show().siblings().hide()
	if($('.hide').show()) {
		$('body').css({'overflow-y':'hidden'})
	}
})



$('.dispn').on('touchstart',function() {
	$('.hide').hide()
	$(this).hide()
	$('body').css({'overflow-y':'visible'})
})
$('.cdh').on('touchstart',function () {
	mui('.mui-off-canvas-wrap').offCanvas('show');
})
//禁止滑动主界面的时候出现侧滑菜单
document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
　　event.stopPropagation();
});