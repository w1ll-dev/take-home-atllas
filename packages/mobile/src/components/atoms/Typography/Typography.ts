import { H1, Paragraph, styled } from "tamagui";

const RegisterTitle = styled(H1, {
  color: "$text2",
  fontFamily: "$heading",
  textAlign: "center",
  size: "$1",
});

const Placeholder = styled(Paragraph, {
  fontFamily: "$body",
  marginVertical: "$2",
});

const ErrorMessage = styled(Paragraph, {
  color: "$errorRed",
  fontFamily: "$body",
  fontSize: "$1",
  marginVertical: "$2",
});

export { RegisterTitle, Placeholder, ErrorMessage };
