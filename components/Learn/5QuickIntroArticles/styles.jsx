import styled from 'styled-components';
import { SeeAllBtnRow, ThreeColumnContents } from 'components/GlobalStyles';
import { MEDIA_QUERY } from 'util/theme';

export const SectionFive = styled.div`
  .header {
    margin-bottom: 1rem !important;
  }
  ${MEDIA_QUERY.tablet} {
    .btn {
      padding: 1rem 0;
    }
  }
`;

export const Content = styled(ThreeColumnContents)`
  .column {
    .img-container {
      min-height: 340px;
    }
  }
  ${MEDIA_QUERY.tablet} {
    .column {
      .img-container {
        min-height: 280px;
      }
    }
  }
`;

export const GoDeep = styled.div`
  /* REMOVE After go-deep */
  margin-top: 2rem;
  margin-bottom: -2.5rem;
`;

export const SeeAll = styled(SeeAllBtnRow)`
  margin-top: 0;
  margin-bottom: 2rem;
`;
