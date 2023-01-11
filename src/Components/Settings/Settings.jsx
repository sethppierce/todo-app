import React, { useContext, useState } from 'react';
import './styles.scss'
import { SettingsContext } from '../../Context/Settings/Settings';
import { Switch, NumberInput, TextInput, Button, Card} from '@mantine/core';

const Settings = (props) => {

  const { displayed, hide, sortBy, setHide, setDisplayed, setSortBy } = useContext(SettingsContext);
  const [value, setValue] = useState('');
  const [updated, setUpdated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setSortBy(value);
    if(value === '') setSortBy('difficulty');
    let pref = {hide, displayed, sortBy}
    localStorage.setItem('pref', JSON.stringify(pref))
    setUpdated(true)
  }
  return (
    <>
      <header id='settings-header'>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        <h1>Manage Settings</h1>
      </header>
      <div id='settings-container'>
        <Card p="lg" radius="md" withBorder id='updateCard'>
          <form onSubmit={handleSubmit} >
            <h2>Update Settings</h2>
            <label>
              <Switch data-testid="settings-checked" label="Show Completed Todos" size="md" checked={hide} onChange={() => setHide(!hide)} />
            </label>
            <label>
              <NumberInput
                data-testid="settings-number"
                placeholder="Items Per Page"
                label="Items Per Page"
                size="md"
                defaultValue={displayed}
                value={displayed}
                onChange={(val) => setDisplayed(val)}
                withAsterisk
              />
            </label>
            <label>
              <TextInput
                data-testid="settings-text"
                placeholder="difficulty"
                label="Sort Keyword"
                size="md"
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                withAsterisk
              />
            </label>
            <Button size="md" type="submit" data-testid="settings-button">
              Show New Settings
            </Button>
          </form>

        </Card>
        {updated ? <Card p="lg" radius="md" withBorder id='settingsCard' data-testid="settings-card">
          <h2>Updated Settings</h2>
          <p>{hide ? 'Show Completed Todos' : `Don't Show Completed Todos`}</p>
          <p>Items Per Page: {displayed}</p>
          <p>Sort KeyWord: {sortBy}</p>
        </Card> : null}
      </div>
    </>
  )
}

export default Settings