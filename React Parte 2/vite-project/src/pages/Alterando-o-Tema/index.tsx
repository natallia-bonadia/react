import { useState } from 'react'
import Menu from '../../components/Menu'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

import './styles.css'

export default function AlterandoOTema() {
  const [theme, setTheme] = useState('light')
  const [text, setText] = useState('dark')
  const [users, setUsers] = useState('administrador')
  
  function clickButton() {
    changeTextButton()
    changeThemeButton()
  }

  function changeThemeButton() {
    const changeTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(changeTheme)
  }

  function changeTextButton() {
    const changeText = text === 'dark' ? 'light' : 'dark'
    setText(changeText)
  }

  function changeUsersButton() {
    const changeUsers = users === 'administrador' ? 'usuário' : 'administrador'
    setUsers(changeUsers)
  }

  return(
    <>
      <Menu>Alterando o Tema</Menu>

      <div id='container-theme'>
        <button className='theme-button' onClick={clickButton}>Alterar para o tema {text}</button>
        <div className={`header-menu + ${theme}`}>
          <Header authentication={users}/>
          <button className='login-button' onClick={changeUsersButton}>Você está logado como <strong>{users}</strong></button>
        </div>
        <Body className={`body-theme + ${theme}`} />
        <Footer className={`footer-theme + ${theme}`} />
      </div>
    </>
  )
}