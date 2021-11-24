import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Introduction from 'components/Introduction';
import Hot from './components/Hot';
import RegisterForm from './components/RegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import Webinars from 'components/Webinars';
import {
  addUserWebinarAction,
  deleteUserWebinarAction,
  getNextWebinarsAction,
  initialWebinarsAction,
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

function MainPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { isAuth, userId, webinars } = useSelector(selector);

  const handleGetNextWebinars = (page) => {
    dispatch(
      getNextWebinarsAction({
        page,
        author: userId,
      })
    );
  };

  const handleRegisterWebinar = (id) => {
    dispatch(
      addUserWebinarAction({
        ids: [id],
      })
    );
  };

  const handleDeleteWebinar = (id) => {
    dispatch(deleteUserWebinarAction({ id }));
  };

  useEffect(() => {
    //refresh webinar
    handleGetNextWebinars(1);

    return () => {
      dispatch(initialWebinarsAction());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, userId]);

  return (
    <div className={classes.root}>
      <main>
        <Introduction
          title='Forex Webinars'
          content='Whether you are new to foreign exchange trading or already have some
            market experience, we believe that a solid FX trading education is
            vital to your success as a trader.'
        />
        <Webinars
          {...webinars}
          isAuth={isAuth}
          handleGetNextWebinars={handleGetNextWebinars}
          handleDeleteWebinar={handleDeleteWebinar}
        />
        <Hot
          title='Meet Your Host - Alistair Schultz'
          content={
            <>
              With more than 15 years of experience covering both the FX and CFD
              markets, Alistair has extensive knowledge covering algorithmic
              trading, market analysis & an impressive educational background.
              <br /> <br />
              As the author of ‘Essentials for Trading Students – An Overview of
              the Basics for Aspiring Traders’, which was released in 2017,
              Alistair will take any aspiring trader from the basics right
              through to advanced analytics used in institutional funds.
              <br /> <br />
              At the core of Alistair’s teachings is the ability to help each
              trader uncover their ‘Trading DNA', helping them flourish with the
              skills and timeframes that work best for them.
            </>
          }
          videoUrl='https://www.youtube.com/embed/DWDVNjqaX4o'
        />
        <RegisterForm
          {...webinars}
          isAuth={isAuth}
          handleRegisterClick={handleRegisterWebinar}
        />
      </main>
    </div>
  );
}

export default MainPage;
