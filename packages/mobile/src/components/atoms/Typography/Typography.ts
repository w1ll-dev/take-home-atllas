import { Paragraph, styled } from "tamagui";

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

export { ErrorMessage, Placeholder };
