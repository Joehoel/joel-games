import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { auth, providers } from '../firebase';

interface FormData {
  email: string;
  password: string;
}
export function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm<FormData>();

  const onSubmit = async ({ email, password }: FormData) => {
    auth.signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async () => {
    const user = await auth.signInWithPopup(providers.google);
    if (user) history.push('/');
  };

  const signInWithGithub = async () => {
    const user = await auth.signInWithPopup(providers.github);
    if (user) history.push('/');
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Input
              name="email"
              label="Email"
              register={register}
              required={true}
              type="email"
            />
          </div>
          <div className="form-group">
            <Input
              name="password"
              label="Password"
              register={register}
              required={true}
              type="password"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            // disabled={formState.isValid}
          >
            Login
          </button>
        </form>
        <span className="divide-or">or</span>
        <Button variant="secondary" onClick={() => signInWithGoogle()}>
          <img src="" alt="google-logo" />
          Login with Google
        </Button>
        <Button variant="secondary" onClick={() => signInWithGithub()}>
          <img src="" alt="github-logo" />
          Login with Github
        </Button>
      </div>
    </div>
  );
}
