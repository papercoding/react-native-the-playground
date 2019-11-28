import {useState, useEffect} from 'react';
import useDebounce from './useDebounce';
import {useNetInfo} from '@react-native-community/netinfo';

export default function useNetworkState() {
  const [isConnected, setIsConnected] = useState(null);
  const netInfo = useNetInfo();
  const debouncedIsConnected = useDebounce(isConnected, 700);

  useEffect(() => {
    setIsConnected(netInfo.isConnected);
  }, [netInfo]);

  return debouncedIsConnected;
}
