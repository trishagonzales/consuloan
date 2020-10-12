import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import News from './News';
import Contact from './Contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/news' component={News} />
        <Route path='projects' component={Projects} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */
    --main: #091F4A;
    --accent: #F2B705;
    --darkMain: #071A3D;
    --fg: #383838;
    --fg2: #787778;
    --bg: #E7E7E7;
    --bg2: #D0D0D0;
    --overlay: linear-gradient(rgba(9, 31, 74, 0.8), rgba(9, 31, 74, 0.7));
    --overlay2: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));

    /* BREAKPOINTS */
    --phone: 450px;
    --narrow: 600px;
    --tablet: 768px;
    --laptop: 990px;
    --desktop: 1900px;

    /* TRANSITION */
    --transitionAll: all ease-out 200ms;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    overflow-x: hidden;
  }

  body {
    font-family: Calibri, sans-serif;
    font-size: 14px;
    color: var(--fg);

    a {
      color: var(--fg);
      text-decoration: none;
    }
    li {
      list-style-type: none;
    }
    button, input, textarea {
      border: none;
      :focus {
        outline: none;
      }
    }
    input, textarea {
      padding: 0.8em 1em;
      border: 1px solid #ccc;
      resize: none;
      :focus {
        border-color: #777;
      }
    }

    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 30px;
    }

    .accent-color {
      color: var(--accent);
    }
    .bold-text {
      font-weight: bold;
    }
  }
`;
