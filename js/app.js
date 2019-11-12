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

function displayContents(shopLocation, cityName) {
  var hourlySalesArr = createHourlySalesObj(hours, shopLocation.cookiesSoldEachHour);
  var city = document.getElementById(`${cityName}`);
  var seattleTitle = document.createElement('h2');
  seattleTitle.textContent = shopLocation.location;
  city.appendChild(seattleTitle);

  var shopAddr = document.createElement('p');
  shopAddr.textContent = shopLocation.address;
  city.appendChild(shopAddr);
  var shopPhoneNum = document.createElement('p');
  shopPhoneNum.textContent = shopLocation.phone;
  city.appendChild(shopPhoneNum);

  var seattleList = document.createElement('ul');
  city.appendChild(seattleList);
  for (var i = 0; i < 14; i++) {
    var byHourElem = document.createElement('li');
    byHourElem.textContent = hourlySalesArr[i].key + ': ' + hourlySalesArr[i].value + ' cookies';
    seattleList.appendChild(byHourElem);
  }
  var total = document.createElement('li');
  total.textContent = 'Total: ' + shopLocation.totalCookies + ' cookies';
  seattleList.appendChild(total);
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

displayContents(seattleLocation, 'seattle');


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

displayContents(tokyoLocation, 'tokyo');



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

displayContents(dubaiLocation, 'dubai');


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

displayContents(parisLocation, 'paris');


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

displayContents(limaLocation, 'lima');

