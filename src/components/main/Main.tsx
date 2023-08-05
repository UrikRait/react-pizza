import React from 'react'
import { MainTitle } from './mainTitle/MainTitle'
import { Feedback } from './feedback/Feedback'
import { NewsLetter } from './newsletter/NewsLetter'
export const Main = () => {
  return (
    <main className="main">
        <MainTitle/>
        <Feedback/>
        <NewsLetter/>
    </main>
  )
}
