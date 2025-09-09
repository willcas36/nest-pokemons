import axios, { AxiosInstance } from 'axios';
import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../interfaces/http-adapter.interface';

@Injectable()
export class AxiosApiAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance = axios;
  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url);
      return data;
    } catch (error) {
      throw new Error(`Could not get data from ${url}`);
    }
  }
}
