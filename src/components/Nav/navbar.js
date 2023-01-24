import './nav-style.css'; 

const nav = () =>{
    return (
    <div class="navbar-absolute">
    <div class="container-md">
      <nav class="navbar navbar-expand-md">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="navigation-item">
              <a class="nav-link" href="">ПОДДЕРЖКА DRUPAL</a>
            </li>
            <li class="navigation-item dropdown">
              <a class="nav-link dropdown-toggle" href="">АДМИНИСТРИРОВАНИЕ</a>
              <div class="dropdown-menu dropdown-menu-1">
                <a class="dropdown-item" href="">МИГРАЦИЯ</a>
                <a class="dropdown-item" href="">БЭКАПЫ</a>
                <a class="dropdown-item" href="">АУДИТ БЕЗОПАСНОСТИ</a>
                <a class="dropdown-item" href="">ОПТИМИЗАЦИЯ СКОРОСТИ</a>
                <a class="dropdown-item" href="">ПЕРЕЕЗД НА HTTPS</a>
              </div>
            </li>
            <li class="navigation-item">
              <a class="nav-link" href="">ПРОДВИЖЕНИЕ</a>
            </li>
            <li class="navigation-item">
              <a class="nav-link" href="">РЕКЛАМА</a>
            </li>
            <li class="navigation-item dropdown">
              <a class="nav-link dropdown-toggle" href="">О НАС</a>
              <div class="dropdown-menu dropdown-menu-2">
                <a class="dropdown-item" href="">КОМАНДА</a>
                <a class="dropdown-item" href="">DRUPALGIVE</a>
                <a class="dropdown-item" href="">БЛОГ</a>
                <a class="dropdown-item" href="">КУРСЫ DRUPAL</a>
              </div>
            </li>
            <li class="navigation-item">
              <a class="nav-link" href="">ПРОЕКТЫ</a>
            </li>
            <li class="navigation-item">
              <a class="nav-link" href="">КОНТАКТЫ</a>
            </li>
          </ul>
        </div>
        <a class="navbar-brand" href="">
          <img class="nav-icon" src="./img/drupal-coder.svg" alt="navigation" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  </div>
  );
}

export default nav;