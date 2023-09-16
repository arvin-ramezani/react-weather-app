import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { IHandlerConfig } from '@/utils/types/tests/createServer.types';

export function createServer(handlerConfigs: IHandlerConfig[]) {
  const handlers = handlerConfigs.map((config) => {
    return rest[config.method || 'get'](config.path, (req, res, ctx) => {
      return res(ctx.json(config.res(req, res, ctx)));
    });
  });

  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
}
