import React from 'react';
import {
  Text,
  View,
  CheckBox,
  StyleSheet
} from 'react-native';
import { withNavigation } from 'react-navigation';
import MainButton from '../UI/Buttons/MainButton';
import Colors from '../../Colors/Colors';


const FormSubmission = ({
  checkboxVal,
  modalshowHandler,
  clickedHandler,
  setCheckBoxHandler,
  clicked,
  navigation
}) => {
  const submitHandler = () => {
    if (checkboxVal) {
      modalshowHandler(true);
    } else {
      clickedHandler(true);
    }
  };

  return (
    <View>
      <View style={styles.termsOfUseContainer}>
        <View style={styles.submitCheckbox}>
          <CheckBox
            value={checkboxVal}
            onChange={() => setCheckBoxHandler(!checkboxVal)}
          />
        </View>
        <View style={styles.submitTextView}>
          <Text
            style={styles.submitText}
          >By clicking the SUBMIT button, I confirm that I have read the
            <Text
              onPress={() => navigation.navigate('Terms')}
              style={styles.linkText}
            >Terms of Use
            </Text> and all the information I mentioned above is real
          </Text>
        </View>
      </View>
      {clicked && !checkboxVal
        && <Text style={styles.termsOfUsealert}>Please accept the terms of use to continue</Text>}
      <MainButton onpress={submitHandler}>SUBMIT</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  termsOfUseContainer: {
    flexDirection: 'row'
  },
  termsOfUsealert: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitCheckbox: {
    flex: 1
  },
  submitTextView: {
    flex: 9
  },
  submitText: {
    fontSize: 15,

  },
  linkText: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.primary,
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: Colors.primary
  },
  btn: {
    zIndex: 100
  }
});


export default withNavigation(FormSubmission);