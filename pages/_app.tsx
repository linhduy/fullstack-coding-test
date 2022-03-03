import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { AuthProvider } from '../firebase/context';
import { RouteGuard } from "components/RouteGuard";

const MyApp = ({ Component, pageProps }) => {  
  return (
    <ChakraProvider>
      <AuthProvider>
        <RouteGuard isProtected={Component.protected}>
          <Component {...pageProps} />
        </RouteGuard>
      </AuthProvider>
    </ChakraProvider>
  )
};

export default MyApp;