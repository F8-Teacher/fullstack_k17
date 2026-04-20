export const CACHE = {
  POST: {
    LIST: "posts:list",
    DETAIL: (id: string) => `posts:detail:${id}`,
  },
};
