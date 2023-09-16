import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type CustomPageTitleProps = {
  title?: string;
  subTitle?: string;
  name?: {blueText: string; others?: string};
};

const CustomTitle = ({title, subTitle, name}: CustomPageTitleProps) => {
  return (
    <View style={styles.container}>
      {name && (
        <View style={styles.headTitle}>
          <Text style={{color: '#4582E9', fontSize: 25, fontWeight: '600'}}>
            {name.blueText}
          </Text>
          <Text style={{color: '#4d5055', fontSize: 25, fontWeight: '600'}}>
            {name.others}
          </Text>
        </View>
      )}
      {title && <Text style={styles.headTitle}>{title}</Text>}
      {subTitle && <Text>{subTitle}</Text>}
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    marginBottom: 8,
  },
  headTitle: {
    fontSize: 25,
    color: '#4d5055',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
  },
  subTitle: {
    color: '#a7aaac',
    fontSize: 14,
    fontWeight: '500',
  },
});
