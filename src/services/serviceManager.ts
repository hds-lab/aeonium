import * as axios from 'axios';

export class ServiceManager {
  private service: Axios.AxiosInstance;

  constructor(baseUrl: string) {
    this.service = axios.create({
      baseURL: baseUrl
    });
  }
  public getPartners() {
    return this.service.get('/api/partners');
  }
} 