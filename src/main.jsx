import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import Content from './Content.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Tech from './Tech.jsx'
import Footer from './Footer.jsx'
import About from './About.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content/>
    <About/>
    <Tech/>
    <Projects/>
    <Contact/>
    <Footer/>
  </React.StrictMode>,
)
