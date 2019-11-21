---
title: Making a middleware API layer in GO 
date: "2019-11-21"
featuredImage: './images/gopherbig.png'
---
(TurtleWare 2.0 pt1)
<!-- end -->

###History time
![Watch](./images/trtlwear.png)

A couple of years ago, I knocked together a little watch app for the guys at <a href="https://turtlecoin.lol" target="_blank">Turtlecoin</a>. I wanted to understand both Wear OS and Kotlin better, so a simple watch face that pulls data from a few exchanges for a price seemed easy enough.

An issue I had at the time was the watch face needed to be able to deal with all the API calls, parsing, sorting the value out, reacting to user settings and displaying. The version of Wear OS at the time didn’t let you make API calls, which ended up forcing me down a companion app route on Android. This move, unfortunately, made all iOS or Wear only users unable to use the watch face. This was something that always bothered me, but I was working on other projects so I didn’t have time to really come back to it. 

Move ahead to the present, with WearOS now allowing Http requests, most of the exchanges I used for grabbing the price of the coin had vanished, and Google had started depreciating their weather API, the watch face needed a lot of work to be usable.

###Middleware
![MiddleMan](./images/mmim.png)

History lesson aside, why build a middleware API?

**No need to redeploy the app** - In the time my app was out, almost every API it accessed was either gone or under threat of deprecation. This requires me to make a new version of the app, release it as an update to the app store, and people to update or else their watch face is always broken. With a middleware, all I would need to do is update it with a new source, deploy, and all the watch faces instantly get back in action.

**Improve readability of app** - A good 50% of the app was just JSON parsing and working out the price. When you move all that parsing and logic to the middleware, all the watch face needs to do is receive the API info and display it. With all that code removed, what’s left is far easier to read.

###Get Go(lang)ing
![Gopher](./images/gopher.png)

One thing I like about learning new languages is just trying things based on how I think it will work, getting it wrong, looking up how to make it work, and finally fixing it. It’s great as you go through your project as you will find you will get more and more right as you work through it.

![Middleware flow](./images/flowmap.png)
