import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckList from './CheckList';

const FormSection = ({ sectionInfo }) => {
  const [expandSection, setExpandSection] = useState(false);
  const { title, checkList } = sectionInfo;

  return (
    <View style={styles.section}>
      <TouchableOpacity onPress={() => setExpandSection((prevState) => !prevState)}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            {title}
          </Text>
          <Text style={{ ...styles.sectionTitle, color: 'gray' }}>{expandSection ? '-' : '+'}</Text>
        </View>
      </TouchableOpacity>
      {expandSection && <CheckList List={checkList} />}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginHorizontal: 10,
    marginVertical: 15,
    borderBottomWidth: 3
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },


});

export default FormSection;