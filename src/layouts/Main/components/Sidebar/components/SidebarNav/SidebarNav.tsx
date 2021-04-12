/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Typography, ListItemIcon, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Link from 'next/link';
import { SelectLang } from 'components/molecules';

import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {},
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  navLink: {
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  closeIcon: {
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
  },
  logoContainer: {
    cursor: 'pointer',
    backgroundImage: "url('/static/images/logos/brand_with_name.svg')",
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: 180,
    height: 60,
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      width: 180,
      height: 60,
    },
  },
}));

interface Props {
  className?: string;
  t?: any; 
  onClose: Function;
  pages: PagesProps;
}

const SidebarNav = ({ pages, onClose, t, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const { productInfo, company } = pages;

  const SimpleMenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding>
      {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Link href={page.href}>
            <Typography
              variant="body1"
              className={clsx(classes.navLink, 'submenu-item')}
              style={{color: "#8d8d8d"}}
            >
              {t(page.title)}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
  // const ServicesPages = (): JSX.Element => {
  //   const { company, checkpoint, termsOfUse } = services.children;
  //   return (
  //     <div className={classes.menu}>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={company} />
  //         <MenuGroup item={checkpoint} />
  //       </div>
  //       <div className={classes.menuItem}>
  //         <MenuGroup item={termsOfUse} />
  //       </div>
  //     </div>
  //   );
  // };

  const ProductInfoPages = (): JSX.Element => {
    const { subpages: productInfoPages } = productInfo.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <SimpleMenuGroup item={productInfoPages} />
        </div>
      </div>
    );
  };

  const CompanyPages = (): JSX.Element => {
    const { subpages: companyPages } = company.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <SimpleMenuGroup item={companyPages} />
        </div>
      </div>
    );
  };


  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem className={classes.closeIcon} onClick={() => onClose()}>
        <ListItemIcon className={classes.listItemIcon}>
          <CloseIcon fontSize="small" />
        </ListItemIcon>
      </ListItem>
      <div style={{ marginRight: '10vh' }}>
          <Link href="/">
            <div className={classes.logoContainer}></div>
          </Link>
        </div>
      <ListItem className={classes.listItem} >
        <SelectLang />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {t('PRODUCT_INFO')}
        </Typography>
        <ProductInfoPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {t('COMPANY')}
        </Typography>
        <CompanyPages />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Divider className={classes.divider} />
      </ListItem>

    </List>
  );
};

export default withTranslation(['common', 'header'])(SidebarNav);
