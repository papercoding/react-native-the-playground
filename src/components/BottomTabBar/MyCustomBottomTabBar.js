import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Animated} from 'react-native';
import posed from 'react-native-pose';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {withTheme} from 'react-native-paper';

import CustomText from '../CustomText';
import {SCREEN_WIDTH, Spacing} from '../../themes';
import {scale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import TextStyles from '../../themes/TextStyles';
import {SCREEN_STACK_ROUTE_NAME} from '../../App';

const windowWidth = SCREEN_WIDTH;
const tabWidth = windowWidth / 3 / 2;
const transformFactor = 1 / 2;
const SpotLight = posed.View({
  route0: {x: tabWidth * (transformFactor + 0), transition: {x: {type: 'spring'}}},
  route1: {x: tabWidth * (transformFactor + 2), transition: {x: {type: 'spring'}}},
  route2: {x: tabWidth * (transformFactor + 4), transition: {x: {type: 'spring'}}},
});

const AnimatedTabBar = posed.View({
  slideOutDown: {y: scale(58), transition: {y: {type: 'spring'}}},
  slideInUp: {y: scale(0), transition: {y: {type: 'spring'}}},
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
  toastMessageContainer: {
    position: 'absolute',
    top: -120,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastMessage: {
    borderRadius: 8,
    backgroundColor: 'white',
    padding: Spacing.mini,
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
// Redux integration
export const TabBarIconWithBadge = connect(state => ({badgeCount: state.badgeCount}))(TabBarIcon);

function MyCustomBottomTabBar(props) {
  const [toastMessage, setToastMessage] = useState('');
  const [isShownToast, setIsShownToast] = useState(false);
  const [countHomeTabClick, setCountHomeTabClick] = useState(0);
  // Props
  const {renderIcon, getLabelText, onTabPress, getAccessibilityLabel, navigation, theme} = props;
  const {colors} = theme;
  // Extract data
  const {routes, index: activeRouteIndex} = navigation.state;
  const activeRoute = routes[activeRouteIndex];
  const currentScreen = activeRoute.routes[activeRoute.index];
  // Logic
  let isShownBottomTabBar = currentScreen.params ? currentScreen.params.isShownBottomTabBar : true;

  useEffect(() => {
    if (countHomeTabClick === 5) {
      setCountHomeTabClick(0);
      setIsShownToast(true);
      setToastMessage('Developer mode is activated ! 🥳');
      setTimeout(() => {
        setIsShownToast(false);
        navigation.navigate(SCREEN_STACK_ROUTE_NAME.Developer);
      }, 1500);
    }
  }, [countHomeTabClick, navigation]);

  return (
    <View style={{backgroundColor: colors.background}}>
      <AnimatedTabBar
        style={[
          styles.container,
          {backgroundColor: colors.bottomTabBar},
          {
            position: isShownBottomTabBar ? 'relative' : 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
        ]}
        pose={isShownBottomTabBar ? 'slideInUp' : 'slideOutDown'}>
        {isShownToast && (
          <View style={styles.toastMessageContainer}>
            <View style={styles.toastMessage}>
              <Text style={TextStyles.normalText}>{toastMessage}</Text>
            </View>
          </View>
        )}
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
                if (__DEV__) {
                  setCountHomeTabClick(route.key === 'HomeTab' ? countHomeTabClick + 1 : 0);
                }
                onTabPress({route});
              }}
              accessibilityLabel={getAccessibilityLabel({route})}>
              {renderIcon({route, focused: isRouteActive, tintColor})}
              <CustomText style={[styles.bottomLabel, {color: tintColor}]}>
                {getLabelText({route})}
              </CustomText>
            </TouchableBounce>
          );
        })}
      </AnimatedTabBar>
    </View>
  );
}

export default withTheme(MyCustomBottomTabBar);
