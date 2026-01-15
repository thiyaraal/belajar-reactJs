import { API_ENDPOINTS } from "../config/api.config";
import type { PartnerLeaveModel } from "../models/userModel";
import { httpClient } from "./httpClient";

export const PartnerLeaveService = {
  getAll: (): Promise<PartnerLeaveModel[]> => {
    return httpClient.get<PartnerLeaveModel[]>(API_ENDPOINTS.USERS.LIST);
  },

  getById: (id: number): Promise<PartnerLeaveModel> => {
    return httpClient.get<PartnerLeaveModel>(API_ENDPOINTS.USERS.DETAIL(id));
  },
};
