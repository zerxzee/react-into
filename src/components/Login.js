import { useState } from 'react';
import { useHistory } from 'react-router-dom'

export const Login = () => {
  const history = useHistory()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please enter your login credentials');
      return;
    }

    if (username === 'zerxzee' && password === 'admin') {
      setUsername('');
      setPassword('');
      history.push('/home')
    } else {
      alert('Incorrect credentials. Please try again.');
    }

  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <h3>Login</h3>
      <div className='form-control'>
        <label>Username</label>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Password</label>
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input type='submit' value='Login' className='btn btn-block'/>
    </form>
  );
};
