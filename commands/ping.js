module.exports = [
  {
    name: 'ping',
    code: `Pong! $pingms`,
  },
  {
    name: 'teste',
    prototype: 'button',
    code: `$sendMessage[Oi :)]`,
  },
  {
    name: 'uptime',
    code: `Eu estive online por $uptime!`,
  },
  {
    name: 'avatar',
    code: `
    $author[Foto de perfil do $username!]
    $color[Random]
    $image[$authorAvatar]
    $footer[Solicitado por $username]
    $addTimestamp
    `,
  },
];
