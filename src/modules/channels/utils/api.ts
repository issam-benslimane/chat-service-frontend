import { AxiosRequestConfig } from "axios";
import axios from "../../common/utils/api";
import { Channel, CreateChannelDto } from "../types";

export class ChannelsApi {
  baseUrl: string;
  config: AxiosRequestConfig;

  constructor(workspaceId: string, config: AxiosRequestConfig = {}) {
    this.baseUrl = `workspaces/${workspaceId}/channels`;
    this.config = config;
  }

  async readMany() {
    const response = await axios.get(this.baseUrl, this.config);
    return response.data as Channel[];
  }

  async readOne(id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}`, this.config);
    return response.data as Channel;
  }

  async post(data: CreateChannelDto) {
    const response = await axios.post(this.baseUrl, data, this.config);
    return response.data as Channel;
  }
}
