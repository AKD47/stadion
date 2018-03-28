$(document).ready(function(){

    /*scroll block*/
    if(window.innerWidth > 1024) {
        var element = $('.js-banner');//елемент, который необходимо сделать фиксированным
        if (element.length > 0) {//проверка наличия элемента на странице
            var elementPosition = element.offset().top;//определяем позицию элемента относительно верха документа
            $(window).scroll(function () {//при прокрутке окна браузера
                fixedScroll(element,
                    elementPosition, $('.pagination'));//вызывается функция с заданными селекторами
            });
        }
    }
    /*close scroll block*/

});

function fixedScroll(element, elementPosition, blockElement) {//функция фиксированногоблока, с селекторами элемента, его позиционирования и преграждающего блока
    var top = $(document).scrollTop(),//значение отступа прокрутки сверху для первого элемента
        blockingElement = blockElement.offset().top,//позиция блокирующего блока отностительно верха документа
        height = element.outerHeight();//высота элемента, включающая внутренние и внешние отступы
    if (top > elementPosition && top < blockingElement - height) {//
        element.addClass('js-fixed').removeAttr("style");
    }
    else if (top > blockingElement - height) {
        element.removeClass('js-fixed').css({'position': 'absolute', 'bottom': '50px'});
    }
    else {
        element.removeClass('js-fixed');
    }
}