import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, JssProvider } from 'react-jss';
import classNamePrefix from 'components/HOC/classNamePrefix';
import classNames from 'classnames';
import { FaChevronRight } from 'react-icons/fa';
import Button from 'components/Button';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 166,
        marginBottom: 160,
        padding: '0 94px 0 91px',
      },
      intro: {
        flexBasis: '50%',
        flexGrow: 1,
        flexShrink: 1,
        '& > h2': {
          color: palette.textPrimary,
          fontSize: 22,
        },
        '& > p': {
          color: palette.textSecondary,
          fontSize: 16,
          width: 481,
        },
      },
      video: {
        flexBasis: 580,
        flexGrow: 0,
        flexShrink: 1,
      },
      button: {
        fontSize: 16,
        padding: 0,
      },
    };
  },
  { name: 'hot' }
);

function Hot({ title, content, videoUrl }) {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div className={classes.intro}>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button className={classes.button} variant='extend' color='secondary'>
          <span>See more</span>
          <FaChevronRight size={12} />
        </Button>
      </div>
      <div className={classes.video}>
        <iframe
          width='100%'
          height='338'
          src={videoUrl}
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
    </section>
  );
}

Hot.defaultProps = {};

Hot.propTypes = {};

export default Hot;
