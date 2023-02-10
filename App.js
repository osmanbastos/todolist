import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Empty from './src/components/Empty';
import Header from './src/components/Header';
import Task from './src/components/Task';

export default function App() {
  const [data, setData] = useState([])

  return (
    <View style={styles.container}>
      <FlatList 
      data={data} 
      keyExtractor={(item) => item.key}
      ListHeaderComponent={() => <Header />}
      ListEmptyComponent={() => <Empty />}
      renderItem={() => <Task />}
      />
      <Task item={"string"}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingVertical: 60,
  },
});
