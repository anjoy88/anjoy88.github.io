// YANDEX MAP
ymaps.ready(init);
var myMap, 
    myPlacemark;
function init(){ 
    myMap = new ymaps.Map("map", {
        center: [45.084288, 38.904786],
        zoom: 12,
        controls: []
    }); 
    myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 150 }}}));

    myPlacemark = new ymaps.Placemark([45.070288, 38.904786], {
        balloonContentHeader: 'АвтоРай',
        balloonContentBody: 'г. Краснодар, ул. Красных Партизан 2/4А',
        iconCaption: 'АвтоРай'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map_mark.png',
        iconImageSize: [52, 71],
        iconImageOffset: [-26, -71]
    });

    myMap.behaviors.disable('multiTouch');
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if(isMobile.any()){
        myMap.behaviors.disable('drag');
    }
}