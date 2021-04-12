import React from 'react';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: 'white',
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  swiperSlide: {
    width: 'auto',
  },
  swiperWrapper: {
    marginBottom: theme.spacing(7),
  },
  swiperContainer: {
    '& .swiper-pagination-bullet-active': {
      background: 'white',
    },
  },
}));

const Reviews = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  React.useEffect(() => {
    new Swiper('.review-swiper.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.review-swiper.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span className={classes.textWhite}>
            {t('REVIEWS_TITLE')}
          </span>
        }
      />
      <div
        className={clsx(
          'review-swiper',
          'swiper-container',
          classes.swiperContainer,
        )}
      >
        <div className={clsx('swiper-wrapper', classes.swiperWrapper)}>
          {data.map((item: any, index: number) => (
            <div
              className={clsx('swiper-slide', classes.swiperSlide)}
              key={index}
            >
              <Typography
                variant="h6"
                align="center"
                component="p"
                className={clsx(classes.textWhite, classes.title)}
              >
                <i>"{t(item.feedback)}"</i>
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                component="p"
                className={clsx(classes.textWhite)}
                gutterBottom
              >
                <i>{t(item.authorName)}</i>
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                component="p"
                className={clsx(classes.textWhite)}
              >
                <i>{t(item.authorOccupation)}</i>
              </Typography>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

export default withTranslation('healthCarePage')(Reviews);
