import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TimerCountDownDisplay } from '../components/TimerCountDownDisplay';
import { TimerControlButton } from '../components/TimerControlButton';

const focusTimeMin = 0.2 * 60 * 1000;
const breakTimeMin = 0.1 * 60 * 1000;

export const MainScreen = () => {
  const [timerCount, setTimerCount] = useState(focusTimeMin);
  const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimerCount((prev) => prev - 1000);
    }, 1000);
    setTimerInterval(interval);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    setIsTimerRunning(false);
  };

  const timerDate = new Date(timerCount);

  const mainButtonProps = {};
  return (
    <View style={styles.container}>
      <TimerCountDownDisplay timerDate={timerDate} />
      <StatusBar style="auto" />
      <TimerControlButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
