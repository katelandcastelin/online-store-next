import React from 'react';
import styles from './logInPage.module.css';

export default function LogInPage() {
  return (
    <div className={styles.main}>
      <div className={styles.formsContainer}>
        <div className={styles.logIn}>
          Log in Form
        </div>
        <div className={styles.signUp}>
          Sign up Form
        </div>
      </div>
    </div>
  )
}
