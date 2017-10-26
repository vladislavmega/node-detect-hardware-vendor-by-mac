var fs = require('fs');
var _ = require('lodash');
var macBase = JSON.parse(fs.readFileSync(__dirname + '/base.json', {encoding: 'utf-8'}));

module.exports = function(macAddress){
    this.macs = macBase;
    var macSplit = macAddress.toLowerCase().split(':');
    var mac5 = macSplit.reduce(function(prev, current, index) {
        return (index <5) ? prev + ':'+ current : prev
    });
    var mac4 = macSplit.reduce(function(prev, current, index) {
        return (index <4) ? prev + ':'+ current : prev
    });
    var mac3 = macSplit.reduce(function(prev, current, index){
        return (index <3) ? prev + ':'+ current : prev
    });
    var finded = _.find(macBase, {key: mac5});
    if (!finded) finded = _.find(macBase, {key: mac4});
    if (!finded) finded = _.find(macBase, {key: mac3});
    return {
        key: macAddress,
        vendorMacPrefix: (finded)? finded.key : '',
        shortTitle: (finded) ? finded.shortTitle : '',
        fullTitle: (finded) ? finded.fullTitle : '',
    }
};
