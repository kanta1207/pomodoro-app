import React, { FC } from 'react';
import { Button } from 'react-native';

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

  return <Button title={title} onPress={onPress} />;
};
