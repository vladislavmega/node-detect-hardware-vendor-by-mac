# detect-hardware-vendor-by-mac
Detect hardware device vendor by mac address
https://www.npmjs.com/package/detect-hardware-vendor-by-mac

installation:

`npm install detect-hardware-vendor-by-mac`

or
 
`yarn add detect-hardware-vendor-by-mac`

usage: 
 
`var detectByMac = require('detect-hardware-vendor-by-mac');
detectByMac('dc:0b:34:a7:92:31'); 
// output be {key: 'dc:0b:34:a7:92:31', vendorMacPrefix: 'dc:0b:34', shortTitle: 'LgElectr', fullTitle: ' LG Electronics (Mobile Communications)'}`
  
base taken from:
https://code.wireshark.org/review/gitweb?p=wireshark.git;a=blob_plain;f=manuf
