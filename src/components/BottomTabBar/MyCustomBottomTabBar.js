import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import posed from 'react-native-pose';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import {withTheme} from 'react-native-paper';
import CustomText from '../CustomText';
import {SCREEN_WIDTH} from '../../themes';
import {scale} from 'react-native-size-matters';
import {connect} from 'react-redux';

const windowWidth = SCREEN_WIDTH;
const tabWidth = windowWidth / 3 / 2;
const transformFactor = 1 / 2;
const SpotLight = posed.View({
  route0: {x: tabWidth * (transformFactor + 0), transition: {x: {type: 'spring'}}},
  route1: {x: tabWidth * (transformFactor + 2), transition: {x: {type: 'spring'}}},
  route2: {x: tabWidth * (transformFactor + 4), transition: {x: {type: 'spring'}}},
});

const styles = StyleSheet.create({
  container: {flexDirection: 'row', height: scale(58), elevation: 2},
  tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  sportLight: {
    width: tabWidth,
    height: 4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  bottomLabel: {
    marginTop: 4,
  },
  badgeContainer: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeCountText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export const TabBarIcon = ({tintColor, name, badgeCount = 0}) => {
  let iconName;
  switch (name) {
    case 'home':
      iconName = 'columns';
      break;
    case 'notifications':
      iconName = 'envelope';
      break;
    case 'settings':
      iconName = 'palette';
      break;
    default:
      iconName = 'user';
      break;
  }
  return (
    <View style={{width: 24, height: 24, margin: 5, marginBottom: 0}}>
      <Icon color={tintColor} size={20} name={iconName} />
      {badgeCount > 0 && name === 'notifications' && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeCountText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
};

export const TabBarIconWithBadge = connect(state => ({badgeCount: state.badgeCount}))(TabBarIcon);

function MyCustomBottomTabBar(props) {
  const {
    renderIcon,
    getLabelText,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation,
    theme,
  } = props;
  const {colors} = theme;
  const {routes, index: activeRouteIndex} = navigation.state;

  return (
    <View style={[styles.container, {backgroundColor: colors.bottomTabBar}]}>
      <View style={StyleSheet.absoluteFillObject}>
        <SpotLight
          style={[styles.sportLight, {backgroundColor: colors.activeBottomTabBar}]}
          pose={`route${activeRouteIndex}`}
        />
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? colors.activeBottomTabBar : colors.inactiveBottomTabBar;
        return (
          <TouchableBounce
            key={routeIndex}
            style={styles.tabButton}
            onPress={() => {
              onTabPress({route});
            }}
            onLongPress={() => {
              onTabLongPress({route});
            }}
            accessibilityLabel={getAccessibilityLabel({route})}>
            {renderIcon({route, focused: isRouteActive, tintColor})}
            <CustomText style={[styles.bottomLabel, {color: tintColor}]}>
              {getLabelText({route})}
            </CustomText>
          </TouchableBounce>
        );
      })}
    </View>
  );
}

export default withTheme(MyCustomBottomTabBar);
