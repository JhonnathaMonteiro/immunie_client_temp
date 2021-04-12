import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  Popover,
  Typography,
  IconButton,
  AppBar,
  Divider,
  Modal,
  Backdrop,
  Fade,
  Box,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';
import ChatIcon from '@material-ui/icons/Chat';
import Link from 'next/link';
import Image from 'next/image';
import { Formik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

import { SelectLang } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  brandName: {
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginTop: '-8px',
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sendBtn: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: '5rem',
    color: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    marginTop: 20,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: '#FFF',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 80,
    position: 'sticky',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  toolbarLogo: {},
  toolbarContent: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  toolbarButton: {
    textTransform: 'none',
    padding: '0.4em',
  },
  navLink: {
    cursor: 'pointer',
    color: 'black',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  Link: {
    color: '#2d3748',
    '&:hover': {
      color: theme.palette.primary.dark,
    },
    '&:visited': { 'text-decoration': 'none' },
  },
  listItem: {
    cursor: 'pointer',
    '&:hover > .menu-item, &:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemActive: {
    '&> .menu-item': {
      color: theme.palette.primary.dark,
    },
  },
  listItemText: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),
    whiteSpace: 'nowrap',
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  popover: {
    padding: theme.spacing(4),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    minWidth: 200,
    marginTop: theme.spacing(2),
  },
  iconButton: {
    marginLeft: 'auto',
    marginRight: '1rem',
    padding: 0,
    '&:hover': {
      background: 'transparent',
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    color: theme.palette.primary.dark,
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
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(5),
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
  displayFlexAlignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  iconCointainer: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icon: {
    fill: '#757575',
    '&:hover': {
      fill: theme.palette.primary.light,
    },
  },
  themeToggler: {},
  divider: {},
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,

    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  emailFormTitle1: {
    color: '#00B0CF',
    fontSize: 20,
  },
  emailFormTitle2: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#8D8D8D',
  },
}));

interface Props {
  t?: any;
  className?: string;
  onSidebarOpen: Function;
  pages: PagesProps;
  themeToggler?: any;
  themeMode?: any;
}

const Topbar = ({ themeMode, themeToggler, className, onSidebarOpen, pages, t, ...rest }: Props): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [openedPopoverId, setOpenedPopoverId] = useState<string | null>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>, popoverId: string | null): void => {
    setAnchorEl(event.target);
    setOpenedPopoverId(popoverId);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
    setOpenedPopoverId(null);
  };

  const { productInfo, company, appPages } = pages;

  const SimpleMenuGroup = ({ item }: MenuGroupProps): JSX.Element => (
    <List disablePadding>
      {item.pages.map((page, i) => (
        <ListItem disableGutters key={i} className={classes.menuGroupItem}>
          <Link href={page.href}>
            <Typography
              variant="body1"
              className={clsx(classes.navLink, 'submenu-item')}
              color="textSecondary"
              onClick={handleClose}
            >
              {t(page.title)}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );

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

  const AppPages = (): JSX.Element => {
    const { subpages: appPagesItems } = appPages.children;
    return (
      <div className={classes.menu}>
        <div className={classes.menuItem}>
          <SimpleMenuGroup item={appPagesItems} />
        </div>
      </div>
    );
  };

  const renderPages = (id: string): JSX.Element | null => {
    switch (id) {
      case 'product-info-pages':
        return <ProductInfoPages />;
      case 'company-pages':
        return <CompanyPages />;
      case 'app-pages':
        return <AppPages />;
      default:
        return null;
    }
  };

  return (
    <AppBar className={classes.toolbar} {...rest}>
      <div className={classes.toolbarContent}>
        <div style={{ marginRight: '10vh' }}>
          <Link href="/">
            <div className={classes.logoContainer}></div>
          </Link>
        </div>

        <Hidden smDown>
          <List disablePadding className={classes.navigationContainer}>
            {[productInfo, company].map((page, i) => (
              <ListItem key={page.id}>
                <div
                  aria-describedby={page.id}
                  onClick={e => handleClick(e, page.id)}
                  className={clsx(
                    classes.listItem,
                    classes.displayFlexAlignCenter,
                    openedPopoverId === page.id ? classes.listItemActive : '',
                  )}
                >
                  <Typography variant="body1" color="textPrimary" className={clsx(classes.listItemText, 'menu-item')}>
                    {t(page.title)}
                  </Typography>
                  <ListItemIcon className={classes.listItemIcon}>
                    <ExpandMoreIcon
                      className={openedPopoverId === page.id ? classes.expandOpen : ''}
                      fontSize="small"
                    />
                  </ListItemIcon>
                </div>

                <Popover
                  elevation={1}
                  id={page.id}
                  open={openedPopoverId === page.id}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  classes={{ paper: classes.popover }}
                >
                  <div>{renderPages(page.id)}</div>
                </Popover>
              </ListItem>
            ))}
            <ListItem>
              <Link href="https://checkpoint.immunie.net/">
                <Typography
                  variant="body1"
                  color="textPrimary"
                  className={clsx(classes.listItemText, classes.Link, 'menu-item')}
                  style={{ cursor: 'pointer' }}
                >
                  Checkpoint
                </Typography>
              </Link>
            </ListItem>
            {/* <Divider orientation="vertical" flexItem className={classes.divider} />
            <DarkModeToggler className={classes.themeToggler} themeMode={themeMode} onClick={() => themeToggler()} /> */}
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <div className={classes.iconCointainer} onClick={handleOpenModal}>
              <ChatIcon className={classes.icon} />
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleCloseModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <div>
                    <Formik
                      initialValues={{
                        name: '',
                        email: '',
                        message: '',

                        submit: null,
                      }}
                      validationSchema={Yup.object().shape({
                        email: Yup.string()
                          .email('Email invalid')
                          .max(255)
                          .required(t('CONTACT_FORM_TOPBAR_E_MAIL')),
                        name: Yup.string()
                          .max(255)
                          .required(t('CONTACT_FORM_TOPBAR_NAME')),
                        message: Yup.string()
                          .max(255)
                          .required(t('CONTACT_FORM_TOPBAR_MESSAGE')),
                      })}
                      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                          await axios({
                            method: 'POST',
                            url: 'https://formspree.io/f/mgepbajk',
                            data: {
                              name: values.name,
                              email: values.email,
                              message: values.message,
                            },
                          });

                          setSubmitting(false);
                          values.name = '';
                          values.email = '';
                          values.message = '';
                          alert(t('CONTACT_FORM_TOPBAR_CONFIRMATION_MESSAGE'));
                          handleCloseModal();
                        } catch (err) {
                          console.error(err);
                          setStatus({ success: false });
                          setErrors({ submit: err.message });
                          setSubmitting(false);
                          alert(t('CONTACT_FORM_TOPBAR_ERROR_MESSAGE'));
                        }
                      }}
                    >
                      {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        touched,
                        values,
                        setFieldValue,
                      }) => (
                        <form noValidate onSubmit={handleSubmit} {...rest}>
                          <Box mt={2}>
                            <Typography style={{ textAlign: 'center' }}>
                              <span className={classes.emailFormTitle1}>{t('CONTACT_FORM_TOPBAR_TITLE_1')}</span> 😉 -{' '}
                              <span className={classes.emailFormTitle2}>{t('CONTACT_FORM_TOPBAR_TITLE_2')}</span>
                            </Typography>
                          </Box>
                          <TextField
                            error={Boolean(touched.email && errors.email)}
                            inputProps={{
                              style: { color: 'black' },
                            }}
                            InputLabelProps={{
                              style: { color: '#8D8D8D' },
                            }}
                            fullWidth
                            helperText={touched.email && errors.email}
                            label={t('CONTACT_FORM_TOPBAR_E_MAIL')}
                            margin="normal"
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="email"
                            value={values.email}
                            variant="outlined"
                          />
                          <TextField
                            error={Boolean(touched.name && errors.name)}
                            inputProps={{
                              style: { color: 'black' },
                            }}
                            InputLabelProps={{
                              style: { color: '#8D8D8D' },
                            }}
                            fullWidth
                            helperText={touched.name && errors.name}
                            label={t('CONTACT_FORM_TOPBAR_NAME')}
                            margin="normal"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            type="name"
                            value={values.name}
                            variant="outlined"
                          />
                          <TextField
                            error={Boolean(touched.message && errors.message)}
                            fullWidth
                            inputProps={{
                              style: { color: 'black' },
                            }}
                            InputLabelProps={{
                              style: { color: '#8D8D8D' },
                            }}
                            helperText={touched.message && errors.message}
                            label={t('CONTACT_FORM_TOPBAR_MESSAGE')}
                            margin="normal"
                            name="message"
                            multiline
                            rows={4}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.message}
                            variant="outlined"
                          />
                          {errors.submit && (
                            <Box mt={3}>
                              <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                          )}
                          <Box mt={2} display="flex" justifyContent="center" width={'100%'}>
                            <Button
                              color="primary"
                              disabled={isSubmitting}
                              type="submit"
                              variant="contained"
                              className={classes.sendBtn}
                            >
                              {t('CONTACT_FORM_TOPBAR_SEND_BTN')}
                            </Button>
                          </Box>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </Fade>
            </Modal>
            <ListItem className={classes.listItem}>
              <SelectLang />
            </ListItem>
            <ListItem>
              <div
                aria-describedby={'app-pages'}
                onClick={e => handleClick(e, 'app-pages')}
                className={clsx(
                  classes.listItem,
                  classes.displayFlexAlignCenter,
                  openedPopoverId === 'app-pages' ? classes.listItemActive : '',
                )}
              >
                <Image width={80} height={80} src="/static/images/icons/bg-avatar.svg" />
                <ListItemIcon className={classes.listItemIcon}>
                  <ExpandMoreIcon
                    className={openedPopoverId === 'app-pages' ? classes.expandOpen : ''}
                    fontSize="small"
                  />
                </ListItemIcon>
              </div>

              <Popover
                elevation={1}
                id={'app-pages'}
                open={openedPopoverId === 'app-pages'}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                classes={{ paper: classes.popover }}
              >
                <div>{renderPages('app-pages')}</div>
              </Popover>
            </ListItem>
          </List>
        </Hidden>
        <Hidden mdUp>
          <IconButton className={classes.iconButton} onClick={() => onSidebarOpen()} aria-label="Menu">
            <MenuIcon />
          </IconButton>
        </Hidden>
      </div>
    </AppBar>
  );
};

export default withTranslation(['common', 'header'])(Topbar);
