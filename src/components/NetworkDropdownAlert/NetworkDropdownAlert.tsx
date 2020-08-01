import React, {useRef, useEffect} from 'react';
import DropdownAlert from 'react-native-dropdownalert';
import useNetworkStatus from '../../hooks/useNetworkStatus';

interface IProps {
  closeInterval: number;
  elevation?: number;
  onClose?: () => void;
}

const NetworkDropdownAlert: React.FC<IProps> = ({closeInterval, elevation, onClose}) => {
  const refDropdownAlert = useRef<any>();

  const showNetworkConnectedAlert = useNetworkStatus();

  useEffect(() => {
    if (showNetworkConnectedAlert === null) {
      return;
    }
    const alertType = showNetworkConnectedAlert ? 'success' : 'error';
    const alertMessage = showNetworkConnectedAlert ? 'Connected' : 'No Internet Connection';
    if (refDropdownAlert && refDropdownAlert.current) {
      refDropdownAlert.current.alertWithType(alertType, '', alertMessage);
    }
  }, [showNetworkConnectedAlert]);

  const handleOnClose = () => {
    onClose && onClose();
  };

  return (
    <DropdownAlert
      ref={refDropdownAlert}
      closeInterval={closeInterval}
      elevation={elevation || 3}
      useNativeDriver
      onClose={handleOnClose}
    />
  );
};

export default NetworkDropdownAlert;
