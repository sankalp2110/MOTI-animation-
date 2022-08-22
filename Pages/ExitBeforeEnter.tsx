import { AnimatePresence } from "framer-motion";
import React, { useReducer } from "react";
import { StyleSheet } from "react-native";
import { MotiView } from "moti";
import { Text, theme, Button } from "native-base";

function AnimatedButton({
  bg,
  text,
  visible,
}: {
  bg: string;
  text: string;
  visible: boolean;
}) {
  return (
    <MotiView
      from={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ type: "timing", duration: 1000, delay: 10 }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      style={[
        styles.shape,
        {
          backgroundColor: bg,
        },
      ]}
    >
      <Text
        textAlign='center'
        fontWeight='bold'
        fontSize='lg'
        color={theme.colors.red[500]}
      >
        {text}
      </Text>
    </MotiView>
  );
}

export default function ExitBeforeEnter() {
  const [visible, toggle] = useReducer((s) => !s, true);
  return (
    <Button
      onPress={toggle}
      flex={1}
      alignItems='center'
      justifyContent='center'
      flexDirection='row'
      backgroundColor={theme.colors.secondary[100]}
    >
      <AnimatePresence exitBeforeEnter>
        {visible && (
          <AnimatedButton
            bg={theme.colors.primary[400]}
            text='Button'
            visible={visible}
          />
        )}
        {!visible && (
          <AnimatedButton
            bg={theme.colors.primary[900]}
            text='Button'
            visible={visible}
          />
        )}
      </AnimatePresence>
    </Button>
  );
}

const styles = StyleSheet.create({
  shape: {
    justifyContent: "center",
    height: 50,
    width: 250,
    borderRadius: 10,
    backgroundColor: theme.colors.primary[900],
  },
});
