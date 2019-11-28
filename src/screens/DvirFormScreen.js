import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Form from '../components/Form/Form';
import FormSubmission from '../components/FormSubmission/FormSubmission';
import Modal from '../components/UI/Modals/DvirSummeryModal';
import FormIntroSection from '../components/Form/FormIntroSection';


const IndexScreen = ({ navigation, truckProperties }) => {
  const cleanUpHandler = () => {
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    navigation.navigate('Index');
  };
  
  
  const [LocationState, setSelectedLocalionState] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [errMsg, setErrMsg] = useState();
  
  // לוקיישן שהמשתמש בחר
  // const SelectedLocation = navigation.state.params;

  
  useEffect(() => {
    getLocationAsync();
  }, []);


  const getLocationAsync = async () => {
    const status = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      setErrMsg(
        'Permission to access location was denied',
      );
    }

    const currentlocation = await Location.getCurrentPositionAsync({});
    setSelectedLocalionState(currentlocation);
  };
  
  // console.log(LocationState);
  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Pre-Trip</Text>
        {/* צריך להגדיר dvirstatus נעלאבוקקק  */}
        <FormIntroSection
          truckProperties={truckProperties}
          dvirStatus={false}
          location={LocationState}
        />
        <Form />
        <FormSubmission
          clickedHandler={setClicked}
          clicked={clicked}
          modalshowHandler={setModalShow}
          checkboxVal={checkBoxValue}
          setCheckBoxHandler={setCheckBoxValue}
        />
        {modalShow && <Modal modalshowHandler={setModalShow} clean={cleanUpHandler} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 8,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  }
});

IndexScreen.defaultProps = {
  truckProperties: {
    carrier: 'UPS',
    lastOdometer: '12589'
  }
  
};

const mapStateToProps = (state) => {
  return {
    imageBase64: state.form.truckImage
  };
};

export default connect(mapStateToProps)(IndexScreen);
