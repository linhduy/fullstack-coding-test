import { AuthContext } from "firebase/context";
import { useRouter } from "next/router";
import React from "react";
import Link from 'next/link';
import { Box, Center, Heading, Link as ChakraLink, Spinner, Text } from "@chakra-ui/react";

export interface RouteGuardProps {
  isProtected: boolean,
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  isProtected,
}) => {
  const { user, userLoading, userError } = React.useContext(AuthContext);
  const { asPath } = useRouter();

  if(isProtected && userLoading) {
    return <Spinner />
  }

  if (isProtected && !userLoading && !user) {
    return (
      <Box bg='gray' w='100%' p={4} color='white'>
        <Center>
          <Text>This page is protected</Text>
        </Center>
        <Center>
          <Link href={{
            pathname: '/signin',
            query: { returnUrl: asPath }
          }}>
            <ChakraLink textDecoration='underline'>Please signin</ChakraLink>
          </Link>
        </Center>
      </Box>
    )
  }

  if(isProtected && userError) {
    return <Heading as="h4">User profile failed to load</Heading>
  }

  return <>{children}</>
}