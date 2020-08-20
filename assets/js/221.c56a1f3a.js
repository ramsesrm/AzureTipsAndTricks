(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{499:function(e,t,a){"use strict";a.r(t);var r=a(43),o=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=r_tGl4zF1ZQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=42?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Push a Container Image to a Docker Repo"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"containers-for-the-rest-of-us"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#containers-for-the-rest-of-us","aria-hidden":"true"}},[e._v("#")]),e._v(" Containers for the rest of us")]),e._v(" "),a("p",[e._v("For some reason, I find containers are confusing and my goal with my "),a("a",{attrs:{href:"https://michaelcrump.net/azure-tips-and-tricks-complete-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks"),a("OutboundLink")],1),e._v(" is to try to make things easier. In this mini-series, I'll walk you through "),a("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" and how I use it with Azure. Below is a list of post that you can expect for this week.")]),e._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"./tip45.html"}},[e._v("Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./tip46.html"}},[e._v("Today - Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./tip47.html"}},[e._v("Azure Tips and Tricks Part 47 - Creating a Container Image with Docker")])],1),e._v(" "),a("li",[a("router-link",{attrs:{to:"./tip48.html"}},[e._v("Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo")])],1)]),e._v(" "),a("h4",{attrs:{id:"pushing-a-container-image-to-a-docker-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushing-a-container-image-to-a-docker-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" Pushing a Container Image to a Docker Repo")]),e._v(" "),a("p",[e._v("Let's continue where we "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip47.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("left off"),a("OutboundLink")],1),e._v(" in our last post, in which we created a new image that we can distribute that contains our new app. In this post, we'll go ahead and push the image to a Docker repo to prep it for later.")]),e._v(" "),a("p",[e._v("Make sure you have a "),a("a",{attrs:{href:"http://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker account"),a("OutboundLink")],1),e._v(" (It's free) and type "),a("code",[e._v("docker login")]),e._v(" at the terminal or command prompt to ensure we are authenticated.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:~ mbcrump$ docker login\nLogin with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.\nUsername (mbcrump): mbcrump\nPassword: \nLogin Succeeded\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Now in order to push to a new repo, you'll need to tag the existing image. You can do so by typing "),a("code",[e._v("docker tag mbcrump:mynewapp mbcrump/firstimage")]),e._v(". Where "),a("code",[e._v("mbcrump:mynewapp")]),e._v(" is the existing image that contains our new app and "),a("code",[e._v("mbcrump/firstimage")]),e._v(" will be our repo name. Play close attention to the "),a("code",[e._v("mbcrump/firstimage")]),e._v(" part as "),a("code",[e._v("mbcrump")]),e._v(" is your Docker username.")]),e._v(" "),a("p",[e._v("Once that is complete, then use "),a("code",[e._v("docker push mbcrump/firstimage")]),e._v(" to move it to a repository.")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Michaels-MacBook-Pro:~ mbcrump$ docker push mbcrump/firstimage\nThe push refers to a repository [docker.io/mbcrump/firstimage]\n1fd4467b1c0e: Pushed \n0a3794bad5d4: Pushed \n54f3762778cc: Pushed \n88f0e0eb260c: Pushed \n1361e5e30088: Pushed \n52121b397f2e: Pushed \n480d03264b1d: Pushed \na4212622fd11: Pushed \na4af43f268c6: Pushed \nc2dca236d8e6: Pushed \nd4417cb76edb: Pushed \n0dc1ec77adb3: Pushed \na75caa09eb1f: Pushed \nlatest: digest: sha256:5458bbf2b1e35568c1542bc15551383737d379ddcd6e720d9701583925289157 size: 3060\nMichaels-MacBook-Pro:~ mbcrump$ \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("p",[e._v("Great! Now you can log into your account on "),a("a",{attrs:{href:"http://store.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("store.docker.com"),a("OutboundLink")],1),e._v(" and if you click on repos, then you'll see it.\n"),a("img",{attrs:{src:e.$withBase("/files/dockerazure10.png")}})]),e._v(" "),a("p",[e._v("You'll see that it provides instructions to push a new version of the image as well as the commands to do so from the CLI.")]),e._v(" "),a("h4",{attrs:{id:"to-recap-what-we-ve-done-so-far"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#to-recap-what-we-ve-done-so-far","aria-hidden":"true"}},[e._v("#")]),e._v(" To Recap what we've done so far")]),e._v(" "),a("p",[e._v("If you've been following the last four post, then we've went through the following steps:")]),e._v(" "),a("ol",[a("li",[e._v("Installed and Setup Docker")]),e._v(" "),a("li",[e._v("Verified installation through the CLI")]),e._v(" "),a("li",[e._v("Took a look at the Docker Store")]),e._v(" "),a("li",[e._v("Used an image from the Docker Store to build upon")]),e._v(" "),a("li",[e._v("Ran a Container and created a .NET Core app to it")]),e._v(" "),a("li",[e._v("Created a Shell Script to call the app through the new image")]),e._v(" "),a("li",[e._v("Added our app to a new container image")]),e._v(" "),a("li",[e._v("Called the app through the command line and executed our program")]),e._v(" "),a("li",[e._v("Packaged up the image container to send to a Docker repo")]),e._v(" "),a("li",[e._v("Pushed our image container to Docker through the CLI")])]),e._v(" "),a("p",[e._v("I think we have a great foundation to keep building on this in the coming weeks and months. I hope you've learned a lot this week and I'll see you next week.")]),e._v(" "),a("p",[a("strong",[e._v("Bonus:")]),e._v(" You can also go to "),a("a",{attrs:{href:"http://store.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("store.docker.com"),a("OutboundLink")],1),e._v(" and create a repository. You'll also notice that they provide the CLI commands as well.")])])},[],!1,null,null,null);t.default=o.exports}}]);