import './partners-style.css'
import React, { Component } from "react";
import Slider from "react-slick";

const Partners = () =>{

    const settings1 = {
        infinite: true,
      dots: false,
      arrows: false,
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '10%',
      autoplaySpeed: 3500,
      responsive: [
          {
              breakpoint: 1024,
              settings: {slidesToShow: 3}
          },
          {
              breakpoint: 600, 
              settings: {slidesToShow: 2}
          }
        ]
    };

    const settings2 = {
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {slidesToShow: 3}
            },
            {
                breakpoint:600, 
                settings: {slidesToShow: 2}
            }
        ]
      };

    return (
<section class="partners-with-us">
        <h2>С нами работают</h2>
        <div class="partners-with-us-title">
            Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои<br/>сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
        </div>
          <Slider {...settings1}>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo_0.png" alt="Ciel" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/kubsu.png" alt="Kubsu" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo_2.png" alt="Serebro.Ag" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo_0.png" alt="Ciel" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/kubsu.png" alt="Kubsu" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo_2.png" alt="Serebro.Ag" /></div>
            </div>
          </Slider>
          <Slider {...settings2}>
            <div class="partners-with-us-slide">
              <div><img src="./img/nashagazeta_ch.png" alt="Наша газета" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/cableman_ru.png" alt="Кабельщик" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo-estee.png" alt="Estee" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/lpcma_rus_v4.jpg" alt="Лаборатория" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/nashagazeta_ch.png" alt="Наша газета" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/cableman_ru.png" alt="Кабельщик" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/logo-estee.png" alt="Estee" /></div>
            </div>
            <div class="partners-with-us-slide">
              <div><img src="./img/lpcma_rus_v4.jpg" alt="Лаборатория" /></div>
            </div>
          </Slider>
      </section>
    );
}

export default Partners;