import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { TextInput, Card, Slider, Button } from '@mantine/core';
import { v4 as uuid } from 'uuid';
import List from '../List/List';
import './styles.scss'
import Auth from '../Auth/index.jsx';

const ToDo = (props) => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { setIncomplete } = props;
  const { incomplete } = props

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  return (
    <div id='todo-container'>
      <Auth capability='create'>
        <Card p="lg" radius="md" withBorder id='todoCard'>
          <form onSubmit={handleSubmit}>

            <h2>Add To Do Item</h2>

            <label>
              <TextInput
                placeholder="Item Details"
                label="To Do Item"
                name="text"
                size="md"
                onChange={handleChange}
                withAsterisk
              />
            </label>

            <label>
              <TextInput
                placeholder="Asignee Name"
                label="Assigned To"
                name="assignee"
                size="md"
                onChange={handleChange}
                withAsterisk
              />
            </label>

            <label>
              <span id='slider-label'>Difficulty</span>
              <Slider onChange={handleChange} defaultValue={defaultValues.difficulty} type="range" min={1} max={5} name="difficulty" />
            </label>

            <label>
              <Button size="md" type="submit">
                Add Item
              </Button>
            </label>
          </form>
        </Card>

      </Auth>

      <List items={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />

    </div>
  );
};

export default ToDo;
