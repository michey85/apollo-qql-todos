import { useState } from 'react';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

import { Flex } from '@chakra-ui/react';


function App() {
  const [text, setText] = useState('');

  const handleAction = () => {
    if (text.trim().length) {
      setText('');
    }
  }

  return (
    <div className='App'>
      <AddTodo
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
      <Flex justifyContent={'center'} borderTop={'2px'} mt="5">
        <b>Total todos:</b>
      </Flex>
    </div>
  );
}

export default App;