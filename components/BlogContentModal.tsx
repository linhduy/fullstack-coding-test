import React from "react";
import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import ArticleIF from "models/article";

export interface BlogContentModalI {
  isOpen: boolean,
  title: ArticleIF['title'],
  content: ArticleIF['content'],
  onClose: () => void,
}

const BlogContentModal: React.FC<BlogContentModalI> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  
  return <Modal size='xl' isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{title}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text as='p'>{content}</Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
};

export default BlogContentModal;
