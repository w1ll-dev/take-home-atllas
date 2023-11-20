import { requestAdapter } from "@repository/adapters";
import { ServiceRoutes } from "@repository/constants";

const register = async ({
  username,
  password,
  displayName,
}: RegisterRequestProtocol): Promise<string | null> => {
  const registerEndPoint = `${process.env.EXPO_PUBLIC_API_ROOT}/${ServiceRoutes.register}`;

  try {
    const result = await requestAdapter<RegisterResponseProtocol>(
      registerEndPoint,
      {
        method: "POST",
        body: JSON.stringify({ username, password, displayName }),
      },
    );

    if (!result.success) return null;

    return result.data.token;
  } catch (error) {
    console.log("🚀 ~ error:", error);
    return null;
  }
};

export { register };
