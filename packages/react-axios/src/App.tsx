import { useEffect, useState } from 'react';

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
      Axios <p>{JSON.stringify(res)}</p>
    </div>
  );
}

export default App;
