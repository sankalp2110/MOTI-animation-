import React from "react";
import { NativeBaseProvider, extendTheme, theme } from "native-base";
import ExitBeforeEnter from "./Pages/ExitBeforeEnter";
//@ts-ignore
import { useStyledSystemPropsResolver } from "native-base/src/hooks/useStyledSystemPropsResolver.ts";

const customTheme = extendTheme({
  colors: {
    primary: { ...theme.colors.orange },
    secondary: "#f97316",
  },
  sizes: {
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
  },
});
export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <ExitBeforeEnter />
    </NativeBaseProvider>
  );
}
