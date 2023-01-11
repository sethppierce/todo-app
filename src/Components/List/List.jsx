import React, { useContext, useState } from 'react';
import { Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings/Settings';
import './styles.scss'

const List = (props) => {
  const {displayed, hide} = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const {items} = props;
  const startIndex = (currentPage - 1) * displayed;
  const endIndex = startIndex + displayed;
  const itemsToShow = hide ? items.slice(startIndex, endIndex) : items.slice(startIndex, endIndex).filter((item) => !item.complete)
  const {toggleComplete} = props;
  return (
    <div id='list-contain'>
    {itemsToShow.map(item => (
    <div key={item.id} data-testid="list-item">
      <p>{item.text}</p>
      <p><small>Assigned to: {item.assignee}</small></p>
      <p><small>Difficulty: {item.difficulty}</small></p>
      <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
      <hr />
    </div>)
  )}
      {items.length < 3 ? null : <Pagination page={currentPage} onChange={setCurrentPage} total={Math.ceil(items.length / displayed)}/>}
    </div>
  )
}

export default List