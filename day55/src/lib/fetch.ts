import { getAccessToken } from "@/actions/auth.action";
export const fetchWrapper = async (
  url: string,
  options = {} as RequestInit,
) => {
  //Đọc token
  const accessToken = await getAccessToken();
  //get all header
  const allHeaders = new Headers(options.headers || {});
  if (accessToken) {
    allHeaders.set(`Authorization`, `Bearer ${accessToken}`);
  }
  return fetch(url, {
    ...options,
    headers: allHeaders,
  });
};
