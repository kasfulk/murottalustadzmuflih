/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import tailwind from 'tailwind-rn';

const App = () => (
  <SafeAreaView style={tailwind('h-full bg-red-700 items-center')}>
    <View style={tailwind('pt-80 items-center')}>
      <View style={tailwind('bg-black px-3 py-1 rounded-full')}>
        <Text style={tailwind('text-gray-100 font-semibold')}>
          Hello Tailwind
        </Text>
      </View>
    </View>
  </SafeAreaView>
);

export default App;
