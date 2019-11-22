---
title: Making a simple crypto trade bot
date: "2019-05-26"
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

###The Exchange
![Exchange](./images/exchange.png)

The next important bit is the exchange, for this we are going to be using <a href="https://www.binance.com/?ref=27977821" target="_blank">Binance</a> so sign up or in here <a href="https://www.binance.com/?ref=27977821" target="_blank">https://www.binance.com/?ref=27977821</a> to continue. Once signed in, go to your account and press the API settings button. Name your new API 'my trading bot’ or something to that effect so you know what the keys relate to. <a href="https://www.binance.com/?ref=27977821" target="_blank">Binance</a> will then take you through a series of steps on setting this up, the important thing to remember is that both **Read Info** and **Enable Trading** are checked and **Enable Withdrawals** is unchecked. Once it give you the keys, copy them both and keep them somewhere safe! You will never see the secret key again and will have to redo this part of the process again if you lose it. Now go back to your config.json file and change the following:

* name needs changing from “bittrex" to “binance"
* replace “your\_exchange\_key" with your API Key from Binance
* replace “your\_exchange\_secret" with your Secret Key from Binance

Before we leave this section, now is a good time to put your BTC your trading with into <a href="https://www.binance.com/?ref=27977821" target="_blank">Binance</a> we talked about further up the guide, it is recommended to put a little more than the planned amount in to allow for the bot to make a couple early mistakes while it learns and improves. 

The next section is the pair\_whitelist and pair\_blacklist
The whitelist is all the currency’s you want the bot to be watching, I would recommend going for 10 to begin with. As for the blacklist, we only need to have BNB/BTC in there as the bot gets confused with <a href="https://www.binance.com/?ref=27977821" target="_blank">Binance</a> using BNB to discount fee’s

###The Communication
![Communication](./images/communication.png)

The next important section of the config file for now is the <a href="https://telegram.org/" target="_blank">Telegram</a> section. This will allow you to get updates from your bot and send it commands like stop/start etc. Firstly on <a href="https://telegram.org/" target="_blank">Telegram</a>, message **@BotFather** with /start followed by /newbot and follow it’s instructions to get your new bot. Copy the HTTP API token it gives you and paste it to replace “your\_telegram\_token”. Next message **@get\_id\_bot** with /start and it will give you your chat ID copy it and paste it to replace “your\_telegram\_chat\_id”. This means that your bot will only reply to your ID and ignore any other.

###The Server
![Server](./images/server.png)

With that all done, the final step is to set this all up, <a href="https://www.vultr.com/?ref=8109640-4F" target="_blank">Vultr</a> is a server hosting which this referral code <a href="https://www.vultr.com/?ref=8109640-4F" target="_blank">https://www.vultr.com/?ref=8109640-4F</a> it gives you $50 free credit, the server we well be setting up is only $5 a month so that’s 10 months of free trading! Once you sign up and follow the instructions <a href="https://www.vultr.com/?ref=8109640-4F" target="_blank">Vultr</a> gives, it’s time to set up the server. Press Deploy new server and select <a href="https://www.vultr.com/?ref=8109640-4F" target="_blank">Vultr</a> Cloud Computing, choose the region you would prefer, select Ubuntu as the OS and 16.04 x64 as the version, selected the $5 25GB SSD as your server size. Once that’s all selected click deploy now and wait for <a href="https://www.vultr.com/?ref=8109640-4F" target="_blank">Vultr</a> so set it all up for you, this will take a few mins. Once it’s finished click on the server name and click on the view console icon at the top left and log in. There is going to be a series of commands here to get things setup so just type them in one at a time.

```
apt-get update
apt-get install docker-ce
systemctl enable docker
docker pull freqtradeorg/freqtrade:develop
docker tag freqtradeorg/freqtrade:develop freqtrade
docker build -t freqtrade .
docker build -f ./Dockerfile.develop -t freqtrade-dev .
mkdir ~/.freqtrade
cd ~/.freqtrade
mkdir user_data
```

Once that step is done we need to transfer the config file to the new folder. There is a few different ways to do this, the simplest for most users is to ssh move the file. To do this, open up a command line terminal, navigate to the folder you saved the config.json file and get the ip address of your Vultr server ready and enter the flooring

```
scp config.json root@[enter\_your\_ip\_here]:/root/.freqtrade
touch tradesv3.sqlite
scp tradesv3.sqlite root@[enter\_your\_ip\_here]:/root/.freqtrade
```

###The Big Finale
![Finale](./images/Finale.png)

Finally go back to your Vultr terminal, it’s time for everything to come together. Run the following command

```docker run -d   --name freqtrade   -v /etc/localtime:/etc/localtime:ro   -v ~/.freqtrade/config.json:/freqtrade/config.json   -v ~/.freqtrade/user_data/:/freqtrade/user_data   -v ~/.freqtrade/tradesv3.sqlite:/freqtrade/tradesv3.sqlite   freqtrade --db-url sqlite:///tradesv3.sqlite
```

If everything was done right, you should get a message on Telegram that your bot has started. Now it will start scanning the selected currencies for movements and buy and sell as appropriate.

Congrats on your new bot!
