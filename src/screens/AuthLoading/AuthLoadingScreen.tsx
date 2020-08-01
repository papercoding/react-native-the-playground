import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

interface IProp {
  navigation: any;
}

const AuthLoadingScreen: React.FC<IProp> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AuthorizedRoute');
    }, 3000);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" style={{width: 44, height: 44}} />
    </View>
  );
};

export default AuthLoadingScreen;
