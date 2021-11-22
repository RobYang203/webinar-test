import React from 'react';
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

function RegisterForm({
  title,
  subTitle,
  content,
  time,
  onRegisterClick,
  onWebinarClick,
}) {
  const classes = useStyles();
  return (
    <form className={classes.root}>
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
            controlId='Topic'
            labelText='Topic'
            control={Select}
            className={classes.formControl}
          />
          <FormLabel
            controlId='First Name'
            labelText='First Name'
            className={classes.formControl}
            control={<TextInput maxWidth />}
          />
          <FormLabel
            labelText='Last Name'
            className={classes.formControl}
            control={<TextInput maxWidth />}
          />
          <FormLabel
            labelText='Email'
            className={classes.formControl}
            control={<TextInput maxWidth />}
          />
        </CardBody>
        <CardFooter className={classes.footer}>
          <Button
            maxWidth
            disabled
            color='primary'
            variant='contained'
            className={classes.button}>
            Register
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
