import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, radius, spacingX, spacingY } from '@/constants/theme'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native';
import { verticalScale } from '@/utils/styling'
import { useRouter } from 'expo-router'
import Button from '@/components/Button'

const Register = () => {

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current || !nameRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    // setTimeout(() => {
    //   setIsLoading(false);
    //   alert("Account created successfully!");
    //   router.push("/(auth)/login");
    // }, 2000);
  }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
    >
      <ScreenWrapper showPattern={true} >
        {/* container view */}
        <View style={styles.container} >
          {/* header View */}
          <View style={styles.header} >
            <BackButton iconSize={28} />
            <Typo size={17} color={colors.white}>
              Need some Help ?
            </Typo>
          </View>

          {/* Create Account Section */}
          <View style={styles.content} >
            <ScrollView
              contentContainerStyle={styles.form}
              showsVerticalScrollIndicator={false}
            >
              <View style={{ gap: spacingY._10, marginBottom: spacingY._15 }} >
                <Typo size={28} fontWeight={"600"} >
                  Getting Started
                </Typo>
                <Typo color={colors.neutral600}>
                  Create an account to continue!
                </Typo>
              </View>

              {/* Input */}
              <Input
                placeholder="Enter your Name"
                onChangeText={(value: string) => nameRef.current = value}
                icon={<Icons.User size={verticalScale(20)} color={colors.neutral600} />}
              />

              <Input
                placeholder="Enter your Email"
                keyboardType="email-address"
                onChangeText={(value: string) => emailRef.current = value}
                icon={<Icons.Envelope size={verticalScale(20)} color={colors.neutral600} />}
              />

              <Input
                placeholder="Enter your Password"
                secureTextEntry={true}
                onChangeText={(value: string) => passwordRef.current = value}
                icon={<Icons.Lock size={verticalScale(20)} color={colors.neutral600} />}
              />

              <View style={{ marginTop: spacingY._25, gap: spacingY._15 }} >
                <Button loading={isLoading} onPress={handleSubmit}>
                  <Typo size={16} fontWeight={'bold'} color={colors.black} >
                    Sign Up
                  </Typo>
                </Button>

                <View style={styles.footer} >
                  <Typo>
                    Already have an account ?
                  </Typo>
                  <Pressable onPress={()=> router.push("/(auth)/login")} >
                    <Typo color={colors.primary} fontWeight={"bold"}>
                      Log In
                    </Typo>
                  </Pressable>
                </View>
              </View>


            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    // gap: spacingY._30,
    // marginHorizontal: spacingX._20,
  },
  header: {
    paddingHorizontal: spacingX._20,
    marginTop: spacingY._15,
    paddingBottom: spacingY._25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: radius._50,
    borderTopRightRadius: radius._50,
    borderCurve: 'continuous',
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._20,
  },
  form: {
    gap: spacingY._15,
    marginTop: spacingY._20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
})