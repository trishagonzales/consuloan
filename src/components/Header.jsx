import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Content } from './common/Layout';
import Logo from './common/Logo';
import { Button } from './common/Button';

function Header() {
  return (
    <Div>
      <div className='top-banner'>
        <Content>
          <p>Welcome to Financial Services Consultant!</p>
          <div className='language'>English</div>
          <i className='social-media fab fa-facebook-f'></i>
          <i className='social-media fab fa-twitter'></i>
        </Content>
      </div>

      <div className='mid-banner'>
        <Content>
          <Logo />
          <div className='contact phone-email'>
            <i className='fas fa-phone'></i>
            <div>
              <p className='bold-text'>001-1234-88888</p>
              <p>info.consuloan@gmail.com</p>
            </div>
          </div>
          <div className='contact address'>
            <i className='fas fa-map-marker-alt'></i>
            <div>
              <p className='bold-text'>40 Barla Street 133/2</p>
              <p>NewYork City, US</p>
            </div>
          </div>
          <Button primary>GET A QUOTE</Button>
        </Content>
      </div>

      <nav>
        <Content>
          <NavLink activeClassName='active' to='/' exact>
            HOME
          </NavLink>
          <NavLink activeClassName='active' to='/about'>
            ABOUT US
          </NavLink>
          <NavLink activeClassName='active' to='/services'>
            SERVICES
          </NavLink>
          <NavLink activeClassName='active' to='/projects'>
            PROJECTS
          </NavLink>
          <NavLink activeClassName='active' to='/news'>
            NEWS
          </NavLink>
          <NavLink activeClassName='active' to='/careers'>
            CAREERS
          </NavLink>
          <NavLink activeClassName='active' to='/contact'>
            CONTACT
          </NavLink>
          <i className='fas fa-search search-icon'></i>
        </Content>
      </nav>
    </Div>
  );
}

export default Header;

export const Div = styled.header`
  .top-banner {
    padding: 0.5em 0;
    background: var(--bg);
    .content {
      display: flex;
      align-items: center;
    }
    p {
      margin-right: auto;
    }
  }

  .mid-banner {
    padding: 1.2em 0;
    .content {
      display: flex;
      align-items: center;
    }
    #logo {
      margin-right: auto;
    }
    .contact {
      max-width: 220px;
      margin: 0 1em;
      display: flex;
      align-items: center;
      i {
        margin: 0 1em;
        padding: 0.7em;
        border: 1px solid lightgrey;
        border-radius: 50%;
        color: var(--accent);
      }
      div {
        display: inline-block;
      }
    }
    button {
      margin-left: 1.5em;
    }
  }

  nav {
    background: var(--main);
    .content {
      display: flex;
      align-items: center;
    }
    a {
      padding: 1.2em;
      color: white;
      transition: background-color ease-out 200ms;
      :not(.active):hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    .active {
      background: var(--accent);
      color: var(--main);
    }
    .search-icon {
      margin-left: auto;
      color: white;
      cursor: pointer;
    }
  }
`;
