import {useEffect} from 'react';
import useNetworkStatus from './useNetworkStatus';

const useDropdownAlertNetwork = (refDropdownAlert: any) => {
  const showNetworkConnectedAlert = useNetworkStatus();

  useEffect(() => {
    if (showNetworkConnectedAlert === null) {
      return;
    }
    const alertType = showNetworkConnectedAlert ? 'success' : 'error';
    const alertMessage = showNetworkConnectedAlert ? 'Connected' : 'No Internet Connection';
    refDropdownAlert.current.alertWithType(alertType, alertMessage);
  }, [refDropdownAlert, showNetworkConnectedAlert]);
};

export default useDropdownAlertNetwork;
