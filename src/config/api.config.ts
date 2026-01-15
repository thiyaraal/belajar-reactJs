export const API_ENDPOINTS = {
  USERS: {
    LIST: '/users',
    DETAIL: (id: number) => `/users/${id}`,
  }
}