import { AgentDetailsViewPage } from '../container/Agent/index';
import GetAPIData, { ProcessAPIData } from '../library/helpers/get_api_data';
import { secretPage } from '../library/helpers/restriction';
import { getDeviceType } from '../library/helpers/get_devide_type';

function Profile(props) {
  return <AgentDetailsViewPage {...props} />;
}

Profile.getInitialProps = async context => {
  const { query, req } = context;
  const isLoggedIn = secretPage(context);
  const apiUrl = [
    {
      endpoint: 'agent',
      name: 'listingAgent',
    },
  ];

  const pageData = await GetAPIData(apiUrl);
  const processedData = ProcessAPIData(pageData);
  const deviceType = getDeviceType(req);

  return { processedData, query, isLoggedIn, deviceType };
};

export default Profile;
