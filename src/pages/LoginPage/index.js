import React, { useEffect, useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import FormLabel from 'components/Form/FormLabel';
import TextInput from 'components/Form/TextInput';
import { validate } from 'utils';
import { loginFormSchema } from './schema';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginAction } from 'actions/creators/auth';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      root: {
        padding: `6.8rem`,
      },
      card: {
        padding: '80px 21.88vw',
      },
      header: {
        textAlign: 'center',
        width: '42.45vw',
      },
      title: {
        color: palette.textPrimary,
      },
      subtitle: {
        fontSize: 16,
        color: palette.textSecondary,
      },
      body: {
        marginTop: 24,
        width: '42.45vw',
      },
      footer: {
        width: '42.45vw',
      },
      formControl: {
        marginBottom: 20,
      },
      button: {
        height: 43,
      },
    };
  },
  { name: 'webinar' }
);

const initState = {
  email: null,
  password: null,
};

const FORM_DATA_CHANGE_ACTION = 'FORM_DATA_CHANGE_ACTION';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FORM_DATA_CHANGE_ACTION:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const selector = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

function LoginPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(selector);
  const [form, localDispatch] = useReducer(reducer, initState);

  const { isValidate, errors } = validate(loginFormSchema, form);

  const onFormChange = (name) => (e) => {
    localDispatch({
      type: FORM_DATA_CHANGE_ACTION,
      payload: {
        [name]: e.target.value,
      },
    });
  };

  const onLoginCLick = (e) => {
    e.preventDefault();
    //login
    dispatch(loginAction(form));
  };

  useEffect(() => {
    if (isAuth) {
      history.push('/');
    }
  }, [isAuth]);

  return (
    <form id='login' className={classes.root}>
      <Card center className={classes.card} roundSize='large'>
        <CardHeader className={classes.header}>
          <h2 className={classes.title}>LOGIN ACY SECURITIES</h2>
        </CardHeader>
        <CardBody className={classes.body}>
          <FormLabel
            maxWidth
            labelText='Email'
            control={TextInput}
            value={form.email}
            errorMsg={errors.email}
            onChange={onFormChange('email')}
            className={classes.formControl}
            showErrorMsg={form.email !== null}
          />
          <FormLabel
            maxWidth
            type='password'
            labelText='Password'
            control={TextInput}
            value={form.password}
            errorMsg={errors.password}
            className={classes.formControl}
            onChange={onFormChange('password')}
            showErrorMsg={form.password !== null}
          />
        </CardBody>
        <CardFooter className={classes.footer}>
          <Button
            maxWidth
            color='primary'
            variant='contained'
            disabled={!isValidate}
            className={classes.button}
            onClick={onLoginCLick}>
            LOGIN
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default LoginPage;
