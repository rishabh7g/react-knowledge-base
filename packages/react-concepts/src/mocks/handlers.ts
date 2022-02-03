import { rest } from 'msw';

const successResponse = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

const errorResponse = {
  errorMessage: 'User authentication failed',
};
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos/1', (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(successResponse));
  }),
  rest.get(
    'https://jsonplaceholder.typicode.com/todos/1_error',
    (req, res, ctx) => {
      return res(ctx.status(403), ctx.delay(500), ctx.json(errorResponse));
    }
  ),
];
