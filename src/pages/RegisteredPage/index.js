import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import Webinars from 'components/Webinars';
import {
  deleteUserWebinarAction,
  getNextWebinarsAction,
  refreshWebinarsAction,
} from 'actions/creators/webinar';

const useStyles = createUseStyles(({ commonStyles }) => {
  return {
    root: {
      ...commonStyles.pageRootStyle,
    },
  };
});

const selector = ({ auth, webinar }) => {
  return {
    isAuth: auth.isAuth,
    userId: auth.user.id,
    webinars: webinar.list,
  };
};

function RegisteredPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isAuth, userId, webinars } = useSelector(selector);

  const handleGetWebinars = (page) => {
    dispatch(
      getNextWebinarsAction({
        page,
        favourited: 1,
        author: userId,
      })
    );
  };

  const handleDeleteWebinar = (id) => {
    dispatch(deleteUserWebinarAction({ id }));
  };

  useEffect(() => {
    if (isAuth)
      dispatch(
        refreshWebinarsAction({
          author: userId,
        })
      );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <div className={classes.root}>
      <main>
        <Webinars
          isAuth={true}
          hasMore={webinars.hasMore}
          currentPage={Webinars.currentPage}
          handleGetWebinars={handleGetWebinars}
          handleDeleteWebinar={handleDeleteWebinar}
          data={webinars.data.filter(({ favourited }) => favourited === true)}
        />
      </main>
    </div>
  );
}

export default RegisteredPage;
