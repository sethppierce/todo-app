import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SettingsProvider, { SettingsContext } from '../Context/Settings/Settings.jsx';
import AuthProvider, {AuthContext} from '../Context/Auth/index.jsx';
import Nav from '../Components/nav/Nav.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Nav', () => {
  test('renders login form when not logged in', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Nav/>
        </BrowserRouter>
      </AuthProvider>
    )
    const username = screen.getByTestId('login-username')
    const password = screen.getByTestId('login-password')
    const loginButton = screen.getByTestId('login-button')
    expect(username).toBeInTheDocument()
    expect(password).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
  });
  test('renders logout button when logged in', () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Nav/>
        </BrowserRouter>
      </AuthProvider>
    )
    const username = screen.getByTestId('login-username')
    const password = screen.getByTestId('login-password')
    const loginButton = screen.getByTestId('login-button')
    fireEvent.change(username, {target: {value: 'admin'}})
    fireEvent.change(password, {target: {value: 'ADMIN'}})
    fireEvent.click(loginButton)  
    const logoutButton = screen.getByTestId('logout-button')
    expect(username).not.toBeInTheDocument()
    expect(password).not.toBeInTheDocument()
    expect(loginButton).not.toBeInTheDocument()
    expect(logoutButton).toBeInTheDocument()
  })
})