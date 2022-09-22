import {Link} from 'react-router-dom';
import Container from './Container';
import styles from './Navbar.module.css';
import logo0 from '../../img/logo02.png'

function Navbar() {
    return(<>
        <div className='styles.menu_section on'>
          <div className={styles.menu_toggle}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            </div>  
        
        <nav className={styles.navbar}>
           <Container>
            <Link to='/'>
                <img className={styles.img} src={logo0} alt='Dev0'/>
            </Link>
            <ul className={styles.list}>
                <li  className={styles.item}>
                    <Link to='/'>Home</Link>
                 </li>

                 <li  className={styles.item}>
                    <Link to='/projects'>Projetos</Link>
                 </li>

                <li className={styles.item}>
                 <Link to='/sobremim'>Sobre Mim</Link>
                 </li>

                 <li className={styles.item}>
                 <Link to='/contact'>Contato</Link>
                 </li>

                 <li className={styles.item}>
                 <Link to='/tecnologias'>Tecnologias</Link>
                 </li>
 
            </ul>
           </Container>
        </nav>
        </div>
        </>
    )
}

export default Navbar