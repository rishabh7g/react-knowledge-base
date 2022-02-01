import { Outlet } from 'react-router-dom';
import { LinkWrapper, PageLink } from './styles';

const Home = () => {
  return (
    <>
      <LinkWrapper>
        <PageLink to='/forms'>Forms</PageLink>
        <PageLink to='/fetch'>Fetch</PageLink>
      </LinkWrapper>
      <Outlet />
    </>
  );
};

export default Home;
