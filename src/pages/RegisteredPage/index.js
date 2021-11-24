import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import Webinars from 'components/Webinars';
import {
  getWebinarsAction,
  initialWebinarAction,
} from 'actions/creators/webinar';

const useStyles = createUseStyles(() => {
  return {
    root: {
      width: '100vw',
      height: 'calc(100vh - 100px)',
      paddingTop: 100,
    }
  };
});

const selector = ({ webinar }) => {
  return {
    webinars: webinar.list,
  };
};

function RegisteredPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isAuth, userId, webinars } = useSelector(selector);

  const handleGetWebinars = (page) => {
    dispatch(
      getWebinarsAction({
        page,
        favourited: 1,
        author: userId,
      })
    );
  };

  useEffect(() => {
    //refresh webinar
    handleGetWebinars(webinars.currentPage);

    return () => {
      dispatch(initialWebinarAction());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, userId]);

  return (
    <div className={classes.root}>
      <main>
        <Webinars
          {...webinars}
          isAuth={true}
          handleGetWebinars={handleGetWebinars}
        />
      </main>
    </div>
  );
}

export default RegisteredPage;
