import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { Background } from './components/Background';
import { Routes } from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes/>
    </>
  );
}
