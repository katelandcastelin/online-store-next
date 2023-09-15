'use client';
import React from 'react';
import styles from './logInPage.module.css';
import styled from 'styled-components';

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
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
            <p className={styles.formHeader}>Log in</p>
            <Label>Username</Label>
            <Input type="username" placeholder="Enter Username" name="uname" required />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" name="pwd" required />
          </form>
          <SubmitButton type="submit" value="Log in" />
        </div>

        <div className={styles.signUp}>
          <form className={styles.form}>
            <p className={styles.formHeader}>Sign me up</p>
            <Label>Username</Label>
            <Input type="username" placeholder="Enter Username" name="uname" required />
            <Label>Email</Label>
            <Input type="email" placeholder="Enter email" name="email" required />
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" name="pwd" required />
            <Label>Confirm password</Label>
            <Input type="confirm password" placeholder="Confirm Password" name="pwd" required />
          </form>
          <SubmitButton type="submit" value="Sign up" />
        </div>
      </div>
    </div>
  )
}
