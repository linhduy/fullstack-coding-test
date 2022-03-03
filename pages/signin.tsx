import { useContext, useEffect } from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/context';
import firebase, { auth } from '../firebase/firebaseApp';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styles from '../styles/Signin.module.css';

const SignIn = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const returnUrl = router.query.returnUrl as string || '/';

  useEffect(() => {
    if(user) {
      const returnUrl = router.query.returnUrl as string || '/';
      router.push({pathname: returnUrl});
    }
  }, [user])
  
  const uiConfig = (firebase) => ({
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  })

  return <div className={styles.container}>
  <Head>
    <title>Coding Test Signin Page</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
    <StyledFirebaseAuth uiConfig={uiConfig(firebase)} firebaseAuth={auth} />
  </main>
</div>
};

export default SignIn;