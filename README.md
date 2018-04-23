# Blockchain Wireless Sensor Network

> 
This business network defines:

**Participant**
`Device`

**Asset**
`Sensor`

**Transaction**
`SensorEdit`

**Event**
`SensorEditEvent`

Sensor are owned by a Device, and the value property on a Sensor can be modified by submitting a SensorEdit. The SensorEdit emits a SensorEditEvent that notifies applications of the old and new values for each modified Sensor.

To test this Business Network Definition in the **Test** tab:

Create a `Device` participant:

```
{
  "$class": "org.acme.sample.Device",
  "participantId": "Toby",
  "firstName": "Tobias",
  "lastName": "Hunter"
}
```

Create a `Sensor` asset:

```
{
  "$class": "org.acme.sample.Sensor",
  "assetId": "assetId:1",
  "owner": "resource:org.acme.sample.Device#Toby",
  "value": "original value"
}
```

Submit a `SensorEdit` transaction:

```
{
  "$class": "org.acme.sample.SensorEdit",
  "asset": "resource:org.acme.sample.Sensor#assetId:1",
  "newValue": "new value"
}
```

After submitting this transaction, you should now see the transaction in the Transaction Registry and that a `SensorEditEvent` has been emitted. As a result, the value of the `assetId:1` should now be `new value` in the Asset Registry.

Congratulations!
