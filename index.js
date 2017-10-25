var fs = require('fs');
var _ = require('lodash');
var macBaseRaw = fs.readFileSync(__dirname + '/macbase.txt', {encoding: 'utf-8'});
var macBase = macBaseRaw.split(/\r?\n/).map(function (line) {
    var splitedLine = line.split(' ');
    var fullTitle = '';
    if (splitedLine.length > 2) {
        fullTitle = splitedLine.reduce(function (prev, current, index, array) {
            return (index < 2) ? '' : prev + ' ' + current;
        });
    }

    return {
        key: splitedLine[0].toLowerCase(),
        shortTitle: splitedLine[1],
        fullTitle: fullTitle,
    }
});

module.exports = function(macAddress){
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
        shortTitle: (finded) ? finded.shortTitle : '',
        fullTitle: (finded) ? finded.fullTitle : '',
    }
};
