import styles from './SobreMim.module.css'


function SobreMim(){
    return (<>
        <h1 className={styles.sobremim}>Sobre Mim</h1>
        <div className={styles.container}>
        <p className={styles.sobre_mim_container}>Me chamo Gabriel tenho 18 anos,
         sou desenvolvedor de sistemas e estou focado nas tecnologias 
         voltadas ao Front-End. Sou um apaixonado por tecnologias e 
         movido á desafios. 
         Hoje já entendo tecnologias como NodeJS, Bootstrap, ReactJS etc.</p>
        </div>
        </>
    )

}

export default SobreMim