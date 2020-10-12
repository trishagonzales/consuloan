import React from 'react';
import styled from 'styled-components';
import callbackImg from '../../assets/callback.jpg';
import mapImg from '../../assets/map.jpg';
import { Button } from '../common/Button';
import { Content } from '../common/Layout';

function RequestCallBack() {
  return (
    <Section>
      <img src={mapImg} alt='location map' className='map' />
      <div className='request-callback'>
        <Content>
          <h2>
            <span className='accent-color'>Request</span> a call back
          </h2>
          <p className='description'>
            Whatever specific financial, personal or investment opportunities you're looking for, be
            sure that the free consultation with one of our experts will sway you to signup!
          </p>
          <p>I WOULD LIKE TO DISCUSS :</p>
          <div className='form'>
            <input placeholder='How can we help?' />
            <input placeholder='Your Name' />
            <input placeholder='Phone Number' />
            <Button primary>SUBMIT</Button>
          </div>
        </Content>
      </div>
    </Section>
  );
}

export default RequestCallBack;

export const Section = styled.section`
  width: 100vw;
  display: flex;
  .map {
    min-width: 0;
    max-height: 350px;
    flex: 40%;
    flex-shrink: 20;
    object-fit: cover;
    object-position: center;
  }
  .request-callback {
    flex: 60%;
    padding: 1em;
    display: flex;
    align-items: center;
    background: var(--overlay), url(${callbackImg});
    color: white;
    .content {
      max-width: 500px;
      margin: 5%;
    }
    .description {
      margin: 1.5em 0;
    }
    .form {
      width: 100%;
      margin-top: 0.5em;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 0.5em;
    }
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    .request-callback {
      .content {
        margin: 5% auto;
      }
      .form {
        grid-template-columns: 1fr;
      }
    }
  }
`;
