setTimeout(function(){
    var gallery = mui('.mui-sliders');
    gallery.slider({
         interval:1800//自动轮播周期，若为0则不自动播放，默认为0；
    });
},300)
$('.cdh').on('touchstart',function () {
	mui('.mui-off-canvas-wrap').offCanvas('show');
})
//禁止滑动主界面的时候出现侧滑菜单
document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
　　event.stopPropagation();
});
(function($){
    $(".mui-scroll-wrapper").scroll({
        bounce: false,//滚动条是否有弹力默认是true
        indicators: false, //是否显示滚动条,默认是true
    });
})(mui);
// 点击购买服务出弹框
$('.gmfw-btn').on('touchstart',function () {
    $('.hide').show()
    $('.orders').animate({'bottom':0})
})
// 弹框的点击样式
$('.choose ul li').on('touchstart',function () {
    $(this).addClass('active');
})
// 点击确定按钮
$('.ok,.over').on('touchstart',function () {
    $('.hide').hide()
    $('.orders').animate({'bottom':-100 + '%'})
})
