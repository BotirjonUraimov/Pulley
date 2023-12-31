import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomButton from '../../components/customButton';

function LoginScreen(props: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

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
        // style={{
        //   backgroundColor: isDarkMode ? Colors.black : Colors.white,
        // }}
        >
          <View style={styles.logo}>
            <Image source={require('../../img/logo.png')} />
          </View>
          <SafeAreaView style={{marginTop: '4%'}}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder="휴대폰 번호 입력"
              value={text}
            />

            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="비밀번호 입력"
              secureTextEntry={true}
            />
          </SafeAreaView>
          <CustomButton
            label="로그인"
            border="#4582e9"
            onClick={() => props.navigation.navigate('Exercise')}
          />

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                textAlign: 'right',
                borderRightColor: '#A8ABAC',
                paddingRight: 30,
                borderRightWidth: 1,
                color: 'black',
                flex: 1,
              }}>
              {'비밀번호 찾기'}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                textAlign: 'left',
                paddingLeft: 30,
                color: 'black',
                flex: 1,
              }}>
              {'회원가입'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
const styles = StyleSheet.create({
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '45%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: '#D0DEF0',
    fontSize: 16,
    // fontFamily: `"Noto Sans KR-Medium", Helvetica`,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
