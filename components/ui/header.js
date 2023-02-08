import React, { useState, useEffect, useContext, Fragment } from 'react';
import { makeStyles } from 'tss-react/mui';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import cls from 'classnames';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import Logo from '../images/logo';
import EasybankStore from '../../store/store-context';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles()((theme) => {
  return {
    appBarContainer: {
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
      [theme.breakpoints.down('lg')]: {
        fontSize: '1rem',
        marginBottom: '1.5rem',
        width: '9rem',
        height: '3rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
        marginBottom: '1.15rem',
        width: '13rem',
        height: '3.5rem',
      },
      '&:hover': {
        background:
          'linear-gradient(90deg, rgba(49,211,92,1) 0%, rgba(43,183,218,1) 100%)',
      },
    },
    buttonSelected: {
      fontWeight: 700,
    },
    logoContainer: {
      padding: 0,
      height: '3.33rem',
      width: '12rem',
      paddingBottom: '1.6rem',
      [theme.breakpoints.down('lg')]: {
        width: '9rem',
        height: '2.9rem',
        paddingBottom: '1.6rem',
      },
      [theme.breakpoints.down('md')]: {
        marginRight: 'auto',
        paddingBottom: 0,
        width: '12rem',
        height: '3.33rem',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawerItemButtonSelected: {
      fontWeight: '700',
      color: theme.palette.secondary.main,
    },
    drawerItemButton: {
      color: theme.palette.common.black,
      fontWeight: 400,
    },
    drawerPaper: {
      position: 'absolute !important',
      top: '1rem',
      width: '94%',
      marginLeft: '3%',
      marginRight: '3%',
      borderRadius: '5px',
      padding: '1rem',
      fontSize: '1.2rem',
    },
    drawerRoot: {
      position: 'absolute !important',
      marginTop: '90.38px',
      '& .MuiBackdrop-root': {
        position: 'relative !important',
        height: 'calc(100vh - 90.38px)',
      },
    },
    listItemText: {
      textAlign: 'center',
      // padding: '0.2rem 0',
      // letterSpacing: '0.2rem',
    },
    drawerIcon: {
      height: '2rem',
      width: '2rem',
    },
  };
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
  />
))(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    height: '4px',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    // maxWidth: 40,
    width: '100%',
    background:
      'linear-gradient(90deg, rgba(49,211,92,0.9) 0%, rgba(43,183,218,0.9) 100%)',
  },
  '&.MuiTabs-root': {
    width: 'calc(100% - 12rem - 12rem)',
    height: '74px',
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.down('lg')]: {
      width: 'calc(100% - 9rem - 9rem)',
    },
    [theme.breakpoints.down('md')]: {
      width: 'calc(100% - 12rem - 12rem)',
    },
  },
  '& .MuiTabs-flexContainer': {
    display: 'block',
    width: '35rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%',
    [theme.breakpoints.down('lg')]: {
      width: '25rem',
    },
    [theme.breakpoints.down('md')]: {
      width: '35rem',
    },
  },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    // fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: theme.palette.primary.light,
    fontSize: '1.2rem',
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.down('lg')]: {
      marginRight: theme.spacing(0),
    },
    '&.Mui-selected': {
      color: theme.palette.primary.light,
      fontWeight: 700,
    },
    '&.MuiButtonBase-root': {
      padding: '12px 16px 38px 16px',
      minWidth: '90px',
      [theme.breakpoints.down('lg')]: {
        padding: '12px 12px 38px 12px',
        minWidth: '60px',
      },
      [theme.breakpoints.down('md')]: {
        padding: '12px 16px 38px 12px',
        minWidth: '90px',
      },
    },
  })
);

function Header() {
  const { classes } = useStyles();
  const StoreCtx = useContext(EasybankStore);
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const [value, setValue] = useState(StoreCtx.selected);
  const [openDrawer, setOpenDrawer] = useState(false);

  const router = useRouter();

  const handleChange = (event, newValue) => {
    StoreCtx.updateSelected(newValue);
  };

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

  const tabs = (
    <StyledTabs value={value} onChange={handleChange} variant='fullWidth'>
      <StyledTab label='Home' component={Link} href='/' />
      <StyledTab label='About' component={Link} href='/about' />
      <StyledTab label='Contact' component={Link} href='/contact' />
      <StyledTab label='Blog' component={Link} href='/blog' />
      <StyledTab label='Careers' component={Link} href='/careers' />
    </StyledTabs>
  );

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        anchor='top'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawerPaper, root: classes.drawerRoot }}
      >
        <List disablepadding='true'>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            component={Link}
            href='/'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 0 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Home
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            component={Link}
            href='/about'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 1 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              About
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            component={Link}
            href='/contact'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 2 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Contact
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            component={Link}
            href='/blog'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 3 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Blog
            </ListItemText>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            component={Link}
            href='/careers'
            disablepadding='true'
            className={cls(
              classes.drawerItemButton,
              value === 4 && classes.drawerItemButtonSelected
            )}
          >
            <ListItemText disableTypography className={classes.listItemText}>
              Careers
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        {openDrawer ? (
          <CloseIcon className={classes.drawerIcon} />
        ) : (
          <MenuIcon className={classes.drawerIcon} />
        )}
      </IconButton>
    </Fragment>
  );

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBarContainer} position='fixed'>
          <Toolbar disableGutters>
            <Button
              component={Link}
              href='/'
              disableRipple
              className={classes.logoContainer}
              onClick={() => {
                setOpenDrawer(false);
                setValue(false);
              }}
            >
              <Logo />
            </Button>
            {matchesMD ? drawer : tabs}
            {!matchesMD && (
              <Button
                component={Link}
                href='/invite'
                variant='contained'
                disableRipple
                className={cls(
                  classes.button,
                  value === false && classes.buttonSelected
                )}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(false);
                }}
              >
                Request Invite
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
}

export default Header;
