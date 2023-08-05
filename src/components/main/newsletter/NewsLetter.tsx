import React from 'react'

export const NewsLetter = () => {
  return (
    <section className="newsletter">
        <div className="container">
        <div className="newsletter__inner">
            <form className="newsletter__form" action="#">
            <input className="newsletter__mail newsletter__input input" type="email" name="login" placeholder="Ваша почта" autoComplete="off"/>
            <input className="newsletter__subscribe newsletter__input input" type="submit" name="send" value="Подписаться"/>
            </form>
        </div>
        <p className="newsletter__text">Подпишитесь на нашу рассылку, чтобы первыми получать новости о новых акциях и промокодах</p>
        </div>
    </section>
  )
}
