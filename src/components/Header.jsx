import Container from './Container';
import '../styles/header.css';

function Header() {
  return (
    <header className='header'>
      <Container>
        <h1 className='header-title'>Informações</h1>
        <img className='header-avatar' src="https://avatars.githubusercontent.com/u/100439353?v=4" alt="Avatar github, foto perfil." />
      </Container>
    </header>
  )
}

export default Header;