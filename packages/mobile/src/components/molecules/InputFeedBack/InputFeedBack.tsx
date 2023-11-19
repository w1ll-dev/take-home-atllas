import { ErrorMessage, Placeholder } from "@atoms";
import { ComponentVisibility } from "@atoms/ComponentVisibility";
import { useFadeInOut } from "@hooks/animations";
import { MotiView } from "moti";
import { ReactNode, useMemo } from "react";
import { YStack } from "tamagui";

type InputFeedbackProps = {
  errorMessage?: string;
  placeholder: string;
  children: ReactNode;
};

const InputFeedback = ({
  errorMessage,
  placeholder,
  children,
}: InputFeedbackProps) => {
  const { animate, from, transition } = useFadeInOut({
    startOpacity: 0,
    endOpacity: 1,
  });

  const inputColor = useMemo(
    () => (errorMessage ? "$errorRed" : "$gray11Dark"),
    [errorMessage],
  );

  return (
    <YStack height="$11">
      <Placeholder color={inputColor}>{placeholder}</Placeholder>
      {children}
      <ComponentVisibility isVisible={!!errorMessage}>
        <MotiView from={from} animate={animate} transition={transition}>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </MotiView>
      </ComponentVisibility>
    </YStack>
  );
};

export { InputFeedback };
