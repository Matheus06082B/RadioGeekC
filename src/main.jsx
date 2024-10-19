import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Noticias from './components/Noticias'
import TopMusicComponents from './components/TopMusicComponents'
import TopMusicSection from './components/TopMusicSection'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <HeroSection/>
    <Noticias/>
    <TopMusicComponents/>
    <TopMusicSection/>
  </StrictMode>,
)
