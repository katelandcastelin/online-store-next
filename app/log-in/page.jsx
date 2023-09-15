'use client';
import React from 'react';
import styles from './logInPage.module.css';
import styled from 'styled-components';

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const SubmitButton = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
`;

export default function LogInPage() {
  return (
    <div className={styles.main}>
      <div className={styles.formsContainer}>
        <div className={styles.logIn}>
          <form className={styles.form}>
            Log in
            <label>Username</label>
            <Input type="username" placeholder="Enter Username" name="uname" required />
            <label>Password</label>
            <Input type="password" placeholder="Enter Password" name="pwd" required />
            {/* <SubmitButton type="submit" value="Log in" /> */}
          </form>
          <SubmitButton type="submit" value="Log in" />
        </div>

        <div className={styles.signUp}>
          <form className={styles.form}>
            Sign me up
          </form>
        </div>
      </div>
    </div>
  )
}
