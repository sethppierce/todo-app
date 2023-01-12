import React, { useContext, useState } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
import { When } from 'react-if';
import { Group, TextInput, Button} from '@mantine/core';
import { AuthContext } from '../../Context/Auth';


const Nav = (props) => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <div id='nav'>
      <Group id='group' position="apart">
        <div>
          <Link to="/">Home</Link>
          <Link to='/settings'>Settings</Link>
        </div>
        <When condition={!isLoggedIn}>
          <form onSubmit={handleLogin} id='login-form' >
            <TextInput
              placeholder="Username"
              size="lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              data-testid="login-username"
            />
            <TextInput
              placeholder="Password"
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="login-password"
            />
            <Button color="dark" size="lg" type='submit' data-testid="login-button">
              Login
            </Button>
          </form>
        </When>
        <When condition={isLoggedIn}>
          <Button color="red" size="lg" onClick={logout} id='logout' data-testid="logout-button">
            Log Out
          </Button>
        </When>
      </Group>
    </div>
  )
}

export default Nav