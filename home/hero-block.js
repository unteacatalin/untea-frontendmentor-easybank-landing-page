import { makeStyles } from 'tss-react/mui';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import cls from 'classnames';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      position: 'relative',
      padding: '0 0 0 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '0 0 0 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '0 0 0 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '0 0 0 5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '0 0 0 3rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '0 0 0 1rem',
      },
    },
    button: {
      background:
        'linear-gradient(90deg, rgba(49,211,92,0.8) 0%, rgba(43,183,218,0.8) 100%)',
      width: '10rem',
      height: '3rem',
      borderRadius: '50px',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 400,
      margin: '2rem 0 0 0',
      color: theme.palette.common.white,
      boxShadow:
        '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
      [theme.breakpoints.down('md')]: {
        margin: '1rem 0 3rem 0',
      },
      '&:hover': {
        background:
          'linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%)',
        boxShadow:
          '0px 5px 5px -3px rgb(0 0 0 / 30%), 0px 8px 10px 1px rgb(0 0 0 / 24%), 0px 3px 14px 2px rgb(0 0 0 / 22%)',
      },
    },
    title: {
      margin: '0 0 1rem 0',
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    textBody: {
      color: theme.palette.common.grayish_blue,
      margin: '0 0 1rem 0',
      lineHeight: '1.5rem',
      textAlign: 'left',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
    imageWrapper: {
      width: '100%',
      height: '50rem',
      position: 'relative',
      overflow: 'hidden',
      //   backgroundPosition: '50%',
      //   clipPath: 'inset(50% 50% 0 0)',
      //   overflow: 'hidden',
      [theme.breakpoints.down('xl')]: {
        height: '45rem',
      },
      [theme.breakpoints.down('lg')]: {
        height: '43rem',
      },
      [theme.breakpoints.down('md')]: {
        height: '35rem',
      },
      [theme.breakpoints.down('sm')]: {
        height: '30rem',
      },
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      backgroundImage: 'url("./bg-intro-desktop.svg")',
      backgroundPosition: 'bottom left',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      clipPath: 'polygon(70% 20%, 70% 100%, 0% 100%, 0% 20%)',
      top: '-20%',
      right: '-30%',
      transform: 'scale(1.5)',
      [theme.breakpoints.down('xxl')]: {
        clipPath: 'polygon(70% 20%, 70% 100%, 0% 100%, 0% 20%)',
        top: '-20%',
        right: '-30%',
        transform: 'scale(1.6)',
      },
      [theme.breakpoints.down('xl')]: {
        clipPath: 'polygon(80% 20%, 80% 100%, 0% 100%, 0% 20%)',
        top: '-20%',
        right: '-20%',
        transform: 'scale(1.4)',
      },
      [theme.breakpoints.down('lg')]: {
        clipPath: 'polygon(80% 20%, 80% 100%, 0% 100%, 0% 20%)',
        top: '-20%',
        right: '-20%',
        transform: 'scale(1.3)',
      },
      [theme.breakpoints.down('md')]: {
        clipPath: 'polygon(80% 30%, 80% 100%, 0% 100%, 0% 30%)',
        top: '-30%',
        right: '-20%',
        transform: 'scale(1.4)',
      },
      [theme.breakpoints.down('md')]: {
        clipPath: 'polygon(80% 20%, 80% 100%, 0% 100%, 0% 20%)',
        top: '-20%',
        right: '-20%',
        transform: 'scale(1.3)',
      },
    },
    leftWrapper: {
      paddingRight: 0,
      [theme.breakpoints.down('md')]: {
        paddingRight: '3rem',
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: '1rem',
      },
    },
  };
});

function HeroBlock() {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesXXL = useMediaQuery(theme.breakpoints.down('xxl'));
  const matchesXL = useMediaQuery(theme.breakpoints.down('xl'));
  const matchesLG = useMediaQuery(theme.breakpoints.down('lg'));
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      item
      container
      className={classes.container}
      xs={12}
      flexDirection='row'
    >
      {matchesMD && (
        <Grid item container md={8} sm={12} className={classes.imageWrapper}>
          <Grid item className={classes.imageBackground}>
            <Image
              src='/image-mockups.png'
              alt='image mockups'
              width={matchesXXL ? 588 : matchesXL ? 588 : matchesLG ? 562 : 653}
              height={
                matchesXXL ? 720 : matchesXL ? 720 : matchesLG ? 688 : 800
              }
            />
          </Grid>
        </Grid>
      )}
      <Grid
        item
        container
        md={4}
        sm={12}
        flexDirection='column'
        justifyContent='center'
        className={classes.leftWrapper}
      >
        <Grid
          item
          container
          justifyContent={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography
            variant={matchesLG ? 'h2' : 'h1'}
            className={classes.title}
          >
            Next generation digital banking
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesMD ? 'center' : 'flex-start'}
        >
          <Typography variant='body' className={classes.textBody}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and
            much-more.
          </Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent={matchesMD ? 'center' : 'flex-start'}
        >
          <Button
            component={Link}
            href='/invite'
            variant='cover'
            disableRipple
            className={cls(classes.button)}
          >
            Request Invite
          </Button>
        </Grid>
      </Grid>
      {!matchesMD && (
        <Grid item container md={8} sm={12} className={classes.imageWrapper}>
          <Grid item className={classes.imageBackground}>
            <Image
              src='/image-mockups.png'
              alt='image mockups'
              width={
                matchesXXL
                  ? 588
                  : matchesXL
                  ? 588
                  : matchesLG
                  ? 562
                  : matchesMD
                  ? 457
                  : matchesSM
                  ? 392
                  : 653
              }
              height={
                matchesXXL
                  ? 720
                  : matchesXL
                  ? 720
                  : matchesLG
                  ? 688
                  : matchesMD
                  ? 560
                  : matchesSM
                  ? 480
                  : 800
              }
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default HeroBlock;
