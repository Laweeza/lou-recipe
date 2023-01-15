import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  VStack,
  Text,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { MdAdd } from 'react-icons/md';

export const AddRecipe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        leftIcon={<Icon as={MdAdd} />}
        colorScheme={'twitter'}
        w={'fit-content'}
        onClick={onOpen}
      >
        Add Recipe
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Add Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align='start'>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input placeholder='Enter recipe title' />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea placeholder='Enter description ' />
              </FormControl>

              <Text>Ingredients</Text>
              <Flex gap={3} align='center'>
                <IconButton icon={<Icon as={MdAdd} />} aria-label={''} size={'sm'} />
                <FormControl>
                  <Input placeholder='quantity' size='sm' />
                </FormControl>
                <FormControl>
                  <Input placeholder='name' size='sm' />
                </FormControl>
              </Flex>

              <Text>Directions</Text>
              <Flex gap={3} align='center'>
                <IconButton icon={<Icon as={MdAdd} />} aria-label={''} size={'sm'} />
                <FormControl>
                  <Input placeholder='order' size='sm' />
                </FormControl>
                <FormControl>
                  <Input placeholder='instructions' size='sm' />
                </FormControl>
              </Flex>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='twitter' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
