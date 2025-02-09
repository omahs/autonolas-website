import React from 'react';
import Header from 'common-util/Header';
import Description from 'common-util/Description';
import { useCheckMobileScreen } from 'common-util/hooks/useCheckMobileScreen';
import { SectionNine, Row } from './styles';

const Mission = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <SectionNine className="section section-9" id="mission">
      <Description type={2} title="MISSION" />

      <Header
        className="header"
        title={(
          <>
            Let&apos;s make DAOs&nbsp;
            {!isMobile && <br />}
            <span className="sub-text">actually&nbsp;</span>
            autonomous
          </>
        )}
      />

      <Row>
        <Description
          type={2}
          title="DAO Operations are slow and subDAOs only help so much. DAOs run apps and protocols which are constrained by smart contract limitations, centralization and liability risks. Autonolas enables developers to help."
          className="sub-content"
        />
        <div className="glass-container">
          <img src="/images/9Mission/glass.png" alt="Mission background" />
        </div>
      </Row>
    </SectionNine>
  );
};

export default Mission;
