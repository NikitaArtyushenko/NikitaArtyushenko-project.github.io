import './footer-style.css'

const nav = () =>{
    return (
        <footer class="footer-block">
        <div class="container">
          <div id="footer-phrase">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="connect-wrapper">
                  <div class="connect-title">Оставить заявку на<br/>поддержку сайта</div>
                  <div class="connect-description">Срочно нужна поддержка сайта? Ваша команда не успевает<br/>справиться самостоятельно или предыдущий подрядчик<br/>не справился с работой? Тогда вам точно к нам!<br/>Просто оставьте заявку и наш менеджер с вами свяжется!</div>
                  <div class="connect-contacts">
                    <ul>
                      <li class="contacts-phone"><a href="">8 800 222-26-73</a></li>
                      <li class="contacts-email"><a href="">info@drupal-coder.ru</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="form-block">
                  <form id="footer-form">
                    <input name="name" id="footer-name" type="text" class="footer-block-input" placeholder="Ваше имя" required />
                    <input name="number" id="footer-number" type="text" class="footer-block-input" placeholder="Телефон" required />
                    <input name="email" id="footer-email" type="email" class="footer-block-input" placeholder="E-mail" required />
                    <textarea name="message" id="footer-message" placeholder="Ваш комментарий" class="footer-block-input"></textarea>
                    <label for="footer-policy" class="chb-block">
                      <input name="footer-policy" type="checkbox" class="chb" id="footer-policy" />
                      <span class="chb-place"></span>
                      <span>
                        <span class="footer-checkbox-text">Отправляя заявку, я даю согласие на обработку своих<br/><a href="">персональных данных</a>
                        </span>
                      </span>
                    </label>
                   
                    <input id="sendButton" type="submit" class="footer-contact-button" value="СВЯЖИТЕСЬ С НАМИ" disabled />
                  </form>
                </div>
              </div>
            </div>
          </div>
            <div id="socialnetwork-block-wrapper">
              <div class="socialnetwork-block">
                <div class="footer-links-wrapper">
                <p id="end">Проект ООО «Инитлаб», Краснодар, Россия.<br/>Drupal является зарегистрированной торговой маркой Dries Buytaert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default nav;