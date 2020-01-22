import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import posed from 'react-native-pose';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import {withTheme} from 'react-native-paper';
import _ from 'lodash';

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
  const timerID = useRef(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isShownToast, setIsShownToast] = useState(false);
  const [countHomeTabClick, setCountHomeTabClick] = useState(0);
  const {renderIcon, getLabelText, onTabPress, getAccessibilityLabel, navigation, theme} = props;
  const {colors} = theme;
  const {routes, index: activeRouteIndex} = navigation.state;

  const navigateToDeveloperScreen = () => {
    navigation.navigate(SCREEN_STACK_ROUTE_NAME.Developer);
  };

  useEffect(() => {
    if (countHomeTabClick === 5) {
      setCountHomeTabClick(0);
      setIsShownToast(true);
      setToastMessage('Developer mode is activated ! 🥳');
      setTimeout(() => {
        navigateToDeveloperScreen();
      }, 2000);
    }
    if (!timerID.current) {
      timerID.current = setTimeout(() => {
        setIsShownToast(false);
      }, 1200);
    } else {
      clearTimeout(timerID.current);
      timerID.current = setTimeout(() => {
        setIsShownToast(false);
      }, 1200);
    }
  }, [countHomeTabClick]);

  return (
    <View style={[styles.container, {backgroundColor: colors.bottomTabBar}]}>
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
    </View>
  );
}

export default withTheme(MyCustomBottomTabBar);
