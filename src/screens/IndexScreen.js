import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const IndexScreen = ({ userName, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.userNameText}>
        Hello {userName}
      </Text>
      <View style={styles.buttonsContainer}>
        
        <MainButton onpress={() => navigation.navigate('Camera')}>Post-Trip</MainButton>
        <MainButton onpress={() => navigation.navigate('Camera')}>Pre-Trip</MainButton>
        <MainButton onpress={() => alert('comming Soon')}>Old-Reports</MainButton>

      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  buttonsContainer: {
    height: '70%',
    justifyContent: 'space-around',
    margin: '10%'
  },
  container: {
    alignItems: 'center',
    marginTop: '35%'
  },
  userNameText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.primary
  }
});

IndexScreen.defaultProps = {
  userName: 'Yaron'
};

export default IndexScreen;
