import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FeedStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<FeedStackParamList, 'FeedDetail'>;

const FeedDetailScreen = ({ route, navigation }: Props) => {
  const { id } = route.params; // ✅ typed

  return <></>;
};

export default FeedDetailScreen;
