'use strict';

// Set these hours as a global variable
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

var allShops = [];

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


var tableContainer = document.getElementById('introContainer');
var tableBycity = addElement('table', tableContainer);

var tableRowhead = addElement('tr', tableBycity);

addElement('th', tableRowhead, '');
for (var ii = 0; ii < hours.length; ii++) {
  addElement('th', tableRowhead, hours[ii]);
}
addElement('th', tableRowhead, 'Daily Location Total');


// Display a city by a row
function disaplyTablebyCity(shopLocation) {
  var hourlySalesArr = createHourlySalesObj(hours, shopLocation.cookiesSoldEachHour);
  var tableRowBody = addElement('tr', tableBycity);
  tableRowBody.className = 'dataRows';
  addElement('td', tableRowBody, shopLocation.location);
  for (var i = 0; i < hourlySalesArr.length; i++) {
    addElement('td', tableRowBody, hourlySalesArr[i].value);
  }
  addElement('td', tableRowBody, shopLocation.totalCookies + ' cookies');
}

// Display total row
function disaplyTotalTable() {
  var tableRowBody = addElement('tr', tableBycity);
  addElement('td', tableRowBody, 'Total');
  var totalByHour = 0;
  var megaTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    for (var j = 0; j < allShops.length; j++) {
      totalByHour += allShops[j][i].value;
    }
    megaTotal += totalByHour;
    addElement('td', tableRowBody, totalByHour);
  }
  addElement('td', tableRowBody, megaTotal + ' cookies');
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
    var randomNum = Math.random() * (this.maxCus - this.minCus + 1) + this.minCus;
    var cookies = Math.round(randomNum * this.avgCookieSale);
    this.cookiesSoldEachHour.push(cookies);
    this.totalCookies += cookies;
  }
};

function displayLocationInfo(city) {
  var introContainer = document.getElementById('introContainer');
  // console.log('introContainer :', introContainer);
  var element =  addElement('div', introContainer);
  addElement('h2', element, city.location);
  var listBycity = addElement('ul', element);
  listBycity.id = 'contactInfo';
  addElement('li', listBycity, 'Location :' + city.location);
  addElement('li', listBycity, 'Address :' + city.address);
  addElement('li', listBycity, 'Phone :' + city.phone);
}

function addInitialShops() {
  var seattleLocation = new SalmonCookiesShop('Seattle', 23, 65, 6.3, '522 19th Ave E, Seattle, WA 98112', '(206)735-7970');
  allShops.push(createHourlySalesObj(hours, seattleLocation.cookiesSoldEachHour));
  disaplyTablebyCity(seattleLocation);

  var tokyoLocation = new SalmonCookiesShop('Tokyo', 3, 24, 1.2, '1 Chome-21-15 Jingumae, Shibuya City, Tokyo 150-0001, Japan', '+81 120-867-622');
  allShops.push(createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour));
  disaplyTablebyCity(tokyoLocation);

  var dubaiLocation = new SalmonCookiesShop('Dubai', 11, 38, 3.7, '34 14 C St - Dubai - United Arab Emirates', '+971 50 164 9000');
  allShops.push(createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour));
  disaplyTablebyCity(dubaiLocation);

  var parisLocation = new SalmonCookiesShop('Paris', 20, 38, 2.3, '34 Rue Montorgueil, 75001 Paris, France', '+33 9 83 48 36 76');
  allShops.push(createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour));
  disaplyTablebyCity(parisLocation);

  var limaLocation = new SalmonCookiesShop('Lima', 2, 16, 4.6, 'Jirón Mariscal Miller 212, Cercado de Lima 15046, Peru', '(800)457-4779');
  allShops.push(createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour));
  disaplyTablebyCity(limaLocation);

  displayLocationInfo(seattleLocation);
  displayLocationInfo(tokyoLocation);
  displayLocationInfo(dubaiLocation);
  displayLocationInfo(parisLocation);
  displayLocationInfo(limaLocation);
}

addInitialShops();


function deleteTotalRow() {
  tableBycity.deleteRow(-1);
}

// Add new shops by form
function createNewShop(event) {
  event.preventDefault();
  var location = event.target.location.value;
  var minCus = parseInt(event.target.minCustomer.value);
  var maxCus = parseInt(event.target.maxCustomer.value);
  var avgCus = parseInt(event.target.avgCustomer.value);

  var shop = new SalmonCookiesShop(location, minCus, maxCus, avgCus, location, location);

  // shop.getCookiesSalesReport();
  console.log('shop :', shop);
  deleteTotalRow();
  disaplyTablebyCity(shop);
  disaplyTotalTable();
  event.target.reset();
}

var form = document.getElementById('salmonCookiesForm');
form.addEventListener('submit', createNewShop);

disaplyTotalTable();
