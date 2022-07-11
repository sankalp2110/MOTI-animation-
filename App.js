import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import Animation from "./Pages/Animation";

export default function App() {
  return (
    <NativeBaseProvider>
      <Animation />
    </NativeBaseProvider>
  );
}
