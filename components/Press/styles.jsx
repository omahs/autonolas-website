import styled from 'styled-components';
import { MEDIA_QUERY } from 'util/theme';
import { backgroundImage } from 'components/GlobalStyles';

export const PressContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${backgroundImage('/images/1TheNewWay/background.webp')}
  .header {
    text-align: center;
  }
  ${MEDIA_QUERY.laptop} {
  }
`;

export const EachPressContainer = styled.div``;
