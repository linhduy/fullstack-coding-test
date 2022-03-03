import { useRef } from "react";
import { auth } from '../firebase/firebaseApp';
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText, { DynamicTextRefObject } from "components/DynamicText";
import { Button, Input } from "@chakra-ui/react";

const Home = () => {
  const dynamicTextRef = useRef<DynamicTextRefObject>(null);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dynamicTextRef?.current?.changeValue?.(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {/* temporarily use for test */}
        <Button colorScheme='blue' float="right" onClick={() => auth.signOut()}>Signout</Button>
      </header>
      <main className={styles.main}>
        <DynamicText ref={dynamicTextRef} />
        <Input onChange={onChange} />        
      </main>
    </div>
  );
};

Home.protected = true;

export default Home;
