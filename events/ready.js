const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var k4h1n = [
    "💛 AloneDark",
    "💙 Moderasyon",
    "🤍 Ekonomi",
    "🧡 Ve Daha Fazlasını.."
   ]

   setInterval(function() {
    var k4h1n1 = k4h1n[Math.floor(Math.random() * (k4h1n.length))]
    client.user.setActivity(`${k4h1n1}`, { type: "WATCHING"});

}, 4 * 400);

  client.user.setStatus("idle");
}