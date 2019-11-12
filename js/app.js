'use strict';

// Set these hours as a global variable
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Generate the random number to get number of cookie sales in an hour
function getNumCookiesEachHour(max, min, avg) {
  return Math.floor(((Math.random() * (max - min +1)) + min) * avg);
}

// Get array of 14 hours of report with total sales
function getCookiesSalesReport(location) {
  for (var i = 0; i < 14; i++) {
    var cookies = getNumCookiesEachHour(location.maxCus, location.minCus, location.avgCookieSale);
    location.cookiesSoldEachHour.push(cookies);
    location.totalCookies += cookies;
  }
}

// Create Object pairs of the time and the sales in each hours
function createHourlySalesObj(hoursArr, salesArr) {
  var arrObj = [];
  for (var i = 0; i < hoursArr.length; i++) {
    arrObj.push({
      key: hoursArr[i],
      value: salesArr[i],
    });
  }
  return arrObj;
}

// Helper function to display document elements
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

// Display all the data by location
function displayContents(shopLocation, cityName) {
  var hourlySalesArr = createHourlySalesObj(hours, shopLocation.cookiesSoldEachHour);
  var city = document.getElementById(`${cityName}`);
  addElement('h2', city, shopLocation.location);
  addElement('p', city, shopLocation.address);
  addElement('p', city, shopLocation.phone);
  var seattleList = addElement('ul', city);
  city.appendChild(seattleList);
  for (var i = 0; i < 14; i++) {
    addElement('li', seattleList, hourlySalesArr[i].key + ': ' + hourlySalesArr[i].value + ' cookies');
  }
  addElement('li', seattleList, 'Total: ' + shopLocation.totalCookies + ' cookies');
}

function SalmonCookiesShop(shopLocation, min, max, avg, address, phone) {
  this.location = shopLocation;
  this.minCus = min;
  this.maxCus = max;
  this.avgCookieSale = avg;
  this.cookiesSoldEachHour = [];
  this.totalCookies = 0,
  this.address = address;
  this.phone = phone;
}

var seattleLocation = new SalmonCookiesShop('Seattle', 23, 65, 6.3, '522 19th Ave E, Seattle, WA 98112', '(206)735-7970');
console.log('seattleLocation1 :', seattleLocation);
getNumCookiesEachHour(seattleLocation.maxCus, seattleLocation.minCus);
getCookiesSalesReport(seattleLocation);
console.log('seattleLocation2 :', seattleLocation);
displayContents(seattleLocation, 'seattle');


var tokyoLocation = new SalmonCookiesShop('Tokyo', 3, 24, 1.2, '1 Chome-21-15 Jingumae, Shibuya City, Tokyo 150-0001, Japan', '+81 120-867-622');
getNumCookiesEachHour(tokyoLocation.maxCus, tokyoLocation.minCus);
getCookiesSalesReport(tokyoLocation);
displayContents(tokyoLocation, 'tokyo');


var dubaiLocation = new SalmonCookiesShop('Dubai', 11, 38, 3.7, '34 14 C St - Dubai - United Arab Emirates', '+971 50 164 9000');
getNumCookiesEachHour(dubaiLocation.maxCus, dubaiLocation.minCus);
getCookiesSalesReport(dubaiLocation);
displayContents(dubaiLocation, 'dubai');


var parisLocation = new SalmonCookiesShop('Paris', 20, 38, 2.3, '34 Rue Montorgueil, 75001 Paris, France', '+33 9 83 48 36 76');
getNumCookiesEachHour(parisLocation.maxCus, parisLocation.minCus);
getCookiesSalesReport(parisLocation);
displayContents(parisLocation, 'paris');


var limaLocation = new SalmonCookiesShop('Lima', 2, 16, 4.6, 'Jirón Mariscal Miller 212, Cercado de Lima 15046, Peru', '(800)457-4779');
getNumCookiesEachHour(limaLocation.maxCus, limaLocation.minCus);
getCookiesSalesReport(limaLocation);
displayContents(limaLocation, 'lima');

