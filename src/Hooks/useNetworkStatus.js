import {useEffect, useRef} from 'react';
import useNetworkState from './useNetworkState';

const useNetworkStatus = () => {
  const previousConnection = useRef();
  const isConnected = useNetworkState();

  useEffect(() => {
    previousConnection.current = isConnected;
  }, [isConnected]);

  return isConnected === null || isConnected === previousConnection.current ? null : isConnected;
};

export default useNetworkStatus;
