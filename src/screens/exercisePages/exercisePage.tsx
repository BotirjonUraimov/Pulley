import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomTitle from '../../../components/customTitle';

/*Import images*/
import Clock from '../../../img/icons/clock.svg';
import Fire from '../../../img/icons/fire_icon.svg';
import OnWorkingExerciseBox, {
  OnWorkingExerciseBoxProps,
} from '../../../components/onWorkingExerciseBox';

const screenWidth = Dimensions.get('window').width;
const sampleData: OnWorkingExerciseBoxProps[] = [
  {
    name: '암컬',
    distance: null,
    times: '12회',
    sets: '3세트',
    calories: null,
    date: null,
    percent: '50%',
  },
  {
    name: 'Something',
    distance: '10km',
    times: null,
    sets: null,
    calories: '150 kcal',
    date: '2023.6.10',
    percent: '100%',
  },
  {
    name: '달리기',
    distance: '10km',
    times: null,
    sets: null,
    calories: '150 kcal',
    date: '2023.6.10',
    percent: '100%',
  },
  {
    name: '레그컬',
    distance: null,
    times: '10회',
    sets: '5세트',
    calories: null,
    date: null,
    percent: '0%',
  },
];
function ExerciseScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        hidden={false}
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        // backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={backgroundStyle}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            padding: 10,
          }}>
          <CustomTitle
            title="운동 일수"
            subTitle="운동 일수에 대한 간략한 텍스트를 입력해주세요."
          />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 10,
              paddingTop: 15,
              marginBottom: 15,
            }}>
            <Text style={{fontSize: 18, color: '#4d5055', fontWeight: '600'}}>
              지난 28일간 17일 운동했어요.
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 20,
                paddingBottom: 15,
              }}>
              <View style={styles.lastResultsBox}>
                <Clock style={{height: 35}} />
                <View>
                  <Text style={styles.lastResentBoxLitleText}>총 운동시간</Text>
                  <Text style={styles.lastResentBoxCapText}>10:23:11</Text>
                </View>
              </View>
              <View style={styles.lastResultsBox}>
                <Fire style={{height: 35}} />
                <View>
                  <Text style={styles.lastResentBoxLitleText}>총 운동시간</Text>
                  <Text style={styles.lastResentBoxCapText}>10:23:11</Text>
                </View>
              </View>
            </View>
          </View>

          <CustomTitle
            title="운운동량 랭킹"
            subTitle="회원님의 운동 달성률 텍스트 텍스트."
          />

          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              padding: 10,
              paddingTop: 20,
              marginBottom: 15,
              marginTop: 2,
              gap: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{flex: 1}}>나</Text>
              <View style={{flex: 9}}>
                <View
                  style={{
                    width: 150,
                    backgroundColor: '#4582e9',
                    height: 16,
                    borderRadius: 6,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{flex: 1}}>1등</Text>
              <View style={{flex: 9}}>
                <View
                  style={{
                    width: 250,
                    backgroundColor: '#A8ABAC',
                    height: 16,
                    borderRadius: 6,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{flex: 1}}>편균</Text>
              <View style={{flex: 9}}>
                <View
                  style={{
                    width: 200,
                    backgroundColor: '#e1e1e1',
                    height: 16,
                    borderRadius: 6,
                  }}></View>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                alignItems: 'center',
                padding: 15,
              }}>
              <Text style={{fontSize: 14}}>0:20:12</Text>
              <Text style={{fontSize: 12}}>(나의 저번 주 평균 운동 시간)</Text>
            </View>
          </View>

          <CustomTitle title="진행중인 운동" />

          {sampleData.map((ele, index) => {
            return (
              <View
                key={index}
                style={{display: 'flex', gap: 32, flexDirection: 'column'}}>
                <OnWorkingExerciseBox
                  id={index}
                  name={ele.name}
                  distance={ele.distance}
                  times={ele.times}
                  sets={ele.sets}
                  calories={ele.calories}
                  date={ele.date}
                  percent={ele.percent}
                />
              </View>
            );
          })}

          {/* Exercise Adding part */}

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              gap: 8,
              marginTop: 20,
              marginBottom: 25,
            }}>
            <View style={styles.addEx}>
              <Image source={require('../../../img/icons/plus_icon.png')} />
              <Text style={styles.addExBox}>운동 추가</Text>
            </View>
            <View style={styles.addEx}>
              <Image source={require('../../../img/icons/qr-code.png')} />
              <Text style={styles.addExBox}>QR 기기 스캔</Text>
            </View>
          </View>

          <CustomTitle title="최근 운동" />

          <View style={{flex: 1, gap: 10}}>
            {sampleData.map((ele, index) => {
              return (
                <View key={index} style={styles.recentBox}>
                  <View
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      gap: 10,
                      borderRightColor: '#D0DEF0',
                      borderRightWidth: 2,
                    }}>
                    <Image
                      source={require('../../../img/icons/exer_blue_icon.png')}
                    />
                    <Text
                      style={{
                        fontSize: 18,
                        paddingBottom: 4,
                        color: '#4582E9',
                      }}>
                      {ele.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      flexDirection: 'row',
                      paddingLeft: 20,
                      gap: 13,
                    }}>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 14,
                        color: '#4d5055',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      {ele.sets ? `${ele.times} ${ele.sets}` : ele.distance}
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#4582E9',
                        padding: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 12,
                        paddingBottom: 7,
                        flex: 1,
                      }}>
                      <Text
                        style={{fontSize: 14, color: '#fff', paddingBottom: 0}}>
                        운동 추가
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ExerciseScreen;

const styles = StyleSheet.create({
  lastResultsBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 16,
    flex: 1,
  },
  lastResentBoxLitleText: {
    fontSize: 12,
    color: '#4d5055',
    marginBottom: 2,
  },
  lastResentBoxCapText: {
    fontSize: 18,
    color: '#4d5055',
  },
  addEx: {
    backgroundColor: '#D0DEF0',
    flex: 1,
    borderRadius: 12,
    height: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  addExBox: {
    fontSize: 16,
    color: '#4582e9',
    paddingBottom: 4,
  },
  recentBox: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 56,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderColor: 'red',

    paddingLeft: 16,
    paddingRight: 16,
  },
});
