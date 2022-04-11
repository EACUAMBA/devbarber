import React, {useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import BarberLog from '../../assets/barber.svg';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import API from '../../API';
import {UserContext} from './../../contexts/UserContext';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token1');
      if (token) {
        let res = await API.checkToken(token);
        if (res.json().token) {
          await AsyncStorage.setItem('token', res.json.token);
          userDispatch({
            type: 'setAvatar',
            payload: res.json().data.avatar,
          });

          navigation.reset({
            routes: [
              {
                name: 'MainTab',
              },
            ],
          });
        } else {
          navigation.navigate('SignIn');
        }
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLog width={'100%'} height={'160'} />
      <LoadingIcon size={'large'} color={'#FFFFFF'} />
    </Container>
  );
};
