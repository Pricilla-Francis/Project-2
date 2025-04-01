import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';
import Title from './Title';
import styles from '../Css/yourRecipes.module.css'
import Motto from './motto';



const Navbar = () => {
  const [loginCheck, setLoginCheck] = useState(false);
  
  const checkLogin = () => {
    if (auth.loggedIn()) {
      setLoginCheck(true);
    }
  };
 

 
  useEffect(() => {
    checkLogin();  
  }, [loginCheck]);  
  return (
    <div >
      <div className={styles.header}>
        <div >
         <div className={styles.title}>
           <Title/>
         </div>
        </div>
        <div className={styles.navLinks} >
          <ul className={styles.navLinks}>
            <li className={styles.navButtons}><Link to=''>Home</Link></li>
            <li className={styles.navButtons}><Link to=''>Recipes</Link></li>
            <li className={styles.navButtons}><Link to=''>About</Link></li>
            <li className={styles.navButtons}><Link to=''>MEAT THE TEAM</Link></li>
          </ul>
          <div >
        {
          !loginCheck ? (
            
            <button type='button'className={styles.logout}>
              <Link to='/login'>Login</Link>
            </button>
          ) : (
            <button  className={styles.logout} type='button' onClick={() => {
              auth.logout();  
            }}>Logout</button>
          )
        }
          </div>
        </div>
      </div>
      <div className={styles.motto}>
        <Motto/>
      </div>
    </div>
   
  )
}

export default Navbar;
