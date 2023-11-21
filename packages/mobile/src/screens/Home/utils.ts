const getCookieFromAuthToken = (authToken: string) =>
  `SESSION_TOKEN=${authToken};`;

const getWebViewSource = (authToken: string) => {
  const cookie = getCookieFromAuthToken(authToken);

  return {
    uri: process.env.EXPO_PUBLIC_WEBAPP_ROOT,
    headers: {
      cookie,
    },
  };
};

export { getWebViewSource };
