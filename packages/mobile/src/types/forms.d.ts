type LoginFieldValues = {
  username: string;
  password: string;
};

type RegisterFieldValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type YupSchemaShape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};
