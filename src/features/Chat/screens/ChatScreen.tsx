import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<ChatStackParamList, 'ChatScreen'>;

const ChatScreen = ({ route, navigation }: Props) => {
  const { id } = route.params; // ✅ typed

  return <></>;
};

export default ChatScreen;
