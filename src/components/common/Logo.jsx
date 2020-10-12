import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoLetter from '../../assets/logo.svg';

function Logo({ invert = false, size = '28px' }) {
  return (
    <Link to='/' id='logo'>
      <Div invert={invert} size={size}>
        <img src={logoLetter} alt='logo' />
        <h1>CONSULOAN</h1>
      </Div>
    </Link>
  );
}

export default Logo;

export const Div = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 1.5rem;
    margin-right: 0.7em;
  }

  h1 {
    font-size: ${p => p.size};
    font-weight: 700;
    color: ${p => (p.invert ? 'white' : 'var(--main)')};
  }
`;
