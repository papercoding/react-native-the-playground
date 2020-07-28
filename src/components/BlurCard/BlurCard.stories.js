import React from 'react';
import BlurCard from './BlurCard';

import {storiesOf} from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import {action} from '@storybook/addon-actions';

const BlurCardStory = storiesOf('BlurCard', module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <BlurCard
      containerStyle={{width: 300, height: 300}}
      title="Simple"
      imageSource={require('../../assets/images/ic_helicopter.png')}
      onPress={action('BlurCard press')}
    />
  ));

export default BlurCardStory;
