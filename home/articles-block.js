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
      padding: '0 10% 0 10%',
      [theme.breakpoints.down('xl')]: {
        padding: '0 5% 0 5%',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0 10% 0 10%',
      },
    },
    subtitle: {
      padding: '1rem 10% 1rem 10%',
      textAlign: 'left',
      height: '7rem',
      [theme.breakpoints.down('xxl')]: {
        height: '7rem',
      },
      [theme.breakpoints.down('xl')]: {
        height: '8rem',
        padding: '1rem 5% 1rem 5%',
      },
      [theme.breakpoints.down('lg')]: {
        height: '10rem',
      },
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        height: 'auto',
        padding: '1rem 10% 1rem 10%',
      },
    },
    subsectionWrapper: {
      margin: '3rem 0',
      [theme.breakpoints.down('md')]: {
        margin: '2rem 0',
      },
    },
    image: {
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 'auto',
      borderRadius: '5px 5px 0 0',
    },
    rights: {
      color: theme.palette.common.grayish_blue,
      padding: '3rem 10% 0 10%',
      [theme.breakpoints.down('xl')]: {
        padding: '3rem 5% 0 5%',
      },
      [theme.breakpoints.down('md')]: {
        padding: '3rem 10% 0 10%',
      },
    },
  };
});

function ArticlesBlock() {
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
            Latest Articles
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} spacing={3}>
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
            src='/image-currency.jpg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
          <Typography variant='caption' className={classes.rights}>
            By Claire Robinson
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Receive money in any currency with no fees
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            The world is getting smaller and we&rsquo;re becoming more mobile.
            So why should you be forced to only receive money in a single...
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
            src='/image-restaurant.jpg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
          <Typography variant='caption' className={classes.rights}>
            By Wilson Hutton
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Treat yourself without worrying about money
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you...
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
            src='/image-plane.jpg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
          <Typography variant='caption' className={classes.rights}>
            By Wilson Hutton
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Take your Easybank card wherever you go
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            We want you to enjoy your travels. This is why we don&rsquo;t charge
            any fees on purchases while you&rsquo;re abroad. We&rsquo;ll even
            show you...
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
            src='/image-confetti.jpg'
            alt='online banking'
            width={0}
            height={0}
            quality='100'
            className={classes.image}
          />
          <Typography variant='caption' className={classes.rights}>
            By Claire Robinson
          </Typography>
          <Typography variant='h5' className={classes.subtitle}>
            Our invite-only Beta accounts are now live!
          </Typography>
          <Typography
            variant='body'
            className={cls(classes.textBody, classes.subsectionTextBody)}
          >
            After a lot of hard work by the whole team, we&rsquo;re excited to
            launch our closed beta. It&rsquo;s easy to request an invite through
            the site...
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ArticlesBlock;
