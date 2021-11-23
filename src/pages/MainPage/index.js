import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Introduction from './components/Introduction';
import Webinar from './components/Webinar';
import Hot from './components/Hot';
import RegisterForm from './components/RegisterForm';
import { useSelector } from 'react-redux';
import Webinars from './components/Webinars';

const useStyles = createUseStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
    },
    webinars: {
      background: '#F2F2F2',
      height: 780,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: `57px 92px 72px 94px`,
    },
  };
});

const selector = ({ auth, webinar }) => {
  return {
    isAuth: auth.isAuth,
    webinars: webinar.list,
  };
};

function MainPage() {
  const classes = useStyles();
  const { isAuth, webinars } = useSelector(selector);

  useEffect(()=>{
    //refresh webinar
  },[]);

  
  return (
    <div className={classes.root}>
      <main>
        <Introduction
          title='Forex Webinars'
          content='Whether you are new to foreign exchange trading or already have some
            market experience, we believe that a solid FX trading education is
            vital to your success as a trader.'
        />
        <Webinars {...webinars} isAuth={isAuth} />
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
        <RegisterForm {...webinars} isAuth={isAuth} />
      </main>
    </div>
  );
}

export default MainPage;
