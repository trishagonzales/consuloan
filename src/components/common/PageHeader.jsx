import React from 'react';
import styled from 'styled-components';
import pageHeaderImg from '../../assets/page-header.jpg';

function PageHeader({ children }) {
  return (
    <Div>
      <div>{children}</div>
    </Div>
  );
}

export default PageHeader;

export const Div = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--overlay), url(${pageHeaderImg});
  background-size: cover;
  background-position: center;
  color: white;
  h1 {
    font-size: 30px;
  }
`;
