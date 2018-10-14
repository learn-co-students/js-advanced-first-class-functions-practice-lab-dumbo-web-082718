function logDriverNames(array) {
	array.forEach(function(key, value) {
		console.log (key.name);
	});
}

function logDriversByHometown(array, hometown) {
	array.forEach(function(key, value) {
	// console.log(key) 
		if (key.hometown === hometown) {
			console.log(key.name)
		}

	});
}

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
 	// console.log(j)
  });
};


function driversByName(drivers) {
	return drivers.slice().sort(function (driverOne, driverTwo) {
		return driverOne.name.localeCompare(driverTwo.name);
	});
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};