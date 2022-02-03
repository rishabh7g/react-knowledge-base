import { Fetch } from '@rishabh/reusable-inventory';

const FetchExample = () => {
  const url: string = 'https://jsonplaceholder.typicode.com/todos/1_error';
  return (
    <div>
      <Fetch url={url}>
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
