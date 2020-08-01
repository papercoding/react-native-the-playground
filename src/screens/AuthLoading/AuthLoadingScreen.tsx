import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

interface IProp {
  navigation: any;
}

const AuthLoadingScreen: React.FC<IProp> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthorizedRoute');
    }, 6000);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView source={require('../../assets/json/loading.json')} autoPlay loop />
    </View>
  );
};

export default AuthLoadingScreen;
