import './header-style.css'; 

const header = () =>{
    return (
        
      <header>
        <div id="video-block">
          <div id="video-filter"></div>
          <video class="video-background" src="./img/video.mp4" playsinline="" autoplay="autoplay" loop="" preload="auto" muted="">
          </video>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 class="bars-title">
                Поддержка<br/>сайтов на Drupal
              </h1>
              <div class="sub-title">
                Сопровождение и поддержка сайтов<br/>
                на CMS Drupal любых версий и запущенности
              </div>
              <a href="#rates" class="rate-button">Тарифы</a>
            </div>
            <div class="col-md-6">
              <div class="row redline-text-blocks">
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">
                      #1
                      <img src="./img/cup.png" alt="#1" />
                    </div>
                    <div class="redline-text">
                      Drupal-разработчик <br/> в России по версии Рунета
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">3+</div>
                    <div class="redline-text">
                      средний опыт <br/>специалистов более<br/> 3 лет
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">14</div>
                    <div class="redline-text">
                      лет опыта в сфере Drupal
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">200+</div>
                    <div class="redline-text">
                      модулей и тем <br/>в формате DrupalGive
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">35 000</div>
                    <div class="redline-text">
                      часов поддержки <br/> сайтов на Drupal
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 col-6 redline-box">
                  <div class="redline">
                    <div class="redline-title">300+</div>
                    <div class="redline-text">
                      проектов<br/>на поддержке
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default header;