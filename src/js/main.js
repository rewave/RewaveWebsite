if (window.location.pathname.includes('pages'))
{
  var pages = {
      'home': '/',
      'about': '/pages/about.html',
      'features': '/pages/features.html',
      'getting-started': '/pages/getting-started.html',
      'help': '/pages/help.html',
      'contact': '/pages/contact.html'
    }

    Object.keys(pages).map(function(page) {
      var path = window.location.pathname;
      if (pages[page] == path) {
        var as = document.getElementsByTagName("a");
        Object.keys(as).map(function(index) {
          var el = as[index];
          //console.log(el.href)
          if (typeof(el.href) !== 'undefined' && el.href.includes(path)) {
            el.setAttribute("class", "active")
          }
        });

      }
    });
}


var OSName = "X";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

if(OSName == "Windows") {
  var els = document.getElementsByClassName('server-ubuntu');
  Object.keys(els).map(function(index) {
    els.item(index).style.display = 'initial';
  });
} 

if(OSName == "Linux") {
  var els = document.getElementsByClassName('server-ubuntu');
  Object.keys(els).map(function(index) {
    els.item(index).style.display = 'initial';
  });
}

var track = {
  // Website Interactions
  demoViewed: function () {
    // console.log("view demo");
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'website-interaction', 'demo-viewed');
    }
  },

  // Downloading App and Server(s)
  windowsServerDownloaded: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'server-download', 'windows-server-downloaded');
    }
  },
  ubuntuServerDownloaded: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'server-download', 'ubuntu-server-downloaded');
    }
  },
  macServerDownloaded: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'server-download', 'mac-server-downloaded');
    }
  },
  appDownloadClicked: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'app-download', 'app-download-clicked');
    }
  },

  //Social Interactions
  facebookClicked: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'social', 'facebook-clicked');
    }
  },
  twitterClicked: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'social', 'twitter-clicked');
    }
  },
  mediumClicked: function () {
    if (typeof(ga) !== "undefined") {
      ga('send', 'event', 'social', 'medium-clicked');
    }
  }

};