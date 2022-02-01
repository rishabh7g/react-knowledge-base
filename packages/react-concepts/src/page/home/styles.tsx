import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
export const PageLink = styled(NavLink)`
  padding: 0.8rem 1.2rem;
  background-color: papayawhip;
  color: palevioletred;
  text-decoration: none;
  font-family: sans-serif;

  &.active {
    background-color: palevioletred;
    color: papayawhip;
  }
`;
