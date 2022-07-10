import { Checkbox, Text, CloseButton, HStack } from '@chakra-ui/react';

const TodoItem = ({ id, title, completed }) => {

  return (
    <HStack spacing={3}>
      <Checkbox
        isChecked={completed}
      />
      <Text>{title}</Text>
      <CloseButton />
    </HStack>
  );
};

export default TodoItem;