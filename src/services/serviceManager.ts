import * as axios from 'axios';

export class ServiceManager {
  private service: Axios.AxiosInstance;

  constructor(baseUrl: string) {
    this.service = axios.create({
      baseURL: baseUrl
    });
  }
  public getPartners() {
    return this.service.get('/api/partners/', {withCredentials: true});
  }
  public getMessageCodes(message_id) {
    return this.service.get('/api/message_codes/' + message_id, {withCredentials: true});
  }
}
