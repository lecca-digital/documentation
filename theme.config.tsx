import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 'bold' }}>Lecca.io</span>,
  editLink: {
    text: '',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  feedback: {
    content: '',
  },
  footer: {
    text: <Footer />,
  },
  search: {
    placeholder: 'Search Lecca.io...',
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s - Lecca.io',
      defaultTitle: 'Lecca.io - Workflow Automation',
    };
  },
  head: (
    <>
      <Analytics />
    </>
  ),
};

export default config;
