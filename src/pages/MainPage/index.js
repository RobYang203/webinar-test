import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { FaAngleDown, FaChevronDown, FaChevronRight } from 'react-icons/fa';

const useStyles = createUseStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
    },
    header: {
      padding: `0 92px`,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderBottom: '1px solid #EDEDED',
      height: 100,
    },
    menu: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      minWidth: 510,
    },
    menuItem: {
      height: 45,
      flexBasis: 140,
      flexGrow: 0,
      flexShrink: 1,
      cursor: 'pointer',
      color: '#4A4A4A',
      fontFamily: 'PingFang SC',
      lineHeight: '45px',
      '&:hover': {
        background: '#f0f0f0',
      },
    },
    menuItemRoot: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
    },
    menuText: {
      marginRight: 5,
      userSelect: 'none',
    },
    menuIcon: {},
    icon: {
      flexBasis: 100,
      flexGrow: 0,
      flexShrink: 1,
    },
    buttonGroup: {
      flexBasis: 250,
      flexGrow: 0,
      flexShrink: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > button': {
        marginRight: 10,
      },
    },
    outlinedButton: {
      cursor: 'pointer',
      flexBasis: 100,
      flexShrink: 1,
      flexGrow: 0,
      height: 43,
      background: '#ffffff00',
      border: '1px solid #152B45',
      color: '#152B45',
      borderRadius: 4,
      userSelect: 'none',
      '&:hover': {
        background: '#efefef',
        borderColor: '#013B81',
      },
    },
    containedButton: {
      cursor: 'pointer',
      flexBasis: 100,
      flexShrink: 1,
      flexGrow: 0,
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
    intro: {
      padding: `57px 284px 72px 282px`,
      letterSpacing: '-0.7px',
      textAlign: 'center',
      '& > h2': {
        fontSize: 28,
        color: '#01254F',
        fontFamily: 'SF Pro Display',
        marginBottom: 20,
      },
      '& > p': {
        fontSize: 16,
        color: '#000000A6',
        fontFamily: 'SF Pro Display',
        lineHeight: '26px',
      },
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
    webinarItem: {
      flexBasis: 380,
      flexGrow: 0,
      height: 300,
      background: '#FFF',
      border: '1px solid #D6D6D6',
      borderRadius: 4,
      boxShadow: '1px 2px 6px #DBDBDB80',
    },
    webinarItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      height: '100%',
      padding: '0 20px',
    },
    webinarItemHeader: {
      color: '#01254F',
      width: 280,
    },
    webinarItemTitle: {
      margin: '20px 0',
      color: '#01254F',
    },
    webinarItemSubtitle: {
      margin: 0,
    },
    webinarItemBody: {
      flex: 1,
      fontSize: 14,
      color: '#000000A6',
      fontFamily: 'SF Pro Display',
      width: 280,
    },
    webinarItemContent: {
      margin: '20px 0',
    },
    webinarItemTime: {},
    webinarItemFooter: {
      margin: '20px 0',
    },
    webinarItemButtonGroup: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    webinarItemButton: {
      padding: 0,
      background: '#ffffff00',
      border: 0,
      color: '#6BB718',
      cursor: 'pointer',
      fontSize: 16,
      '&:hover': {
        background: '#efefef',
      },
    },
    webinarItemIconButton: {
      padding: '0 8px 0 4px',
      background: '#ffffff00',
      border: '1px solid #6BB718',
      color: '#6BB718',
      cursor: 'pointer',
      fontSize: 16,
      width: 20,
      height: 20,
      textAlign: 'center',
      borderRadius: 10,
      lineHeight: '5px',
      '&:hover': {
        background: '#efefef',
      },
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
      width: 580
    },
    registerCardTitle: {
      color: '#01254F',
    },
    registerCardSubtitle: {
        color:'#000000A6',
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
      <header className={classes.header}>
        <section className={classes.icon}>
          <Logo />
        </section>
        <section className={classes.menu}>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Why ACY?</div>
              <FaChevronDown className={classes.menuIcon} />
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Products</div>
              <FaChevronDown className={classes.menuIcon} color='#4A4A4A' />
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Platforms</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Education</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Partners</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
        </section>
        <section className={classes.buttonGroup}>
          <button className={classes.outlinedButton}>Login</button>
          <button className={classes.containedButton}>Logout</button>
        </section>
      </header>
      <main>
        <section className={classes.intro}>
          <h2>Forex Webinars</h2>
          <p>
            Whether you are new to foreign exchange trading or already have some
            market experience, we believe that a solid FX trading education is
            vital to your success as a trader.
          </p>
        </section>
        <section className={classes.webinars}>
          <div className={classes.webinarItem}>
            <div className={classes.webinarItemContainer}>
              <div className={classes.webinarItemHeader}>
                <h5 className={classes.webinarItemTitle}>31/10/2019</h5>
                <h4 className={classes.webinarItemSubtitle}>
                  A structured approach to deciphering FX & Gold sentiment
                </h4>
              </div>
              <div className={classes.webinarItemBody}>
                <p className={classes.webinarItemContent}>
                  Market scan across FX & Gold to determine sentiment with
                  accuracy.
                </p>
                <p className={classes.webinarItemTime}>7pm-8:30pm EST</p>
              </div>
              <div className={classes.webinarItemFooter}>
                <div className={classes.webinarItemButtonGroup}>
                  <button className={classes.webinarItemButton}>
                    Register Now
                  </button>
                  <button className={classes.webinarItemIconButton}>
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.webinarItem}></div>
          <div className={classes.webinarItem}></div>
        </section>
        <section className={classes.news}>
          <div className={classes.newsIntro}>
            <h2>Meet Your Host - Alistair Schultz</h2>
            <p>
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
            </p>
            <button className={classes.newsButton}>
              <span>See more</span>
              <FaChevronRight size={12} />
            </button>
          </div>
          <div className={classes.newsVideo}>
            <iframe
              width='100%'
              height='338'
              src='https://www.youtube.com/embed/DWDVNjqaX4o'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen></iframe>
          </div>
        </section>
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
                <input className={classes.formItem} />
              </div>
              <button className={classes.formButton}>Register</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
