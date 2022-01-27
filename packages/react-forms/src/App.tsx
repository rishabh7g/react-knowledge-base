import { Fetch } from '@rishabh/reusable-inventory';
import { SimpleProjectForm } from './components/simple-project-form';

function App() {
  return (
    <div className='App'>
      <SimpleProjectForm />
      <Fetch url='https://jsonplaceholder.typicode.com/todos/1'>
        {({ userId, title }) => (
          <>
            <h1>{title}</h1>
            <h2>{userId}</h2>
          </>
        )}
      </Fetch>
    </div>
  );
}

export default App;
