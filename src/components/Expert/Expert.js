import './expert-style.css'

const expert = () => {
    return (
        <section class="exp">
        <div class="container">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6 block-redlines">
              <div class="row redline-text-blocks">
                <div class="col-12">
                  <h2>
                    Экспертиза в Drupal,<br/>опыт 14 лет!
                  </h2>
                </div>
                <div class="col-md-6 col-12 redline-box">
                  <div class="redline">
                    <div class="redline-text">
                        Только системный подход –<br/>контроль версий,<br/>резервирование<br/>и тестирование!
                    </div>
                  </div>
                </div>
                <div class="col-md-6 col-12 redline-box">
                  <div class="redline">
                    <div class="redline-text">
                        Только Drupal сайты,<br/>не берем на поддержку<br/>сайты на других CMS!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="exp-pic">
          <img src="./img/laptop.png" alt="Ноутбук" />
        </div>
      </section>
    );
}

export default expert;