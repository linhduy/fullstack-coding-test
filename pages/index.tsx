import { useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText, { DynamicTextRefObject } from "components/DynamicText";
import { Input } from "@chakra-ui/react";


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

      <main className={styles.main}>
        <DynamicText ref={dynamicTextRef} />
        <Input onChange={onChange} />
      </main>
    </div>
  );
};

export default Home;
