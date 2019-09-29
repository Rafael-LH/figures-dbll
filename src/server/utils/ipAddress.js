const os = require('os');

const ifaces = os.networkInterfaces();
let ipAddress;

Object.keys(ifaces).forEach((ifname) => {
  let alias = 0;

  ifaces[ifname].forEach((iface) => {
    // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
    if (iface.family !== 'IPv4' || iface.internal !== false) {
      return;
    }
    // this single interface has multiple ipv4 addresses
    ipAddress = iface.address;
    ++alias;
  });
});

module.exports = ipAddress;