import { rest } from 'msw';

const coins = {
  ADA: { name: 'Cardano', website: 'https://cardano.net' },
  DOT: { name: 'Cardano', website: 'https://polkadot.net' },
};

export const handlers = [
  rest.get('/coins', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json(
        Object.entries(coins).map(([symbol, data]) => ({ symbol, ...data }))
      )
    );
  }),
];
