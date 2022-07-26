// import React from "react";
// import { Text, Box, Icon, Center, VStack, Button } from "native-base";
// import { MaterialIcons } from "@expo/vector-icons";
// import { MotiView } from "moti";
// import { Easing } from "react-native-reanimated";
// const LoadingIndicator = ({ size }) => {
//   return (
//     <MotiView
//       from={{
//         width: size,
//         height: size,
//         borderRadius: size / 2,
//         borderWidth: 0.3,
//         shadowOpacity: 0.2,
//       }}
//       animate={{
//         width: size + 20,
//         height: size + 20,
//         borderRadius: size / 2,
//         borderWidth: size / 10,
//         shadowOpacity: 1,
//       }}
//       transition={{
//         type: "timing",
//         duration: 2000,
//         loop: true,
//       }}
//       style={{
//         width: size,
//         height: size,
//         borderRadius: size / 2,
//         borderWidth: size / 10,
//         borderColor: "#b91c1c",
//         shadowColor: "#b91c1c",
//         shadowOffset: { width: 0, height: 0 },
//         shadowOpacity: 1,
//         shadowRadius: 10,
//       }}
//     />
//   );
// };
// export default function Home() {
//   return (
//     <>
//       <Box safeAreaTop />
//       <VStack>
//         <MotiView></MotiView>
//       </VStack>
//       <Text>rgnirg</Text>
//     </>
//   );
// }

// const TextStyle = {
//   color: "coolGray.50",
//   fontWeight: "bold",
//   textAlign: "center",
//   fontSize: "3xl",
// };
// export default function App() {
//   return (
//     <>
//       <Box safeAreaTop />
//       <Text textAlign='center' fontWeight='semibold' fontSize='3xl'>
//         Animation
//       </Text>
//       <VStack px={4} justifyContent='center'>
//         <MotiView
//           from={{
//             translateY: -200,
//           }}
//           animate={{
//             translateY: 50,
//           }}
//           transition={{
//             loop: true,
//             type: "timing",
//             duration: 1500,
//             delay: 100,
//           }}
//         >
//           <Button
//             bg='amber.800'
//             onPress={() => {
//               alert("test");
//             }}
//           >
//             Primary
//           </Button>
//         </MotiView>
// </VStack>
{
  /* <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        bg="coolGray.900"
      > */
}
{
  /* <Box alignItems="center" justifyContent="center">
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
        </Box> */
}
{
  /* <LoadingIndicator size={100} /> */
}
{
  /* <Box
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
        </Box> */
}
{
  /* </Box> */
}
//     </>
//   );
// }

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
  return (
    <Box mt={10}>
      <MotiView
        from={{
          width: size,
          borderRadius: 5,
          scale: buttonscale,
        }}
        animate={{
          width: size,
          translateX: 20,
          scale: buttonscale,
        }}
        transition={{
          type: "timing",
          duration: 3000,
        }}
        style={{
          width: size,
          borderColor: "#5B21B6",
        }}
      >
        <Button
          width={size}
          onPress={() => {
            onPress(buttonscale == 1 ? 0 : 1);
            console.log(buttonscale);
          }}
          height={undefined}
          borderRadius='10'
          bg='#5B21B6'
          py={3}
        >
          Confirm Order
        </Button>
      </MotiView>
    </Box>
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
        translateX: 180,
        scale: success,
      }}
      transition={{
        type: "timing",
        duration: 3000,
        delay: 2500,
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
        height={size}
        width={size}
      />
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
      <Text
        textAlign='center'
        justifyContent='center'
        color='black'
        fontSize='lg'
        fontWeight='semibold'
      >
        Animation
      </Text>

      <VStack bg='coolGray.800' flex={1} pt={40} safeAreaBottom>
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
