import { rest } from 'msw';

const successResponse = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false,
};

export const handlers = [
  rest.get(
    '/https://jsonplaceholder.typicode.com/todos/1_success',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.delay(500), ctx.json(successResponse));
    }
  ),
];
