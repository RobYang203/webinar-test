import React, { useEffect, useReducer } from 'react';
import { createUseStyles } from 'react-jss';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import FormLabel from 'components/Form/FormLabel';
import TextInput from 'components/Form/TextInput';
import { validate } from 'utils/validate';
import { signupFormSchema } from './schema';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginAction } from 'actions/creators/auth';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles(
  ({ palette, commonStyles }) => {
    return {
      root: {
        ...commonStyles.pageRootStyle,
      },
      container: {
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
      signUpBtn: {
        display: 'block',
        marginTop: 10,
        marginBottom: 10,
        float: 'right',
      },
      '@media (max-width: 400px)': {
        container: {
          paddingRight: 28,
          paddingLeft: 21,
        },
        card: {
          paddingRight: 28,
          paddingLeft: 21,
        },
        header: {
          width: '100%',
        },
        body: {
          width: '100%',
        },
        footer: {
          width: '100%',
        },
      },
    };
  },
  { name: 'webinar' }
);

const initState = {
  name: null,
  email: null,
  password: null,
  passwordConfirm: null,
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

function SignupPage() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [signupForm, signupFormDispatch] = useReducer(reducer, initState);

  const { isValidate, errors } = validate(signupFormSchema, signupForm);

  const onFormChange = (name) => (e) => {
    signupFormDispatch({
      type: FORM_DATA_CHANGE_ACTION,
      payload: {
        [name]: e.target.value,
      },
    });
  };

  const onSignupCLick = (e) => {
    e.preventDefault();
    //login
    console.log("🚀 ~ file: index.js ~ line 123 ~ onSignupCLick ~ signupForm", signupForm)
  };

  return (
    <form id='signup' className={classes.root}>
      <div className={classes.container}>
        <Card center className={classes.card} roundSize='large'>
          <CardHeader className={classes.header}>
            <h2 className={classes.title}>SIGN UP ACY SECURITIES</h2>
          </CardHeader>
          <CardBody className={classes.body}>
            <FormLabel
              maxWidth
              labelText='Name'
              control={TextInput}
              value={signupForm.name}
              errorMsg={errors.name}
              onChange={onFormChange('name')}
              className={classes.formControl}
              showErrorMsg={signupForm.name !== null}
            />
            <FormLabel
              maxWidth
              labelText='Email'
              control={TextInput}
              value={signupForm.email}
              errorMsg={errors.email}
              onChange={onFormChange('email')}
              className={classes.formControl}
              showErrorMsg={signupForm.email !== null}
            />
            <FormLabel
              maxWidth
              type='text'
              labelText='Password'
              control={TextInput}
              value={signupForm.password}
              errorMsg={errors.password}
              className={classes.formControl}
              onChange={onFormChange('password')}
              showErrorMsg={signupForm.password !== null}
            />
            <FormLabel
              maxWidth
              type='text'
              labelText='Password Confirm'
              control={TextInput}
              value={signupForm.passwordConfirm}
              errorMsg={errors.passwordConfirm}
              className={classes.formControl}
              onChange={onFormChange('passwordConfirm')}
              showErrorMsg={signupForm.passwordConfirm !== null}
            />
          </CardBody>
          <CardFooter className={classes.footer}>
            <Button
              maxWidth
              color='primary'
              variant='contained'
              disabled={!isValidate}
              className={classes.button}
              onClick={onSignupCLick}>
              SIGN UP
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
}

export default SignupPage;
