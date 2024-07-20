import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from './components/icons';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
      <Image
        src="/images/logo.jpg"
        width={30}
        height={30}
        alt="Lecca.io Logo"
        style={{
          borderRadius: '50%',
          marginRight: '8px',
          width: '25px',
          height: '25px',
        }}
      />
      <span style={{ fontSize: '20px' }}>Lecca.io</span>
    </div>
  ),
  primaryHue: 250,
  primarySaturation: 52,
  toc: {
    backToTop: true,
    float: true,
  },
  editLink: {
    text: '',
  },
  navigation: true,
  navbar: {
    extraContent: (
      <div
        style={{
          marginLeft: '8px',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Link href="https://x.com/lecca_io">
          <Icons.xTwitter />
        </Link>
        <Link href="https://www.linkedin.com/company/lecca-io">
          <Icons.linkedIn />
        </Link>
        <Link href="https://www.youtube.com/@lecca_io">
          <Icons.youtube />
        </Link>
      </div>
    ),
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
    placeholder: 'Search Docs...',
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s - Lecca.io',
      defaultTitle: 'Lecca.io - AI Agents and Workflow Automation',
    };
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <Analytics />
    </>
  ),
};

export default config;
