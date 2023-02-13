import { useState, useEffect } from 'react';
import Link from 'next/link';
import { makeStyles } from 'tss-react/mui';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import cls from 'classnames';
import { useRouter } from 'next/router';

import Logo from '../images/logo';
import IconFacebook from '../images/icon-facebook';
import IconInstagram from '../images/icon-instagram';
import IconYoutube from '../images/icon-youtube';
import IconTwitter from '../images/icon-twitter';
import IconPinterest from '../images/icon-pinterest';

const useStyles = makeStyles()((theme) => {
  return {
    container: {
      width: '100%',
      backgroundColor: theme.palette.primary.main,
      padding: '3rem 25rem 1rem 25rem',
      [theme.breakpoints.down('xxl')]: {
        padding: '3rem 15rem 1rem 15rem',
      },
      [theme.breakpoints.down('xl')]: {
        padding: '3rem 9rem 1rem 9rem',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '3rem 2.5rem 1rem 2.5rem',
      },
      [theme.breakpoints.down('md')]: {
        padding: '3rem 2rem 1rem 2rem',
      },
      [theme.breakpoints.down('sm')]: {
        padding: '3rem 2rem 1rem 2rem',
      },
    },
    footerWrapper: {
      width: '100%',
      display: 'flex',
      // borderTop: `1px solid ${theme.palette.common.white}`,
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.white,
      fontSize: '0.5rem',
      padding: '0.3rem 0 0 0',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.5rem',
        padding: '0.3rem 0 0 0',
      },
    },
    link: {
      color: theme.palette.secondary.main,
    },
    logoContainer: {
      padding: 0,
      width: '12rem',
      paddingBottom: '1.15rem',
      [theme.breakpoints.down('lg')]: {
        paddingBottom: 0,
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    socialMediaWrapper: {
      margin: 0,
      [theme.breakpoints.down('lg')]: {
        margin: '1rem 0',
      },
    },
    socialMedia: {
      cursor: 'pointer',
      minHeight: '46px',
      minWidth: '46px',
      [theme.breakpoints.down('xl')]: {
        minHeight: '40px',
        minWidth: '40px',
      },
      [theme.breakpoints.down('lg')]: {
        minHeight: '46px',
        minWidth: '46px',
      },
    },
    footerText: {
      fontSize: '1.2rem',
      lineHeight: '3rem',
      color: theme.palette.common.white,
      cursor: 'pointer',
    },
    footerTextSelected: {
      color: theme.palette.secondary.main,
      fontWeight: 700,
    },
    mainWrapper: {
      paddingBottom: '1rem',
    },
    button: {
      background:
        'linear-gradient(90deg, rgba(49,211,92,0.8) 0%, rgba(43,183,218,0.8) 100%)',
      width: '13rem',
      height: '3.5rem',
      borderRadius: '50px',
      textTransform: 'none',
      fontSize: '1.1rem',
      fontWeight: 400,
      marginBottom: '1.15rem',
      boxShadow:
        '0px 5px 5px -3px rgb(255 255 255 / 20%), 0px 8px 10px 1px rgb(255 255 255 / 14%), 0px 3px 14px 2px rgb(255 255 255 / 12%)',
      margin: 0,
      [theme.breakpoints.down('lg')]: {
        margin: '1rem 0',
      },
      '&:hover': {
        background:
          'linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%)',
        boxShadow:
          '0px 5px 5px -3px rgb(255 255 255 / 30%), 0px 8px 10px 1px rgb(255 255 255 / 24%), 0px 3px 14px 2px rgb(255 255 255 / 22%)',
      },
    },
    buttonSelected: {
      fontWeight: 700,
    },
    copyrightText: {
      color: theme.palette.common.grayish_blue,
      fontSize: '1.2rem',
    },
  };
});

function Footer() {
  const { classes } = useStyles();
  const theme = useTheme();

  const router = useRouter();

  const [value, setValue] = useState(false);
  const [socialMediaSelected, setSocialMediaSelected] = useState(false);

  const matchesLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  useEffect(() => {
    if (router.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (router.pathname === '/about' && value !== 1) {
      setValue(1);
    } else if (router.pathname === '/contact' && value !== 2) {
      setValue(2);
    } else if (router.pathname === '/blog' && value !== 3) {
      setValue(3);
    } else if (router.pathname === '/careers' && value !== 4) {
      setValue(4);
    } else if (router.pathname === '/invite' && value !== false) {
      setValue(false);
    } else if (router.pathname === '/support' && value !== 5) {
      setValue(5);
    } else if (router.pathname === '/privacy' && value !== 6) {
      setValue(6);
    }
  }, [router, value]);

  return (
    <footer className={classes.container}>
      <Grid item container xs={12} className={classes.mainWrapper}>
        <Grid
          item
          container
          lg={3}
          md={12}
          justifyContent={matchesLG ? 'center' : 'flex-start'}
        >
          <Grid
            item
            container
            className={classes.logoContainer}
            component={Link}
            href='/'
          >
            <Logo color={theme.palette.common.white} />
          </Grid>
          <Grid item container>
            &nbsp;
          </Grid>
          <Grid
            item
            container
            spacing={2}
            alignItems='center'
            justifyContent={matchesLG ? 'center' : 'flex-start'}
            className={classes.socialMediaWrapper}
          >
            <Grid
              item
              className={classes.socialMedia}
              onMouseEnter={() => setSocialMediaSelected(0)}
              onMouseLeave={() => setSocialMediaSelected(false)}
            >
              <IconFacebook
                color={
                  socialMediaSelected === 0
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Grid>
            <Grid
              item
              className={classes.socialMedia}
              onMouseEnter={() => setSocialMediaSelected(1)}
              onMouseLeave={() => setSocialMediaSelected(false)}
            >
              <IconYoutube
                color={
                  socialMediaSelected === 1
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Grid>
            <Grid
              item
              className={classes.socialMedia}
              onMouseEnter={() => setSocialMediaSelected(2)}
              onMouseLeave={() => setSocialMediaSelected(false)}
            >
              <IconTwitter
                color={
                  socialMediaSelected === 2
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Grid>
            <Grid
              item
              className={classes.socialMedia}
              onMouseEnter={() => setSocialMediaSelected(3)}
              onMouseLeave={() => setSocialMediaSelected(false)}
            >
              <IconPinterest
                color={
                  socialMediaSelected === 3
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Grid>
            <Grid
              item
              className={classes.socialMedia}
              onMouseEnter={() => setSocialMediaSelected(4)}
              onMouseLeave={() => setSocialMediaSelected(false)}
            >
              <IconInstagram
                color={
                  socialMediaSelected === 4
                    ? theme.palette.secondary.main
                    : theme.palette.common.white
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container lg={2} md={12}>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 1 && classes.footerTextSelected
              )}
              component={Link}
              href='/about'
            >
              About Us
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 2 && classes.footerTextSelected
              )}
              component={Link}
              href='/contact'
            >
              Contact
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 3 && classes.footerTextSelected
              )}
              component={Link}
              href='/blog'
            >
              Blog
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg={2} md={12}>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 4 && classes.footerTextSelected
              )}
              component={Link}
              href='/careers'
            >
              Careers
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 5 && classes.footerTextSelected
              )}
              component={Link}
              href='/support'
            >
              Support
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-start'}
          >
            <Typography
              variant='body'
              className={cls(
                classes.footerText,
                value === 6 && classes.footerTextSelected
              )}
              component={Link}
              href='/privacy'
            >
              Privacy Policy
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg={5} md={12}>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-end'}
          >
            <Button
              component={Link}
              href='/invite'
              variant='contained'
              disableRipple
              className={cls(
                classes.button,
                value === false && classes.buttonSelected
              )}
            >
              Request Invite
            </Button>
          </Grid>
          <Grid item container>
            &nbsp;
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesLG ? 'center' : 'flex-end'}
          >
            <Typography variant='body' className={classes.copyrightText}>
              @Easybank. All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <div className={classes.footerWrapper}>
          Challenge by&nbsp;
          <Link
            href='https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29/hub'
            target='_blank'
            className={classes.link}
          >
            Frontend Mentor
          </Link>
          . Coded by&nbsp;
          <Link
            href='https://untea-rocmu-it.herokuapp.com/'
            target='_blank'
            className={classes.link}
          >
            Catalin Marius Untea
          </Link>
          .
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;
