import { requestAdapter } from "@repository/adapters";
import { ServiceRoutes } from "@repository/constants";
import { defaultRegisterErrorMessage } from "./errors/errorMessages";

const register = async ({
  username,
  password,
  displayName,
}: RegisterRequestProtocol): Promise<RegisterResponseProtocol> => {
  const registerEndPoint = `${process.env.EXPO_PUBLIC_API_ROOT}/${ServiceRoutes.register}`;

  try {
    const result = await requestAdapter<RegisterResponseProtocol>(
      registerEndPoint,
      {
        method: "POST",
        body: JSON.stringify({ username, password, displayName }),
      },
    );

    return result;
  } catch (error) {
    return {
      success: false,
      message: defaultRegisterErrorMessage,
    };
  }
};

export { register };
