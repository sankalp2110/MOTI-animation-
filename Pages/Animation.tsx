import React from "react";
import { Text, Box, Icon, Center, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";
const LoadingIndicator = ({ size }) => {
  return (
    <MotiView
      from={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 0.3,
        shadowOpacity: 0.2,
      }}
      animate={{
        width: size + 20,
        height: size + 20,
        borderRadius: size / 2,
        borderWidth: size / 10,
        shadowOpacity: 1,
      }}
      transition={{
        type: "timing",
        duration: 2000,
        loop: true,
      }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: size / 10,
        borderColor: "#b91c1c",
        shadowColor: "#b91c1c",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      }}
    />
  );
};

const TextStyle = {
  color: "coolGray.50",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "3xl",
};
export default function App() {
  return (
    <>
      <Box safeAreaTop />
      <Text textAlign="center" fontWeight="semibold" fontSize="3xl">
        Loading Animation
      </Text>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="coolGray.900"
      >
        {/* <Box alignItems="center" justifyContent="center">
          <MotiView
            from={{ translateY: 300 }}
            animate={{
              translateY: 50,
            }}
            transition={{
              type: "spring",
              loop: true,
            }}
            style={{
              height: 250,
              width: 250,
              backgroundColor: "#991b1b",
              borderRadius: 20,
            }}
          >
            <VStack
              space={2}
              justifyContent="center"
              alignItems="center"
              mt={5}
            >
              <Text {...TextStyle}>MOTI</Text>
              <Text {...TextStyle}>ANIMATION</Text>
              <Text {...TextStyle}>WITH</Text>
              <Text {...TextStyle}>NATIVEBASE</Text>
            </VStack>
          </MotiView>
        </Box> */}
        <LoadingIndicator size={100} />
        {/* <Box
          width="100"
          height="100"
          borderRadius="100"
          bg="red.700"
          alignItems="center"
          justifyContent="center"
        >
          {[...Array(3).keys()].map((index) => {
            return (
              <MotiView
                key={index}
                from={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{
                  type: "timing",
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  loop: true,
                  repeatReverse: false,
                }}
                style={{
                  position: "absolute",
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: "#b91c1c",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            );
          })}
          <Icon
            as={MaterialIcons}
            name="phone-callback"
            color="white"
            size={16}
          />
        </Box> */}
      </Box>
    </>
  );
}
