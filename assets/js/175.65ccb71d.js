(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{458:function(t,e,r){"use strict";r.r(e);var o=r(43),a=Object(o.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("🔥  The FREE Azure Developer Guide eBook is now "),r("a",{attrs:{href:"http://aka.ms/azuredevebook",target:"_blank",rel:"noopener noreferrer"}},[t._v("available!"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/waf-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Front Door WAF overview"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=CLOgyQFrrZY&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to use WAF to protect your web applications with Azure Front Door"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"securing-your-application-with-a-web-application-firewall-waf"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#securing-your-application-with-a-web-application-firewall-waf","aria-hidden":"true"}},[t._v("#")]),t._v(" Securing your application with a Web Application Firewall (WAF)")]),t._v(" "),r("p",[t._v("When you run an application on the web, it is going to be attacked. Your website will be attacked with SQL Injection attacks, Cross-site scripting attacks and every other attack in the "),r("a",{attrs:{href:"https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project",target:"_blank",rel:"noopener noreferrer"}},[t._v("OWASP top 10"),r("OutboundLink")],1),t._v(" and beyond.\nYou need to protect your application from these attacks and you can do that with Azure "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/waf-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Web Application Firewall"),r("OutboundLink")],1),t._v(" and "),r("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Front Door"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("In "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip192.html?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Tip 192"),r("OutboundLink")],1),t._v(", you have learned how to make your website more available and performant with Azure Front Door. In this post, we'll add a Web Application Firewall to protect Azure Front Door and the websites that it serves.")]),t._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),r("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),r("ul",[r("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),r("OutboundLink")],1),t._v(" before you begin)")]),t._v(" "),r("li",[t._v("An Azure Front Door that is configured to route traffic to web applications. Follow "),r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip192.html?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Tips and Tricks 192"),r("OutboundLink")],1),t._v(" to set it up")])]),t._v(" "),r("h4",{attrs:{id:"configure-waf-to-protect-applications-with-azure-front-door"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configure-waf-to-protect-applications-with-azure-front-door","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure WAF to protect applications with Azure Front Door")]),t._v(" "),r("p",[t._v("Before we create the Web Application Firewall (WAF), I want to show you what an attack could look like. Suppose that my website takes a querystring parameter and does something meaningful with it, like store it in the database. I could create an URL like this to inject a malicious script:")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("https://frontdoortipsandtricks.azurefd.net/?<script>alert('do something evil')<\/script> \n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("When I try this on the website that Front Door is serving, without the WAF, the request will go through to the server, which serves the webpage, like normal. Although now, the malicious script is stored in my database.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/46beforewaf.png")}}),t._v(" "),r("p",[t._v("(Attack not blocked)")]),t._v(" "),r("p",[t._v("Web Application Firewall (WAF) can protect your web application against attacks. Let's create one for our Azure Front Door to protect our web application.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure portal"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("Click the "),r("strong",[t._v("Create a resource")]),t._v(" button (the plus-sign in the top left corner)")])]),t._v(" "),r("li",[r("p",[t._v("Search for "),r("strong",[t._v("Web Application Firewall")]),t._v(" and click on the result to start creating a Web Application Firewall.")]),t._v(" "),r("ol",[r("li",[t._v("This brings you to the create wizard of Web Application Firewall")]),t._v(" "),r("li",[t._v("Select a "),r("strong",[t._v("Resource Group")])]),t._v(" "),r("li",[t._v("Fill in a "),r("strong",[t._v("Policy Name")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/46createwaf1.png")}}),t._v(" "),r("p",[t._v("(Create a WAF policy Basics)")]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("Click "),r("strong",[t._v("Next: Policy settings")])]),t._v(" "),r("li",[t._v("Set the "),r("strong",[t._v("Mode")]),t._v(" to "),r("strong",[t._v("Prevention")]),t._v(". This will block attacks, rather than just detect and log them")]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Next: Managed rules")])]),t._v(" "),r("li",[t._v("Review the rules that are enabled by default. You can enable more, but you don't have to. "),r("strong",[t._v("Click Next: Custom rules")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/46selectrules.png")}}),t._v(" "),r("p",[t._v("(Create a WAF policy Managed Rules)")]),t._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[t._v("You can add your own rules to detect or prevent attacks. You can create custom rules to filter on IP addresses, block or allow requests from geographic regions, block or allow requests of certain sizes and verbs (such as GET, PUT, HEAD) and more. Don't add one at this time and click "),r("strong",[t._v("Next: Association")])]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Add frontend host")])]),t._v(" "),r("li",[t._v("Select the existing Azure Front Door and click "),r("strong",[t._v("Add")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/46associatefrontdoor.png")}}),t._v(" "),r("p",[t._v("(Create a WAF policy Association)")]),t._v(" "),r("ol",{attrs:{start:"11"}},[r("li",[t._v("Click "),r("strong",[t._v("Review + create")]),t._v(" and "),r("strong",[t._v("Create")]),t._v(" after that. This will create the WAF and enable it for the Azure Front Door that we selected")])])])]),t._v(" "),r("p",[t._v("That's it! The web application is now protected by the Web Application Firewall. Try the URL with the malicious script again. The request will be blocked like in the image below.")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/afterwaf.png")}}),t._v(" "),r("p",[t._v("(Attack blocked by WAF)")]),t._v(" "),r("p",[t._v("If you look closely, you see that the title of the web page has changed into "),r("strong",[t._v("Microsoft")]),t._v(". The attack doesn't reach your web application. It is blocked at the edge of the Azure cloud, before it can do any harm.")]),t._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),r("p",[t._v("Protecting your web application with "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/waf-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Web Application Firewall"),r("OutboundLink")],1),t._v(" in front of "),r("a",{attrs:{href:"https://azure.microsoft.com/services/frontdoor/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Front Door"),r("OutboundLink")],1),t._v(" is really powerful. Out-of-the-box, you are protected against hundreds of different common attacks. You can also enable rules to protect your application against bots. And you can also create your "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/frontdoor/waf-front-door-custom-rules?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("own, custom, protection rules"),r("OutboundLink")],1),t._v(" ranging from IP filters to rate limits. Go check it out!")]),t._v(" "),r("h2",{attrs:{id:"bonus-live-streaming-software-development"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bonus-live-streaming-software-development","aria-hidden":"true"}},[t._v("#")]),t._v(" BONUS: Live streaming software development")]),t._v(" "),r("p",[t._v("On a side note - If you like Azure Tips and Tricks, then you might enjoy another project that I'm working on for live streaming. Check out my channel below and hit the follow button to know when I'm live.")]),t._v(" "),r("iframe",{attrs:{src:"https://player.twitch.tv/?channel=mbcrump",frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}}),r("a",{staticStyle:{padding:"2px 0px 4px",display:"block",width:"345px","font-weight":"normal","font-size":"10px","text-decoration":"underline"},attrs:{href:"https://www.twitch.tv/mbcrump?tt_content=text_link&tt_medium=live_embed"}},[t._v("Watch live video from mbcrump on www.twitch.tv")])])},[],!1,null,null,null);e.default=a.exports}}]);