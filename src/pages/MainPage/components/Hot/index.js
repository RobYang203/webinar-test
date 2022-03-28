import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import Button from 'components/Button';
import { FaChevronRight } from 'react-icons/fa';

const useStyles = createUseStyles(
  ({ palette, params }) => {
    return {
      root: {
        gap: 20,
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
      [`@media (max-width: ${params.mobileWidth}px)`]: {
        root: {
          paddingRight: 28,
          paddingLeft: 21,
        },
        intro: {
          '& > p': {
            width: '90vw',
          },
        },
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
          frameBorder='0'></iframe>
      </div>
    </section>
  );
}

Hot.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.element.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default Hot;
