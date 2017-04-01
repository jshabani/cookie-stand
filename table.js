

function Thestores (minCookies, maxCookies, averageCookies, id, name) {
  this.minCookies = minCookies;
  this.maxCookies = maxCookies;
  this.averageCookies = averageCookies;
  this.id = id;
  this.name = name;
  this.cookieCal = function () {
    return Math.floor(Math.random() * (this.maxCookies - this.minCookies + 1)) + this.minCookies;
  }
}

var pioneerThestores = new Thestores (17, 88, 5.2, "pioneersq", "Pioneer Square");
var airportThestores = new Thestores (6, 24, 1.2, "portlandAir", "Portland Airport");
var squareThestores = new Thestores (11, 38, 1.9, "washingtonsq", "Whashington Square");
var sellwoodThestores = new Thestores (20, 48, 3.3, "sellwood", "Sellwood");
var pearlThestores = new Thestores (3, 24, 2.6, "pdistrict", "Pearl District");

var stores = new Array ();
stores.push(pioneerThestores);
stores.push(airportThestores);
stores.push(squareThestores);
stores.push(sellwoodThestores);
stores.push(pearlThestores);

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
  var container = document.getElementById("storetable");
  var rowdata = "<tr><td>" + store.name + "</td>";
  var totalCookies = 0;
  for(t = 0; t < 8; t++) {
    var cookies = store.cookieCal();
    rowdata += "<td>" + writeStoreHours(t)+ cookies + "</td>";
    totalCookies += cookies;
  }
  container.innerHTML += rowdata + "<td>Total: " + totalCookies + "</td></tr>" ;
}

function buildStorePage () {
  var container = document.getElementById("storetable");
  container.innerHTML = "";
  for (index = 0; index < stores.length; index++) {
    writeStoreData(stores[index])
  }
}
buildStorePage();

function addStores() {
    var form = document.getElementById("SubmitFreshStores");
    var name = form.storeName.value;
    var min = parseInt(form.numberCustomerMin.value);
    var max = parseInt(form.numberCustomerMax.value);
    var average = parseFloat(form.averageNumberCustomer.value);
    var newStore = new Thestores(min, max, average, "", name);

    stores.push(newStore);
    buildStorePage();
}
