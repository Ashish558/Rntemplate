import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FeedStackParamList } from '../../../types/navigation';

type NavProp = NativeStackNavigationProp<FeedStackParamList, 'FeedList'>;

const FeedScreen = () => {
  const navigation = useNavigation<NavProp>();

  const onPress = () => {
    navigation.navigate('FeedDetail', {
      id: '1',
    });
  };

  return <></>;
};

export default FeedScreen;
