import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getEnv', (req) => {
  console.log(req);

  return process.env;
});

export const handler = resolver.getDefinitions();
