import { AxiosRequestConfig } from "axios";
import axios from "../../common/utils/api";
import { CreateChannelDto } from "../types";

export class ChannelsApi {
  baseUrl: string;

  constructor(workspaceId: string) {
    this.baseUrl = `workspaces/${workspaceId}/channels`;
  }

  async readMany(config?: AxiosRequestConfig) {
    const response = await axios.get(this.baseUrl, config);
    return response.data;
  }

  async post(data: CreateChannelDto, config?: AxiosRequestConfig) {
    const response = await axios.post(this.baseUrl, data, config);
    return response.data;
  }
}
