import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import teamImg from '../../assets/team.jpg';

export function TeamCard() {
  return (
    <Div>
      <img className='avatar' src={teamImg} alt='team' />
      <p className='name'>{`${faker.name.firstName()} ${faker.name.lastName()}`}</p>
      <p className='role'>{faker.name.jobTitle()}</p>
      <div className='social-media'>
        <i className='fas fa-facebook-f'></i>
        <i className='fas fa-twitter'></i>
        <i className='fas fa-instagram'></i>
        <i className='fas fa-linkedin'></i>
      </div>
    </Div>
  );
}

export const Div = styled.div`
  .avatar {
    width: 100%;
    height: 200px;
    object-fit: contain;
    object-position: center;
  }

  .name,
  .role {
    margin: 0.6m auto;
  }

  .name {
    color: var(--main);
    font-size: 18px;
    font-weight: bold;
  }

  .social-media {
    display: flex;
    i {
      flex: 1;
      padding: 0.5em;
      color: #bbb;
      cursor: pointer;
      :hover {
        border: 1px solid var(--fg2);
      }
    }
  }
`;
