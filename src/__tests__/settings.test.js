import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from '../Context/Settings/Settings';

describe('Settings Context', () => {
  test('provides initial state', () => {
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
    expect(hide).toHaveTextContent('test: true');
    expect(sortBy).toHaveTextContent('test: difficulty');
  });  
});