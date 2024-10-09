const { AoiClient } = require('aoi.js');

const client = new AoiClient({
  token: 'token here',
  prefix: '!',
  intents: ['MessageContent', 'Guilds', 'GuildMessages'],
  events: ['onMessage', 'onInteractionCreate'],
  database: {
    type: 'aoi.db',
    db: require('@aoijs/aoi.db'),
    dbType: 'KeyValue',
    tables: ['main'],
    securityKey: 'key here',
  },
});

// client.status({
//   name: 'Example Text one!',
//   type: 'PLAYING',
//   time: 12000,
// });

client.status({
  name: 'Example Text two!',
  type: 'STREAMING',
  time: 2500,
  url: 'some URL',
});

client.status({
  name: 'Doing nothing..', // Normal status like any other Discord user without any state.
  time: 5000,
  type: 'CUSTOM',
});

client.status({
  name: 'Example Text!',
  type: 'PLAYING',
  status: 'dnd',
  time: 120,
});

client.loadCommands('./commands');
