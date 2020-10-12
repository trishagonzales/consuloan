import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import avatarImg from '../../assets/avatar.png';

import { Content } from '../common/Layout';

export function Testimonials() {
  return (
    <Section id='testimonials'>
      <Content>
        <i className='fas fa-quote-left'></i>
        <h3>2000+ Happy Client</h3>
        <p className='comment'>
          "We worked with Consuloan. Our representative was very knowledgeable and helpful.
          Consuloan made a number of suggestions to help improve our systems. Consuloan explained
          how things work and why it would help. We are pleased with the result and we definitely
          highly recommend Consuloan."
        </p>
        <div className='users'>
          <div className='user'>
            <img className='avatar' src={avatarImg} />
            <div className='name'>{`${faker.name.firstName()} ${faker.name.lastName()}`}</div>
            <div className='role'>{faker.name.jobTitle()}</div>
          </div>
          <div className='user'>
            <img className='avatar' src={avatarImg} />
            <div className='name'>{`${faker.name.firstName()} ${faker.name.lastName()}`}</div>
            <div className='role'>{faker.name.jobTitle()}</div>
          </div>
          <div className='user'>
            <img className='avatar' src={avatarImg} />
            <div className='name'>{`${faker.name.firstName()} ${faker.name.lastName()}`}</div>
            <div className='role'>{faker.name.jobTitle()}</div>
          </div>
        </div>
      </Content>
    </Section>
  );
}

export const Section = styled.section`
  margin: 4% 0;
  text-align: center;

  .content {
    max-width: 500px;
  }

  i {
    margin-bottom: 10px;
    color: var(--accent);
    font-size: 25px;
  }

  h3 {
    color: var(--main);
    font-size: 20px;
  }

  .comment {
    margin-top: 1em;
    font-size: 14px;
    line-height: 1.4em;
  }

  .users {
    width: 100%;
    margin: auto;
    display: flex;

    .avatar {
      width: 30px;
      height: 30px;
      margin: auto;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }

    .name {
      color: var(--main);
      font-size: 12px;
      font-weight: bold;
    }

    .role {
      font-size: 12px;
    }
  }
`;
