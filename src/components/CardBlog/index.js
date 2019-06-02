import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 2px solid #e0e6ed;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 10px 10px 20px 10px;
  padding: 50px 20px;
  min-height: 500px;
  float: left;

  @media only screen and (max-width: 920px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
    margin: 0  auto;
    float: none;
  }
`;

export default Card;