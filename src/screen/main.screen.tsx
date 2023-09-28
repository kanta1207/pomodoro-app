import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TimerCountDownDisplay } from '../components/TimerCountDownDisplay';
import { TimerControlButton } from '../components/TimerControlButton';

const focusTimeMin = 25 * 60 * 1000;
const breakTimeMin = 5 * 60 * 1000;

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
  const timerPercentageCal = (timerMin: number, timerCount: number) => {
    const percentage = (timerCount / timerMin) * 100;
    return percentage;
  };

  const timerDate = new Date(timerCount);

  const timerPercentage =
    timerMode === 'Focus'
      ? timerPercentageCal(focusTimeMin, timerCount)
      : timerPercentageCal(breakTimeMin, timerCount);

  const containerStyle =
    timerMode === 'Focus' ? styles.containerOnFocus : styles.containerOnBreak;
  return (
    <View style={containerStyle}>
      <StatusBar style="light" />
      <TimerCountDownDisplay
        timerDate={timerDate}
        timerPercentage={timerPercentage}
      />
      <TimerControlButton
        isTimerRunning={isTimerRunning}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
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
