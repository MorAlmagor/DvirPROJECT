import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';
// לא גמור בעליל //

const DvirSummeryModal = (props) => {
  const [isfaults, setIsFaults] = useState(false);
  const falutsIMG = (
    <View style={styles.imageContainer}>
      <Image style={styles.Image} source={require('../../../../assets/SteeringWheel.png')} />
    </View>
  );
 
  return (
    <View style={styles.backdrop}>
      <View style={styles.modal}>
        {isfaults
          ? <Text>Reported fault summary</Text>
          : <Text style={styles.noFaultsText}>There is no faults found, Drive Carefully</Text>}
        {!isfaults && falutsIMG}
        {/* {props.children} */}
        <View style={styles.buttonsView}>
          <MainButton onpress={() => props.clean()}>{isfaults ? 'I Confirm' : 'Ok'}</MainButton>
        </View>
        <View style={styles.buttonsView}>
          <MainButton onpress={() => props.modalshowHandler(false)}>Go back</MainButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    alignContent: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    width: '87%',
    padding: '2%',
    zIndex: 500,
    top: '25%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2
    
  },
  buttonsView: {
    margin: 0
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.primary
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  imageContainer: {
    alignItems: 'center',
    margin: '5%'

  },
  backdrop: {
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
    zIndex: 400,
    left: 0,
    top: 0,
    opacity: 0.9
  }
});

export default DvirSummeryModal;