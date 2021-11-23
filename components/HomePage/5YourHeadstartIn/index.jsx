import React from 'react';
import Button from 'common-util/Button';
import Header from 'common-util/Header';
import { SectionFive } from './styles';

const LIST = [
  {
    desc: 'Leverage your Python skills into decentralized app development. More languages to follow.',
    imageUrl: '/images/common/python.png',
  },
  {
    desc: 'Enjoy the flexibility and recognition of open source.',
    imageUrl: '/images/common/github-large.svg',
  },
  {
    desc: 'Financial upside of entrepreneurship with radically simpler path to traction.',
    imageUrl: '/images/your-head-start/nft-icon.png',
  },
];

const YourHeadStartIn = () => (
  <SectionFive className="section section-5 border-boxes">
    <div className="description-l-3">BUILT FOR DEVELOPERS</div>

    <Header className="header" title="Your headstart in crypto development" />

    <div className="row">
      {LIST.map(({ imageUrl, desc }, index) => {
        const getId = () => `your-head-start-in-${index}`;
        return (
          <div className="column" key={getId()}>
            <div className="content">
              <img src={imageUrl} alt={`Your hear start - ${index}`} />
              <div className="text description-l-4">{desc}</div>
            </div>
          </div>
        );
      })}
    </div>

    <Button
      type="disabled"
      className="btn-center"
      title={(
        <>
          <span>Dive into docs</span>
          <span>(Coming Soon)</span>
        </>
      )}
    />
  </SectionFive>
);

export default YourHeadStartIn;
