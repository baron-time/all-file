/*计算rem高度*/
(function (win, doc) {
    win.onresize = function () {
        change();
    };
    change();

    function change() {
        var oFs = doc.documentElement.clientWidth / (750 / 100);
        doc.documentElement.style.fontSize = oFs + 'px';
        
    }
})(window, document);