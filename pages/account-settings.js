import { AgentAccountSettingsPage } from '../container/Agent/index';
import GetAPIData, { ProcessAPIData } from '../library/helpers/get_api_data';
import { secretPage } from '../library/helpers/restriction';

export default function AccountSettings({ processedData, deviceType }) {
  return (
    <AgentAccountSettingsPage
      processedData={processedData}
      deviceType={deviceType}
    />
  );
}

AccountSettings.getInitialProps = async context => {
  const isLoggedIn = secretPage(context);
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'agentProfile',
    },
  ];
  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  return { processedData, isLoggedIn };
};
