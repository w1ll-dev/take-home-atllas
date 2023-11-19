type LoginRequestProtocol = {
  username: string;
  password: string;
};

type LoginSuccessResponseProtocol = {
  data: {
    token: string;
  };
  message: string;
  success: true;
};

type LoginErrorResponseProtocol = {
  message: string;
  success: false;
};

type LoginResponseProtocol =
  | LoginSuccessResponseProtocol
  | LoginErrorResponseProtocol;
