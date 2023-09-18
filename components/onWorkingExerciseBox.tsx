import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GreyExer from '../img/icons/grey_exer.svg';
import GreyRightArrow from '../img/icons/ep_arrow-up-bold.svg';

export type OnWorkingExerciseBoxProps = {
  id?: number;
  name?: string | null;
  distance?: string | null;
  times?: string | null;
  sets?: string | null;
  calories?: string | null;
  date?: string | null;
  percent?: string | null;
};

const OnWorkingExerciseBox = ({
  id,
  name,
  distance,
  times,
  sets,
  calories,
  date,
  percent,
}: OnWorkingExerciseBoxProps) => {
  return (
    <View style={{flex: 1}}>
      {percent === '100%' ? (
        <View
          key={id}
          style={[
            {
              backgroundColor: 'white',

              borderRadius: 12,
              marginTop: 20,
            },
          ]}>
          <View
            style={{
              flex: 1,
              paddingTop: 16,
              paddingLeft: 16,
              paddingRight: 10,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 13,
                alignItems: 'center',
                flex: 1,
              }}>
              <Image source={require('../img/icons/comp_icon.png')} />
              <Text style={{fontSize: 18, paddingBottom: 4, color: '#4582E9'}}>
                {name}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#4582E9', fontSize: 14}}>완료 {date}</Text>
              <Image source={require('../img/icons/arrow.png')} />
            </View>
          </View>
          <View style={styles.ComplatedWorkoutBox}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                gap: 10,
                paddingLeft: 6,
                flex: 1,
                borderRightColor: '#D0DEF0',
                borderRightWidth: 2,
              }}>
              <Text style={{color: '#000', fontSize: 20, paddingBottom: 4}}>
                {date}
              </Text>
            </View>

            <Text
              style={{
                flex: 1,
                fontSize: 20,
                color: '#4d5055',
                display: 'flex',
                justifyContent: 'center',
                paddingLeft: 3,
                alignItems: 'center',
                marginLeft: 24,
                borderRightColor: '#D0DEF0',
                borderRightWidth: 2,
              }}>
              {sets ? `${times} ${sets}` : distance}
            </Text>
            <View
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexDirection: 'row',
                gap: 5,
              }}>
              <Text
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: '#000',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 3,
                }}>
                {calories}
              </Text>
            </View>
          </View>
        </View>
      ) : percent === '0%' ? (
        <View
          key={id}
          style={[
            styles.onWorkingBox,
            {backgroundColor: 'white', marginTop: 20},
          ]}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              gap: 10,

              paddingLeft: 5,
              flex: 1,
              borderRightColor: '#D0DEF0',
              borderRightWidth: 2,
            }}>
            <GreyExer />
            <Text style={{color: '#A8ABAC', fontSize: 18, paddingBottom: 4}}>
              {name}
            </Text>
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: '#A8ABAC',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            {sets ? `${times} ${sets}` : distance}
          </Text>
          <View
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text style={{fontSize: 14, color: '#A8ABAC', paddingBottom: 0}}>
              미완료
            </Text>
            <GreyRightArrow />
          </View>
        </View>
      ) : (
        <View key={id} style={styles.onWorkingBox}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',

              gap: 10,

              paddingLeft: 5,
              flex: 1,
              borderRightColor: '#D0DEF0',
              borderRightWidth: 2,
            }}>
            <Image
              style={{height: 25}}
              source={require('../img/icons/exer_blue_icon.png')}
            />
            <Text style={{color: 'white', fontSize: 18, paddingBottom: 4}}>
              {name}
            </Text>
          </View>

          <Text
            style={{
              flex: 1,
              fontSize: 14,
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 24,
            }}>
            {sets ? `${times} ${sets}` : distance}
          </Text>
          <View
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text style={{fontSize: 14, color: 'white', paddingBottom: 0}}>
              {percent}진행중
            </Text>
            <Image source={require('../img/icons/white_arrow.png')} />
          </View>
        </View>
      )}
    </View>
  );
};

export default OnWorkingExerciseBox;

const styles = StyleSheet.create({
  onWorkingBox: {
    backgroundColor: '#4582e9',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    flex: 1,

    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  ComplatedWorkoutBox: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,

    alignItems: 'center',
    gap: 10,
  },
});
