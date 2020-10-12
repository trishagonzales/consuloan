import React from 'react';
import styled from 'styled-components';
import headerImg from '../../assets/home-header.jpg';
import teamImg from '../../assets/team.jpg';
import sampleVideo from '../../assets/sample-video.mp4';

import Features from './Features';
import RequestCallBack from './RequestCallBack';
import { Button } from '../common/Button';
import { Content, Center } from '../common/Layout';
import { Testimonials } from './Testimonials';

function Home() {
  return (
    <Div>
      <section id='header'>
        <Content>
          <div className='text'>
            <p>KEEPING YOUR WEB PRESENCE</p>
            <h1>
              WE <span className='accent-color'>HAVE POWER</span> TO LET YOUR BUSINESS GROW
            </h1>
            <Button primary>OUR COMPANY</Button>
            <Button>OUR SERVICES</Button>
          </div>
        </Content>
      </section>

      <Features />

      <section id='about'>
        <Content>
          <Center>
            <video width='400' height='225' controls>
              <source src={sampleVideo} type='video/mp4' />
            </video>
          </Center>
          <div className='text'>
            <h3>
              <span className='accent-color'>30 Years</span> Of Successful Business Consulting
            </h3>
            <p>
              Minim officia quis exercitation consequat in ex quis deserunt esse fugiat sit culpa.
              Quis occaecat occaecat nostrud duis velit cupidatat consectetur ullamco anim do do
              sunt enim. Eiusmod exercitation et culpa minim adipisicing excepteur. Consequat cillum
              id nostrud laborum reprehenderit sit aliqua tempor. Eu exercitation fugiat excepteur
              officia voluptate sint do labore irure dolore dolor consequat irure. Cillum enim
              aliquip et exercitation eiusmod.
            </p>
            <Button primary>READ MORE</Button>
          </div>
        </Content>
      </section>

      <Testimonials />

      <section id='news'></section>

      <RequestCallBack />
    </Div>
  );
}

export default Home;

export const Div = styled.div`
  #header {
    height: 500px;
    position: relative;
    background: url(${headerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: var(--main);
    .text {
      max-width: 50%;
      position: absolute;
      top: 10%;
      p {
        font-size: 18px;
      }
      h1 {
        margin-bottom: 0.5em;
      }
      button:first-of-type {
        margin-right: 1em;
      }
    }
  }

  #about {
    height: 350px;
    background: var(--overlay), url(${teamImg}) no-repeat center;
    background-size: cover;
    color: white;
    .content {
      height: 100%;
      display: flex;
      align-items: center;
      & > div {
        flex: 50%;
      }
    }
    .text {
      h3 {
        font-size: 20px;
      }
      p {
        max-width: 500px;
        margin: 1.5em 0;
        line-height: 1.4em;
      }
    }
  }
`;
