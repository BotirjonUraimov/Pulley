import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type OnWorkingExerciseBoxProps = {
  status?: string;
  exersiseType?: string;
  distance?: string;
  times?: string;
  sets?: string;
  calories?: string;
  date?: string;
  percent?: string;
};

const OnWorkingExerciseBox = ({
  status,
  exersiseType,
  distance,
  times,
  sets,
  calories,
  date,
  percent,
}: OnWorkingExerciseBoxProps) => {
  return (
    <View>
      <Text>onWorkingExerciseBox</Text>
    </View>
  );
};

export default OnWorkingExerciseBox;

const styles = StyleSheet.create({});
