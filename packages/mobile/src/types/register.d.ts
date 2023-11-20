type RegisterRequestProtocol = {
  username: string;
  password: string;
  displayName: string;
};

type RegisterSuccessResponseProtocol = {
  data: {
    token: string;
  };
  message: string;
  success: true;
};

type RegisterErrorResponseProtocol = {
  message: string;
  success: false;
};

type RegisterResponseProtocol =
  | RegisterSuccessResponseProtocol
  | RegisterErrorResponseProtocol;
