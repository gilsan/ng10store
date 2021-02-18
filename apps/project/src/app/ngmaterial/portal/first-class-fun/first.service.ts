
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstClassService {


  private listen(channel: string, fn: Function) {
    console.log('listen에서 받은 fn: ', channel, fn);
    fn();

  }



  onConnect(fn: () => void) {
    console.log('onConnect 에섭 받은 fn: ', fn);
    fn();
    this.listen('connect', fn)
  }

  onOffer(fn: (msg: string[]) => void) {
    console.log('onOffer: ', fn);

    this.listen('offer', fn)
  }


}