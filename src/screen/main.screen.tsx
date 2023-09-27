import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
  const [timerMode, setTimerMode] = useState<'Focus' | 'Break'>('Focus');

  useEffect(() => {
    if (timerCount === 0) {
      if (timerMode === 'Focus') {
        setTimerMode('Break');
        setTimerCount(breakTimeMin);
      } else {
        setTimerMode('Focus');
        setTimerCount(focusTimeMin);
      }
      // stopTimer();
    }
  }, [timerCount]);
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

  const containerStyle =
    timerMode === 'Focus' ? styles.containerOnFocus : styles.containerOnBreak;
  return (
    <View style={containerStyle}>
      <StatusBar style="light" />
      <TimerControlButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
      <TimerCountDownDisplay timerDate={timerDate} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerOnFocus: {
    flex: 1,
    backgroundColor: '#49A843',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOnBreak: {
    flex: 1,
    backgroundColor: '#0066AF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
