(function($){
    $(".mui-scroll-wrapper").scroll({
        bounce: false,//滚动条是否有弹力默认是true
        indicators: false, //是否显示滚动条,默认是true
    });
})(mui);
//禁止滑动主界面的时候出现侧滑菜单
document.getElementsByClassName('mui-inner-wrap')[0].addEventListener('drag', function(event) {
　　event.stopPropagation();
});
$('.cdh').on('touchstart',function () {
	mui('.mui-off-canvas-wrap').offCanvas('show');
})