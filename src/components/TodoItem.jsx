import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';

const TodoItem = ({ id, text, completed }) => {

  return (
    <HStack spacing={3}>
      <Checkbox
        checked={completed}
      />
      <Text>{text}</Text>
      <CloseButton />
    </HStack>
  );
};

export default TodoItem;