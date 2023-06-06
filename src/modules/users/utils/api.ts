import axios from "../../common/utils/api";
import { mergeUrlParts } from "../../common/utils/url";

const readMany = async (params?: Record<string, string>) => {
  const response = await axios.get(mergeUrlParts('/users', {params}));
  return response.data;
};


export const usersApi = { readMany };
