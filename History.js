import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function History({ route }) {
  const { data } = route.params || { data: [] }; 

  return (
      <View style={styles.container}>
        <Text style={styles.baseText}>History</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.historyItemContainer}>
              <Text style={styles.historyItem}>{item.key}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  baseText: {
    fontSize: 30,
    textAlign: 'center',
  },
  historyItemContainer: {
    backgroundColor: 'lightgray',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  historyItem: {
    fontSize: 20,
    textAlign: 'center',
  },
});
