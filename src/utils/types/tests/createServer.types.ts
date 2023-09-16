import {
  DefaultBodyType,
  PathParams,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

type ResolverRequest =
  | RestRequest<never, PathParams<string>>
  | RestRequest<DefaultBodyType, PathParams<string>>;
type ResolverResponse = ResponseComposition<DefaultBodyType>;
type ResolverContext = RestContext;

type ConfigResolver = (
  req: ResolverRequest,
  res: ResolverResponse,
  ctx: ResolverContext
) => any;

type ConfigMethodType = 'get' | 'post' | 'put' | 'delete' | 'patch';

export interface IHandlerConfig {
  path: string;
  res: ConfigResolver;
  method?: ConfigMethodType;
}
