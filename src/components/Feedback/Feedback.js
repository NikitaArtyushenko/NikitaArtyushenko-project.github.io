import './feedback-style.css'
import React, { Component } from "react";
import Slider from "react-slick";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      fade: true,
      swipe: false, 
      draggable: false,
      slidesToShow: 1,
      adaptiveHeight: true
    };
    return (
        <section class="feedbacks-warapper">
        <div class="container feedbacks">
          <h2>
            Отзывы
          </h2>
          <div class="feedbacks-shadow">
            <div class="feedbacks-block">
              <Slider {...settings}>
                <div class="feedbacks-slide">
                  <img src="./img/logo_0.png" alt="Ciel" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Натлья Сушкова, глава отдела веб-разработки CIEL&nbsp;
                    <a href="http://www.cielparfum.com/">http://www.cielparfum.com/</a>
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/logo.png" alt="Personal Writer" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/cableman_ru.png" alt="Кабельщик" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/farbors_ru.jpg" alt="Строймаркеты" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/logo-estee.png" alt="Эсти" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/logo_2.png" alt="Сбербро" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
                <div class="feedbacks-slide">
                  <img src="./img/lpcma_rus_v4.jpg" alt="лаборотория" />
                  <div class="feedbacks-text">
                    Команда Drupal Coder вызвала только положительные впечатления!
                  </div>
                  <div class="feedbacks-author">
                    Нуреев Александр, менеджер проекта Winamp Russian Community
                  </div>
                </div>
              </Slider>
              <div class="feedbacks-switch-block">
                <button id="feedbacks-previous" onClick={this.previous}></button>
                <div class="feedbacks-display">
                  <span id="feedbacks-number">01</span> / 08
                </div>
                <button id="feedbacks-next" onClick={this.next}></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
}
