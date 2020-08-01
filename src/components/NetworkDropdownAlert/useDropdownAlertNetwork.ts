import {useEffect} from 'react';
import useNetworkStatus from '../../hooks/useNetworkStatus';
import DropdownAlert from 'react-native-dropdownalert';

const useDropdownAlertNetwork = (refDropdownAlert: React.RefObject<DropdownAlert>) => {
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
  }, [refDropdownAlert, showNetworkConnectedAlert]);
};

export default useDropdownAlertNetwork;
