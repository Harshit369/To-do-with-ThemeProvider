import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div.attrs({
  style: props => props.style
})`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: 1px solid #ededed;

  .icon {
    color #ededed;
  }
`;

export default (props) => {
  return (
    <IconWrapper {...props}>
      <i className={'icon material-icons ' + (props.className || '')}>{props.icon}</i>
    </IconWrapper>
  );
}