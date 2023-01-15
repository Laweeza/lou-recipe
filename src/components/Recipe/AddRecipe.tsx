import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Add Recipe</ModalBody>

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
