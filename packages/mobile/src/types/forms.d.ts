type LoginFieldValues = {
  username: string;
  password: string;
};

type RegisterFieldValues = {
  firstName: string;
  lastName: string;
  passwordConfirmation: string;
} & LoginFieldValues;

type YupSchemaShape<Fields> = {
  [Key in keyof Fields]: ConditionalSchema<Fields[Key]>;
};
