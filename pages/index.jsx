import React, { Fragment } from 'react';
import Head from 'next/head';
import { injectGlobal } from 'styled-components';

import Intro from '../components/Intro/Intro';
import Members from '../components/Members/Members';
import Events from '../components/Events/Events';
import Subscribe from '../components/Subscribe/Subscribe';
import Footer from '../components/Footer/Footer';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: Fira Code, sans-serif;
    color: #292d35;
  }
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    overflow: hidden;
  }
  .column {
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    bottom: 0;
    cursor: pointer;
    transition: opacity 200ms ease;
    background: transparent;
    border: none;
  }
  .column:hover {
    opacity: 1;
  }
  .leftColumn {
    left: 0;
  }
  .rightColumn {
    right: 0;
  }
  .arrowButtonReturn {
    height: 48px;
    width: 48px;
    position: absolute;
    top: 8;
    left: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: opacity 200ms ease;
    opacity: 1;
    z-index: 1000;
  }
  .arrowButton {
    background-color: rgba(66, 66, 66, 0.54);
    border-radius: 28px;
    position: absolute;
    top: 50%;
    margin-top: -28px;
    height: 56px;
    width: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 200ms ease;
    opacity: 1;
  }
  .arrowButtonHide {
    opacity: 0;
  }
  .arrowButtonLeft {
    left: 28px;
  }
  .arrowButtonRight {
    right: 28px;
  }
  .image {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 500ms ease, transform 500ms ease;
  }
  .imageOpen {
    visibility: initial;
    opacity: 1;
    transform: translateX(0px);
  }
`;

const Index = () => (
  <Fragment>
    <Head>
      <title>
        {'JavaScript Workshops | JSW'}
      </title>
      <link rel="icon" type="image/png" href="/static/img/favicon.png" />
      <link href="https://unpkg.com/firacode/distr/fira_code.css" rel="stylesheet" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Intro />
    <Members />
    <Events />
    <Subscribe />
    <Footer />
  </Fragment>
);

export default Index;
