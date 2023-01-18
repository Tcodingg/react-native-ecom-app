import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../theme/colors';
import { styles } from './Style';
import FormContainer from '../../components/FormContainer/FormContainer';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../state/authSlice';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { isLoggedIn, error, status } = useSelector((state) => state.authSlice);

  const handleSignIn = async () => {
    const body = { email, password };
    dispatch(signIn(body));
  };
  return (
    <Container>
      <View style={styles.navContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name='arrow-back-outline' size={40} color={colors.black} />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Sign In</Text>
      </View>
      <FormContainer>
        <ScrollView keyboardShouldPersistTaps={'handled'}>
          <View>
            <InputField
              label={'e-mail'}
              placeholder={'example@gmail.com'}
              input={email}
              handleChange={(value) => setEmail(value)}
            />
            <InputField
              label={'password'}
              type={'password'}
              placeholder={'*****'}
              input={password}
              handleChange={(value) => setPassword(value)}
            />
          </View>
          <Button
            title={'sign in'}
            bgColor={colors.black}
            txColor={colors.white}
            handlePress={handleSignIn}
          />
          {error && <Text style={styles.errorMessage}>{error}</Text>}
        </ScrollView>
      </FormContainer>
    </Container>
  );
};

export default SignIn;