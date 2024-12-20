import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header id='home'>
        <nav>
            <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#games">Игры</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </nav>
        <div className='title'>
            <h1 className='title-name'>DIGITAL</h1>
        </div>
        
    </header>
  );
};

export default Header;
