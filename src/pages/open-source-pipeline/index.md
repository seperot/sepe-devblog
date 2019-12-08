---
title: Golang automated pipeline
date: "2019-12-06"
featuredImage: './images/goline.jpg'
---
A guide to building a simple pipeline from PR to deploy with a scalable solution. (TurtleWare 2.0 pt3)
<!-- end -->

This is part 3 of a 3 part blog post about making v2 of turtle wear watch face. [You can check out part 1 here](https://ijh.dev/middlewear-go) and [you can check out part 2 here](https://ijh.dev/making-wear-os)

We also will be skipping some of the basics of CI/CD pipelines and what that means, if you are not sure what that is [check out this blog post on a mobile CI/CD here](https://ijh.dev/mobile-ci-cd/)

###Git, pull requests and pipeline starting point
![GitHub](./images/github.png)

A theme with this guide will be getting free stuff wherever able, the cool thing about open source projects is there is a lot of options. For a good solid Git repo with a good pull request system and plugins to use all these free tools, [you can’t go wrong with GitHub](https://github.com). [Trunk based development](https://trunkbaseddevelopment.com) for git is still the preferred method for having something easy to admin but fast to release. For setting that kind of environment on GitHub as well as just protecting your open source project, make sure you have the following settings:

####*In options:*

*  In Data services, turn on “Security Alerts” to find out if any third-party libraries have a vulnerability and need you to update
* In Merge button, turn “Allow squash merging” and “Automatically delete head branches” on and the others off. This will keep your Trunk/Master branch readable on what went out when. This goes hand in hand with good pull request descriptions.

####*In branches:*

* Set your default branch to your Trunk/Master branch
* Create a new branch protection rule for the Trunk/Master

####*Inside the branch protection rule:*

* Turn on “Require pull request reviews before merging” with at least 1 approval needed. This will stop anyone from pushing code right into the master branch and instead need a code review before merging.
* With “Require pull request reviews before merging” the option to turn on “Dismiss stale pull request approval when new commits are pushed” appears. This will help if someone has already had their code reviewed but then adds “just one more quick fix” to their PR from being able to merge the code without at least 1 reviewer knowing. 
* Turn on “Require status checks to pass before merging”. This won’t have much of an effect yet but as we get further down we can come back to this rule and set up plugins to prevent PR’s from being merged before checks are complete.

There are other things you can set up here for more nice to haves like Wikis and Social Preview images but you can play around there for whatever suits your project best. 


###SonarCloud
![SonarCloud](./images/sonarcloud.png)

One important thing to add to your pipeline is static code analysis. This doesn't replace the need for other engineers reviewing code, rather it acts as an extra reviewer who is obsessed with code rules. The tool we are going to use in this setup is [SonarCloud](https://sonarcloud.io/) as it’s free for open-source code and easily plugs into GitHub. You can sign up for a SonarCloud account by using your GitHub auth, this way you can point it to your project so it can analyze it in just a couple of steps. You can set the code analyser to fire every time you trigger a build and will comment on the pull request. It will cover a range of rules from code duplication, vulnerabilities including [OWASP Top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) bugs, and Unit test coverage. Going back to GitHub as well, we can now set the “Require status checks to pass before merging” to require SonarCloud to pass before allowing merging.

###DockerHub
![DockerHub](./images/docker.png)
Builds the app, right from GitHub, keep an eye on version control etc

###Kubernetes in Google Cloud Platform
![kubernetes](./images/pipeline.png)
Setting up a cluster, keep costs in mind, how it updates, how it works, load balance with service

###DNS Setup
![DNS setup](./images/pipeline.png)
Simple point URL as IP address, set kubernetes to point at right port

###Swagger docs
![Swagger](./images/pipeline.png)
Document your shit, easy to do for free etc

###Wrapping up
![The End](./images/pipeline.png)
Final thoughts and links
