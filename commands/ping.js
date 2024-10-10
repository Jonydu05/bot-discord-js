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
$author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$image[$userAvatar[$mentioned[1;yes]]]
$color[Random]
`,
  },
  {
    name: 'exampleID',
    type: 'interaction',
    prototype: 'button', // Using "prototype" as this interaction belongs to a button.
    code: `
$interactionModal[Example!;customID;
  {actionRow:
    {textInput:What's your name?:1:nameInput:true:Your pretty name!:2:200}
  }
  {actionRow:
    {textInput:What's your age?:1:ageInput:true:You young soul!:1:3}
  }
  {actionRow:
    {textInput:What's your gender?:2:genderInput:true:Anything will work!:1:10}
  }
]`,
  },
  {
    name: 'customID',
    type: 'interaction',
    prototype: 'modal', // Using "prototype" as this interaction belongs to a modal.
    code: `
$interactionReply[Thanks for submitting this form!;everyone;true]

$title[$username submitted a form!;$userAvatar]
$addField[Their name is..;$textInputValue[nameInput]]
$addField[Their age is..;$textInputValue[ageInput]]
$addField[Their gender is..;$textInputValue[genderInput]]`,
  } /* Will return the values entered earlier from the modal. Using $textInputValue to retrieve those.

Alternatively you could use $channelSendMessage[channelID;content] to send the data to another channel.
$channelSendMessage[$channelID;{newEmbed:{title:$username submitted a form!:$userAvatar}{field:Their name is..:$textInputValue[nameInput]}{field:Their age is..:$textInputValue[ageInput]}{field:Their gender is..:$textInputValue[genderInput]}}]
*/,
];
