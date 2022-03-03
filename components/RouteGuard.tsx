import { AuthContext } from "firebase/context";
import { useRouter } from "next/router";
import React from "react";
import Link from 'next/link';
import { Box, Center, Link as ChakraLink, Spinner, Text } from "@chakra-ui/react";

export interface RouteGuardProps {
  isProtected: boolean,
}

export const RouteGuard: React.FC<RouteGuardProps> = ({
  children,
  isProtected,
}) => {
  const { user } = React.useContext(AuthContext);
  const { asPath } = useRouter();

  if (isProtected && !user) {
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
            <ChakraLink>Please signin</ChakraLink>
          </Link>
        </Center>
      </Box>
    )
  }

  return <>{children}</>
}