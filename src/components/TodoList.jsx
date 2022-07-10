import { VStack } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';
import { useQuery, useMutation } from '@apollo/client'

import { ALL_TODO, UPDATE_TODO, DELETE_TODO } from '../apollo/todos';
import TodoItem from './TodoItem';
import TotalCount from './TotalCount';

const TodoList = () => {
  const { loading, error, data } = useQuery(ALL_TODO);
  const [toggleTodo, {error: updateError }] = useMutation(UPDATE_TODO);
  const [removeTodo, {error: removeError}] = useMutation(DELETE_TODO, {
    update(cache, { data: { removeTodo } }) {
      cache.modify({
        fields: {
          allTodos(currentTodos = []) {
            return currentTodos.filter(todo => todo.__ref !== `Todo:${removeTodo.id}`)
          }
        }
      })
    }
  });

  if (loading) {
    return <Spinner />
  }

  if (error || updateError || removeError) {
    return <h2>Error...</h2>
  }

  return (
    <>
    <VStack spacing={2} mt={4}>
      {data.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onToggle={toggleTodo}
          onDelete={removeTodo}
          {...todo}
        />
      ))}
    </VStack>
    <TotalCount />
    </>
  );
};

export default TodoList;
