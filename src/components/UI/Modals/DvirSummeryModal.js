import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import MainButton from '../Buttons/MainButton';
import Colors from '../../../Colors/Colors';

const DvirSummeryModal = ({ clean, modalshowHandler, truckStatus }) => {
  const ans = [];
  const ansToCheck = [];
  const [ListRender, setListRender] = useState();

  useEffect(() => {
    Object.keys(truckStatus).map((key) => {
      return ansToCheck.push({ name: truckStatus[key].keyId, status: truckStatus[key].status });
    });
    for (let i = 0; i < ansToCheck.length; i += 1) {
      if (!ansToCheck[i].status) {
        ans.push(ansToCheck[i].name);
      }
    }
    if (ans.length > 0) {
      setIsFaults(true);
    } else {
      setIsFaults(false);
    }
    const listToRender = (
      <View>
        {ans.map((fault) => <Text key={fault}>{fault}</Text>)}
      </View>
    );
    setListRender(listToRender);
  }, []);

  const faultSummery = (
    <View>
      <View>
        <Text style={styles.noFaultsText}>Reported fault summary</Text>
      </View>
      <View>
        {ListRender}
      </View>
    </View>
  );

  const [isfaults, setIsFaults] = useState(false);
  const noFalutsIMG = (
    <View style={styles.imageContainer}>
      <Image style={styles.Image} source={require('../../../../assets/SteeringWheel.png')} />
    </View>
  );
  const noFalutsTest = (
    <Text style={styles.noFaultsText}>There is no faults found, Drive Carefully</Text>
  );

  return (
    <View style={styles.backdrop}>
      <View style={styles.modal}>
        {!isfaults ? noFalutsTest : faultSummery}
        {!isfaults && noFalutsIMG}
        <View style={styles.buttonsView}>
          <MainButton onpress={() => clean()}>{isfaults ? 'I Confirm' : 'Ok'}</MainButton>
        </View>
        <View style={styles.buttonsView}>
          <MainButton onpress={() => modalshowHandler(false)}>Go back</MainButton>
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
    padding: '10%',
    zIndex: 500,
    top: '15%',
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 2,
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto'
  },
  buttonsView: {
    bottom: 15,
    top: 5
  },
  noFaultsText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
    color: '#25282A',
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
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

const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };


export default connect(mapStateToProps, null)(DvirSummeryModal);