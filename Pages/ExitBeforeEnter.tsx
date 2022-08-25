import { AnimatePresence } from "framer-motion";
import React, { useReducer, useState } from "react";
//@ts-ignore
import { useStyledSystemPropsResolver } from "native-base/src/hooks/useStyledSystemPropsResolver.ts";

import { MotiView } from "moti";
import {
  Text,
  theme,
  Factory,
  Stack,
  Box,
  VStack,
  Button,
  Pressable,
  Center,
} from "native-base";

function AnimatedButton({
  bg,
  visible,
  transformBg,
  toggleHandler,
}: {
  bg: string;
  visible: boolean;
  transformBg: any;
  toggleHandler: () => void;
}) {
  const FactoryView = Factory(MotiView);

  return (
    <VStack justifyContent='center' alignItems='center' flex={1}>
      <Pressable
        onPress={() => {
          toggleHandler();
        }}
      >
        <FactoryView bg='amber.400' />
      </Pressable>

      <Pressable
        onPress={() => {
          toggleHandler();
        }}
      >
        <FactoryView
          from={{
            opacity: 0,
            scale: 0.5,
            // backgroundColor: bg,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            // backgroundColor: transformBg,
          }}
          transition={{ type: "timing", duration: 500, delay: 10 }}
          exit={{
            opacity: 0,
            scale: 0.9,
          }}
        />
      </Pressable>
    </VStack>

    // <MotiView
    //   from={{
    //     opacity: 0,
    //     scale: 0.5,
    //   }}
    //   animate={{
    //     opacity: 1,
    //     scale: 1,
    //   }}
    //   transition={{ type: "timing", duration: 1000, delay: 10 }}
    //   exit={{
    //     opacity: 0,
    //     scale: 0.9,
    //   }}
    // >
    //   <Text
    //     textAlign='center'
    //     fontWeight='bold'
    //     fontSize='lg'
    //     color={theme.colors.red[500]}
    //   >
    //     {text}
    //   </Text>
    // </MotiView>
  );
}

const NBMotiView = ({
  from,
  to,
  transition,
  animate,
  children,
  ...props
}: any) => {
  const FactoryView = Factory(MotiView);
  // console.log(from.height);
  // from={{
  //   p: 10,
  // }}
  // animate={{
  //   p: 20,
  // }}
  // transition={{ type: "timing", duration: 1000, delay: 10 }}

  const resolvedProps = {
    from: {
      padding: from.p,
    },
    animate: {
      padding: animate.p,
    },
    transition: { type: "timing", duration: 1000, delay: 10 },
  };
  // console.log(props);
  // console.log(useStyledSystemPropsResolver({ p: 10 }));
  return (
    <FactoryView {...resolvedProps} {...props}>
      {children}
    </FactoryView>
  );
};
export default function ExitBeforeEnter() {
  const [visible, setVisible] = useState(true);
  const toggleHandler = () => {
    setVisible(!visible);
  };

  const FactoryView = Factory(MotiView, {
    baseStyle: {
      justifyContent: "center",
      height: 100,
      width: 250,
      borderRadius: 10,
      backgroundColor: "red.500",
    },
  });

  return (
    <VStack justifyContent={"center"} alignItems='center' flex={1}>
      <Pressable
        onPress={() => {
          toggleHandler();
        }}
      >
        <Text>Button</Text>
      </Pressable>

      {/* {visible && (
        <MotiView
          from={{
            // opacity: 0,
            // scale: 0.5,
            backgroundColor: "red",
            padding: 10,
          }}
          animate={{
            // opacity: 1,
            // scale: 1,
            backgroundColor: "blue",
            padding: 20,
          }}
          transition={{ type: "timing", duration: 1000, delay: 10 }}
        >
          <Text>hello</Text>
        </MotiView>
      )} */}

      {visible && (
        <NBMotiView
          from={{
            height: 50,
            width: 50,
            p: 10,
          }}
          animate={{
            p: 20,
          }}
          transition={{ type: "timing", duration: 1000, delay: 10 }}
          bg='blue.200'
        >
          <Text>hello</Text>
        </NBMotiView>
      )}

      {/* <FactoryView bg='amber.400' /> */}
    </VStack>
  );
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {/* {visible && (
          <AnimatedButton
            bg='primary.800'
            transformBg=''
            toggleHandler={toggleHandler}
            visible={visible}
          />
        )}
        {!visible && (
          <AnimatedButton
            bg='primary.500'
            transformBg=''
            toggleHandler={toggleHandler}
            visible={visible}
          />
        )} */}
      </AnimatePresence>
    </>
  );
}
