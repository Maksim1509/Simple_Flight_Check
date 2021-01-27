import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actions } from '../slices';
import localStore from 'store';



const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const submitHandle = (values, { resetForm }) => {
    dispatch(actions.login());
    resetForm();
    localStore.set('isAuth', true);
    history.push('/main');
  };

  return (
    <div className="login-page">
      <div className="blur"></div>
      <Formik
        initialValues={{nickname: '', password: ''}}
        onSubmit={submitHandle}
      >
        <Form className="form">
        <h3 className="form-title">Simple Flight Check</h3>
        <div className="form-login">
          <label className="form-label" htmlFor="nickname">Логин:</label>
          <Field className="form-field" type='email' id="nickname" name="nickname" />
        </div>
        <div>
          <label className="form-label" htmlFor="password">Пароль:</label>
          <Field className="form-field" type="password" id="password" name="password" pattern="[A-Za-z]{8,20}" />
        </div>
        <div className="form-btn">
          <button className="btn" type="submit">Войти</button>
        </div>
        </Form>
      </Formik>
    </div>
  );
} 

export default Login;
