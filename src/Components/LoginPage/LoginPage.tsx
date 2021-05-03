import React from 'react';
import googleimage from '../../Assets/googleImage.png'
import githubimage from '../../Assets/githubImage.png'
import twitterimage from '../../Assets/twitterImage.png'
import styles from './LoginPage.module.css';

function LoginPage() {
    const googleLogin = ()=>{
        window.open('http://localhost:4000/auth/google','_self');
    }
    
    const githubLogin = ()=>{
        window.open('http://localhost:4000/auth/github','_self');
    }

    const twitterLogin = ()=>{
        // window.open('http://localhost:4000/auth/google','_self');
    }
    return (
        <div className={styles.loginPage}>
           <div className={styles.loginForm}>
           <h1>Login</h1> 
           <div className={styles.googleContainer} onClick={googleLogin}>
               <img src={googleimage} alt="Google Icon"/>
               <p>Login With Google</p>
           </div>

           <div className={`${styles.googleContainer} ${styles.githubContainer}`} onClick={githubLogin}>
               <img src={githubimage} alt="Github Icon"/>
               <p>Login With Github</p>
           </div>

           {/* <div className={`${styles.googleContainer} ${styles.twitterContainer}`} onClick={twitterLogin}>
               <img src={twitterimage} alt="Twitter Icon"/>
               <p>Login With Twitter</p>
           </div> */}
           </div>
        </div>
    )
}

export default LoginPage
