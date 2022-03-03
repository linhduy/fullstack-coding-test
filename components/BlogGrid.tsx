import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

export interface BlogGridI {}

const BlogGrid: React.FC<BlogGridI> = ({ children }) => {

  return <SimpleGrid columns={{sm: 2, md: 3}} spacing={10}>
    {children}   
  </SimpleGrid>
};

export default BlogGrid;