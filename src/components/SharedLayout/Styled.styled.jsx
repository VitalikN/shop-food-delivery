import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 10px 15px;

  &.active {
    color: #00e5ffe6;
  }
`;
