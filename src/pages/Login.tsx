import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { auth, providers } from '../firebase';

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors, formState } = useForm<FormData>({
    mode: 'onChange',
  });
  const { isValid } = formState;

  const onSubmit = async ({ email, password }: FormData) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (user) history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const user = await auth.signInWithPopup(providers.google);
      if (user) history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGithub = async () => {
    try {
      const user = await auth.signInWithPopup(providers.github);
      if (user) history.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      {/* <div className="login-header">
        <h1 className="login-title">Login</h1>
      </div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <Input
              name="email"
              label="Email"
              register={register}
              required={true}
              type="text"
              autocomplete="off"
              className={errors.email && 'error'}
            />
            {errors.email && (
              <span className="error">This field is required</span>
            )}
          </div>
          <div className="form-group">
            <Input
              name="password"
              label="Password"
              register={register}
              required={true}
              type="password"
              className={errors.password && 'error'}
            />
            {errors.password && (
              <span className="error">This field is required</span>
            )}
          </div>
          <Button variant="primary" type="submit" disabled={!isValid}>
            Login
          </Button>
        </form>
        <span className="divide-or">or</span>
        <div className="login-secondary">
          <Button variant="secondary" onClick={() => signInWithGoogle()}>
            <FcGoogle />
            <span>Login with Google</span>
          </Button>
          <Button variant="secondary" onClick={() => signInWithGithub()}>
            <FaGithub />
            <span>Login with Github</span>
          </Button>
        </div>
      </div> */}
    </div>
  );
}
