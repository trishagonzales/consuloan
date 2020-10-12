import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from './common/Button';
import { Content } from './common/Layout';
import Logo from './common/Logo';

function Footer() {
  return (
    <Div>
      <div className='top'>
        <Content>
          <div className='company-info'>
            <Logo invert />
            <p className='description'>
              Consectetur mollit ullamco minim sint enim in aliqua quis aliquip Lorem consectetur.
            </p>
            <i className='fas fa-map-marker-alt'></i>
            <i className='fas fa-phone-alt'></i>
            <i className='fas fa-envelope'></i>
          </div>

          <div className='navigation'>
            <h3>Our Links</h3>
            <ul>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/'>Home</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/projects'>Projects</Link>
              </li>
            </ul>
            <ul>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/news'>News</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/support'>Support</Link>
              </li>
              <li>
                <i className='fas fa-angle-double-right' />
                <Link to='/careers'>Careers</Link>
              </li>
            </ul>
          </div>

          <div className='newsletter'>
            <h3>Newsletter</h3>
            <p>Subscribe our newsletter to get notification about new updates.</p>
            <input placeholder='Enter your email' />
            <Button primary>SUBSCRIBE</Button>
          </div>
        </Content>
      </div>

      <div className='bottom'>
        <Content>
          <div className='copyright'>
            <p>
              @2020 <span className='accent-color'>Consuloan</span>. All rights reserved.
            </p>
          </div>
          <div className='social-media'>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-vimeo'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-skype'></i>
          </div>
        </Content>
      </div>
    </Div>
  );
}

export default Footer;

export const Div = styled.div`
  width: 100vw;
  color: #999;
  h3 {
    color: white;
  }

  .top {
    background: var(--main);
    .content {
      padding: 1.5rem 0;
      display: flex;
      flex-wrap: wrap;
    }

    .company-info {
      min-width: 275px;
      flex: 1.5;
      #logo {
        margin-bottom: 1rem;
      }
      p {
        margin: 1em 0;
      }
      i {
        color: var(--accent);
      }
    }

    .navigation {
      min-width: 210px;
      flex: 1;
      margin: 0 1em;
      ul {
        display: inline-block;
      }
      ul:nth-of-type(2) {
        margin-left: 1rem;
      }
      li {
        margin: 0.8em;
        :hover {
          color: var(--accent);
          a {
            color: var(--accent);
          }
        }
        a {
          margin-left: 0.5em;
          color: #999;
        }
      }
    }

    .newsletter {
      max-width: 450px;
      min-width: 350px;
      flex: 1.5;
      p {
        margin: 0.7rem 0;
      }
      input {
        width: 100%;
        background: rgba(100, 100, 100, 0.4);
        border: none;
      }
      button {
        width: 100%;
        margin-top: 0.5em;
      }
    }
  }

  .bottom {
    background: var(--darkMain);
    .content {
      display: flex;
      align-items: center;
    }

    .copyright {
      margin-right: auto;
    }

    .social-media {
      i {
        margin: 0 1px;
        padding: 0.8rem;
        background: rgba(100, 100, 100, 0.3);
        color: #ccc;
        cursor: pointer;
        :hover {
          background: var(--accent);
          color: var(--main);
        }
      }
    }
  }

  @media (max-width: 990px) {
    .top .content {
      padding: 1rem;
    }
  }

  @media (max-width: 450px) {
  }
`;
