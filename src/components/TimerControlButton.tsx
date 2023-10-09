import React, { FC } from 'react';
import { Button, Pressable, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type TimerControlButtonProps = {
  isTimerRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimerControlButton: FC<TimerControlButtonProps> = ({
  isTimerRunning,
  startTimer,
  stopTimer,
}) => {
  const title = isTimerRunning ? 'Stop Timer' : 'Start Timer';
  const onPress = isTimerRunning ? stopTimer : startTimer;
  const iconName = isTimerRunning ? 'pause' : 'play';

  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <FontAwesome
          name={iconName}
          size={50}
          color={'#fff'}
          style={styles.icon}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    // alignSelf: 'center',
  },
  container: {
    borderWidth: 5,
    width: 100,
    height: 100,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    marginVertical: 50,
  },
});
