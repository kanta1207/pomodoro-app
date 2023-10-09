import React, { FC } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export type TimerControlButtonsProps = {
  isTimerRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
};

export const TimerControlButtons: FC<TimerControlButtonsProps> = ({
  isTimerRunning,
  startTimer,
  stopTimer,
}) => {
  const title = isTimerRunning ? 'Stop Timer' : 'Start Timer';
  const onPress = isTimerRunning ? stopTimer : startTimer;
  const buttonText = isTimerRunning ? 'Pause' : 'Start';

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Reset</Text>
        </View>
      </Pressable>
      <Pressable onPress={onPress}>
        <View style={styles.startOrPauseButtonContainer}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    // alignSelf: 'center',
  },
  startOrPauseButtonContainer: {
    width: 100,
    height: 100,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    alignItems: 'center',

    marginVertical: 50,
  },
  buttonContainer: {
    borderWidth: 5,
    width: 100,
    height: 100,
    borderRadius: 250 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    marginVertical: 50,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#fff',
  },
});
