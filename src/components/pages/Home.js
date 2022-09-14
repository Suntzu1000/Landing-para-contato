import styles from './Home.module.css'
import imagem from '../../img/img-de-home.png'
import LinkButton from '../layout/LinkButton'


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo (a) ao <span>meu perfil</span></h1>
            <p>Meu perfil será onde e como você poderá entrar em contato comigo, e eu proporcionar o melhor trabalho possível!</p>
            <LinkButton to='/sobremim' text='Mais Sobre Mim'/>
            <img src={imagem} alt='Imagem' ></img>
        </section>
    )
}

export default Home