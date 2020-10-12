import React from 'react';
import styled from 'styled-components';

export function Content({ children }) {
  return <ContentStyle className='content'>{children}</ContentStyle>;
}

const ContentStyle = styled.div`
  max-width: var(--laptop);
  margin: auto;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenterHorizontal = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CenterVertical = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ColumnContainer = ({ children, className, width, height }) => {
  return <ColumnContainerStyle {...{ className, width, height }}>{children}</ColumnContainerStyle>;
};

export const ColumnContainerStyle = styled.div`
  width: ${p => (p.width ? p.width : '100%')};
  height: ${p => (p.height ? p.height : '100%')};
  display: flex;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
  height: 100%;
`;

export const Row = styled.div`
  width: 100%;
  display: block;
`;
