const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./AclevoBotSettings.json")
const moment = require("moment")
require("moment-duration-format")
const fs = require("fs")
const ms = require("ms")
const childProcess = require('child_process')



let prefix = config.prefix


bot.on('ready', () => {
  console.log("Aclevo Bot Started")
  bot.user.setGame("With Aclevo")
  bot.generateInvite(['ADMINISTRATOR'])
  .then(link => {
    console.log(`Generated bot invite link: ${link}`)
  });

});

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content.split(' ').slice(1)

  bot.on('guildMemberAdd', visitor => {
    const announcements = member.guild.channels.find('name', 'announcements')
    if (!announcements) return;
    channel.send(`Please welcome ` ${visitor} ` to the Aclevo Discord Server.`)
  });

  bot.on('guildMemberRemove', leaver => {
    const announcements = member.guild.channels.find('name', 'announcements')
    if (!announcements) return;
    channel.send(`A sad farewell to ` ${leaver} ` from Aclevo.`)
  });

  bot.on('guildUnavilable', '249985790765957121') {
    <Message>.guild.members.map(members).send("The Aclevo Discord Server is currently down. Please use our alternative form of communication, Slack. If you do not have an account, you may sign up for one at https://aclevoslackinvite.herokuapp.com/.")

  }

  //Filter Swear Words

  if (message.content.includes(filterwords)) {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .then(message.reply("No swearing in the chat. :mrclean_wink:"));
  }





  if (message.content.startsWith(prefix + `ping`)) {
    message.channel.send(`Pinging...`).then(message => {
      message.edit(`Pong.. The Aclevo Bot is now online. \`\`${Math.round(bot.ping)}ms\`\``)
		});

  if (message.content.startswith (prefix + "userpic")) {
    message.reply("Here is your avatar URL: " message.author.avatarURL)
  }

 if (message.content.startswith (prefix + "botpic")) {
   message.reply("Here is my avatar URL:" bot.avatarURL)
 }

} else if (message.content.startsWith(prefix + "help")) {
  message.reply("Help is on the way. Check your DM'S :mailbox_with_mail:")
  const embed = new Discord.RichEmbed()
  .setAuthor(bot.user.username, bot.user.avatarURL)
  .setDescription("Aclevo Bot Help!")
  .addField("General", " `>ping`\n`>help`\n`>website`\n`>forums` ", true)
  .addField("Moderation", "To come:tm:", true)
  .addField("Utility", "To come:tm:", true)
  .addField("Music", "To come:tm:", true)
  .addField("Fun", "To come:tm:", true)
  message.author.send({embed: embed})

} else if (message.content.startsWith(prefix + "website")) {
  message.reply("Here is Aclevo's website! :: http://aclevo.xyz")

} else if (message.content.startsWith(prefix + "forums")) {
  message.reply("Here is Aclevo's forums! :: http://aclevo.xyz/forum")

} else if (mesage.content.startsWith(prefix + "botname")) {
  message.reply("Hello there. My name is Aclevo Bot. :)")

} else if (message.content.startsWith(prefix + ""))

  //Warn A User
} else if (message.content.startsWith(prefix + "warn")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: :: You do not have the permission `MANAGE_MESSAGES` therefore you cannot use this command.")
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.get("291317582663909378");
  if (message.mentions.users.size < 1) return message.reply(':x: :: Please mention a user to warn!').catch(console.error);
  if (reason.length < 1) return message.reply(':x: :: Please give a reason to warn the mentioned user of.');
  if (message.member.highestRole.comparePositionTo(message.guild.member(user).highestRole) < 0 ) return message.reply(":x: :: This person has a higher role than you therefore you cannot warn them!");
  if (user === message.author) return message.reply(`:x: :: Why would you want to warn your self?`)
  if (user === bot.user) return;

  const warnembed1 = new Discord.RichEmbed()
    .setColor()
    .setTimestamp()
    .setAuthor(`${message.author.username} (${message.author.id})`, `${message.author.avatarURL}`)
    .setDescription(`Action: Warn\nUser: ${user.username}#${user.discriminator} (${user.id})\nReason: ${reason}\nModerator: ${message.author.username}#${message.author.discriminator} (${message.author.id})`)
    bot.channels.get(modlog.id).send({embed: warnembed1});

    const warnembed2 = new Discord.RichEmbed()
    .setDescription(`Warn\nWarned by ${message.author} in ${message.guild.name} for: ${reason}`)
    user.send({embed: warnembed2});
    message.channel.send("Warn has been processed check <#291317582663909378> for the logs :ok_hand:")

  //Kick A User
} else if (message.content.startsWith(prefix + "kick")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: :: You do not have the permission `MANAGE_MESSAGES` therefore you cannot use this command.")
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.get("291317582663909378");
  if (message.mentions.users.size < 1) return message.reply(':x: :: Please mention a user to kick!').catch(console.error);
  if (reason.length < 1) return message.reply(':x: :: Please give a reason to kick the mentioned user of.')
  if (message.member.highestRole.comparePositionTo(message.guild.member(user).highestRole) < 0) return message.reply(":x: :: This person has a higher role than you therefore you cannot kick them!")
  if (user === message.author) return message.reply(`:x: :: Why would you want to kick your self?`)
  if (user === bot.user) return;
  <message>.mentions.members.first().kick();

  const kickembed1 = new Discord.RichEmbed()
  .setColor()
  .setTimestamp()
  .setAuthor(`${message.author.username} (${message.author.id})`, `${message.author.avatarURL}`)
  .setDescription(`Action: Kick\nUser: ${user.username}#${user.discriminator} (${user.id})\nReason: ${reason}\nModerator: ${message.author.username}#${message.author.discriminator} (${message.author.id})`)
  bot.channels.get(modlog.id).send({embed: kickembed1});

  const kickembed2 = new Discord.RichEmbed()
  .setDescription(`Kick\nKicked by ${message.author} in ${message.guild.name} for: ${reason}`)
  user.send({embed: kickembed2});
  message.channel.send("Kick has been processed check <#291317582663909378> for the logs :ok_hand:")

  //Ban A User
} else if (message.content.startsWith(prefix + "ban")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: :: You do not have the permission `MANAGE_MESSAGES` therefore you cannot use this command.")
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.get("291317582663909378");
  if (message.mentions.users.size < 1) return message.reply(':x: :: Please mention a user to ban!').catch(console.error);
  if (reason.length < 1) return message.reply(':x: :: Please give a reason to ban the mentioned user of.')
  if (message.member.highestRole.comparePositionTo(message.guild.member(user).highestRole) < 0) return message.reply(":x: :: This person has a higher role than you therefore you cannot ban them!")
  if (user === message.author) return message.reply(`:x: :: Why would you want to ban your self?`)
  if (user === bot.user) return;
  <message>.mentions.members.first().ban();

  const banembed1 = new Discord.RichEmbed()
  .setColor()
  .setTimestamp()
  .setAuthor(`${message.author.username} (${message.author.id})`, `${message.author.avatarURL}`)
  .setDescription(`Action: Ban\nUser: ${user.username}#${user.discriminator} (${user.id})\nReason: ${reason}\nModerator: ${message.author.username}#${message.author.discriminator} (${message.author.id})`)
  bot.channels.get(modlog.id).send({embed: banembed1});

  const banembed2 = new Discord.RichEmbed()
  .setDescription(`Ban\nBanned by ${message.author} in ${message.guild.name} for: ${reason}`)
  user.send({embed: kickembed2});
  message.channel.send("Ban has been processed check <#291317582663909378> for the logs :ok_hand:")


  //Purge Content
} else if (message.content.startsWith(prefix + "purge")) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: :: You do not have the permission `MANAGE_MESSAGES` therefore you cannot use this command.")
	let modlog = message.guild.channels.get("291317582663909378");
	let messagecount = parseInt(args.join(' '));
  if (!messagecount) return message.reply(':x: :: Please provide a number of messages to delete.')
	if (messagecount > 100) return message.reply(`:x: :: I can not delete over 100 messages.`)
message.channel.fetchMessages({
	limit: messagecount + 1
}).then(messages => message.channel.bulkDelete(messages));

const embed = new Discord.RichEmbed()
  .setColor()
  .setTimestamp()
  .setAuthor(`${message.author.username} (${message.author.id})`, `${message.author.avatarURL}`)
  .setDescription(`**Action: Purge\nMessages Purged: ${messagecount}\nChannel: ${message.channel}\nModerator: ${message.author.username}#${message.author.discriminator} (${message.author.id}**)`)
	bot.channels.get(modlog.id).sendEmbed(embed);
}
});

 // Lockdown A Chatroom - DO NOT USE UNLESS ABSOLUTELY NECESSARY
  if (message.content.startswith (prefix + "lockdown")) {





  }






bot.login(config.token)
