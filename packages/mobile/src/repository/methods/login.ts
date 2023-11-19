import { requestAdapter } from "@repository/adapters";
import { ServiceRoutes } from "@repository/constants";

const login = async ({
  username,
  password,
}: LoginRequestProtocol): Promise<string | null> => {
  const loginEndPoint = `${process.env.EXPO_PUBLIC_API_ROOT}/${ServiceRoutes.login}`;

  try {
    const result = await requestAdapter<LoginResponseProtocol>(loginEndPoint, {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (!result.success) return null;

    return result.data.token;
  } catch (error) {
    return null;
  }
};

export { login };
