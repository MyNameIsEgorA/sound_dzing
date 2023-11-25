import React from 'react'
import './App.css';

import Advantages from './components/Advantages/Advantages';
import MainPage from './components/MainPage/MainPage';
import Posts from './components/Posts/Posts';
import Statistic from './components/Statistic/Statistic';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';


export default function App() {
  return (
    <div className='p-0'>
      <MainPage />
      <Advantages/>
      <Statistic/>
      <Posts/>
      <Comments/>
      <Footer/>
    </div>
  )
}
