import {observable, computed, action} from 'mobx';
import { PartnerStore } from './partnerStore';
import {ServiceManager} from '../services/serviceManager'

export class AppStore {
  constructor(initialValue: number, baseUrl: string){
    this.count = initialValue;

    this.partnerStore = new PartnerStore(new ServiceManager(baseUrl));
  }
  
  public partnerStore: PartnerStore;

  @observable
  public count: number;

  @computed
  public get doubleCount() {
    return this.count * 2;
  }

  @action
  public increase (by: number){
    this.count = this.count + by;
  }

  @action
  public decrease (by: number){
    this.count = this.count - by;
  }
}

export interface IAppStoreProps {
  store: AppStore;
}

