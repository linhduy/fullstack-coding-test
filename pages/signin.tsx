import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '../firebase/context';
import firebase, { auth } from '../firebase/firebaseApp';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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
    signInSuccessUrl: returnUrl,
  })

  return (
    <StyledFirebaseAuth uiConfig={uiConfig(firebase)} firebaseAuth={auth} />
  )
};

export default SignIn;