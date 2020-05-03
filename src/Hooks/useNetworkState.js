import {useNetInfo} from '@react-native-community/netinfo';
import {useEffect, useState} from 'react';
import useDebounce from './useDebounce';

export default function useNetworkState() {
  const [isConnected, setIsConnected] = useState(null);
  const netInfo = useNetInfo();
  const debounceIsConnected = useDebounce(isConnected, 700);

  useEffect(() => {
    setIsConnected(netInfo.isConnected);
  }, [netInfo]);

  return debounceIsConnected;
}
