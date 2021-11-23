import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FaChevronRight } from 'react-icons/fa';
import Card from 'components/Card';
import Button from 'components/Button';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { format } from 'date-fns';
import addDays from 'date-fns/addDays';

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
        lineClamp: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        boxOrient: 'vertical',
        display: '-webkit-box',
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
        padding: 0,
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

const getEndAt = (createAt) => {
  return format(addDays(new Date(createAt), 10), 'yyyy/MM/dd hh:mm');
};

function createMarkup(text) {
  return { __html: text };
}

function Webinar({
  id,
  title,
  content,
  created_at,
  isRegistered,
  onWebinarClick,
  onRegisterClick,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <CardHeader className={classes.header}>
          <h5 className={classes.title}>{created_at}</h5>
          <h4 className={classes.subtitle}>{title}</h4>
        </CardHeader>
        <CardBody className={classes.body}>
          <p
            className={classes.content}
            dangerouslySetInnerHTML={createMarkup(content)}
          />
          <p className={classes.endAt}>{getEndAt(created_at)}</p>
        </CardBody>
        <CardFooter className={classes.footer}>
          <div className={classes.buttonGroup}>
            <Button
              color='info'
              disabled={isRegistered}
              className={classes.button}
              onClick={() => onRegisterClick(id)}>
              {isRegistered ? 'Registered' : ' Register Now'}
            </Button>
            <Button
              variant='icon'
              color='info'
              className={classes.icon}
              onClick={() => onWebinarClick(id)}>
              <FaChevronRight size={12} />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

Webinar.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onRegisterClick: PropTypes.func.isRequired,
  onWebinarClick: PropTypes.func.isRequired,
};

export default Webinar;
