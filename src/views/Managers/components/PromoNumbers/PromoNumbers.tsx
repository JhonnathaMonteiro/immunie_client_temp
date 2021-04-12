import React from 'react';
import { SwiperNumber } from 'components/molecules';
import { withTranslation } from 'i18n';

const PromoNumbers = ({ data, className, t, ...rest }: ViewComponentProps): JSX.Element => (
  <div className={className} {...rest}>
    <SwiperNumber items={data.map(item => ({title: t(item.title), number: item.number}))} />
  </div>
);

export default withTranslation('managersPage')(PromoNumbers);
