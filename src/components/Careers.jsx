import React from 'react';
import styled from 'styled-components';
import { Button } from './common/Button';

function Careers() {
  return (
    <Div>
      <div className='header'>
        <div className='text'>
          <p>KEEPING YOUR WEB PRESENCE</p>
          <h1>Join Our Team</h1>
          <p>With over 20 years of experience we'll ensure you always get the best guidance!</p>
          <Button primary>OUR COMPANY</Button>
        </div>
      </div>

      <h2>CAREERS</h2>

      <div className='description'>
        <h2>Work with us</h2>
        <p>
          Eu qui et pariatur ex deserunt Lorem excepteur occaecat deserunt veniam amet magna
          aliquip. Dolor anim enim aliqua consectetur cillum exercitation commodo. Eu tempor nisi
          aliquip anim mollit fugiat tempor reprehenderit voluptate cupidatat dolore laboris
          consectetur. Do et eu fugiat elit tempor mollit anim nulla minim laborum. Commodo est
          laborum anim magna sit enim ullamco. Do amet nostrud occaecat minim. Voluptate excepteur
          mollit dolor anim pariatur reprehenderit ad ut.
        </p>
        <Button>CONTACT US</Button>
      </div>
    </Div>
  );
}

export default Careers;

export const Div = styled.div``;
