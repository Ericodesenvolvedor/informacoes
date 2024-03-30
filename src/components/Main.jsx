import Card from "./Card";
import Container from "./Container";
import { GithubLogo, InstagramLogo, LinkedinLogo, MusicNote, Television } from '@phosphor-icons/react';
import '../styles/main.css';

function Main() {
  return(
    <main>
      <Container>
        <ul className="card-list">
          <Card 
            classText={"instagram"}
            Icon={InstagramLogo}
            title={"Instagram"}
            href={"https://www.instagram.com/ericodesenvolvedor/"}
            linkText={"@ericodesenvolvedor"}
          />
          
          <Card 
            classText={"linkedin"}
            Icon={LinkedinLogo}
            title={"Linkedin"}
            href={"https://www.instagram.com/ericodesenvolvedor/"}
            linkText={"Acessar linkedin"}
          />

          <Card 
            classText={"github"}
            Icon={GithubLogo}
            title={"Github"}
            href={"https://github.com/Ericodesenvolvedor"}
            linkText={"Ericodesenvolvedor"}
          />

          <Card 
            classText={"playlist"}
            Icon={MusicNote}
            title={"Músicas"}
            href={"https://open.spotify.com/playlist/5RiCVnap3IvIrJMlOEGHbg?si=496058177c154c5d"}
            linkText={"Acessar playlist"}
          />

          <Card 
            classText={"animes"}
            Icon={Television}
            title={"Animes"}
            href={"https://docs.google.com/spreadsheets/d/1Z0uzMqlxC8gaan6hYpGOozCnGLuygRZRup1UXy25SZo/edit?usp=sharing"}
            linkText={"Acessar animes"}
          />
        </ul>
      </Container>
    </main>
  )
}

export default Main;