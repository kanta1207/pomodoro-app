import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type TimerCountDownDisplayProps = {
  timerDate: Date;
  timerPercentage: number;
};

export const TimerCountDownDisplay: FC<TimerCountDownDisplayProps> = ({
  timerDate,
  timerPercentage,
}) => {
  return (
    <AnimatedCircularProgress
      size={250}
      width={8}
      fill={timerPercentage}
      rotation={360}
      tintColor="#fff">
      {() => {
        return (
          <Text style={styles.timerCounterText}>
            {timerDate.getMinutes().toString().padStart(2, '0')} :{' '}
            {timerDate.getSeconds().toString().padStart(2, '0')}
          </Text>
        );
      }}
    </AnimatedCircularProgress>
  );
};

const styles = StyleSheet.create({
  timerCounterText: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fff',
  },
});
