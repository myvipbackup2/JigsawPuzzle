(function () {

    var oContainer = document.getElementById('container');
    var aImg = oContainer.getElementsByTagName('img');
    var zIndex = 1;
    var collide = [];

    for (var i = aImg.length - 1; i >= 0; i--) {
        aImg[i].style.left = aImg[i].offsetLeft + 'px';
        aImg[i].style.top = aImg[i].offsetTop + 'px';
        aImg[i].style.position = 'absolute';
        aImg[i].pos = {
            left : aImg[i].offsetLeft,
            top : aImg[i].offsetTop
        };
        drag(aImg[i]);
    }

    function drag(elem) {

        elem.onmousedown = function (e) {
            e =e || event;
            var iDisX = e.clientX - elem.offsetLeft;
            var iDisY = e.clientY - elem.offsetTop;
            elem.style.zIndex = zIndex++;

            document.onmousemove = function (e) {
                e = e || event;
                var iLeft = e.clientX - iDisX;
                var iTop = e.clientY -iDisY;
                elem.style.top = iTop + 'px';
                elem.style.left = iLeft + 'px';


                document.onmouseup = function () {
                    document.onmousemove = null;
                }
            }
        }


    }




})();