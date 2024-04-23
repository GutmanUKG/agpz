'use strict';
document.addEventListener('DOMContentLoaded', ()=>{
    //Slider main Page
    let bannerSlider = $('.banner-list').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots: false,
        nav:false,
        responsive:{
            0:{
                items:1,

            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                loop:true
            }
        }
    })

    $('.banner-btns .next').click(function() {
        bannerSlider.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.banner-btns .prev').click(function() {
        bannerSlider.trigger('prev.owl.carousel', [300]);
    })

    //Slider main Page


    //info-list
    const infoList = document.querySelector('.info-list'),
        infoItem = infoList.querySelectorAll('.info-item');
    infoItem.forEach((i)=>{
        let infoImg = i.querySelector('.info-img')
        infoImg.addEventListener('mouseenter',()=>{
            let img = infoImg.querySelector('img'),
                imgActive = img.dataset.img_new;
            img.src = imgActive
        })
        infoImg.addEventListener('mouseleave', ()=>{
            let img = infoImg.querySelector('img'),
                imgDefault = img.dataset.img_default;
            img.src = imgDefault
        })
    })

    //news list
    let newsList = $('.news-list').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        dots: true,
        nav:true,
        items:1
    })
    //news list
    document.querySelector('#arrow-top').onclick = () => {
        window.scrollTo(pageYOffset, 0);
    }


    const burgerBtn = document.querySelector('.navbar-toggler'),
        navBarCollapse = document.querySelector('#navbarText');
    burgerBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        navBarCollapse.classList.toggle('active')
        navBarCollapse.classList.toggle('collapse')
    })
    if(document.body.clientWidth < 991){
        const dropDownMenuItems = document.querySelectorAll('.dropdown-toggle')
        dropDownMenuItems.forEach((i)=>{
            i.addEventListener('click', (e)=>{
                e.preventDefault()
            })
        })
    }
});