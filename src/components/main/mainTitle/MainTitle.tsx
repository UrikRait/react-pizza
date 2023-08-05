import React from 'react'

export const MainTitle = () => {
  return (
    <div className="container">
        <p className="menu__title title">Меню</p>
        <div className="menu">
        <div className="menu__item">
            <img className="menu__img" src="./img/pepperoni.png" alt=""/>
            <h3 className="menu__name">Это тестовая карточка</h3>
            <p className="menu__description">Используйте ее как шаблон</p>
            <button className="menu__button">Добавить</button>
        </div>
        </div>
    </div>
  )
}
