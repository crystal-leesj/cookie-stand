'use strict';

// Set these hours as a global variable
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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


var tableContainer = document.getElementById('tableContainer');
var tableBycity = addElement('table', tableContainer);
tableContainer.appendChild(tableBycity);

var tableRowhead = addElement('tr', tableBycity);
tableBycity.appendChild(tableRowhead);

addElement('th', tableRowhead, '');
for (var ii = 0; ii < hours.length; ii++) {
  addElement('th', tableRowhead, hours[ii]);
}
addElement('th', tableRowhead, 'Daily Location Total');

// Display a city by a row
function disaplyTablebyCity(shopLocation) {
  // shopLocation.getCookiesSalesReport();
  var hourlySalesArr = createHourlySalesObj(hours, shopLocation.cookiesSoldEachHour);
  var tableRowBody = addElement('tr', tableBycity);
  tableBycity.appendChild(tableRowBody);
  addElement('td', tableRowBody, shopLocation.location);
  for (var i = 0; i < hourlySalesArr.length; i++) {
    addElement('td', tableRowBody, hourlySalesArr[i].value);
  }
  addElement('td', tableRowBody, shopLocation.totalCookies + ' cookies');
}

// Display total row
function disaplyTotalTable(seattle, tokyo, dubai, paris, lima) {
  var tableRowBody = addElement('tr', tableBycity);
  tableBycity.appendChild(tableRowBody);
  addElement('td', tableRowBody, 'Total');
  for (var i = 0; i < hours.length; i++) {
    addElement('td', tableRowBody, seattle.cookiesSoldEachHour[i] + tokyo.cookiesSoldEachHour[i] + dubai.cookiesSoldEachHour[i] + paris.cookiesSoldEachHour[i] + lima.cookiesSoldEachHour[i]);
  }
  addElement('td', tableRowBody, seattle.totalCookies + tokyo.totalCookies + dubai.totalCookies + paris.totalCookies + lima.totalCookies + ' cookies');
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
  this.getCookiesSalesReport();
}


// Generate the random number to get number of cookie sales in an hour
// Get array of 14 hours of report with total sales
SalmonCookiesShop.prototype.getCookiesSalesReport = function(){
  for (var i = 0; i < hours.length; i++) {
    var cookies = Math.floor(((Math.random() * (this.maxCus - this.minCus +1)) + this.minCus) * this.avgCookieSale);
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

var seattleLocation = new SalmonCookiesShop('Seattle', 23, 65, 6.3, '522 19th Ave E, Seattle, WA 98112', '(206)735-7970');
disaplyTablebyCity(seattleLocation);

var tokyoLocation = new SalmonCookiesShop('Tokyo', 3, 24, 1.2, '1 Chome-21-15 Jingumae, Shibuya City, Tokyo 150-0001, Japan', '+81 120-867-622');
disaplyTablebyCity(tokyoLocation);

var dubaiLocation = new SalmonCookiesShop('Dubai', 11, 38, 3.7, '34 14 C St - Dubai - United Arab Emirates', '+971 50 164 9000');
disaplyTablebyCity(dubaiLocation);

var parisLocation = new SalmonCookiesShop('Paris', 20, 38, 2.3, '34 Rue Montorgueil, 75001 Paris, France', '+33 9 83 48 36 76');
disaplyTablebyCity(parisLocation);

var limaLocation = new SalmonCookiesShop('Lima', 2, 16, 4.6, 'Jirón Mariscal Miller 212, Cercado de Lima 15046, Peru', '(800)457-4779');
disaplyTablebyCity(limaLocation);

disaplyTotalTable(seattleLocation, tokyoLocation, dubaiLocation, parisLocation, limaLocation);

