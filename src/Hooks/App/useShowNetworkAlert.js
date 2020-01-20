import {useEffect, useRef} from 'react';
import useNetworkState from '../useNetworkState';

export default function NetworkStatus() {
  const skipForTheFirstTime = useRef(true);
  const previousConnection = useRef();
  const isConnected = useNetworkState();

  useEffect(() => {
    setTimeout(() => {
      skipForTheFirstTime.current = false;
    }, 7000);
  }, []);

  useEffect(() => {
    previousConnection.current = isConnected;
  }, [isConnected]);

  if (
    isConnected === null ||
    (isConnected && skipForTheFirstTime.current) ||
    isConnected === previousConnection.current
  ) {
    return null;
  }
  return isConnected;
}
