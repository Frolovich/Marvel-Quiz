import React, { useState, Fragment, useContext, useEffect } from 'react';
import { FirebaseContext } from './Firebase';
import { getDoc } from 'firebase/firestore';
import Loader from './Loader';
import Logout from './Logout';
import Quiz from './Quiz';
import { useNavigate } from 'react-router-dom';

const Welcome = (props) => {
  const navigate = useNavigate();
  const firebase = useContext(FirebaseContext);
  
  const [userSession, setUserSession] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : navigate("/");
    });

    if (!!userSession) {
      getDoc(firebase.user(userSession.uid))
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      listener();
    };
  }, [firebase, navigate, userSession]);
// }, [userSession]);
  

  return userSession === null ? (
    <Loader loadingMsg={'Authentification...'} styling={{ textAlign: 'center', color: '#FFFFF' }} />

  ) : (
    <Fragment className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz userData={userData} />
      </div>
    </Fragment>
  );
};

export default Welcome;
