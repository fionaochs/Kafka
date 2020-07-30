# Kafka Cluster running in NodeJS
## first time using Kafka, example cluster to send and receive messages

# Download Kafka from https://kafka.apache.org/
# using Scala 2.13  - kafka_2.13-2.5.0.tgz (asc, sha512)


# To run

# while in Kafka folder 
# 1. start zookeeper in 1st terminal
# bin/zookeeper-server-start.sh confizookeeper.properties

# 2. start server in 2nd terminal
# bin/kafka-server-start.sh config/server.properties

# 3. start producer in 3rd terminal
# bin/kafka-console-producer.sh --botrap-server localhost:9092 --topic test
# Important: the topic, 'test' must match throughout app in producer.js and config.js

# 4. start consumer in 4th terminal
# bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic test
# Important: topic 'test' must match producer so can receive messages from correct server

# type messages into producer terminal or through payload object in producer.js
