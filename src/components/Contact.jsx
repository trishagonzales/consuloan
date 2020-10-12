import React from 'react';
import styled from 'styled-components';
import mapImg from '../assets/map.jpg';

import PageHeader from './common/PageHeader';
import { Button } from './common/Button';
import { Content } from './common/Layout';

function Contact() {
  return (
    <Div>
      <PageHeader>
        <h1>CONTACT</h1>
      </PageHeader>
      <Content>
        <div className='map'>
          <img src={mapImg} alt='location map' />
        </div>
        <div className='form'>
          <h2>Get In Touch With Us</h2>
          <input placeholder='Name' />
          <input placeholder='Email' />
          <textarea placeholder='Message' />
          <Button>SEND MESSAGE</Button>
        </div>
      </Content>
    </Div>
  );
}

export default Contact;

export const Div = styled.div`
  .content {
    margin: 3em auto;
    display: flex;
    align-items: center;
  }
  .map {
    flex: 50%;
    img {
      max-width: 400px;
    }
  }
  .form {
    flex: 50%;
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 35px;
      color: var(--main);
    }
    input {
      margin: 0.5em 0;
    }
    textarea {
      height: 180px;
      margin: 0.5em 0;
    }
    button {
      margin: 1em 0;
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      .form {
        margin-top: 2em;
      }
    }
  }
`;
