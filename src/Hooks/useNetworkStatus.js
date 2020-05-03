import {useEffect, useRef} from 'react';
import useNetworkState from './useNetworkState';

const useNetworkStatus = () => {
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

  return isConnected === null ||
    (skipForTheFirstTime.current && isConnected) ||
    isConnected === previousConnection.current
    ? null
    : isConnected;
};

export default useNetworkStatus;
