const {RichEmbed} = require('discord.js');
const package = require('../package.json');
const imgs = require('../imgs.json');
const reactions = require('../reactions.json');

exports.run = async (client, message) => {
  const embed = new RichEmbed()
    .setColor(0xF18E8E)
    .setTitle('My character info~')
    .setImage(imgs.splash)
    .setThumbnail(`${reactions.normal}`)
    .setDescription(`Thanks for asking, ${message.author.username}!\n\nAgain, I'm just a totally ordinary bot, but here's my profile:`)
    .addField('Height:', '210 cm', true)
    .addField('Weight:', '[censored]', true)
    .addField('Age:', '[unknown]', true)
    .addField('Race:', '[unknown]', true)
    .addField('Nationality:', '[unknown]', true)
    .addField('Occupation:', 'Bot', true)
    .addField('Likes:', 'Being praised, physical contact', true)
    .addField('Dislikes:', 'Being called a cow', true)
    .addField('Three sizes:', 'B: [Christian manga], W: [redacted],\nH: [censored]', true)
    .addField('Looks?:', 'https://i.imgur.com/ifPi84l.png')
    .setFooter(`Bot and icons/art made with care by ${package.author}`);
  return message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lore', 'characterinfo', 'bio', 'characterprofile', 'aboutivy'],
  permLevel: 0
};

exports.help = {
  name: 'whoareyou',
  description: 'Sends an embed with information about the Ivy as a character',
  usage: 'whoareyou',
  type: 'bot'
};
