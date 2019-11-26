import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,

} from 'react-native';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import FormSubmission from '../components/FormSubmission/FormSubmission';
import Modal from '../components/UI/Modals/DvirSummeryModal';
import FormIntroSection from './../components/Form/FormIntroSection'

const IndexScreen = (props) => {
  const cleanUpHandler = () => {
    setModalShow(false);
    setCheckBoxValue(false);
    setClicked(false);
    props.navigation.navigate('Index');
  };

  const [modelshow, setModalShow] = useState(false);
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>Pre-Trip</Text>
        {/* צריך להגדיר dvirstatus נעלאבוקקק  */}
        <FormIntroSection nav={props} dvirStatus={false} />
        <Form />
        <FormSubmission
          clickedHandler={setClicked}
          clicked={clicked}
          nav={props}
          modalshowHandler={setModalShow}
          checkboxVal={checkBoxValue}
          setCheckBoxHandler={setCheckBoxValue}
        />
        {modelshow && <Modal modalshowHandler={setModalShow} nav={props} clean={cleanUpHandler} />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

IndexScreen.defaultProps = {
  userName: 'Yaron'
};

const mapStateToProps = (state) => {
  return {
    imageBase64: state.form.truckImage
  };
};

export default connect(mapStateToProps)(IndexScreen);
