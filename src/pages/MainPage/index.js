import React from 'react';
import { createUseStyles } from 'react-jss';
import { FaChevronRight } from 'react-icons/fa';
import TextInput from 'components/Form/TextInput';
import FormLabel from 'components/Form/FormLabel';
import Introduction from './components/Introduction';
import Webinar from './components/Webinar';
import Hot from './components/Hot';

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
    news: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 166,
      marginBottom: 160,
      padding: '0 94px 0 91px',
    },
    newsIntro: {
      flexBasis: '50%',
      flexGrow: 1,
      flexShrink: 1,
      '& > h2': {
        color: '#01254F',
        fontSize: 22,
      },
      '& > p': {
        color: '#000000A6',
        fontSize: 16,
        width: 481,
      },
    },
    newsVideo: {
      flexBasis: 580,
      flexGrow: 1,
      flexShrink: 1,
    },
    newsButton: {
      padding: 0,
      background: '#ffffff00',
      border: 0,
      color: '#000000A6',
      cursor: 'pointer',
      fontSize: 16,
      display: 'inline-flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 24,
      '& > span': {
        paddingRight: 12,
      },
      '&:hover': {
        background: '#efefef',
      },
    },
    register: {
      padding: 93,
    },
    registerCard: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'noWrap',
      justifyContent: 'space-around',
      background: '#FFF',
      border: '1px solid #D6D6D6',
      borderRadius: 20,
      boxShadow: '1px 2px 6px #DBDBDB80',
      alignItems: 'center',
      padding: '80px 0',
    },
    registerCardHeader: {
      textAlign: 'center',
      width: 580,
    },
    registerCardTitle: {
      color: '#01254F',
    },
    registerCardSubtitle: {
      color: '#000000A6',
      fontSize: 16,
    },
    registerCardBody: {},
    formControl: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'noWrap',
      alignItems: 'flex-start',
      marginBottom: 20,
    },
    formLabel: {
      fontSize: 16,
      color: '#4A4A4A',
      marginBottom: 8,
    },
    formItem: {
      width: 578,
      height: 40,
      background: '#FFF',
      border: '1px solid #D6D6D6',
      borderRadius: 4,
      padding: 0,
    },
    formButton: {
      cursor: 'pointer',
      width: 580,
      height: 43,
      background: '#013B81',
      borderRadius: 4,
      color: '#fff',
      userSelect: 'none',
      border: 0,
      '&:hover': {
        background: '#052f62',
      },
    },
  };
});

function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <main>
        <Introduction
          title='Forex Webinars'
          content='Whether you are new to foreign exchange trading or already have some
            market experience, we believe that a solid FX trading education is
            vital to your success as a trader.'
        />
        <section className={classes.webinars}>
          <Webinar
            title='31/10/2019'
            subTitle='A structured approach to deciphering FX & Gold sentiment'
            content='Market scan across FX & Gold to determine sentiment with
                    accuracy.'
            time='7pm-8:30pm EST'
          />
        </section>
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
        <section className={classes.register}>
          <div className={classes.registerCard}>
            <div className={classes.registerCardHeader}>
              <h2 className={classes.registerCardTitle}>
                Register for a Webinar now
              </h2>
              <p className={classes.registerCardSubtitle}>
                Please fill in the form below and you will be contacted by one
                of our professional business experts.
              </p>
            </div>
            <div className={classes.registerCardBody}>
              <div className={classes.formControl}>
                <label className={classes.formLabel}>Topic</label>
                <input className={classes.formItem} />
              </div>
              <div className={classes.formControl}>
                <label className={classes.formLabel}>First Name</label>
                <input className={classes.formItem} />
              </div>
              <div className={classes.formControl}>
                <label className={classes.formLabel}>Last Name</label>
                <input className={classes.formItem} />
              </div>
              <div className={classes.formControl}>
                <label className={classes.formLabel}>Email</label>
                <TextInput type='password' maxWidth />
                <input className={classes.formItem} />
              </div>
              <FormLabel
                labelId='test'
                labelText='First Name'
                type='password'
                control={TextInput}
              />
              <button className={classes.formButton}>Register</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
