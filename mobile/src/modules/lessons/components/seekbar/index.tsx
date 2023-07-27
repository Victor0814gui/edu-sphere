import { COLORS, FONTS } from "@shared/theme"
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"


type SeekbarProps = {
  duration: number;
  currentTime: number;
}

export const Seekbar = ({
  duration = 0,
  currentTime = 0,
}: SeekbarProps) => {
  const [onHover, setOnHover] = useState(false);

  const onMouseEnter = () => {
    setOnHover(true)
  }
  const onMouseLeave = () => {
    setOnHover(false)
  }

  function secondsToTime(secondsValue: number): string {
    const minutes = Math.floor(secondsValue / 60);
    const seconds = secondsValue % 60;

    if (minutes < 10 && seconds < 10) {
      return `0${minutes}:0${seconds}`;
    }
    if (minutes < 10) {
      return `0${minutes}:${seconds}`;
    }
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }


    return `${minutes}:${seconds}`;
  }

  return (
    <View
      style={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Text style={styles.text}>{secondsToTime(currentTime)}</Text>
      <View style={[styles.seekbar, { borderRadius: 3, maxHeight: onHover ? 10 : 3, backgroundColor: COLORS.green_500, flex: currentTime }]} />
      <View style={[styles.seekbar, { maxHeight: onHover ? 7 : 3, backgroundColor: "#333333", flex: duration - currentTime + 1 }]} />
      <Text style={styles.text}>{secondsToTime(duration)}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  seekbar: {
    minHeight: 3,
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS.Poppins.Medium,
  },
})