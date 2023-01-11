import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Settings from '../Components/Settings/Settings'
import SettingsProvider, { SettingsContext } from '../Context/Settings/Settings.jsx';


describe('List', () => {
  test('it should display the current settings', () => {
    render(
      <SettingsProvider>
        <Settings />
      </SettingsProvider>
    )


    expect(screen.getByTestId('settings-checked')).not.toBeChecked()
    expect(screen.getByTestId('settings-number')).toHaveValue('3')
    expect(screen.getByTestId('settings-text')).toHaveValue('')
  })

  test('it should update the settings when the form is submitted', () => {
    render(
      <SettingsProvider>
        <Settings />
      </SettingsProvider>
    )

    const hideCheckbox = screen.getByTestId('settings-checked')
    const displayInput = screen.getByTestId('settings-number')
    const sortInput = screen.getByTestId('settings-text')
    const submitButton = screen.getByTestId('settings-button')

    fireEvent.click(hideCheckbox)
    fireEvent.change(displayInput, { target: { value: 10 } })
    fireEvent.change(sortInput, { target: { value: 'priority' } })
    fireEvent.click(submitButton)

    expect(screen.getByTestId('settings-checked')).toBeChecked()
    expect(screen.getByTestId('settings-number')).toHaveValue('10')
    expect(screen.getByTestId('settings-text')).toHaveValue('priority')
  });
  test(`it shouldn't display the updated settings card when loaded`, () => {
    render(
      <SettingsProvider>
        <Settings />
      </SettingsProvider>
    )

    const settingsCard = screen.queryByTestId('settings-card')
    
    expect(settingsCard).toBeNull()
  });
  test(`it should display the updated settings card after submit`, () => {
    render(
      <SettingsProvider>
        <Settings />
      </SettingsProvider>
    )

    const submitButton = screen.getByTestId('settings-button')
    fireEvent.click(submitButton)
    const settingsCard = screen.getByTestId('settings-card')


    expect(settingsCard).toBeInTheDocument()
  });
});