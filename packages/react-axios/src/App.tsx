import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

if (process.env.REACT_APP_API_MOCKING === 'enabled') {
  require('src/mocks');
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const [res, setRes] = useState();
  useEffect(() => {
    fetcher('/coins').then((data) => setRes(data));
  }, []);

  return (
    <div className='App'>
      <div className='container mt-3'>
        <Switch>
          <Route path='/' component={TutorialsList} />
          <Route path='/add' component={AddTutorial} />
          <Route path='/tutorials/:id' component={Tutorial} />
          <Redirect to='/' />
        </Switch>
      </div>
    </div>
  );
}

export default App;
