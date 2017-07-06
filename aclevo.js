const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./AclevoBotSettings.json")
const moment = require("moment")
require("moment-duration-format")
const fs = require("fs")
const ms = require("ms")
const childProcess = require('child_process')

let _commands = require('./commands')
let prefix = config.prefix

var commands = _commands

if (message.content.startswith(prefix + _commands)) {
}


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
    message.guild.members.map(members).send("The Aclevo Discord Server is currently down. Please use our alternative form of communication, Slack. If you do not have an account, you may sign up for one at https://aclevoslackinvite.herokuapp.com/.")
  }

  //Filter Swear Words

  if (message.content.includes(filterwords)) {
    message.delete()
    .then(msg => console.log(`Deleted message from ${msg.author}`))
    .then(message.reply("No swearing in the chat. :mrclean_wink:"));
  }

} else if (message.content.startsWith(prefix + ""))

 // Lockdown A Chatroom - DO NOT USE UNLESS ABSOLUTELY NECESSARY

 // There are multiple types of lockdowns with this system in place.
 //The first is an manual lockdown which is triggered by the "lockdown on" command with a reason to lock the chat down.
  if (message.content.startswith (prefix + "lockdown on")) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: :: You do not have the permission `MANAGE_MESSAGES` therefore you cannot use this command.")
    if (message.content.contents)
    let reason = args.slice(1).join(' ');
    let modlog = message.guild.channels.get("291317582663909378");
    if (reason.length < 1) return message.reply(':x: :: Please give a reason to initiate a lockdown.')
    //lockdown


  }

  //The second type of lockdown does not need a reason, and it is used when the server needs to be locked down asap. Automatic Protection is guarenteed.
 if (message.content.startswith (prefix + "911!")) || message.content.includes(threats && !sarcasm)
//lockdown




bot.login(config.token)
