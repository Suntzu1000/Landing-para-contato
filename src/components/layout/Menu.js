import styles from './Navbar.module.css'

function Menu(){


    return(
        <>
             <div className='menu_section on'>
          <div className={styles.menu_toggle}>
            <div className={styles.one}></div>
            <div className={styles.two}></div>
            <div className={styles.three}></div>
            </div>  
        </div>
        </>
    )
}

export default Menu