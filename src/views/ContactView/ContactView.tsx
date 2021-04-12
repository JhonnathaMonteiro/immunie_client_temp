import React from 'react';
import type { FC } from 'react';
// import clsx from 'clsx';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Box, Button, FormHelperText, TextField, makeStyles } from '@material-ui/core';
import { Section } from 'components/organisms';
import { SectionHeader } from 'components/molecules';
import { Image } from 'components/atoms';
import { withTranslation } from 'i18n';
// import ReCAPTCHA from "react-google-recaptcha"


import axios from 'axios';
// import Head from 'next/head'

interface ContactForm {
  className?: string;
  countryData?: any;
  t?: any;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      // justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-8),
      marginRight: theme.spacing(-8),
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '47vw',
      maxWidth: 740,
      height: '100%',
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
      height: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
  learnMoreBtn: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: "5rem",
    color: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: "bold",
    marginTop: 20,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
      color: '#FFF'
  }
  },
}));

const ContactView: FC<ContactForm> = ({ className, countryData, t, ...rest }) => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="/static/images/backgrounds/contact_us_bg.png"
              alt="Contact"
              className={classes.image}
              lazyProps={{ width: '100%' }}
            />
          </div>
          
          <div className={classes.content}>
            <Formik
              initialValues={{
                email: '',
                message: '',
                
                submit: null,
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email("Email invalid").max(255).required(t("E_MAIL_PLACEHOLDER")),
                message: Yup.string().max(255).required(t("MESSAGE_PLACEHOLDER")),
              })}
              onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                  await axios({
                    method: 'POST',
                    url: 'https://formspree.io/f/mgepbajk',
                    data: {
                      email: values.email,
                      message: values.message,
                    }
                  });

                  // // @ts-ignore
                  // recaptchaRef.current.reset();

                  // setRecaptchaSolved(false);

                  setSubmitting(false);
                  values.email = '';
                  values.message = '';
                  alert(t('CONFIRMATION_MESSAGE'))
              
                } catch (err) {
                  console.error(err);
                  setStatus({ success: false });
                  setErrors({ submit: err.message });
                  setSubmitting(false);
                  alert(t('ERROR_MESSAGE'))
                }
              }}
            >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
              <form noValidate onSubmit={handleSubmit} {...rest}>
                <Box mt={2}>
                  <SectionHeader subtitleColor="textPrimary" title={t('TITLE')} subtitle={t('SUBTITLE')} data-aos="fade-up" align="center" />
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  inputProps={{
                    style:{color: 'black'}
                  }}
                  InputLabelProps={{
                    style:{color: '#8D8D8D'}
                  }}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label={t('E_MAIL_LABEL')}
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.message && errors.message)}
                  fullWidth
                  inputProps={{
                    style:{color: 'black'}
                  }}
                  InputLabelProps={{
                    style:{color: '#8D8D8D'}
                  }}
                  helperText={touched.message && errors.message}
                  label={t('MESSAGE_LABEL')}
                  margin="normal"
                  name="message"
                  multiline
                  rows={4}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.message}
                  variant="outlined"
                />
                {/* <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LctblkaAAAAAKB9OkSmnuu-eQIijHByIXc6IE2e"
                  onChange={() => setRecaptchaSolved(true)}
                /> */}
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box mt={2}>
                  <Button color="primary" disabled={isSubmitting} type="submit" variant="contained" className={classes.learnMoreBtn}> 
                    {t('BTN_TEXT')}
                  </Button>
                </Box>
              </form>
            )}
            </Formik>
          </div>
        
        </div>
      </Section>
    </div>
    </>
  );
};

ContactView.propTypes = {
  className: PropTypes.string,
};

export default withTranslation('contactPage')(ContactView);
