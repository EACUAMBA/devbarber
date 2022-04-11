import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';
import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import API from './../../API';
import AsyncStorage from '@react-native-community/async-storage';
import {UserContext} from './../../contexts/UserContext';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigaion = useNavigation();
  const [emailField, setEmailField] = useState('suporte@b7web.com.br');
  const [passwordField, setPasswordField] = useState('1234');

  const handleSignInButtonClick = async function (event) {
    console.log('Metodo de login.');
    if (emailField !== '' && passwordField !== '') {
      let json = await API.signIn(emailField, passwordField);
      if (json.token) {
        await AsyncStorage.setItem('token', json.token);
        userDispatch({
          type: 'setAvatar',
          payload: json.data.avatar,
        });

        navigaion.reset({
          routes: [{name: 'MainTab'}],
        });
      } else {
        alert('Email ou senha errado!');
      }
    } else {
      alert('Preencha os campos.');
    }
  };

  const handleMessageButtonClick = function (event) {
    navigaion.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  return (
    <Container>
      <BarberLogo width={'100%'} height={'160'} />
      <InputArea>
        <SignInput
          IconSVG={EmailIcon}
          placeholder={'Digite o seu e-mail.'}
          value={emailField}
          onChangeText={text => setEmailField(text)}
        />
        <SignInput
          IconSVG={LockIcon}
          placeholder={'Digite a sua senha.'}
          value={passwordField}
          onChangeText={text => setPasswordField(text)}
          password={true}
        />
        <CustomButton onPress={handleSignInButtonClick}>
          <CustomButtonText>Login</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
