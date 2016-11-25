(function () {

    var oContainer = document.getElementById('container');
    var aImg = oContainer.getElementsByTagName('img');

    for (var i = aImg.length - 1; i >= 0; i--) {
        aImg[i].style.left = aImg[i].offsetLeft + 'px';
        aImg[i].style.top = aImg[i].offsetTop + 'px';
        aImg[i].style.position = 'absolute';
        aImg[i].style.margin = 0;
    }


})();