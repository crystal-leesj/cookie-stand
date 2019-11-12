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
  var obj = [];
  for (var i = 0; i < hoursArr.length; i++) {
    obj.push({
      key: hoursArr[i],
      value: salesArr[i],
    });
  }
  return obj;
}


var seattleLocation = {
  location: 'Seattle',
  minCus: 23,
  maxCus: 65,
  avgCookieSale: 6.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
  address: '522 19th Ave E, Seattle, WA 98112',
  phone: '(206)735-7970',
};

getNumCookiesEachHour(seattleLocation.maxCus, seattleLocation.minCus);
getCookiesSalesReport(seattleLocation);

var seattleHourlySalesArr = createHourlySalesObj(hours, seattleLocation.cookiesSoldEachHour);
console.log('seattleHourlySalesArr :', seattleHourlySalesArr);
var seattle = document.getElementById('seattle');
var seattleTitle = document.createElement('h2');
seattleTitle.textContent = seattleLocation.location;
seattle.appendChild(seattleTitle);

var seattleInfoAddr = document.createElement('p');
seattleInfoAddr.textContent = seattleLocation.address;
seattle.appendChild(seattleInfoAddr);
var seattleInfoPhone = document.createElement('p');
seattleInfoPhone.textContent = seattleLocation.phone;
seattle.appendChild(seattleInfoPhone);

var seattleList = document.createElement('ul');
seattle.appendChild(seattleList);
for (var i = 0; i < 14; i++) {
  var seattleElem = document.createElement('li');
  seattleElem.textContent = seattleHourlySalesArr[i].key + ': ' + seattleHourlySalesArr[i].value + ' cookies';
  seattleList.appendChild(seattleElem);
}
var seattleTotal = document.createElement('li');
seattleTotal.textContent = 'Total: ' + seattleLocation.totalCookies + ' cookies';
seattleList.appendChild(seattleTotal);


var tokyoLocation = {
  location: 'Tokyo',
  minCus: 3,
  maxCus: 24,
  avgCookieSale: 1.2,
  cookiesSoldEachHour: [],
  totalCookies: 0,
  address: '1 Chome-21-15 Jingumae, Shibuya City, Tokyo 150-0001, Japan',
  phone: '+81 120-867-622',
};

getNumCookiesEachHour(tokyoLocation.maxCus, tokyoLocation.minCus);
getCookiesSalesReport(tokyoLocation);
var tokyoHourlySalesArr = createHourlySalesObj(hours, tokyoLocation.cookiesSoldEachHour);

var tokyo = document.getElementById('tokyo');
var tokyoTitle = document.createElement('h2');
tokyoTitle.textContent = tokyoLocation.location;
tokyo.appendChild(tokyoTitle);

var tokyoInfoAddr = document.createElement('p');
tokyoInfoAddr.textContent = tokyoLocation.address;
tokyo.appendChild(tokyoInfoAddr);
var tokyoInfoPhone = document.createElement('p');
tokyoInfoPhone.textContent = tokyoLocation.phone;
tokyo.appendChild(tokyoInfoPhone);

var tokyoList = document.createElement('ul');
tokyo.appendChild(tokyoList);
for (var j = 0; j < 14; j++) {
  var tokyoElem = document.createElement('li');
  tokyoElem.textContent = seattleHourlySalesArr[j].key + ': ' + tokyoHourlySalesArr[j].value + ' cookies';
  tokyoList.appendChild(tokyoElem);
}
var tokyoTotal = document.createElement('li');
tokyoTotal.textContent = 'Total: ' + tokyoLocation.totalCookies + ' cookies';
tokyoList.appendChild(tokyoTotal);


var dubaiLocation = {
  location: 'Dubai',
  minCus: 11,
  maxCus: 38,
  avgCookieSale: 3.7,
  cookiesSoldEachHour: [],
  totalCookies: 0,
  address: '34 14 C St - Dubai - United Arab Emirates',
  phone: '+971 50 164 9000',
};

getNumCookiesEachHour(dubaiLocation.maxCus, dubaiLocation.minCus);
getCookiesSalesReport(dubaiLocation);
var dubaiHourlySalesArr = createHourlySalesObj(hours, dubaiLocation.cookiesSoldEachHour);

var dubai = document.getElementById('dubai');
var dubaiTitle = document.createElement('h2');
dubaiTitle.textContent = dubaiLocation.location;
dubai.appendChild(dubaiTitle);

var dubaiInfoAddr = document.createElement('p');
dubaiInfoAddr.textContent = dubaiLocation.address;
dubai.appendChild(dubaiInfoAddr);
var dubaiInfoPhone = document.createElement('p');
dubaiInfoPhone.textContent = dubaiLocation.phone;
dubai.appendChild(dubaiInfoPhone);

var dubaiList = document.createElement('ul');
dubai.appendChild(dubaiList);
for (j = 0; j < dubaiHourlySalesArr.length; j++) {
  var dubaiElem = document.createElement('li');
  dubaiElem.textContent = dubaiHourlySalesArr[j].key + ': ' + dubaiHourlySalesArr[j].value + ' cookies';
  dubaiList.appendChild(dubaiElem);
}
var dubaiTotal = document.createElement('li');
dubaiTotal.textContent = 'Total: ' + dubaiLocation.totalCookies + ' cookies';
dubaiList.appendChild(dubaiTotal);


var parisLocation = {
  location: 'Paris',
  minCus: 20,
  maxCus: 38,
  avgCookieSale: 2.3,
  cookiesSoldEachHour: [],
  totalCookies: 0,
  address: '34 Rue Montorgueil, 75001 Paris, France',
  phone: '+33 9 83 48 36 76',
};

getNumCookiesEachHour(parisLocation.maxCus, parisLocation.minCus);
getCookiesSalesReport(parisLocation);
var parisHourlySalesArr = createHourlySalesObj(hours, parisLocation.cookiesSoldEachHour);

var paris = document.getElementById('paris');
var parisTitle = document.createElement('h2');
parisTitle.textContent = parisLocation.location;
paris.appendChild(parisTitle);

var parisInfoAddr = document.createElement('p');
parisInfoAddr.textContent = parisLocation.address;
paris.appendChild(parisInfoAddr);
var parisInfoPhone = document.createElement('p');
parisInfoPhone.textContent = parisLocation.phone;
paris.appendChild(parisInfoPhone);

var parisList = document.createElement('ul');
paris.appendChild(parisList);
for (j = 0; j < parisHourlySalesArr.length; j++) {
  var parisElem = document.createElement('li');
  parisElem.textContent = parisHourlySalesArr[j].key + ': ' + parisHourlySalesArr[j].value + ' cookies';
  parisList.appendChild(parisElem);
}
var parisTotal = document.createElement('li');
parisTotal.textContent = 'Total: ' + parisLocation.totalCookies + ' cookies';
parisList.appendChild(parisTotal);


var limaLocation = {
  location: 'Lima',
  minCus: 2,
  maxCus: 16,
  avgCookieSale: 4.6,
  cookiesSoldEachHour: [],
  totalCookies: 0,
  address: 'Jirón Mariscal Miller 212, Cercado de Lima 15046, Peru',
  phone: '(800)457-4779',
};

getNumCookiesEachHour(limaLocation.maxCus, limaLocation.minCus);
getCookiesSalesReport(limaLocation);
var limaHourlySalesArr = createHourlySalesObj(hours, limaLocation.cookiesSoldEachHour);

var lima = document.getElementById('lima');
var limaTitle = document.createElement('h2');
limaTitle.textContent = limaLocation.location;
lima.appendChild(limaTitle);

var limaInfoAddr = document.createElement('p');
limaInfoAddr.textContent = limaLocation.address;
lima.appendChild(limaInfoAddr);
var limaInfoPhone = document.createElement('p');
limaInfoPhone.textContent = limaLocation.phone;
lima.appendChild(limaInfoPhone);

var limaList = document.createElement('ul');
lima.appendChild(limaList);
for (j = 0; j < limaHourlySalesArr.length; j++) {
  var limaElem = document.createElement('li');
  limaElem.textContent = limaHourlySalesArr[j].key + ': ' + limaHourlySalesArr[j].value + ' cookies';
  limaList.appendChild(limaElem);

}
var limaTotal = document.createElement('li');
limaTotal.textContent = 'Total: ' + limaLocation.totalCookies + ' cookies';
limaList.appendChild(limaTotal);
