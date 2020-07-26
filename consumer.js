const kafka = require('kafka-node');
// const bp = require('body-parser');
const config = require('./config');

try {
  const Consumer = kafka.Consumer;
  // create new clients for different servers. keeps connection with kafka server
  const client = new kafka.KafkaClient(config.kafka_server);
  let consumer = new Consumer(
    client,
    [{ topic: config.kafka_topic, partition: 0 }],
    {
      autoCommit: true,
      // max amount of time in ms to block waiting if insufficient data is available at the time the request is issued, default 100ms
      fetchMaxWaitMs: 1000,
      // max number of bytes of messages that must be available to give a response, default 1 byte
      fetchMaxBytes: 1024 * 1024,
      encoding: 'utf8',
      // If set true, consumer will fetch message from the given offset in the payloads
      fromOffset: false
    }
  );
  //when new message comes...
  consumer.on('message', async function(message) {
    console.log('here');
    console.log(
      'kafka-> ',
      message.value
    );
  });
  consumer.on('error', function(err) {
    console.log('error', err);
  });
}
catch(e) {
  console.log(e);
}

