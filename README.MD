# POC Queues

This is a simple example of a queue system using Queue and Redis.

## Diagram Context

![Diagram](https://i.imgur.com/inNo8mq.png)

## Prerequisites

- [Redis](https://redis.io/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

## Installation

First start a Redis server on your local machine.

```bash
docker run -d -p 6379:6379 redis
```

Then install the dependencies:

```bash
cd /poc-consumer
npm install
```

```bash
cd /poc-producer
npm install
```

## Running the producer

```bash
cd /poc-producer
npm start
```

## Running the consumer

```bash
cd /poc-consumer
npm start
```

## Execute the producer in a separate terminal

| Method | Endpoint | Description                  |
| ------ | -------- | ---------------------------- |
| GET    | /pull    | Send a message to the queue. |

## Notes

Please note that the consumer will only process messages that are available in the queue.

## Collaborators

[Matías Capuano](https://github.com/maticapuano)
[Gonzalo Telesio](https://github.com/telesiog)
