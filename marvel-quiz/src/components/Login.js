import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from './Firebase';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);

  const [error, setError] = useState('');

  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email, btn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .loginUser(email, password)
      .then((user) => {
        setEmail('');
        setPassword('');
        navigate('/welcome');
      })
      .catch((error) => {
        setError(
          error.message &&
            'Erreur de connexion. Veuillez vérifier votre email et votre mot de passe.'
        );
        setEmail('');
        setPassword('');
      });
  };

  return (
    <div className='signUpLoginBox'>
      <div className='slContainer'>
        <div className='formBoxLeftLogin'></div>
        <div className='formBoxRight'>
          <div className='formContent'>
            {error !== '' && <span>{error}</span>}

            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className='inputBox'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  autoComplete='off'
                  required
                />
                <label htmlFor='email'>Email</label>
              </div>

              <div className='inputBox'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                  autoComplete='off'
                  required
                />
                <label htmlFor='password'>Mot de passe</label>
              </div>
              {btn ? (
                <button>Connexion</button>
              ) : (
                <button disabled>Connexion</button>
              )}
            </form>
            <div className='linkContainer'>
              <Link className='simpleLink' to='/signup'>
                Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.
              </Link>
              <br />
              <Link className='simpleLink' to='/forgetpassword'>
                Mot de passe oublié ? Récupérez-le ici.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
