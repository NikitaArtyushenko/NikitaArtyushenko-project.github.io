import './tariff-style.css'

const tarif = () => {
    return (
<section class="tariffs" id="tariffs">
        <h2>
          Тарифы
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-4 order-1 tariff-col">
              <div class="tariff-unit">
                <div class="tariff-name"><div class="tariff-name-head">Стартовый</div><div class="tariff-name-text">2000 <sup>₽</sup></div>в час</div>
                <ul>
                  <li>Предоплата от 2 часов</li>
                  <li>Консультации и работы по SEO</li>
                  <li>Услуги дизайнера</li>
                  <li>Стандартное время реакции</li>
                  <li>Неиспользованные<br/>оплаченные часы переносятся<br/>на следующий месяц</li>
                </ul>
                <button id="contact-button-1" class="contact-button">ОСТАВИТЬ ЗАЯВКУ!</button>
              </div>
            </div>
            <div class="col-12 col-md-4 order-3 tariff-col">
              <div class="tariff-unit">
                <div class="tariff-name"><div class="tariff-name-head">VIP</div><div class="tariff-name-text">1800 <sup>₽</sup></div>в час</div>
                <ul>
                  <li>Предоплата от 100 часов</li>
                  <li>Консультации и работы по SEO</li>
                  <li>Услуги дизайнера</li>
                  <li>Максимальное время<br/>реакции – в день обращения</li>
                  <li>Неиспользованные часы<br/>не переносятся</li>
                </ul>
                <button id="contact-button-2" class="contact-button">ОСТАВИТЬ ЗАЯВКУ!</button>
              </div>
            </div>
            <div class="col-12 col-md-4 order-2 tariff-col main-tariff">
              <div class="tariff-unit">
                <div class="tariff-name"><div class="tariff-name-head">Бизнес</div><div class="tariff-name-text">2000 <sup>₽</sup></div>в час</div>
                <ul>
                  <li>Предоплата от 10 часов</li>
                  <li>Консультации и работы по SEO</li>
                  <li>Услуги дизайнера</li>
                  <li>Высокое время реакции –<br/>до 2 рабочих дней</li>
                  <li>Неиспользованные часы<br/>не переносятся</li>
                </ul>
                <button id="contact-button-3" class="contact-button">ОСТАВИТЬ ЗАЯВКУ!</button>
              </div>
            </div>
          </div>
        </div>
        <div class="individual-tariff">
            Вам не подходят наши тарифы? Оставьте заявку и мы<br/>предложим вам индивидуальные условия!<br/><br/>
          <a id="contact-button-4" class="call-form" href="">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ
          </a>
        </div>
      </section>
    );

}

export default tarif;