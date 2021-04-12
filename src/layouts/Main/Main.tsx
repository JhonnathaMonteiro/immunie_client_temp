import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    productInfo: {
      title: 'PRODUCT_INFO',
      id: 'product-info-pages',
      children: {
        subpages: {
          groupTitle: 'PRODUCT_INFO',
          pages: [
            {
              title: 'PRODUCT_INFO_HOW_IT_WORKS',
              href: '/products-info/how-it-works',
            },
            {
              title: 'PRODUCT_INFO_INDUSTRIES_AND_SECTORS',
              href: '/products-info/industries-and-sectors',
            },
            {
              title: 'PRODUCT_INFO_PRIVACY_AND_COMPLIANCE',
              href: '/products-info/privacy-and-compliance',
            },
            {
              title: 'PRODUCT_INFO_FAQS',
              href: '/products-info/faqs',
            },
          ],
        },
      },
    },
    company: {
      title: 'COMPANY',
      id: 'company-pages',
      children: {
        subpages: {
          groupTitle: 'COMPANY',
          pages: [
            {
              title: 'COMPANY_ABOUT_US',
              href: '/company/about-us',
            },
            {
              title: 'COMPANY_NEWS',
              href: '/company/news',
            },
            {
              title: 'COMPANY_BLOGS',
              href: '/company/blogs',
            },
            {
              title: 'COMPANY_PRIVACY_POLICY',
              href: '/company/privacy-policy',
            },
            {
              title: 'COMPANY_TERMS_AND_CONDITIONS',
              href: '/company/toc',
            },
          ],
        },
      },
    },
    services: {
      title: 'SERVICES',
      id: 'services-pages',
      children: {
        subpages: {
          groupTitle: 'SERVICES',
          pages: [
            {
              title: 'SERVICES_FOR_USERS',
              href: '/services/for-users',
            },
            {
              title: 'SERVICES_FOR_SCHOOLS',
              href: '/services/for-schools',
            },
            {
              title: 'SERVICES_FOR_HCPS',
              href: '/services/for-hcps',
            },
            {
              title: 'SERVICES_CONTACT_US',
              href: '/services/contact-us',
            },
          ],
        },
      },
    },
    appPages: {
      title: 'APP',
      id: 'app-pages',
      children: {
        subpages: {
          groupTitle: 'APPS',
          pages: [
            {
              title: 'FOR_USER',
              href: 'https://app.immunie.net/',
            },
            {
              title: 'FOR_SCHOOLS',
              href: 'https://secure.immunie.net/',
            },
            {
              title: 'FOR_HCPS',
              href: 'https://www.portal.immunie.net/',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} />
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" pages={pages} />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

export default Main;
