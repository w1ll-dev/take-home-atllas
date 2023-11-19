import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { Keyboard } from "react-native";

const useBottomSheetWithControls = () => {
  const sheetRef = useRef<BottomSheet>(null);

  const handleOpenBottomSheet = useCallback(
    () => sheetRef?.current?.expand(),
    [],
  );

  const handleCloseBottomSheet = useCallback(
    () => sheetRef?.current?.collapse(),
    [],
  );

  const handleOnClose = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return {
    sheetRef,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleOnClose,
  };
};

export { useBottomSheetWithControls };
