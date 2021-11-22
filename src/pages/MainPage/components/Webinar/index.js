import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FaChevronRight } from 'react-icons/fa';
import Card from 'components/Card';
import Button from 'components/Button';
import classNamePrefix from 'components/HOC/classNamePrefix';
import CardHeader from 'components/Card/components/CardHeader';
import CardBody from 'components/Card/components/CardBody';
import CardFooter from 'components/Card/components/CardFooter';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      root: {
        flexBasis: 380,
        flexGrow: 0,
        height: 300,
      },
      header: {
        color: palette.textPrimary,
        width: 280,
      },
      title: {
        margin: '20px 0',
        color: palette.textPrimary,
      },
      subtitle: {
        margin: 0,
      },
      body: {
        fontSize: 14,
        color: palette.textSecondary,
        fontFamily: 'SF Pro Display',
        width: 280,
      },
      content: {
        margin: '20px 0',
      },
      footer: {
        margin: '20px 0',
      },
      buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      button: {
        fontSize: 16,
      },
      icon: {
        width: 20,
        height: 20,
        borderRadius: 10,
        padding: '0 8px 0 4px',
      },
    };
  },
  { name: 'webinar' }
);

function Webinar({
  title,
  subTitle,
  content,
  time,
  onRegisterClick,
  onWebinarClick,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card body={<div></div>} footer={<div></div>}>
        <CardHeader className={classes.header}>
          <h5 className={classes.title}>{title}</h5>
          <h4 className={classes.subtitle}>{subTitle}</h4>
        </CardHeader>
        <CardBody className={classes.body}>
          <p className={classes.content}>{content}</p>
          <p className={classes.time}>{time}</p>
        </CardBody>
        <CardFooter className={classes.footer}>
          <div className={classes.buttonGroup}>
            <Button className={classes.button} color='info'>
              Register Now
            </Button>
            <Button className={classes.icon} variant='icon' color='info'>
              <FaChevronRight size={12} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

Webinar.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  onRegisterClick: PropTypes.func,
  onWebinarClick: PropTypes.func,
};

export default Webinar;
