import React, { useContext, useState } from 'react';
import { Group, Pagination } from '@mantine/core';
import { SettingsContext } from '../../Context/Settings/Settings';
import './styles.scss'
import { CloseButton, Card, Button } from '@mantine/core';
import { AuthContext } from '../../Context/Auth';
import Auth from '../Auth';
import { When } from 'react-if';

const List = (props) => {
  const { displayed, hide } = useContext(SettingsContext);
  const { user } = useContext(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const { items } = props;
  const startIndex = (currentPage - 1) * displayed;
  const endIndex = startIndex + displayed;
  const itemsToShow = hide ? items.slice(startIndex, endIndex) : items.slice(startIndex, endIndex).filter((item) => !item.complete)
  const { toggleComplete, deleteItem } = props;
  return (
    <Auth capability='read'>
      <div id='list-contain'>
        {itemsToShow.map(item => (
          <Card id='list-card' p="lg" radius="md" shadow="sm" withBorder key={item.id} data-testid="list-item">
            <Card.Section>
              <Group position="apart" id='list-group'>
                <div id='list-assign'>
                  <Auth capability="update">
                    {!item.complete ? <Button className='list-button' color="green" radius="xl" size="md" compact onClick={() => toggleComplete(item.id)}>
                      Pending
                    </Button> : <Button className='list-button' color="red" radius="xl" size="md" compact onClick={() => toggleComplete(item.id)}>
                      Complete
                    </Button>}
                  </Auth>
                  <When condition={!user?.capabilities?.includes('update')}>
                    {!item.complete ? <Button className='list-button' color="green" radius="xl" size="md" compact >
                      Pending
                    </Button> : <Button className='list-button' color="red" radius="xl" size="md" compact >
                      Complete
                    </Button>}
                  </When>
                  <p>{item.assignee}</p>
                </div>
                <Auth capability='delete'>
                  <CloseButton onClick={() => deleteItem(item.id)} />
                </Auth>
              </Group>
            </Card.Section>

            <Card.Section withBorder>
              <Group position="apart" id='list-bottom'>
                <p>{item.text}</p>
                <p>Difficulty: {item.difficulty}</p>
              </Group>
            </Card.Section>
          </Card>)
        )}
        {items.length < 3 ? null : <Pagination page={currentPage} onChange={setCurrentPage} total={Math.ceil(items.length / displayed)} />}
      </div>
    </Auth>
  )
}

export default List

