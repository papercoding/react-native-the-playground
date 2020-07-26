import {FastImageSource} from 'react-native-fast-image';

export interface ListHomeItemProps {
  id: string;
  title: string;
  imageSource: number | FastImageSource | any;
}

const LIST_HOME_ITEM: Array<ListHomeItemProps> = [
  {
    id: 'UIConcepts',
    title: 'UI Concepts',
    imageSource: require('../../assets/images/ic_optometry.png'),
  },
  {
    id: 'Animations',
    title: 'Animations',
    imageSource: require('../../assets/images/ic_nutritionist.png'),
  },
  {
    id: 'Showcase',
    title: 'Showcase',
    imageSource: require('../../assets/images/ic_ophtalmology.png'),
  },
  {
    id: 'HaveFun',
    title: 'Have Fun',
    imageSource: require('../../assets/images/ic_flask.png'),
  },
];

export {LIST_HOME_ITEM};
