import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer class="footer" id='contact'>
    <div class="container">
        <div class="footer-content">
            <div>
                <span>
                    <h1>Обзор игр</h1>
                </span>
                <p>Мы занимаемся обзором любых игр!</p>
                <p>© 2024 Игры. Все права защищены.</p>
            </div>
            <div>
                <h2>Навигация по сайту</h2>
                <a href="#home">Главная</a>
                <a href="#games">Игры</a>
                <a href="#contact">Контакты</a>
            </div>
            <div>
                <h2>Контакты</h2>
                <a href="#contact">+7(000)000-00-00</a>
                <a href="#contact">xxxxxxxxxxxx@mail.ru</a>
                <div class="header-top-social">
                </div>
            </div>
        </div>
    </div>
</footer>
  );
};

export default Footer;
