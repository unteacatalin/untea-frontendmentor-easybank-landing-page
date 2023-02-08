import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import cls from 'classnames';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      backgroundColor: theme.palette.common.white,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '1rem 25rem 0 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '1rem 15rem 0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '1rem 9rem 0 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '1rem 5rem 0 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '1rem 2rem 0 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '1rem 1rem 0 1rem',
      },
    },
    title: {
      paddingBottom: '2rem',
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    textBody: {
      color: theme.palette.common.grayish_blue,
      lineHeight: '1.5rem',
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    subsectionTextBody: {
      maxWidth: '400px',
    },
    subtitle: {
      padding: '2rem 0',
      height: 'auto',
      [theme.breakpoints.down('lg')]: {
        height: '7rem',
      },
      [theme.breakpoints.down('md')]: {
        height: 'auto',
      },
    },
    subsectionWrapper: {
      margin: '3rem 0',
      [theme.breakpoints.down('md')]: {
        margin: '2rem 0',
      },
    },
  };
});

function MotivationBlock() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      item
      container
      className={classes.container}
      xs={12}
      flexDirection='column'
    >
      <Grid
        item
        container
        flexDirection='column'
        alignItems={matchesMD ? 'center' : 'flex-start'}
      >
        <Grid item>
          <Typography variant='h3' className={classes.title}>
            Why choose Easybank?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='body'
            className={classes.textBody}
            paragraph
            gutterBottom={false}
          >
            We leverage Open Banking to turn your bank account into your
            financial hub.
            <br />
            Control your finances like never before.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={2}>
        <Grid
          item
          container
          md={3}
          sm={12}
          flexDirection='column'
          className={classes.subsectionWrapper}
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Image
            src='/icons/icon-online.svg'
            alt='online banking'
            width={72}
            height={72}
          />
          <Typography variant='h4' className={classes.subtitle}>
            Online Banking
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={3}
          sm={12}
          flexDirection='column'
          className={classes.subsectionWrapper}
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Image
            src='/icons/icon-budgeting.svg'
            alt='online banking'
            width={72}
            height={72}
          />
          <Typography variant='h4' className={classes.subtitle}>
            Simple Budgeting
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            See exactly where your money goes each month. Receive notifications
            when you&apos;re close to hitting your limits.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={3}
          sm={12}
          flexDirection='column'
          className={classes.subsectionWrapper}
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Image
            src='/icons/icon-onboarding.svg'
            alt='online banking'
            width={72}
            height={72}
          />
          <Typography variant='h4' className={classes.subtitle}>
            Fast Onboarding
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            We don&apos;t do branches. Open your account in minutes online and
            start taking control of your finances right away.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={3}
          sm={12}
          flexDirection='column'
          className={classes.subsectionWrapper}
          alignItems={matchesMD ? 'center' : 'flex-start'}
        >
          <Image
            src='/icons/icon-api.svg'
            alt='online banking'
            width={72}
            height={72}
          />
          <Typography variant='h4' className={classes.subtitle}>
            Open API
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MotivationBlock;
