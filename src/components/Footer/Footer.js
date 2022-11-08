import React from 'react';

// components
import Counter from './Counter/Counter';
import Filters from './Filters/Filters';
import styled from 'styled-components';

const FooterStyling = styled.footer `
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #4B0082;
    padding: 10px 15px;
    height: 20px;
    border-top: 1px solid #e6e6e6;
`
function Footer() {
  return (
    <FooterStyling>
      <Counter />
      <Filters />
    </FooterStyling>
  )
}

export default Footer;