import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.8em 1.2em;
  background: ${p => (p.primary ? 'var(--accent)' : 'var(--main)')};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${p => (p.primary ? 'var(--main)' : 'white')};
  cursor: pointer;
  :hover {
    filter: brightness(92%);
  }
`;
