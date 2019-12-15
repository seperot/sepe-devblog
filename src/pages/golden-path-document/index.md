---
title: Setting up a Golden Path Document
date: "2019-12-16"
featuredImage: './images/goldenpathlarge.png'
---
A golden path document is the best way for new starters to come in strong and help those that come after them
<!-- end -->

###What is a golden path document
![Bot](./images/goldenpath.png)

A Golden path, when talking about software is the ideal route for a user to take. In the case of a shopping app, the golden path would see the user log in, find the item they are looking for easily, go to checkout, and pay all without any issue. A golden path document is similar in that it's the ideal path but this time for a new member of the team to get up and running with the project quickly and easily. The document shouldn't assume much as you don't know where someone’s starting point or gaps in their knowledge will be. For someone, it may be they have never used the CI software your team uses but for someone else it could be they have no idea what to install as their previous company had strict installation rules.

###How to structure it
![Bot](./images/structure.png)

__*Start with the basics*__

The first thing is for them to check they have all the hardware they will need. 
* Is their workstation the minimum spec? 
* Do they need peripherals or cables? 
* Do they need access to devices they need for debugging? 
* Is their any accessability items they don't know they can ask for?

Next is software, same deal as hardware but this time what they need to get the job done. This also included pulling down the codebase they will be working on.

Finally make sure all their access and permissions needed are sorted as well, any cloud platforms or tools like Jira they need logins for are ready for them to use.

__*Code rules and opinions*__

With the basics out the way, the next thing to do is write as much as you can down on the coding standards your team uses.
* Camel case, Delimiter space, Hungarian notation or whatever naming style the team uses
* If you use multiple languages then anything unique to each of them
* Where you set strings, colours, and sizes
* 2 spaces, 4 spaces or tabs
* Class and folder structure
* If you do TDD, or what the test coverage percentage needs to be

__*How the work process... works*__

So now they have the tools to do the job and know what the standards look like, it's time for them to take on a task. Breaking down this section based on them working through the workflow.
* Where to go to get work
* What system does your teamwork with like Kanban or Scrum.
* How they let everyone know they are taking on the task and when it's ready
* Is there a QA process they need to take the work through
* What CI/CD pipeline process are working in the background at the various stages.
* Do the git branches have a lifespan before being deleted?

You also need to make clear when their work is ready for review
* When do they open a pull request
* Is there a limit to the size of the pull request
* How commenting on the PR works and when to take it to a conversation
* How to write good descriptions on a PR

__*Getting their work live*__

Finally once they have done all the work and been through the process, they will no doubt want to see their work live. Here you just need to explain the release process and if they need to make release notes. 

###Make it living
![Bot](./images/living.png)

An important part of a golden path document being effective is to keep it as a living document. As the new member of the team works through the document encourage them to edit anything they find as a pain point, something outdated that you had to explain to them or just something they feel like needs more detail. This helps keep the document up to date and makes the new starter have a hand making the process better for the next new starter. 
