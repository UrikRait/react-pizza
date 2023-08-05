import React from 'react'

export const Feedback = () => {
  return (
    <section className="feedback">
        <div className="container">
        <div className="feedback__title title">Контакты</div>
        <div className="feedback__contacts">
            <div className="feedback__item">
            <p className="feedback__info">Номер телефона:</p>
            <div className="feedback__flex">
                <img className="feedback__icon" src="./img/phone2.png" alt="phone"/>
                <a className="feedback__text" href="tel:+79674913808">+7(967)491-38-08</a>
            </div>
            </div>
            <div className="feedback__item">
            <p className="feedback__info">Наша почта:</p>
            <div className="feedback__flex">
                <img className="feedback__icon" src="./img/mail.png" alt="phone"/>
                <p className="feedback__text">pizza@gmail.com</p>
            </div>
            </div>
            <div className="feedback__item">
            <p className="feedback__info">Мы находимся тут:</p>
            <div className="feedback__flex">
                <img className="feedback__icon" src="./img/location.png" alt="phone"/>
                <div className="feedback__infobox">
                <p className="feedback__text feedback__subtext">Район номер 1, улица номер 1, <br/>дом номер 1</p>
                <p className="feedback__text feedback__subtext">Район номер 2, улица номер 2, <br/>дом номер 2</p>
                </div>
            </div>
            </div>
        </div>
        <img className="feedback__bg" src="./img/contacts__bg.png" alt=""/>
        </div>
    </section>
  )
}
