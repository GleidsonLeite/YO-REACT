import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --purple: #6730e3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Montserrat;

  }

  @media screen and (max-width: 768px){
    body{
      overflow-x: hidden;
    }
  }
`;
