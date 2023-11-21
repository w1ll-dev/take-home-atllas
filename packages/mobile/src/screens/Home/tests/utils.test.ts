import { getWebViewSource } from "../utils";

describe("utils", () => {
  it("should return correct source for webview", () => {
    const sessionToken = "123412341234123412341234";
    const cookie = `SESSION_TOKEN=${sessionToken};`;
    const source = getWebViewSource(sessionToken);

    expect(source).toMatchObject({
      uri: process.env.EXPO_PUBLIC_WEBAPP_ROOT,
      headers: {
        cookie,
      },
    });
  });
});
