import React, {useState} from 'react';
import './Entry.style.css';
import { Card } from 'react-bootstrap'
import LoginForm  from '../../components/login/Login.comp';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      alert('fill up all the fields');
    }
  };
  return (
    <div className="entry-page bg-info">
        <Card className="form-box" >
            <LoginForm 
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              email={email}
              password={password}
            />
        </Card>   
    </div>
  )
}

export default Entry