import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';
import userConfig from '../../../config';

const ContinueReading = styled(GatsbyLink)`
  color: #666d71;
  font-size: 24px;
  margin-top: 30px;
  font-weight: bold;
  text-decoration: none;
  float: right;

  &:hover {
    color: ${userConfig.primaryColor};
    font-weight: bolder;
  }  
`;

export default ContinueReading;