const Discord = require('discord.js');
const client = new Discord.Client();

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});




app.use('/ping', (req, res) => {
  res.send(new Date());
});






client.on('message', message => {
  // Here is where you need to code
  if(message.content == "Node.js is cool") {
    message.channel.send("Yea!");
  }
});

client.login(process.env.token);