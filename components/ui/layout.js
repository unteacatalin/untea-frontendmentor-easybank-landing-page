import { makeStyles } from 'tss-react/mui';

import Header from './header';
import Footer from './footer';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spacer: {
      marginBottom: '90.39px',
      [theme.breakpoints.down('lg')]: {
        marginBottom: '90.39px',
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: '90.39px',
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: '90.39px',
      },
    },
    main: {
      width: '100%',
      minHeight: 'calc(100vh - 90.39px - 238.8px)',
    },
  };
});

function Layout({ children }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.spacer} />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
