import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

type TimerCountDownDisplayProps = {
  timerDate: Date;
};

export const TimerCountDownDisplay: FC<TimerCountDownDisplayProps> = ({
  timerDate,
}) => {
  return (
    <Text style={styles.timerCounterText}>
      {timerDate.getMinutes().toString().padStart(2, '0')} :{' '}
      {timerDate.getSeconds().toString().padStart(2, '0')}
    </Text>
  );
};

const styles = StyleSheet.create({
  timerCounterText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fff',
  },
});
