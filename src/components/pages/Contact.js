import {MdPhone, MdMailOutline} from 'react-icons/md'
import styles from './Home.module.css'
function Contact() {
    return (
        <div className={styles.home_container}>
            <h1>Contato</h1>
            <div className={styles.div}>       
                <address>
                   <p> <MdMailOutline/> <strong>Email: gabrielfootze@gmail.com</strong> </p>
                   <br/>
                   <br/>
                   <br/>
                    <p>
                    <MdPhone/> <strong>Phone: +55 062 9 95396908</strong>   
                    </p>                   
                </address>  
            </div>
        </div>
    )
}

export default Contact