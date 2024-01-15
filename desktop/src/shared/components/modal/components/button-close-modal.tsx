import { X } from 'phosphor-react-native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, PressableProps, View } from 'react-native';
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
    <View
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      // onHoverIn={onHoverIn}
      // onHoverOut={onHoverOut}
      {...props}
      style={[
        styles.container,
        onHover && styles.containerHovored,
      ]}
    >
      <X size={24} color="#d9d9d9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.grey_800,
    zIndex: 0,
  },
  containerHovored: {
    backgroundColor: COLORS.grey_120,
  }
});