import { Dimensions, ImageBackground, Platform, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { ScreenWrapperProps } from '@/types'

const { height } = Dimensions.get('window')

const ScreenWrapper = ({
  style,
  children,
  showPattern = false,
  isModal = false,
  bgOpacity = 1,
}: ScreenWrapperProps) => {

  const paddingTop = Platform.OS === 'ios'
    ? height * (isModal ? 0.02 : 0.06)
    : StatusBar.currentHeight ?? 40

  const paddingBottom = isModal ? height * 0.02 : 0

  return (
    <ImageBackground
      source={require('../assets/images/bgPattern.png')}
      imageStyle={{ opacity: showPattern ? bgOpacity : 0 }}
      style={styles.background}
    >
      <View
        style={[
          {
            paddingTop,
            paddingBottom,
            flex: 1,
          },
          style,
        ]}
      >
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        {children}
      </View>
    </ImageBackground>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
})
