import styled from 'styled-components';
import { BREAK_POINT, SIZES } from 'util/theme';
import { widths } from '../styles';

export const SectionOne = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${SIZES.bannerHeight});
  background-image: url("/images/birth-place/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .header {
    max-width: 1100px;
    margin: 0;
    margin-top: 96px;
    margin-bottom: 0 !important;
    text-align: center;
    line-height: 0.85;
    font-size: 124px;
  }
  .description-l-2 {
    text-align: center;
    max-width: 800px;
    margin: 3rem 0;
    line-height: 1.4;
  }
  @media only screen and (max-width: ${BREAK_POINT.md}) {
    align-items: flex-start;
    justify-content: flex-start;
    background-image: url("/images/birth-place/background-mobile.jpg");
    padding: ${({ isNavigationOpen: e }) => `${e ? '20px 0px' : widths.mobileSectionPadding}!important`};

    .header {
      margin-right: 60px;
      margin-top: 86px;
      text-align: left;
      font-size: 54px;
    }
    .description-l-2 {
      max-width: 280px;
      margin-top: 6rem;
      text-align: left;
    }
    .btn {
      position: absolute;
      width: 80%;
      bottom: 64px;
      left: 50%;
      transform: translate(-50%, 0px);
    }
  }
`;

export const ABC = styled.div``;
