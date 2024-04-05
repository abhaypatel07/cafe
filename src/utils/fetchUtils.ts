const customFetch = async (
  url: string,
  options: {} = {},
): Promise<Response> => {
  const response = await fetch(url, options);

  if (response.status === 401 && window.location.pathname !== "/auth/login") {
    window.location.href = "/auth/login";
    return Promise.reject(new Error("Unauthorized"));
  }

  return response;
};

export default customFetch;
