/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import localStore from 'store';
import cn from 'classnames';
import { actions } from '../../slices';
import loginSchema from '../../validate';
import './loginForm.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandle = (values, { resetForm }) => {
    dispatch(actions.login());
    resetForm();
    localStore.set('isAuth', true);
    history.push('/main');
  };
  const getInputClasses = (message) => cn({
    'form-field': true,
    'form-field--invalid': !!message,
  });
  const getLabelClasses = (message) => cn({
    'form-label': true,
    'form-label--invalid': !!message,
  });

  return (
    <Formik
      validationSchema={loginSchema}
      initialValues={{ nickname: '', password: '' }}
      onSubmit={submitHandle}
    >
      {({ errors }) => {
        const nicknameError = errors.nickname;
        const passwordError = errors.password;
        return (
          <Form className="form">
            <h3 className="form-title">Simple Flight Check</h3>
            <div className="form-login">
              <label className={getLabelClasses(nicknameError)} htmlFor="nickname">Логин:</label>
              <div className="form-field-container">
                <Field className={getInputClasses(nicknameError)} type="email" id="nickname" name="nickname" />
                {nicknameError && <div className="invalid-feedback">{nicknameError}</div>}
              </div>
            </div>
            <div>
              <label className={getLabelClasses(passwordError)} htmlFor="password">Пароль:</label>
              <div className="form-field-container">
                <Field className={getInputClasses(passwordError)} type="password" id="password" name="password" />
                {passwordError && <div className="invalid-feedback">{passwordError}</div>}
              </div>
            </div>
            <div className="form-btn">
              <button className="btn" type="submit">Войти</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
