import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {Spacing} from '../../themes';
import TextStyles from '../../themes/TextStyles';
import {getThemeMode} from '../../themes/Colors';
import {scale} from 'react-native-size-matters';

const ThemedCard = ({cardContainerStyle, title, themeMode, isActive, onPress}) => {
  const cardContainerBackground = {backgroundColor: getThemeMode(themeMode).colors.cardColor};
  const titleTextColor = {color: getThemeMode(themeMode).colors.text};
  const activeTextColor = {color: getThemeMode(themeMode).colors.text};
  const {colors} = getThemeMode(themeMode);
  const arrayColors = [
    colors.primary,
    colors.primaryDark,
    colors.primaryLight,
    colors.secondary,
    colors.background,
  ];
  return (
    <TouchableBounce
      onPress={() => {
        onPress(themeMode);
      }}>
      <View style={[styles.cardContainer, cardContainerBackground, cardContainerStyle]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.titleText, titleTextColor]}>{title}</Text>
          {isActive && <Text style={[styles.activeText, activeTextColor]}>{'ACTIVE'}</Text>}
        </View>
        <View style={styles.listColorContainer}>
          {arrayColors.map((item, index) => (
            <View
              style={{
                backgroundColor: item,
                width: scale(34),
                height: scale(34),
                borderRadius: scale(34) / 2,
              }}
            />
          ))}
        </View>
      </View>
    </TouchableBounce>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: Spacing.mini,
    borderRadius: Spacing.mini,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  titleText: {
    ...TextStyles.body2,
  },
  activeText: {
    position: 'absolute',
    top: 0,
    right: 0,
    alignSelf: 'center',
    fontWeight: 'bold',
    ...TextStyles.normalText,
  },
  listColorContainer: {
    marginTop: Spacing.mini,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ThemedCard;
