import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Webinar from '../Webinar';
import { useHistory } from 'react-router';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      root: {
        height: 780,
        background: '#F2F2F2',
        padding: `57px 92px 72px 94px`,
        overflow: 'auto',
      },
      content: {
        gap: '10px',
        padding: `5px 0`,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      loading: {
        flexBasis: '100%',
        textAlign: 'center',
        color: palette.textPrimary,
      },
    };
  },
  { name: 'webinars' }
);

function Webinars({ data, hasMore, currentPage, isAuth, handleGetWebinars }) {
  const classes = useStyles();
  const history = useHistory();
  const onRegisterClick = (id) => {
    if (isAuth) {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      history.push('/login');
    }
  };

  const onWebinarClick = (id) => {
    history.push(`/webinar/${id}`);
  };

  const nextWebinars = () => {
    handleGetWebinars(currentPage + 1);
  };

  return (
    <section id='scrollable' className={classes.root}>
      <InfiniteScroll
        next={nextWebinars}
        hasMore={hasMore}
        scrollThreshold={0.7}
        dataLength={data.length}
        className={classes.content}
        scrollableTarget='scrollable'
        loader={<h4 className={classes.loading}>Loading...</h4>}>
        {data.map((item) => {
          return (
            <Webinar
              {...item}
              key={`webinar-${item.id}`}
              isRegistered={isAuth && item.favourited}
              onRegisterClick={onRegisterClick}
              onWebinarClick={onWebinarClick}
            />
          );
        })}
      </InfiniteScroll>
    </section>
  );
}

Webinars.propTypes = {
  data: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Webinars;
