import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FetchExample from 'src/page/fetch';
import FormExample from 'src/page/form';
import Home from 'src/page/home';

if (process.env.REACT_APP_API_MOCKING === 'enabled') {
  require('src/mocks');
}

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='forms' element={<FormExample />} />
            <Route path='fetch' element={<FetchExample />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
