import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

import CheckSwitch from './CheckSwitch';

const CheckList = ({ List }) => {
  return (
    <FlatList
      data={List}
      keyExtractor={(checkItem) => checkItem.keyId}
      renderItem={({ item }) => {
        return (
          <View style={styles.checkList}>
            <Text style={{ maxWidth: '70%' }}>{item.text}</Text>
            <CheckSwitch checkStatus={item} />
          </View>
        );
      }}
    />
  
  );
};

const styles = StyleSheet.create({
  checkList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
});

export default CheckList;
