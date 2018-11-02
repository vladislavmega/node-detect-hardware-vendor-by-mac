var fs = require('fs');
var _ = require('lodash');
var macBase = JSON.parse(fs.readFileSync(__dirname + '/base.json', {encoding: 'utf-8'}));

module.exports = function(macAddress){
    var mac = macAddress || '';
    var macRegExp = /(([0-9A-Fa-f][0-9A-Fa-f][-:]){5}[0-9A-Fa-f][0-9A-Fa-f])|(([0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f].){2}[0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f][0-9A-Fa-f])/;
    if (!macRegExp.test(mac)) return {key: mac, vendorMacPrefix: '', shortTitle: '', fullTitle: ''};

    var macSplit = macAddress.toLowerCase().replace(/-/g, ':').split(':');
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
