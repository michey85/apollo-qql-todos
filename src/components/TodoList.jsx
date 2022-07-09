import { VStack } from '@chakra-ui/react'

import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = [];

  return (
    <VStack spacing={2} mt={4}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </VStack>
  );
};

export default TodoList;
