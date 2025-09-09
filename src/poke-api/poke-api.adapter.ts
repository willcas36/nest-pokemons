import axios from 'axios';

export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
}

export class PokemonApiAdapter implements HttpAdapter {
  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }
}
