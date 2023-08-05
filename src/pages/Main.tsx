import React, { useState, useEffect } from 'react';
import "../scss/style.scss"
import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { Footer } from '../components/footer/Fotter'
import { Modal } from '../components/modal/ModalLogin';

function MainPage() {

    const [loginModal, setLoginModal] = useState(false)

    return (
        <div className="wrapper">
            <Header booleanState={setLoginModal} />
            {loginModal &&
                <Modal booleanState={setLoginModal} />
            }
            <Main />
            <Footer />
        </div>
    );
}

export default MainPage;
