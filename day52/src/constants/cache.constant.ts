export const CACHE_TTL = {
  PRODUCTS: {
    LIST: 3600,
    DETAIL: 1000,
  },
  POSTS: {
    LIST: 3600,
    DETAIL: 2000,
  },
  COURSES: {
    LIST: 0,
    DETAIL: 3600,
  },
};
const PREFIX = `ecommerce_`;
const getQueryParams = <T>(query: T) => {
  let paramsKey = new URLSearchParams(
    query as unknown as Record<string, string>,
  ).toString();

  if (paramsKey) {
    paramsKey = ":" + paramsKey;
  }
  return paramsKey;
};
export const CACHE_KEY = {
  PRODUCTS: {
    VERSION: 2,
    LIST<T>(query: T) {
      return `${PREFIX}:${this.VERSION}:products:list${getQueryParams(query)}`;
    },
    DETAIL(id: number) {
      return `${PREFIX}:${this.VERSION}:products:detail:${id}`;
    },
  },
  POSTS: {
    VERSION: 1,
    LIST<T>(query: T) {
      return `${PREFIX}:${this.VERSION}:posts:list${getQueryParams(query)}`;
    },
    DETAIL(id: number) {
      return `${PREFIX}:${this.VERSION}:posts:detail:${id}`;
    },
  },
};

export const CACHE_TAG = {
  PRODUCTS: {
    LIST: `tags:products:list`,
  },
  POSTS: {
    LIST: `tags:posts:list`,
  },
};
