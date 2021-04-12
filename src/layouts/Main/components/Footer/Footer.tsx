import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, List, ListItem, Typography, Divider } from '@material-ui/core';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import YoutubeIcon from '@material-ui/icons/YouTube';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.footer,
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  menuContainer: {
    padding: 12,
    width: 'fit-content',
    margin: '0 auto',
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 36,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'space-evenly !important',
  },
  menuItem: {
    margin: theme.spacing(2),
    '&:last-child': {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    fontSize: 19,
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 19,
    fontWeight: 500,
    color: 'white',
    cursor: 'pointer',
    marginBotton: 5,
  },
  mediaContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  copyRightText: {
    color: 'white',
    textAlign: 'center'
  },
  followUs: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  divider: {
    backgroundColor: 'rgba(255,255,255, 0.12)',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

interface Props {
  className?: string;
  t?: any;
  pages: PagesProps;
}

const Footer = ({ pages, t, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const { services, productInfo, company } = pages;

  const MenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding className={classes.menuItem}>
      <ListItem disableGutters className={classes.menuGroupItem}>
        <Typography variant="body2" className={classes.menuGroupTitle}>
          {t(item.groupTitle)}
        </Typography>
      </ListItem>
      {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Link href={page.href}>
            <Typography variant="body2" className={classes.menuItemText}>
              {t(page.title)}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );

  const Pages = (): JSX.Element => {
    const { subpages: productInfoPages } = productInfo.children;
    const { subpages: companyPages } = company.children;
    const { subpages: servicesPages } = services.children;
    return (
      <div className={classes.menu}>
        <List disablePadding className={classes.menuContainer}>
          <div className={classes.mediaContainer}>
            <Image src="/static/images/logos/white_logo.svg" alt="Immunie Logo" width={262} height={86} />
            <div>
              <ListItem disableGutters>
                <Typography className={classes.followUs}>{t('footer:SOCIAL_MEDIA_TEXT')}</Typography>
              </ListItem>
              <ListItem disableGutters>
                <IconButton aria-label="Facebook" className={classes.socialIcon}>
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="Linkedin" className={classes.socialIcon}>
                  <LinkedinIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="Instagram" className={classes.socialIcon}>
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="Twitter" className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
                <IconButton aria-label="Youtube" className={classes.socialIcon}>
                  <YoutubeIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </div>
          </div>
        </List>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <div className={classes.menuItem}>
          <MenuGroup item={productInfoPages} />
        </div>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <div className={classes.menuItem}>
          <MenuGroup item={companyPages} />
        </div>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <div className={classes.menuItem}>
          <MenuGroup item={servicesPages} />
          <div style={{ marginTop: 40 }}>
            <Image src="/static/images/logos/logo_ico.svg" alt="Immunie Logo" width={120} height={52} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={3} direction="column">
          <Grid item xs={12}>
            <Pages />
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.copyRightText}>{t('ALL_RIGHTS_RESERVED')}</Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default withTranslation(['common', 'footer'])(Footer);
