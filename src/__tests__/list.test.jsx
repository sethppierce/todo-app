import { screen, render } from '@testing-library/react';
import List from '../Components/List/List.jsx'
import '@testing-library/jest-dom';
import SettingsProvider, {SettingsContext} from '../Context/Settings/Settings.jsx';

const toggleComplete = jest.fn();

describe('List', () => {
  const items = [
    { id: 1, text: 'item 1', assignee: 'Alice', difficulty: 'Easy', complete: false },
    { id: 2, text: 'item 2', assignee: 'Bob', difficulty: 'Medium', complete: false },
    { id: 3, text: 'item 3', assignee: 'Charlie', difficulty: 'Hard', complete: false },
    { id: 4, text: 'item 4', assignee: 'Diane', difficulty: 'Easy', complete: false },
    { id: 5, text: 'item 5', assignee: 'Eve', difficulty: 'Medium', complete: true },
    { id: 6, text: 'item 6', assignee: 'Frank', difficulty: 'Hard', complete: false },
  ];

  test('renders the correct number of items based on the displayed value from the SettingsContext', () => {

    render(
    <SettingsProvider>
      <List items={items} toggleComplete={toggleComplete} /> 
    </SettingsProvider>);
    const renderedItems = screen.getAllByTestId('list-item');
    expect(renderedItems).toHaveLength(3);
  });

});