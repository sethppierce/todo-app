import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { TextInput, Card, Slider, Button } from '@mantine/core';
import List from '../List/List';
import './styles.scss'
import Auth from '../Auth/index.jsx';
import axios from 'axios';

const ToDo = (props) => {

  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);
  const { setIncomplete } = props;
  const { incomplete } = props

  async function addItem(item) {
    item.complete = false;
    try {
      const response = await axios.post('https://api-js401.herokuapp.com/api/v1/todo', item);
      console.log(response);
      setList([...list, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteItem(itemId) {
    try {
      await axios.delete(`https://api-js401.herokuapp.com/api/v1/todo/${itemId}`);
      setList(list.filter(item => item._id !== itemId));
    } catch (error) {
      console.error(error);
    }
  }

  async function toggleComplete(id) {
    try {
      let item = list.find(item => item._id === id)
      item.complete = !item.complete
      const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/todo/${id}`, item );
      const items = list.map(item => {
        if (item._id === id) {
          item.complete = response.data.results.complete;
        }
        return item;
      });
      setList(items);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(list)
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [list]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
        console.log(response.data.results)
        setList(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
