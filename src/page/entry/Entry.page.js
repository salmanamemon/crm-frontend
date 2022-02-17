import React, {useState} from 'react';
import './Entry.style.css';
import { Card } from 'react-bootstrap'
import LoginForm  from '../../components/login/Login.comp';
import PasswordReset from '../../components/password-reset/PasswordReset.comp';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FrmLoad, setFrmLoad] = useState('login');

  const handleOnChange = e => {
    const {name, value} = e.target
    console.log(name, value);
    switch(name){
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!email || !password){
      return alert('fill up all the fields');
    }

    //TODO call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if(!email){
      return alert('Email address is required');
    }

    //TODO call api to submit the form
    console.log(email);
  };

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType);
  };
  return (
    <div className="entry-page bg-info">
        <Card className="form-box" >
          {FrmLoad === 'login' && ( 
            <LoginForm 
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              password={password}
            />
          )}
          {FrmLoad === 'reset' && ( 
            <PasswordReset 
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
            />
          )}
        </Card>
    </div>
  )
}

export default Entry