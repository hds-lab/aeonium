import { observable } from 'mobx';
import { ServiceManager } from '../services/serviceManager';

export class MessageCodesStore {
  constructor(private serviceManager: ServiceManager) {
  }
  @observable
  public messageCodes: {};

  public getMessageCodes(message_id) {
    // this.serviceManager.getMessageCodes(message_id)
    //   .then((value: Axios.AxiosXHR<{}>) => {
    //     this._setMessageCodes(value.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    return this.serviceManager.getMessageCodes(message_id)
  }

  // @action
  // private _setMessageCodes(messageCodes: {}) {
  //   this.messageCodes = messageCodes;
  // }

}


