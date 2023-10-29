import { useState, useRef, useCallback } from "react";
import { COLORS, FONTS } from "../../../shared/theme";
import {
  View,
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  Animated,
} from "react-native";

type DefaultProps = {
  children: string;
} & PressableProps;

export const Default = ({ children, ...rest }: DefaultProps) => {
  const [onHover, setOnHover] = useState(false);
  const [onActive, setOnActive] = useState(false);

  const onMouseEnter = useCallback(() => setOnHover(true), []);
  const onMouseLeave = useCallback(() => setOnHover(false), []);

  const onPressIn = useCallback(() => setOnActive(true), [])
  const onPressOut = useCallback(() => setOnActive(false), [])

  return (
    <Pressable
      {...rest}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
      ]}

    >
      <View
        style={[
          styles.content,
          onHover && styles.contentHovered,
          onActive && styles.contentActived,
        ]}
        //@ts-ignore
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 42,

  },
  content: {
    height: 42,
    minWidth: 120,
    borderRadius: 21,
    paddingHorizontal: 31,
    backgroundColor: COLORS.green_500,
    alignItems: "center",
    justifyContent: "center",
  },
  contentHovered: {
    backgroundColor: COLORS.green_400,
  },
  contentActived: {
    backgroundColor: COLORS.green_390,
  },
  text: {
    color: COLORS.grey_120,
    fontFamily: FONTS.Poppins.Medium,
    fontSize: 14,
  }
})