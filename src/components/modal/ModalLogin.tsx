import React,{useState} from 'react'
import { Imodal } from '../../common/Imodal'


export const Modal = ({booleanState}:Imodal) => {
    const [isLoggin, setIsLoggin] = useState(true)

    function closeModal(){
        booleanState(false)
    }
  return (
    <div onClick={closeModal} className="popup__index">
        <div className="popup__box" onClick={e => e.stopPropagation()}>
            { isLoggin &&
            <div className="popup__login">
                <img className="chease" src="./img/wave.svg" alt=""/>
                <div className="popup__flex">
                <div className="input__box">
                    <input className="input__login" type="text" placeholder="Ваш Логин или Email"/>
                </div>
                <div className="input_box">
                    <input className="input__login-password" type="password" placeholder="Пароль"/>
                </div>
                <button className="input__submit" type="submit">Войти</button>
                <p onClick={() => setIsLoggin(false)} className="notRegistered toggleBtn">Еще не зарегистрированы?</p>
                </div>
            </div>
            }
            { !isLoggin &&
                <div className="popup__register">
                    <img className="chease" src="./img/wave (1).svg" alt=""/>
                    <div className="popup__flex">
                    <div className="input__box">
                        <input className="input__login" type="email" placeholder="Ваш Email"/>
                    </div>
                    <div className="input__box">
                        <input className="input__login" type="text" placeholder="Ваш Логин"/>
                    </div>
                    <div className="input_box">
                        <input className="input__login-password" type="password" placeholder="Пароль"/>
                    </div>
                    <button className="input__submit" type="submit">Зарегистрировать</button>
                    <p onClick={() => setIsLoggin(true)} className="haveAcc toggleBtn">Уже есть аккаунт</p>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}
