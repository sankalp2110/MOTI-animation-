import React, { useEffect, useState } from "react";
import { Text, Box, Icon, VStack, Button } from "native-base";
import { Feather } from "@expo/vector-icons";
import { MotiView } from "moti";

function ButtonAnimation({
  size,
  onPress,
  buttonscale,
}: {
  size: number;
  buttonscale: number;
  onPress: (buttonscale: number) => void;
}) {
  const [scale, setScale] = useState(1);
  const [pressed, setPressed] = useState(false);
  return (
    <MotiView
      from={{
        width: size,
        borderRadius: 5,
        transform: [{ scale: buttonscale }, { translateY: -10 }],
      }}
      animate={{
        width: size,
        translateX: 10,
        transform: [{ scale: buttonscale }, { translateY: 10 }],
      }}
      transition={{
        type: "timing",
        delay: 100,
        loop: pressed ? false : true,
      }}
      style={{
        width: size,
      }}
    >
      <Button
        width={size}
        onPress={() => {
          onPress(buttonscale == 1 ? 0 : 1);
          setPressed(!pressed);
        }}
        height={undefined}
        borderRadius='10'
        bg='#5B21B6'
        py={3}
      >
        Confirm Order
      </Button>
    </MotiView>
  );
}
function CheckCircle({
  size,
  onPress,
  success,
}: {
  size: number;
  onPress: (size: number) => void;
  success: number;
}) {
  return (
    <MotiView
      from={{
        scale: success,
      }}
      animate={{
        width: size,
        translateX: 150,
        translateY: 100,
        scale: success,
      }}
      transition={{
        type: "timing",
        duration: 1000,
        delay: 500,
      }}
      style={{
        width: size,
      }}
    >
      <Icon
        as={Feather}
        name='check-circle'
        color='green.600'
        size={16}
        ml={7}
        height={size}
        width={size}
      />
      <Text
        color='white'
        textAlign='left'
        fontSize='lg'
        fontWeight='medium'
        mt={3}
      >
        Order confirmed
      </Text>
    </MotiView>
  );
}

export default function Animation() {
  const [width, setWidth] = useState(400);
  const [buttonscale, setButtonscale] = useState(1);
  const [success, setSuccess] = useState(0);
  useEffect(() => {
    if (buttonscale == 0) {
      setSuccess(1);
    }
  }, [buttonscale]);
  return (
    <>
      <Box safeAreaTop />

      <VStack
        bg='coolGray.800'
        flex={1}
        pt={40}
        space={3}
        safeAreaBottom
        alignItems='center'
      >
        <CheckCircle
          size={width}
          onPress={(width) => setWidth(width)}
          success={success}
        />
        <ButtonAnimation
          size={width}
          buttonscale={buttonscale}
          onPress={(buttonwidth) => setButtonscale(buttonwidth)}
        />
      </VStack>
    </>
  );
}
