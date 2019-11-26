// import { changeCheckStatus } from '../../store/actions/formActions';
// import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';


const FormIntroSection = ({ dvirStatus, nav}) => {

  const d = new Date();
  const date = d.toString();

  // const [carrier, setCarrier] = useState(undefined);
  // const [location, setLocation] = useState(undefined);
  // const [odometer, setOdometer] = useState(undefined);
  const [dateValue = date, onChangeDate] = useState(undefined);


  const inputSction = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <View style={{}}>
        <View style={{}}>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            // value={value}
            placeholder="Carrier"
            placeholderTextColor="grey"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => nav.navigation.navigate('Map')}>
            <Text style={styles.ButtonInput}>dgdg</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            // value={value}
            placeholder="Odometer - Start"
            placeholderTextColor="grey"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeDate(text)}
            value={dateValue}
            placeholder={dateValue}
            placeholderTextColor="grey"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
      </View>
    </View>

  );
  if (dvirStatus) {
    inputSction = (
      <View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            value={value}
            // placeholder={placeholder}
            placeholderTextColor="grey"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
        <View>
          <TextInput
            onChangeText={(text) => onChangeText(text)}
            value={value}
            // placeholder={placeholder}
            placeholderTextColor="grey"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            blurOnSubmit
          />
        </View>
      </View>
    );
  }


  return inputSction;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 180,
    padding: 12,
    top: 8,
    marginVertical: 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    // fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  ButtonInput: {
    height: 40,
    width: 180,
    padding: 12,
    top: 8,
    marginVertical: 10,
    borderColor: '#aa0061',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: 'grey'
  }
});

// const mapStateToProps = (state) => {
//   return {
//     truckStatus: state.form.truckStatus
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onChangeStatus: (keyId, value) => dispatch(changeCheckStatus(keyId, value))
//   };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(CheckSwitch);
export default FormIntroSection;