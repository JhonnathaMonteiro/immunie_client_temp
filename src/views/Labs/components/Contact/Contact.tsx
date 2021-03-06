import React from 'react';
import { ContactForm } from 'common';
import { CardBase } from 'components/organisms';

const Contact = ({ className, ...rest }: ViewComponentProps): JSX.Element => (
  <div className={className} {...rest}>
    <CardBase withShadow data-aos="fade-up">
      <ContactForm />
    </CardBase>
  </div>
);

export default Contact;
