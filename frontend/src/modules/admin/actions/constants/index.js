import {
    API_URL,
    actionCreator,
    checkHttpStatus,
    create_post_data,
    createRequestActionTypes,
    createSearchUrl,
    extractDataFromObject,
    jsonApiHeader,
    showSuccessMessage,
    createSearchUrlForCustomAPI,
} from '../../utils/utilActions';

export { jsonApiHeader,
  actionCreator,
  checkHttpStatus,
  createSearchUrl,
  create_post_data,
  showSuccessMessage,
  extractDataFromObject,
  API_URL,
  createSearchUrlForCustomAPI,
};

export const GET_CLIENTS = `${API_URL}/clients`;

export const AdminActionTypes = {
    get_Clients: createRequestActionTypes('GET_CLIENTS'),
};

export const MODULE = 'ADMIN';