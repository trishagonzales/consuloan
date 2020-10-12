import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/about.jpg';

import PageHeader from './common/PageHeader';
import { ColumnContainer, Column, CenterVertical, Content } from './common/Layout';
import { TeamCard } from './Team/TeamCard';

function About() {
  return (
    <Div>
      <PageHeader>
        <h1>ABOUT US</h1>
      </PageHeader>
      <section id='overview'>
        <ColumnContainer>
          <Column className='image'></Column>
          <Column className='text'>
            <CenterVertical>
              <div>
                <h3>
                  <span className='accent-color'>We advise you</span>, you call the right decision!
                </h3>
                <p className='description'>
                  Quis aliqua laboris mollit esse sint reprehenderit nisi laboris incididunt irure.
                  Culpa non proident ad cupidatat ullamco sunt minim. Excepteur eiusmod fugiat velit
                  reprehenderit nostrud ut proident Lorem exercitation irure.
                </p>
                <div className='stats'>
                  <div>
                    <i className='fas fa-headset'></i>
                    <p className='count'>110</p>
                    <p className='label'>Consultants</p>
                  </div>
                  <div>
                    <i className='fas fa-award'></i>
                    <p className='count'>30</p>
                    <p className='label'>Awards Winning</p>
                  </div>
                  <div>
                    <i className='fas fa-heartbeat'></i>
                    <p className='count'>800</p>
                    <p className='label'>Satisfied Customers</p>
                  </div>
                </div>
              </div>
            </CenterVertical>
          </Column>
        </ColumnContainer>
      </section>

      <section id='team'>
        <Content>
          <h2>MEET THE TEAM</h2>

          <div className='cards'>
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </Content>
      </section>

      <div className='history'>
        <Content>
          <h2>OUR HISTORY</h2>
        </Content>
      </div>
    </Div>
  );
}

export default About;

export const Div = styled.div`
  h2 {
    text-align: center;
  }

  #overview {
    height: 320px;
    color: var(--main);

    .image {
      background: url(${aboutImg}) no-repeat center;
      background-size: cover;
    }

    .text {
      padding: 2em;
      background: #f3f3f3;

      h3 {
        font-size: 25px;
      }
      .description {
        max-width: 500px;
        margin-top: 1.5em;
        margin-bottom: 3em;
        line-height: 1.5em;
      }

      .stats {
        width: 90%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        i {
          font-size: 23px;
        }
        .count {
          margin: 0.4em 0;
          color: var(--accent);
          font-size: 28px;
          font-weight: bold;
        }
        .count:nth-of-type(2) {
          margin: 0 1em;
        }
      }
    }
  }

  #team {
    margin: 3% 0;

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      /* grid-template-rows: auto; */
    }
  }
`;
