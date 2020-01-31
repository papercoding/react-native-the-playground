import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import List, {List as ListModel} from './List';
import Container from '../../../../../components/Container';
import CustomText from '../../../../../components/CustomText';
import {Spacing} from '../../../../../themes';

const list: ListModel = {
  name: 'Total Points',
  items: [
    {name: 'Nathaniel Fitzgerald', points: '$3.45'},
    {name: 'Lawrence Fullter Fitzgerald', points: '$3.45'},
    {name: 'Jacob Mullins', points: '$3.45'},
    {name: 'Jesus Lewis', points: '$3.45'},
    {name: 'Johnny Marr', points: '$2.56'},
  ],
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Spacing.small,
    paddingRight: Spacing.small,
  },
  title: {
    marginTop: Spacing.small,
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default () => {
  return (
    <Container>
      <ScrollView style={styles.container}>
        <CustomText style={styles.title}>Markets</CustomText>
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <List {...{list}} />
        <View style={{height: 16}} />
      </ScrollView>
    </Container>
  );
};
