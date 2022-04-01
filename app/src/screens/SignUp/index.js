import React, {useState} from 'react';
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
import PersonIcon from '../../assets/person.svg';

export default () => {
  const navigaion = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const [nameField, setNameField] = useState('');

  const handleSignInButtonClick = function (event) {
    navigaion.reset({
      routes: [{name: 'SignUp'}],
    });
  };

  const handleMessageButtonClick = function (event) {
    navigaion.reset({
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <Container>
      <BarberLogo width={'100%'} height={'160'} />
      <InputArea>
        <SignInput
          IconSVG={PersonIcon}
          placeholder={'Digite o seu nome.'}
          value={nameField}
          onChangeText={text => setNameField(text)}
        />
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
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Fazer login!</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
