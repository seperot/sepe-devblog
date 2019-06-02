import React from 'react';
import userConfig from '../../../config';

import Container from '../ContainerHome';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

function Header({ config }) {
  const { author, description, additionalDescription, social } = config;

  return (
    <Container>
      <Wrapper>
        {userConfig.showHeaderImage && (
          <HeaderImage/>
        )}
        <H1><Link to="/">{author}</Link></H1>
        <P>{description}</P>
        <br></br>
        <P>{additionalDescription}</P>
        {social &&
          <Social
            website={social.website}
            github={social.github}
            twitter={social.twitter}
            linkedin={social.linkedin}
            brave={social.brave}
            bittube={social.bittube}
          />
        }
      </Wrapper>
    </Container> 
  );
}

export default Header;