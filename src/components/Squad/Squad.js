import './squad-style.css'

const squad = () => {
    return (
<section class="squad">
        <div class="container">
          <div class="squad-unit">
            <div class="row">
              <h2 class="col-12">
                Команда
              </h2>
              <div class="col-6 col-sm-6 col-md-4 members-unit">
                <div class="members-panel">
                  <div class="members-picture">
                    <img src="./img/IMG_2472_0.jpg?itok=Fyg_7Erv" alt="Фото члена команды" width="280" height="280" class="pic-adaptive" />
                  </div>
                  <div class="members-name">Сергей Синица</div>
                  <div class="members-function">Глава отдела веб-разработки, кандидат технологических наук, заместитель директора</div>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-4 members-unit">
                <div class="members-panel">
                  <div class="members-picture">
                    <img src="./img/IMG_2539_0.jpg?itok=UIjLIj5Z" alt="Фото члена команды" width="280" height="280" class="pic-adaptive" />
                  </div>
                  <div class="members-name">Роман Агабеков</div>
                  <div class="members-function">Глава отдела DevOPS, директор</div>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-4 members-unit">
                <div class="members-panel">
                  <div class="members-picture">
                    <img src="./img/IMG_2474_1.jpg?itok=wEUr4Wxc" alt="Фото члена команды" width="280" height="280" class="pic-adaptive" />
                  </div>
                  <div class="members-name">Алексей Синица</div>
                  <div class="members-function">Менеджер по поддержке сайтов</div>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-4 members-unit">
                <div class="members-panel">
                  <div class="members-picture">
                    <img src="./img/IMG_2522_0.jpg?itok=R9PN9U4d" alt="Фото члена команды" width="280" height="280" class="pic-adaptive" />
                  </div>
                  <div class="members-name">Дарья Бочкарева</div>
                  <div class="members-function">Глава отдела продвижения, контекстуальной рекламы и контентной поддержки сайтов</div>
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-4 members-unit">
                <div class="members-panel">
                  <div class="members-picture">
                    <img src="./img/IMG_9971_16.jpg?itok=rH-9-ZmI" alt="Фото члена команды" width="280" height="280" class="pic-adaptive" />
                  </div>
                  <div class="members-name">Ирина Торкунова</div>
                  <div class="members-function">Менеджер по работе с клиентами</div>
                </div>
              </div>
            </div>
            <div class="all-squad"><a href="">Посмотреть всю команду</a></div>
          </div>
        </div>
      </section>
    );
}

export default squad;