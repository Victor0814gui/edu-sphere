import { X } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, PressableProps } from 'react-native';
import { COLORS } from "@shared/theme";

export const ButtonCloseModal = ({ ...props }: PressableProps) => {
  const [onHover, setOnHover] = useState(false);
  const onHoverIn = () => {
    setOnHover(true)
  }

  const onHoverOut = () => {
    setOnHover(false)
  }

  return (
    <Pressable
      onHoverIn={onHoverIn}
      onHoverOut={onHoverOut}
      {...props}
      style={[
        styles.container,
        onHover && styles.containerHovored,
      ]}
    >
      <X size={24} color="#d9d9d9" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.grey_270,
    position: "absolute",
    right: 2,
    top: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerHovored: {
    backgroundColor: COLORS.grey_120,
  }
});