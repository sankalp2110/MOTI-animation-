// import React from "react";
// import { NativeBaseProvider, extendTheme } from "native-base";
// import Animation from "./Pages/Animation";

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Animation />
//     </NativeBaseProvider>
//   );
// }

import React from "react";
import { NativeBaseProvider, extendTheme, theme } from "native-base";
import ExitBeforeEnter from "./Pages/ExitBeforeEnter";

const customTheme = extendTheme({
  colors: {
    primary: { ...theme.colors.violet },
    secondary: "#eab308",
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
      {/* <ButtonAnimation size={40} buttonscale={1} onPress={() => {}} /> */}
    </NativeBaseProvider>
  );
}
