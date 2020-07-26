const kafka = require('kafka-node');
// const bp = require('body-parser');
const config = require('./config');

try {
  // create kafka producer
  const Producer = kafka.Producer;
  // new client, keeps connection with kafka server
  const client = new kafka.KafkaClient(config.kafka_server);
  // new producer with the client server
  const producer = new Producer(client);
  // topic to 
  const kafka_topic = 'test';

  let payloads = [
    {
      topic: kafka_topic,
      messages: ['repo message']
    }, {
      topic: kafka_topic,
      messages: ['second repo message']
    }
  ];
  // event emitted when producer is ready to send messages
  producer.on('ready', async function() {
    let push_status = producer.send(payloads, (err, data) => {
      if(err) {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update failed');
      } else {
        console.log('[kafka-producer -> ' + kafka_topic + ']: broker update success');
      }
    });
  });
  // producer always listening for internal client error
  producer.on('error', function(err) {
    console.log(err);
    console.log('[kafka-producer -> ' + kafka_topic + ']: connection errored');
    throw err;
  });
}
catch(e) {
  console.log(e);
}
