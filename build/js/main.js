if(window.location.pathname.includes("pages")){var pages={home:"/",about:"/pages/about.html",features:"/pages/features.html","getting-started":"/pages/getting-started.html",help:"/pages/help.html",contact:"/pages/contact.html"};Object.keys(pages).map(function(e){var n=window.location.pathname;if(pages[e]==n){var a=document.getElementsByTagName("a");Object.keys(a).map(function(e){var t=a[e];"undefined"!=typeof t.href&&t.href.includes(n)&&t.setAttribute("class","active")})}})}var OSName="X";if(-1!=navigator.appVersion.indexOf("Win")&&(OSName="Windows"),-1!=navigator.appVersion.indexOf("Mac")&&(OSName="MacOS"),-1!=navigator.appVersion.indexOf("X11")&&(OSName="UNIX"),-1!=navigator.appVersion.indexOf("Linux")&&(OSName="Linux"),"Windows"==OSName){var els=document.getElementsByClassName("server-ubuntu");Object.keys(els).map(function(e){els.item(e).style.display="initial"})}if("Linux"==OSName){var els=document.getElementsByClassName("server-ubuntu");Object.keys(els).map(function(e){els.item(e).style.display="initial"})}var track={demoViewed:function(){"undefined"!=typeof ga&&ga("send","event","website-interaction","demo-viewed")},windowsServerDownloaded:function(){"undefined"!=typeof ga&&ga("send","event","server-download","windows-server-downloaded")},ubuntuServerDownloaded:function(){"undefined"!=typeof ga&&ga("send","event","server-download","ubuntu-server-downloaded")},macServerDownloaded:function(){"undefined"!=typeof ga&&ga("send","event","server-download","mac-server-downloaded")},appDownloadClicked:function(){"undefined"!=typeof ga&&ga("send","event","app-download","app-download-clicked")},facebookClicked:function(){"undefined"!=typeof ga&&ga("send","event","social","facebook-clicked")},twitterClicked:function(){"undefined"!=typeof ga&&ga("send","event","social","twitter-clicked")},mediumClicked:function(){"undefined"!=typeof ga&&ga("send","event","social","medium-clicked")}};