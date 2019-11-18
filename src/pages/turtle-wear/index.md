---
title: Making a simple crypto trade bot
date: "2019-11-01"
featuredImage: './images/simplebot.jpg'
---
A guide on making a simple bot that can trade while you focus on the hard stuff
<!-- end -->

###The Bot
![Bot](./images/bot.png)

The bot we are going to be setting up today is called <a href="https://github.com/freqtrade/freqtrade" target="_blank">Freqtrade</a>.  It’s a very easy to set up bot that can be controlled via <a href="https://telegram.org/" target="_blank">Telegram</a>
. As we are not going to be using the codebase on our machine, the only file you need from their GitHub is <a href="https://github.com/freqtrade/freqtrade/blob/develop/config.json.example" target="_blank">this json file</a>.  If you copy the lines of this file and paste them into a text editor (I recommend <a href="https://www.sublimetext.com/" target="_blank">Sublime text</a>)  and save the file as config.json.

Now lets have a look at the config file, the first important part is these two lines
* "max\_open\_trades": 3, 
* "stake\_amount": 0.05,

These lines are where you setup how much the bot is going to be using to make it’s trades, so in this example it’s making 3 trades of 0.05 BTC so in total 0.15 BTC needs to be in the account for it to trade effectively. You can change both numbers up or down as much as you like, just make sure you have at least the amount of funds inside for it to make the trades. Remember the more you put in the bigger the reward but the bigger the risk.

The next section is about setup strategy. The  best thing to do here is leave it alone for your first couple of weeks, the bot learns as it trades (real transactions only) so let it go for a bit before changing something. If you do want to tweak rules later <a href="https://freqtrade.io/en/latest/" target="_blank">Freqtrades documentation is here</a>
