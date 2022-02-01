import { Fetch } from '@rishabh/reusable-inventory';

const FetchExample = () => {
  return (
    <div>
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
};

export default FetchExample;
