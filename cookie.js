



var pioneer = {
  minCookies: 17,
  maxCookies: 88,
  averageCookies: 5.2,
  id: "pioneersq",
  name: "Pioneer Square",
  cookieCal: function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}


var airport = {
  minCookies: 6,
  maxCookies: 24,
  averageCookies: 1.2,
  id:"portlandAir",
  name:"Portland Airport",
  cookieCal: function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}

var square = {
  minCookies: 11,
  maxCookies: 38,
  averageCookies: 1.9,
  id: "washingtonsq",
  name: "Washington Square",
  cookieCal: function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}

var sellwood = {
  minCookies: 20,
  maxCookies: 48,
  averageCookies: 3.3,
  id: "sellwood",
  name: "Sellwood",
  cookieCal: function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}

var pearl = {
  minCookies: 3,
  maxCookies: 24,
  averageCookies: 2.6,
  id: "pdistrict",
  name: "Pearl District",
  cookieCal: function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}

pearl.cookieCal()
console.log(pearl.cookieCal());

function pioneerHourly () {
  for(i = 0; i < 8; i++) {
  var salmon = Math.round(pioneer.averageCookies * pioneer.cookieCal());
  console.log("total:" + salmon);
  }
}

var stores = new Array ();
stores.push(pioneer);
stores.push(airport);
stores.push(square);
stores.push(sellwood);
stores.push(pearl);

function writeStoreHours (hours) {
  switch (hours) {
    case 0: return "10am - ";
    case 1: return "11am - ";
    case 2: return "12pm - ";
    case 3: return "1pm - ";
    case 4: return "2pm - ";
    case 5: return "3pm - ";
    case 6: return "4pm - ";
    case 7: return "5pm - ";

  }

}

function writeStoreData (store) {
  var container = document.getElementById(store.id);
  var heading = container.getElementsByTagName("h1")[0];
  //var list = heading.getElementsByTagName("li");
  heading.innerHTML= store.name;
  var hoursList = container.getElementsByTagName("ul")[0];
  var totalCookies = 0;
    for(t = 0; t < 8; t++) {
      var cookies = store.cookieCal();
      hoursList.innerHTML += "<li>" + writeStoreHours(t)+ cookies + "</li>";
      totalCookies += cookies;
  }
  hoursList.innerHTML += "<li>Total: " + totalCookies + "</li>";

}

function buildStorePage () {
  for (index = 0; index < stores.length; index++) {
    writeStoreData(stores[index])
  }
}

buildStorePage();
