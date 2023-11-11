import React from 'react'
import './App.css';

import Advantages from './components/Advantages/Advantages';
import MainPage from './components/MainPage/MainPage';
import Posts from './components/Posts/Posts';
import Statistic from './components/Statistic/Statistic';

export const Wrapper = ({ children }) => {
    return (
        <div className="container mx-auto py-4 px-2 min-h-screen">
            { children }
        </div>
    )
}

export default function App() {
  return (
    <div className='p-0'>
      <MainPage />
      <Advantages/>
      <Statistic/>
      <Posts/>
    </div>
  )
}
