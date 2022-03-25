import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import FormLabel from 'components/Form/FormLabel';
import Select from 'components/Form/Select';
import TextInput from 'components/Form/TextInput';
import { validate } from 'utils/validate';
import { registerFormSchema } from './schema';

const useStyles = createUseStyles(
  ({ palette, params }) => {
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
      [`@media (max-width: ${params.mobileWidth}px)`]: {
        root: {
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
  id: null,
  firstName: null,
  lastName: null,
  email: null,
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

function RegisterForm({ data, handleRegisterClick }) {
  const classes = useStyles();
  const [form, dispatch] = useReducer(reducer, initState);

  const { isValidate, errors } = validate(registerFormSchema, form);

  const onFormChange = (name) => (e) => {
    dispatch({
      type: FORM_DATA_CHANGE_ACTION,
      payload: {
        [name]: e.target.value,
      },
    });
  };

  const onRegisterClick = (e) => {
    e.preventDefault();

    handleRegisterClick(form.id);
  };

  useEffect(() => {
    if (data.length !== 0 && form.id === null)
      dispatch({
        type: FORM_DATA_CHANGE_ACTION,
        payload: {
          id: data[0].id,
        },
      });
  }, [data, form.id]);

  return (
    <form id='register' className={classes.root}>
      <Card center className={classes.card} roundSize='large'>
        <CardHeader className={classes.header}>
          <h2 className={classes.title}>Register for a RegisterForm now</h2>
          <p className={classes.subtitle}>
            Please fill in the form below and you will be contacted by one of
            our professional business experts.
          </p>
        </CardHeader>
        <CardBody className={classes.body}>
          <FormLabel
            data={data.filter(({ favourited }) => favourited === false)}
            valueOfKey='id'
            displayOfKey='title'
            controlId='Topic'
            labelText='Topic'
            control={Select}
            value={form.id}
            onChange={onFormChange('id')}
            className={classes.formControl}
          />
          <FormLabel
            maxWidth
            labelText='First Name'
            control={TextInput}
            value={form.firstName}
            errorMsg={errors.firstName}
            className={classes.formControl}
            onChange={onFormChange('firstName')}
            showErrorMsg={form.firstName !== null}
          />
          <FormLabel
            maxWidth
            labelText='Last Name'
            control={TextInput}
            value={form.lastName}
            errorMsg={errors.lastName}
            className={classes.formControl}
            onChange={onFormChange('lastName')}
            showErrorMsg={form.lastName !== null}
          />
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
        </CardBody>
        <CardFooter className={classes.footer}>
          <Button
            maxWidth
            color='primary'
            variant='contained'
            disabled={!isValidate}
            className={classes.button}
            onClick={onRegisterClick}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

RegisterForm.propTypes = {
  data: PropTypes.array.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
};

export default RegisterForm;
