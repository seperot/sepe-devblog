import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

injectGlobal`
  ${styledNormalize}
  
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
  
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    box-sizing: border-box;
  }

  body {
    background: #f9fafc;
    font-family: 'Open Sans', sans-serif; 
    line-height: 1.5;
    padding: 50px 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img {
    max-width: 100%;
  }

  .postsection {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    
    @media (max-width: 1050px) {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 1050px) {
    .postsection {
      grid-template-columns: 1fr 1fr; 
    }
  }
  
  li { 
    word-break: break-word; 
  }

  @media (max-width: 690px) {
    .postsection {
      grid-template-columns: 1fr; 
    }
  }

  .cardinfo {
    height: 320px;
  }

  .gatsby-highlight {
    border-bottom: 1px solid #e0e6ed;
    border-top: 1px solid #e0e6ed;
    margin: 25px 0;
    padding: 0;

    pre[class*="language-"] {
      margin: 0;
      padding: 25px -100px;

      code[class*="language-"] {
        margin: 25px 0;
        padding: 0;
        word-wrap: break-word;
      }
    }
  }

  pre[class*="language-"] {
    background: rgba(245, 245, 245, 1);
    color: rgb(65, 76, 94);  }

  @media only screen and (max-width: 870px) {
    .gatsby-highlight {
      margin: 15px -15px;

      pre[class*="language-"] {
        padding: 25px;
      }
    }
  }
`;
