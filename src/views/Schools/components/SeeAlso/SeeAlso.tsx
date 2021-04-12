import React from 'react';
import clsx from 'clsx';
import Swiper from 'swiper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { withTranslation } from 'i18n';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  articleDate: {
    margin: theme.spacing(2, 0),
    cursor: 'pointer',
  },
  card: {
    boxShadow: 'none',
    border: 0,
    maxWidth: 300,
  },
  cardMedia: {
    height: 185,
  },
  swiperSlide: {
    width: 'auto',
  },
}));

const SeeAlso = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  React.useEffect(() => {
    new Swiper('.article-swiper.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: isMd ? 30 : 12,
      pagination: {
        el: '.article-swiper.swiper-container .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader label={t('SEE_ALSO_LABEL')} title={t('SEE_ALSO_TITLE')} align="left" />
      <div className="article-swiper swiper-container">
        <div className="swiper-wrapper">
          {data.map((item: any, index: number) => (
            <div className={clsx('swiper-slide', classes.swiperSlide)} key={index}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}>
                  <Image {...item.cover} lazyProps={{ width: '100%', height: '100%' }} />
                </CardMedia>
                <CardContent>
                  <Link href={item.href}>
                    <Typography variant="body1" color="primary" component="p" className={classes.articleDate}>
                      <i>{t(item.author)}</i>&nbsp;|&nbsp;
                      <i>{t(item.date)}</i>
                    </Typography>
                  </Link>
                  <Typography variant="h6" color="textPrimary" component="p">
                    {t(item.title)}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
  );
};

export default withTranslation('schoolPage')(SeeAlso);
