// import { changeCheckStatus } from '../../store/actions/formActions';
import { connect } from 'react-redux';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { getStringDate } from '../../utils/dateCreator';

const FormIntroSection = ({
  dvirStatus,
  navigation,
  carrier,
  lastOdometer,
  // location
}) => {
  const dateString = getStringDate();
  // const InitialLocationToRedux = location.coords;
  // console.log('FIS' + InitialLocationToRedux);

  // const [longitude, setLongitude] = useState(location.coords.longitude);
  // console.log(longitude);

  // const [carrier, setCarrier] = useState(undefined);
  // const [location, setLocation] = useState(undefined);
  // const [odometer, setOdometer] = useState(undefined);
  
  let inputSction = (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
      <View style={{}}>
        <View style={{}}>
          <TextInput
            // onChangeText={(text) => onChangeText(text)}
            value={carrier}
            // placeholder="Carrier"
            // placeholderTextColor="grey"
            style={styles.input}
            // autoCapitalize="none"
            // autoCompleteType="off"
            // autoCorrect={false}
            // blurOnSubmit
            editable={false}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Map')}>
            <Text style={styles.ButtonInput}>dgdg</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <TextInput
            // onChangeText={(text) => onChangeText(text)}
            value={lastOdometer}
            // placeholder="Odometer - Start"
            // placeholderTextColor="grey"
            style={styles.input}
            // autoCapitalize="none"
            // autoCompleteType="off"
            // autoCorrect={false}
            keyboardType="numeric"
            blurOnSubmit
          />
        </View>
        <View>
          <TextInput
            // onChangeText={(text) => onChangeDate(text)}
            value={dateString}
            // placeholder={dateValue}
            // placeholderTextColor="grey"
            style={styles.input}
            // autoCapitalize="none"
            // autoCompleteType="off"
            // autoCorrect={false}
            editable={false}
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
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
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
            // onChangeText={(text) => onChangeText(text)}
            // value={value}
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
const mapStateToProps = (state) => {
  return {
    carrier: state.form.carrier,
    lastOdometer: state.form.lastOdometer
  };
};

// const mapDispatchToProps = () => {
//   return {
    
//   };
// };

export default connect(mapStateToProps, null)(withNavigation(FormIntroSection));