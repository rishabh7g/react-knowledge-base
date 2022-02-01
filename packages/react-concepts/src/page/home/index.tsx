import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const PageLink = styled(NavLink)`
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

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <PageLink to='/forms'>Forms</PageLink>
        <PageLink to='/fetch'>Fetch</PageLink>
      </HomeWrapper>
      <Outlet />
    </>
  );
};

export default Home;
