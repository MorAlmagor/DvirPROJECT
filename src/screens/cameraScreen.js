import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { setUserImage } from '../store/actions/formActions';
import MainButton from '../components/UI/Buttons/MainButton';
import Colors from '../Colors/Colors';

const CameraScreen = ({
  navigation,
  onSetImage
}) => {
  const [permissions, setPermissions] = useState({ camera: null, cameraRoll: null });
  

  const getPermissions = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
      const checkedStatus = status === 'granted';
      setPermissions({ camera: checkedStatus, cameraRoll: checkedStatus });
    } catch (error) {
      console.error('Error');
    }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const openCamRoll = async () => {
    if (permissions.cameraRoll) {
      const { cancelled, base64 } = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        base64: true,
        allowsMultipleSelection: false
      });
      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        navigation.navigate('Dvir');
      }
    }
  };

  const openCam = async () => {
    if (permissions.camera) {
      const { cancelled, base64 } = await ImagePicker.launchCameraAsync({
        base64: true,
        allowsEditing: false,
      });

      if (!cancelled) {
        const base64Image = `data:image/png;base64,${base64}`;
        onSetImage(base64Image);
        navigation.navigate('Dvir');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userText}>Please Take Picture Of Front Of Your Vehicle</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MainButton onpress={openCamRoll}>Gallery</MainButton>
        <MainButton onpress={openCam}>Camera</MainButton>
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
  userText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.primary
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onSetImage: (imageBase64) => dispatch(setUserImage(imageBase64))
  };
};

export default connect(null, mapDispatchToProps)(CameraScreen);