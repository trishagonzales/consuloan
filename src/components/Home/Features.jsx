import React from 'react';
import styled from 'styled-components';
import { Content } from '../common/Layout';

function Features() {
  return (
    <Section id='features'>
      <Content>
        <div className='title'>
          <h2>Our Industry</h2>
          <p>
            We help organizations work smarter and grow faster. Reach out to us to build effective
            organizations, reduce costs, manage risk and regulations and leverage talent.
          </p>
        </div>

        <div className='grid'>
          <div className='block'>
            <i className='fas fa-chart-pie'></i>
            <h3>Corporate Finance </h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
          <div className='block'>
            <i className='fas fa-chart-bar'></i>
            <h3>Economic Consulting</h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
          <div className='block'>
            <i className='fas fa-bell'></i>
            <h3>Forensic and Litigation</h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
          <div className='block'>
            <i className='fas fa-microphone-alt'></i>
            <h3>Strategic Communications</h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
          <div className='block'>
            <i className='fas fa-tv'></i>
            <h3>Technology Consulting</h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
          <div className='block'>
            <i className='fas fa-heartbeat'></i>
            <h3>Healthcare Consulting</h3>
            <p>
              Sunt sint officia quis nisi voluptate enim culpa eu sint reprehenderit commodo eiusmod
              veniam elit. Ad proident reprehenderit laboris nostrud excepteur Lorem nostrud quis
              sit ex ad.
            </p>
          </div>
        </div>
      </Content>
    </Section>
  );
}

export default Features;

export const Section = styled.section`
  padding: 2% 0 4% 0;

  .title {
    padding: 3em 1em;
    display: flex;
    align-items: center;
    h2 {
      margin-right: auto;
      flex: 1;
    }
    p {
      flex: 1;
      color: var(--fg2);
    }
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 0.8rem;
  }
  .block {
    padding: 0.7em;
    border: 1px solid #eee;
    i {
      text-align: center;
      font-size: 22px;
      color: var(--accent);
    }
    h3 {
      margin: 0.4em 0;
      color: var(--main);
    }
    p {
      color: var(--fg2);
    }
  }
`;
