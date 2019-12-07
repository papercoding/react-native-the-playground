import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import posed from 'react-native-pose';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';

import {withTheme} from 'react-native-paper';
import CustomText from '../CustomText';
import {SCREEN_WIDTH} from '../../themes';
import {scale} from 'react-native-size-matters';

const windowWidth = SCREEN_WIDTH;
const tabWidth = windowWidth / 3 / 2;
const transformFactor = 1 / 2;
const SpotLight = posed.View({
  route0: {x: tabWidth * (transformFactor + 0), transition: {x: {type: 'spring'}}},
  route1: {x: tabWidth * (transformFactor + 2), transition: {x: {type: 'spring'}}},
  route2: {x: tabWidth * (transformFactor + 4), transition: {x: {type: 'spring'}}},
});

const styles = StyleSheet.create({
  container: {flexDirection: 'row', height: scale(52), elevation: 2},
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
});

export const TabBarIcon = ({tintColor, name}) => {
  let iconName;
  switch (name) {
    case 'home':
      iconName = 'home';
      break;
    case 'notifications':
      iconName = 'bell';
      break;
    case 'settings':
      iconName = 'cog';
      break;
    default:
      iconName = 'user';
      break;
  }
  return <Icon color={tintColor} size={20} name={iconName} />;
};

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
        console.tron.log('TCL: MyCustomBottomTabBar -> tintColor', tintColor);
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
            <CustomText style={styles.bottomLabel}>{getLabelText({route})}</CustomText>
          </TouchableBounce>
        );
      })}
    </View>
  );
}

export default withTheme(MyCustomBottomTabBar);
