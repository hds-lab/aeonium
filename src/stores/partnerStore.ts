import { observable, action } from 'mobx';
import { ServiceManager } from '../services/serviceManager';

export class PartnerStore {
  constructor(private serviceManager: ServiceManager) {
  }
  @observable
  public partners: string[] = [];

  public getPartners() {
    this.serviceManager.getPartners()
      .then((value: Axios.AxiosXHR<string[]>) => {
        this._setPartners(value.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @action
  private _setPartners(partners: string[]) {
    this.partners = partners;
  }

}


