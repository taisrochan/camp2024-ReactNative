import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import LogoIoasys from '../../assets/images/logo_ioasys.png';
import TextInput from '../../components/TextInput';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { login } from '../../store/slices/userSlice.ts';
import { RoutesNavigationProp } from '../../routes';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading, accessToken } = useAppSelector(state => state.user);
  const { navigate } = useNavigation<RoutesNavigationProp>();

  const onPressLogin = async () => {
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (!isLoading && accessToken !== null) {
      navigate('BMICalculation');
    }
  }, [isLoading, accessToken, navigate]);

  return (
    <StyledContainer>
      <StyledImage source={LogoIoasys} />
      <StyledTextContainer>
        <StyledTitle>Seja bem vindo!</StyledTitle>
        <StyledSubtitle>Calculadora IMC</StyledSubtitle>
      </StyledTextContainer>
      <StyledInputContainer>
        <TextInput
          placeholder="usuario"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="senha"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </StyledInputContainer>
      <StyledTouchable activeOpacity={0.8} onPress={onPressLogin}>
        <StyledButtonText>Entrar</StyledButtonText>
      </StyledTouchable>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  background-color: #c1007e;
  padding: 0 36px;
`;

const StyledImage = styled.Image`
  margin-top: 76px;
  align-self: center;
`;

const StyledTextContainer = styled.View`
  margin-top: 120px;
`;

const StyledTitle = styled.Text`
  font-size: 31px;
  line-height: 46px;
  color: white;
  font-family: 'Poppins';
`;

const StyledSubtitle = styled.Text`
  font-size: 24px;
  line-height: 36px;
  color: white;
  top: -10px;
  font-family: 'Poppins';
`;

const StyledInputContainer = styled.View`
  margin-top: 43px;
  gap: 20px;
`;

const StyledTouchable = styled.TouchableOpacity`
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 15px 0 11px;
  border-radius: 100px;
`;

const StyledButtonText = styled.Text`
  color: white;
  font-size: 16px;
  line-height: 24px;
`;

export default LoginScreen;
