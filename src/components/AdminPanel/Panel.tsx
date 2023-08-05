import React, { useEffect, useState } from 'react'
import { ModalAdmin } from '../AdminModal/ModalAdmin'


export const Panel = () => {
    const [modal, setModal] = useState(false)
    const [toggleMenus, setToggleMenus] = useState(false)

    const [card, setCard] = useState({
        img: '',
        name: '',
        weight: '',
        size: '',
        canCreate: false
    })

    function openModalHandler() {
        setModal(prev => !prev)
    }
    function getContent() {
        let pizzInfo = {
            pizzImg: card.img,
            pizzName: card.name,
            pizzWeight: card.weight,
            pizzSize: card.size
        }
        return pizzInfo
    }
    function createCard() {
        const obj = getContent()
        setCard(prev => ({
            ...prev,
            img: '',
            name: '',
            weight: '',
            size: '',
            canCreate: false
        }))
        document.querySelector('.products__item')?.insertAdjacentHTML('afterend',
            `
            <form action="" method="post" encType="multipart/form-data">
                <div class="products__item">
                    <img class="products__img" src=${obj.pizzImg} alt="" />
                    <p class="menu__name">${obj.pizzName}</p>
                    <p class="menu__description">${obj.pizzSize} cм. / ${obj.pizzWeight} г. </p>
                    <button class="products__button">Загрузить пиццу</button>
                </div>
            </form>
        `)
    }

    if (card.canCreate) createCard()
    return (
        <>
            <div className="panel">
                <div className="panel__content">
                    <a
                        className="panel__link" href="#" id="orders__btn"
                        onClick={() => setToggleMenus(false)}
                    >Заказы</a>
                    <a
                        className="panel__link" href="#" id="product__btn"
                        onClick={() => setToggleMenus(true)}
                    >Добавить товар</a>
                </div>
            </div>
            <div
                className={`orders ${toggleMenus ? 'hidden' : ' '}`}
            >
                <div className="orders__items">
                    <div className="order">
                        <div className="order__pizza">
                            <img className="order__png" src="img/Vetcnina_grib.png" alt="" />
                            <p className="order__pizza-name">Ветчина и грибы</p>
                        </div>
                        <div className="order__info">
                            <div className="order__text">
                                <p className="order__address order__paragraph">Ул.Пушкина Дом 2</p>
                                <p className="order__phone order__paragraph">+7(999)999-99-99</p>
                                <div className="order__name order__paragraph">Константин Сергей</div>
                                <button className="order__button">Завершить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`products ${!toggleMenus ? 'hidden' : ' '}`}
            >
                <div className="products__items">
                    <div
                        className="products__addBtn products__item"
                        onClick={openModalHandler}
                    >
                        <span className="products__plus">
                            <img className="products__svg" src="img/plus.svg" alt="plus" />
                        </span>
                    </div>

                </div>
            </div>
            <ModalAdmin setCard={setCard} bool={modal} booleanState={setModal} />
        </>

    )
}
