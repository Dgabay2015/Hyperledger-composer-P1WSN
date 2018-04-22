import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.sample{
   export class Sensor extends Asset {
      sensorId: string;
      owner: Device;
      value: string;
   }
   export class Device extends Participant {
      deviceId: string;
      description: string;
   }
   export class SensorEdit extends Transaction {
      asset: Sensor;
      newValue: string;
   }
   export class SensorEditEvent extends Event {
      asset: Sensor;
      oldValue: string;
      newValue: string;
   }
// }
