import { AxiosRequestConfig } from "axios";
import axios from "../../common/utils/api";
import { QueryParams, Message, CreateMessageDto } from "../types";
import { mergeUrlParts } from "../../common/utils/url";

export class MessagesApi {
  baseUrl: string;
  config: AxiosRequestConfig;

  constructor(config: AxiosRequestConfig = {}) {
    this.baseUrl = `/messages`;
    this.config = config;
  }

  async readMany(params?: QueryParams) {
    const response = await axios.get(
      mergeUrlParts(this.baseUrl, { params }),
      this.config
    );
    return response.data as Message[];
  }

  async readOne(id: string) {
    const response = await axios.get(`${this.baseUrl}/${id}`, this.config);
    return response.data as Message;
  }

  async post(data: CreateMessageDto, params: QueryParams) {
    return axios.post(mergeUrlParts(this.baseUrl, { params }), data);
  }
}
