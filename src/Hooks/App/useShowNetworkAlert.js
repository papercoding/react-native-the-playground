import {useEffect, useRef} from 'react';
import useNetworkState from '../useNetworkState';

export default function useShowNetworkAlert() {
  const skipForTheFirstTime = useRef(true);
  const isConnected = useNetworkState();

  useEffect(() => {
    setTimeout(() => {
      skipForTheFirstTime.current = false;
    }, 1000);
  }, []);

  if (isConnected === null || (isConnected && skipForTheFirstTime.current)) {
    return null;
  }

  return isConnected;
}
