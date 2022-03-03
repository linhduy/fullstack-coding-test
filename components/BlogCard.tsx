import React from "react";
import { Box, Heading, Image, useDisclosure, } from "@chakra-ui/react";
import BlogContentModal from "./BlogContentModal";
import ArticleIF from "models/article";

const BlogCard: React.FC<ArticleIF> = ({
  imageUrl,
  imageAlt,
  title,
  content,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  }

  return <Box
    maxW='sm'
    overflow='hidden'
    cursor='pointer'
    as="article"
    onClick={handleClick}
  >
    <Image src={imageUrl} alt={imageAlt} borderRadius='sm' />
    <Heading
      as='h4'
      size='md'
      fontWeight='semibold'
      noOfLines={[1,2,2]}
      pt={10}
      title={title}>
      {title}
    </Heading>
    <BlogContentModal
      isOpen={isOpen}
      title={title}
      content={content}
      onClose={onClose}/>
  </Box>
};

export default BlogCard;
