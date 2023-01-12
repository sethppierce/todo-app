import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '../Context/Settings/Settings';
import AuthProvider, { AuthContext } from '../Context/Auth/';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} })),
    delete: jest.fn(() => Promise.resolve({ data: {} }))
  };
});

describe('Context Providers', () => {
  test('Settings Context provides initial state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {
            ({ displayed, hide, sortBy }) => (
              <>
                <h3 data-testid="displayed-test">test: {displayed}</h3>
                <h3 data-testid="hide-test">test: {String(hide)}</h3>
                <h3 data-testid="sortBy-test">test: {sortBy}</h3>
              </>
            )
          }
        </SettingsContext.Consumer>
      </SettingsProvider>
    );
  
    const display = screen.getByTestId('displayed-test');
    const hide = screen.getByTestId('hide-test');
    const sortBy = screen.getByTestId('sortBy-test');
    expect(display).toHaveTextContent('test: 3');
    expect(hide).toHaveTextContent('test: false');
    expect(sortBy).toHaveTextContent('test: difficulty');
  }); 
  test('Auth Context provides initial state', () => {
    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {
            ({ isLoggedIn, user, error }) => (
              <>
                <h3 data-testid="isLoggedIn-test">test: {String(isLoggedIn)}</h3>
                <h3 data-testid="user-test">test: {String(user)}</h3>
                <h3 data-testid="error-test">test: {String(error)}</h3>
              </>
            )
          }
        </AuthContext.Consumer>
      </AuthProvider>
    );
  
    const isLoggedIn = screen.getByTestId('isLoggedIn-test');
    const user = screen.getByTestId('user-test');
    const error = screen.getByTestId('error-test');
    expect(isLoggedIn).toHaveTextContent('test: false');
    expect(user).toHaveTextContent('test: [object Object]');
    expect(error).toHaveTextContent('test: null');
  });  
});