import React from 'react'
import { Imodal } from '../../common/Imodal'
export const Header = ({booleanState}:Imodal) => {
    function loginHandler() {
        booleanState(true)
    }
  return (
    <header className="header">
        <div className="container">
        <div className="header__inner">
            <nav className="header__nav">
            <a className="header__logo logo" href="#">
                <img className="logo__img icon" src="./img/logo.svg " alt="logo"/>
                <h3 className="logo__text">PIZZA</h3>
            </a>
            <div className="header__contacts contacts">
                <img className="contacts__img icon" src="img/busket.svg" alt="busket"/>
                <img className="contacts__img icon" src="img/phone.svg" alt="phone"/>
                <a className="contacts__call" href="tel:+79674913808">+7(967) 491 38-08</a>
                <div onClick={loginHandler}  className="header__login">
                    <img src="./img/login.svg" alt="login" />
                </div>
            </div>
            </nav>
            <div className="header__info">
            <h1 className="header__title">PI<span className="header__title-color">ZZ</span>A</h1>
            <p className="header__text">Большой выбор пицц на любой вкус. <br/>Заказывайте скорее!</p>
            </div>
            <div className="header__benefits">
            <div className="header__item">
                <img className="benefits__icon icon" src="./img/clock.png" alt="clock"/>
                <p className="header__item-text">Круглосуточная<br/> работа</p>
            </div>
            <div className="header__item">
                <img className="benefits__icon icon" src="./img/fast-deliviry.png" alt="delivery"/>
                <p className="header__item-text">Быстрая<br/> доставка</p>
            </div>
            <div className="header__item">
                <img className="benefits__icon icon" src="./img/Cheif.png" alt="cheif"/>
                <p className="header__item-text">Опытные<br/> повара</p>
            </div>
            </div>
            <img className="header__pizza" src="./img/pizza.png" alt="pizza-bg" draggable="false"/>
        </div>
        </div>
  </header>
  )
}
