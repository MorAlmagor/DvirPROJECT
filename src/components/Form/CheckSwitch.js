import React from 'react';
import {
  View,
  Switch,
} from 'react-native';
import { connect } from 'react-redux';
import { changeCheckStatus } from '../../store/actions/formActions';

const CheckSwitch = ({ checkStatus, onChangeStatus, truckStatus }) => {
  return (
    <View>
      
      <Switch
        onValueChange={(value) => onChangeStatus(checkStatus.keyId, value)}
        value={truckStatus[checkStatus.keyId].status}
        trackColor={{ false: 'red', true: 'green' }}
      />
    </View>
  );
};


const mapStateToProps = (state) => {
  return {
    truckStatus: state.form.truckStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeStatus: (keyId, value) => dispatch(changeCheckStatus(keyId, value))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CheckSwitch);