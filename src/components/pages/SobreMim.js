import styles from './Home.module.css'
import {useState, useEffect} from 'react'

import Loading from '../layout/Loading'

function SobreMim(){
    const [removeLoading, setRemoveLoading] = useState(false)
    useEffect(() =>{
 
    },[])
    setTimeout(() => {
        setRemoveLoading(true)
    }, 1000)

   return (<>
        {!removeLoading && <Loading/>}
        <div className={styles.home_container}>
        <h1 >Sobre Mim</h1>
        <p >Me chamo Gabriel tenho 18 anos,
         sou desenvolvedor de sistemas e estou focado nas tecnologias 
         voltadas ao Front-End. Sou um apaixonado por tecnologias e 
         movido á desafios. 
         Hoje já entendo tecnologias como NodeJS, Bootstrap, ReactJS etc.</p>
        </div>
        </> )
   

}

export default SobreMim