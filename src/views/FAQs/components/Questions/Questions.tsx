import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import { CurveSvgCut } from 'components/atoms';
import Image from 'next/image';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    minHeight: 400,
    padding: 40,
  },
  mainTitle: {
    fontSize: 28,
    textAlign: 'center',
    color: 'white',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  gridContainer: {
    marginTop: 10,
    maxWidth: 900,
    margin: '0 auto',
  },
  accordionTitle: {
    fontWeight: 800,
    fontStyle: 'italic',
    fontSize: 28,
  },
  divider: {
    border: 'none',
    borderTop: '3px dotted #8D8D8D',
    color: '#fff',
    backgroundColor: '#fff',
    height: '1px',
    width: '100%',
  },
  imageContainer: {
    marginRight: 10,
    display: 'flex',
  },
}));

const Questions = ({ className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <CurveSvgCut position="topLeft" color="#F6F6F6" />
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_1')} contentText={t('USER_FAQ_ANSWER_1')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_2')} contentText={t('USER_FAQ_ANSWER_2')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_3')} contentText={t('USER_FAQ_ANSWER_3')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_4')} contentText={t('USER_FAQ_ANSWER_4')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_5')} contentText={t('USER_FAQ_ANSWER_5')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_6')} contentText={t('USER_FAQ_ANSWER_6')} />
        </Grid>
        <hr className={classes.divider} />
        <Grid item container xs={12} data-aos="fade-up" alignItems="center" justify="center">
          <ControlledAccodion sumaryText={t('USER_FAQ_QUESTION_7')} contentText={t('USER_FAQ_ANSWER_7')} />
        </Grid>
      </Grid>
    </div>
  );
};

const ControlledAccodion = ({ sumaryText, contentText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  return (
    <Accordion
      elevation={0}
      onChange={() => {
        setIsOpen(!isOpen);
      }}
    >
      <AccordionSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
        // expandIcon={{ orderIcon: { order: -1 } }}
      >
        <div className={classes.imageContainer}>
          <Image
            width={40}
            height={40}
            src={isOpen ? '/static/images/icons/expanded_icon.svg' : '/static/images/icons/contract_icon.svg'}
          />
        </div>
        <Typography className={classes.accordionTitle}>{sumaryText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{contentText}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default withTranslation('faqsPage')(Questions);
