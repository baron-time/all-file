mui.init();
mui.ready(function () {
	var slider = document.getElementById('Gallery');
	var group = slider.querySelector('.mui-slider-group');
	var items = mui('.mui-slider-item', group);
	// 克隆第一个节点
	var first = items[0].cloneNode(true);
	first.classList.add('mui-slider-item-duplicate');
	// 克隆最后一个节点
	var last = items[items.length - 1].cloneNode(true);
	last.classList.add('mui-slider-item-duplicate');
	// 轮播图片定时
	var slider = mui("#slider");
	slider.slider({
		interval: 4000
	});
})
$('.options ul li').on('click', function () {
	$(this).addClass('active').siblings().removeClass('active')
})
var sum = 0;

setInterval(function () {
	sum++;
	if (sum > 10) {
		$('.white-transi').animate('');
		$('.white-transi').css('top', 0);
		sum = 0;
	}
	var l = -104 * sum;
	$('.white-transi').animate({
		top: l + '%'
	}, 500)
}, 3000)
setTimeout(function(){
    var gallery = mui('.mui-sliders');
    gallery.slider({
         interval:1800//自动轮播周期，若为0则不自动播放，默认为0；
    });
},300)