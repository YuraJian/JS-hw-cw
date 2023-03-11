function PublicService() {
  this.services = [];

  this.tariffs = {
    hotWater: 7,
    coldWater: 1,
    gas: 0.3,
    electricity: 1.6,
  };
}

PublicService.prototype.addMeterReadings = function (meterReading, value) {
  if (!Object.keys(this.tariffs).includes(meterReading)) {
    throw new Error(`Service --${meterReading}-- is unavailable.`);
  }

  if (this.services.some(({ key }) => key === meterReading)) {
    throw new Error(`Service --${meterReading}-- is already included.`);
  }

  this.services.push({ key: meterReading, value: value });
};

PublicService.prototype.deleteMeterReadings = function (meterReading) {
  if (this.services.every(({ key }) => key !== meterReading)) {
    throw new Error(`Service --${meterReading}-- not found.`);
  }

  this.services = this.services.filter(({ key }) => key !== meterReading);
};

PublicService.prototype.getSum = function () {
  let sum = 0;
  this.services.map(({ key, value }) => {
    sum += this.tariffs[key] * value;
  });
  alert(`You have to pay for services ${sum}$`);
};

const service = new PublicService();
service.addMeterReadings("hotWater", 100);
service.addMeterReadings("coldWater", 150);
service.addMeterReadings("electricity", 300);
// service.addMeterReadings('coldWater', 100);

service.deleteMeterReadings("hotWater");
// service.deleteMeterReadings("gas");
// service.deleteMeterReadings("hoWat");

service.getSum();

console.log("service", service);
