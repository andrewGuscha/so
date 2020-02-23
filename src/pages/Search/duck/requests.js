import { http } from '../../../http';

export const getSearchResults = search => {
  const params = {
    intitle: search,
    site: 'stackoverflow',
    page: 1,
    order: 'desc',
    sort: 'votes',
    filter: 'default'
  };
  return http.get('search', { params });
};
