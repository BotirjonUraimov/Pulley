import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomButton from './components/customButton';
import LoginScreen from './src/screens/loginPage';
import ExerciseScreen from './src/screens/exercisePages/exercisePage';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{title: 'Pulley', headerShown: false}}
        />
        <Stack.Screen
          name="Exercise"
          component={ExercisePage}
          options={{title: '운동'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//@ts-ignore
function LoginPage({navigation}): JSX.Element {
  return <LoginScreen navigation={navigation} />;
}

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
    fontFamily: `"Noto Sans KR-Medium", Helvetica`,
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

const ExercisePage = ({navigation}: any) => {
  return <ExerciseScreen />;
};

export default App;
