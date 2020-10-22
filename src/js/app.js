import jQuery from 'jquery';
import 'bootstrap';
import 'owl.carousel';
import * as L from 'leaflet';
import WOW from 'wowjs';
import "magnific-popup";
import 'slick-carousel'; 


$("#click-me").click(function() {
   $(".fliter-mob").addClass("open-filer");    
//    $(".fliter-mob").addClass("animated");           
});

$('.fliter-mob__out').click(function(){
    $('.fliter-mob').removeClass('open-filer') 
    // $(".fliter-mob").removeClass("animated");   
})
$('.close-filter').click(function(){
    $('.fliter-mob').removeClass('open-filer') 
})
$(document).ready(function() {

    new WOW.WOW().init();
    // people card slider
    // $('#modal-login').modal('show')
    
    
    const $people = $('.slider-people');
    $people.slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        });
    // home page product slider
    const $miniSlider = $('#mini-slider');
    $miniSlider.owlCarousel({
        loop           : true,
        nav            : false,
        dots: true,        
        dotsData:true,
        lazyLoad       : true,
        dotsContainer: '#mini-custom-dots',
        items: 1,
        autoplay:true,
        autoplaySpeed: 2500,
        autoplayHoverPause: true
        
    })
    $('.owl-dot').click(function () {
        const id = $(this).attr('index');
        console.log(id);
        
        $miniSlider.trigger('to.owl.carousel', [id, 300]);
      });
    $miniSlider.on('changed.owl.carousel', function(e) {
        $miniSlider.trigger('stop.owl.autoplay');
        $miniSlider.trigger('play.owl.autoplay');
    });

    const $carouselEl = $('#owl-demo');
    $carouselEl.owlCarousel({
        loop           : true,
        nav            : false,
        lazyLoad       : true,
        items: 4,
        
        responsive     : {
          0   : { items: 1,center: true, margin: 25,autoWidth:true},
          1325: { items: 4, margin: 35 }
        }
    })
    
    const $carouselElcard = $('.owl-carousel-main');
    $carouselElcard.owlCarousel({
        center:true,
        margin: 0,
        items: 1 
    });
    const $carcard = $('.owl-carousel-main-card');
    $carcard.owlCarousel({
        margin: 15,
        autoWidth:true
    });

    const $slickCarousel = $('.slider-vertical');
    $slickCarousel.slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        arrows: false,
        centerPadding: '40px',
        verticalSwiping: true
        });
    // $slickCarousel.on('afterChange', function(event, slick, currentSlide) {
    //     $( ".slick-active" ).each(function( index ) {
    //         $( this ).removeAttr( "id" )
    //     });
    //     const last = $( ".slick-active" ).last()
    //     last.attr('id','last-item')
    //     console.log(last);
             
    //  });
        
    
    $('.thumb-item').click(function(){
        let num = $(this).attr('data-num');
        num -=1 ;
        console.log(num)
        $carouselElcard.trigger('to.owl.carousel', num);
    });
    $('.min-s').click(function(){
        let num = $(this).attr('data-num');
        num -=1 ;
        console.log(num)
        $carouselElcard.trigger('to.owl.carousel', num);
    });

    $(".arl").click(function() {
        $carouselElcard.trigger('prev.owl.carousel');

    });

    $(".arr").click(function() {
        $carouselElcard.trigger('next.owl.carousel');   
        $('.slider-vertical').slick('slickGoTo', 1);

    });

    $(".next").click(function() {
        $carouselEl.trigger('next.owl.carousel');  
        console.log(123);
          
    });

    $(".prev").click(function() {
        $carouselEl.trigger('prev.owl.carousel');
    });

	// home page tabs map
    $('ul.tabs li').click(function(){
		const id = $(this).attr('data-tab');
        const hid = $(this).attr('hide');

        $('ul.tabs li').removeClass('current');
        $('ul.tabs li').removeClass('activ');
        $('.tab-content').removeClass('current');
        $('.city').removeClass('hide');
        
        $(this).addClass('current');
        $(this).addClass('activ');
        $(`#${id}`).addClass('current');
        $(`.${hid}`).addClass('hide');
      
        $('.first').trigger( "click" );
        $('.firstr').trigger( "click" );
	})
  
    
    $('.first').trigger( "click" );
    $('.firstr').trigger( "click" );


    // map page
    $('.map-a').click(function(){
		const id = $(this).attr('data-tab');
    
        $('.map-a').removeClass('a-origin');
        $('.tab-content').removeClass('current');
    
        $(this).addClass('a-origin');
        $(`#${id}`).addClass('current');
        
    })
    $('.map-a2').click(function(){
		const id = $(this).attr('data-tab');
    
        console.log(id)
        $('.map-a2').removeClass('a-origin');
        $('.tab-content2').removeClass('current');
    
        $(this).addClass('a-origin');
        $(`#${id}`).addClass('current');
        
    })
    
    // tabs customer page
    $('.tab-link').click(function(){
		const id = $(this).attr('data');
    
        console.log(id)
        $('.tab-link').removeClass('active-tab');
        $('.tab-block').removeClass('show-b');
        $('.tab-block').removeClass('animated');
        
        $(this).addClass('active-tab');
        $(`#${id}`).addClass('show-b');
        $(`#${id}`).addClass('fadeIn');
        $(`#${id}`).addClass('animated');
    })
    
    // basket

    $('.radio-delivery').click(function(){
        const id = $(this).attr('data');
        console.log(id)
        $('.del-tab').removeClass('del-show');
        $(`.${id}`).addClass('del-show');
    });

    $('.radio-way').click(function(){
        const id = $(this).attr('data');
        $('.select-tab').removeClass('del-show');
        $(`.${id}`).addClass('del-show');
    });

    $('.header-menu').click(function(){
        // const res = $(this).attr('data-open');
        $(this).toggleClass('co')
        $('.header-menu-mob').toggleClass('open-menu')
        $('body').toggleClass('scroll')

    });
    $('.main-open').click(function(){
        // const res = $(this).attr('data-open');

        $('.main-slider__info').toggleClass('open-hide')
        $('.main-slider__social ').toggleClass('open-hide')
        

    });

    

    $( ".trigger-open" ).trigger( "click" );
    $( ".tr-open" ).trigger( "click" );
   
})


// Map home page shop page contact page
// const osmUrl = 'https://tiles.stadiamaps.com/tiles/alidade_smooth?api_key=cf2e8962-5d60-49a7-baff-f0d84a424ff5/{z}/{x}/{y}{r}.png';
const osmUrl = 'https://maps.omniscale.net/v2/faber-a0fe61e9/style.grayscale/{z}/{x}/{y}.png';

const osm = L.tileLayer(osmUrl, {
    minZoom: 6,
    zoom: 12,
    attribution: 'Faber map'
});
const url = 'https://maps.omniscale.net/v2/faber-a0fe61e9/style.grayscale/{z}/{x}/{y}.png';

const osm2 = L.tileLayer(url, {
    minZoom: 6,
    zoom: 12,
    attribution: 'Faber map'
});

const map = L.map("map").setView([49, 30.396391], 1).addLayer(osm);
const maps = L.map("maps").setView([49, 30.396391], 1).addLayer(osm2);


const greenIcon = L.icon({
    iconUrl: 'img/marker.png',
    iconSize:     [29, 35] // size of the icon
});

const marker = [];
$('.cor').click(function(){
  
    const lat = $(this).attr('lat');
    const lng = $(this).attr('lng');
    const alat = lat.split('|')
    const alng = lng.split('|')

    console.log(alat,alng);
    $('.cor').removeClass('a-origin');
    $(this).addClass('a-origin');

    marker.forEach(function(item) {
        map.removeLayer(item);
    })
    
    alat.forEach(function(item, i) {
        const num2 = alng[i];
         console.log(item, num2);
         marker.push(new L.Marker([item,num2], {icon: greenIcon}).addTo(map));
    })
    
    
})
$('.corr').click(function(){
  
    const lat = $(this).attr('lat');
    const lng = $(this).attr('lng');
    const alat = lat.split('|')
    const alng = lng.split('|')

    console.log(alat,alng);
    $('.corr').removeClass('a-origin');
    $(this).addClass('a-origin');

    marker.forEach(function(item, i, arr) {
        map.removeLayer(item);
    })
    
    alat.forEach(function(item, i, arr) {
        const num2 = alng[i];
         console.log(item, num2);
         marker.push(new L.Marker([item,num2], {icon: greenIcon}).addTo(map));
    })
    
})
const marker2 = [];

$('.cor2').click(function(){
  
    const lat = $(this).attr('lat');
    const lng = $(this).attr('lng');
    const alat = lat.split('|')
    const alng = lng.split('|')

    console.log(alat,alng);
    $('.cor2').removeClass('a-origin');
    $(this).addClass('a-origin');

    marker2.forEach(function(item, i, arr) {
        maps.removeLayer(item);
    })
    
    alat.forEach(function(item, i, arr) {
        const num2 = alng[i];
         console.log(item, num2);
         marker2.push(new L.Marker([item,num2], {icon: greenIcon}).addTo(maps));
    })
    
    
})



