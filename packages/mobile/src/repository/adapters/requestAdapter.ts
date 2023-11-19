type RequestInit = {
  method: "GET" | "POST";
  body: BodyInit;
};

const requestAdapter = async <T>(
  query: string,
  init?: RequestInit,
): Promise<T> => {
  const response = await fetch(query, init);
  const responseJson = await response.json();
  return responseJson;
};

export { requestAdapter };
