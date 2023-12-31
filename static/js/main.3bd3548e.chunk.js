(this["webpackJsonppantherswap-frontend-swap"] =
    this["webpackJsonppantherswap-frontend-swap"] || []).push([
    [2],
    {
        123: function(e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
            );
        },
        149: function(e) {
            e.exports = JSON.parse(
                '{"name":"pancakeswap","timestamp":"2020-08-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":1},"tags":{},"logoURI":"images/bnb.png","keywords":["pancake","default"],"tokens":[{"name":"CatX","symbol":"CatX","address":"0xf432b092d360db2bd43fb55ab3447bb7ef2ad579","chainId":56,"decimals":9,"logoURI":"/images/logo-footer.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18,"logoURI":"/images/coins/cake.png"},{"name":"Binance-Peg BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"/images/coins/busd.png"}]}'
            );
        },
        167: function(e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        231: function(e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        264: function(e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        265: function(e) {
            e.exports = JSON.parse(
                '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
            );
        },
        266: function(e) {
            e.exports = JSON.parse(
                '[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]'
            );
        },
        267: function(e) {
            e.exports = JSON.parse(
                '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
            );
        },
        377: function(e, n) {},
        485: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(1),
                a = t(0),
                i = t.n(a),
                c = t(81),
                o = t.n(c),
                s = t(4),
                u = t(9),
                l = t(3);

            function d() {
                var e = Object(u.a)([
                    "\n  * {\n    font-family: 'Mitr', sans-serif;\n  }\n  body {\n    background-color: ",
                    ";\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n",
                ]);
                return (
                    (d = function() {
                        return e;
                    }),
                    e
                );
            }
            var b,
                p = Object(l.createGlobalStyle)(d(), function(e) {
                    return e.theme.colors.background;
                }),
                f = t(6),
                j = t.n(f),
                m = t(26),
                h = t(11),
                v = t(37),
                y = t(44),
                O = t(249),
                x = t(22),
                g = t(59),
                C = t(126),
                w = t(17),
                k = t(166),
                T = t(252),
                I = t(253),
                E = t(254),
                N = t(255),
                R = t(10),
                S = t(12),
                A = t(14),
                U = t(15),
                B = t(5),
                P = t(259),
                _ =
                ((b = {}),
                    Object(w.a)(b, B.a.MAINNET, void 0),
                    Object(w.a)(b, B.a.BSCTESTNET, "Bsc-testnet"),
                    b),
                D = (function(e) {
                    Object(A.a)(r, e);
                    var n = Object(U.a)(r);

                    function r() {
                        return Object(R.a)(this, r), n.apply(this, arguments);
                    }
                    return (
                        Object(S.a)(r, [{
                            key: "activate",
                            value: (function() {
                                var e = Object(m.a)(
                                    j.a.mark(function e() {
                                        var n,
                                            r,
                                            a,
                                            i,
                                            c,
                                            o,
                                            s,
                                            u,
                                            l,
                                            d,
                                            b = this;
                                        return j.a.wrap(
                                            function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            if (this.fortmatic) {
                                                                e.next = 11;
                                                                break;
                                                            }
                                                            return (
                                                                (e.next = 3),
                                                                t.e(1).then(t.t.bind(null, 493, 7))
                                                            );
                                                        case 3:
                                                            if (
                                                                ((n = e.sent),
                                                                    (r = n.default),
                                                                    (i = (a = this).apiKey), !((c = a.chainId) in _))
                                                            ) {
                                                                e.next = 10;
                                                                break;
                                                            }
                                                            (this.fortmatic = new r(i, _[c])),
                                                            (e.next = 11);
                                                            break;
                                                        case 10:
                                                            throw new Error(
                                                                "Unsupported network ID: ".concat(c)
                                                            );
                                                        case 11:
                                                            return (
                                                                (o = this.fortmatic.getProvider()),
                                                                (s = new Promise(function(e) {
                                                                    var n = setInterval(function() {
                                                                        o.overlayReady &&
                                                                            (clearInterval(n),
                                                                                b.emit("OVERLAY_READY"),
                                                                                e());
                                                                    }, 200);
                                                                })),
                                                                (e.next = 15),
                                                                Promise.all([
                                                                    o.enable().then(function(e) {
                                                                        return e[0];
                                                                    }),
                                                                    s,
                                                                ])
                                                            );
                                                        case 15:
                                                            return (
                                                                (u = e.sent),
                                                                (l = Object(h.a)(u, 1)),
                                                                (d = l[0]),
                                                                e.abrupt("return", {
                                                                    provider: this.fortmatic.getProvider(),
                                                                    chainId: this.chainId,
                                                                    account: d,
                                                                })
                                                            );
                                                        case 19:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            },
                                            e,
                                            this
                                        );
                                    })
                                );
                                return function() {
                                    return e.apply(this, arguments);
                                };
                            })(),
                        }, ]),
                        r
                    );
                })(P.a),
                L = t(127),
                M = t(96),
                F = t(62),
                z = t(19),
                Y = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t(e, r, a) {
                        var i;
                        return (
                            Object(R.a)(this, t),
                            ((i = n.call(this, e)).code = r),
                            (i.data = a),
                            i
                        );
                    }
                    return t;
                })(Object(M.a)(Error)),
                q = function e(n, t, r) {
                    var a = this;
                    Object(R.a)(this, e),
                        (this.isMetaMask = !1),
                        (this.chainId = void 0),
                        (this.url = void 0),
                        (this.host = void 0),
                        (this.path = void 0),
                        (this.batchWaitTimeMs = void 0),
                        (this.nextId = 1),
                        (this.batchTimeoutId = null),
                        (this.batch = []),
                        (this.clearBatch = Object(m.a)(
                            j.a.mark(function e() {
                                var n, t, r, i, c, o, s, u, l, d, b, p, f, m;
                                return j.a.wrap(
                                    function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    return (
                                                        console.info("Clearing batch", a.batch),
                                                        (n = a.batch),
                                                        (a.batch = []),
                                                        (a.batchTimeoutId = null),
                                                        (e.prev = 4),
                                                        (e.next = 7),
                                                        fetch(a.url, {
                                                            method: "POST",
                                                            headers: {
                                                                "content-type": "application/json",
                                                                accept: "application/json",
                                                            },
                                                            body: JSON.stringify(
                                                                n.map(function(e) {
                                                                    return e.request;
                                                                })
                                                            ),
                                                        })
                                                    );
                                                case 7:
                                                    (t = e.sent), (e.next = 14);
                                                    break;
                                                case 10:
                                                    return (
                                                        (e.prev = 10),
                                                        (e.t0 = e.catch(4)),
                                                        n.forEach(function(e) {
                                                            return (0,
                                                                e.reject)(new Error("Failed to send batch call"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 14:
                                                    if (t.ok) {
                                                        e.next = 17;
                                                        break;
                                                    }
                                                    return (
                                                        n.forEach(function(e) {
                                                            return (0,
                                                                e.reject)(new Y("".concat(t.status, ": ").concat(t.statusText), -32e3));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 17:
                                                    return (e.prev = 17), (e.next = 20), t.json();
                                                case 20:
                                                    (r = e.sent), (e.next = 27);
                                                    break;
                                                case 23:
                                                    return (
                                                        (e.prev = 23),
                                                        (e.t1 = e.catch(17)),
                                                        n.forEach(function(e) {
                                                            return (0,
                                                                e.reject)(new Error("Failed to parse JSON response"));
                                                        }),
                                                        e.abrupt("return")
                                                    );
                                                case 27:
                                                    (i = n.reduce(function(e, n) {
                                                        return (e[n.request.id] = n), e;
                                                    }, {})),
                                                    (c = Object(L.a)(r));
                                                    try {
                                                        for (c.s(); !(o = c.n()).done;)
                                                            (s = o.value),
                                                            (u = i[s.id]),
                                                            (l = u.resolve),
                                                            (d = u.reject),
                                                            (b = u.request.method),
                                                            l &&
                                                            d &&
                                                            ("error" in s ?
                                                                d(
                                                                    new Y(
                                                                        null === s ||
                                                                        void 0 === s ||
                                                                        null === (p = s.error) ||
                                                                        void 0 === p ?
                                                                        void 0 :
                                                                        p.message,
                                                                        null === s ||
                                                                        void 0 === s ||
                                                                        null === (f = s.error) ||
                                                                        void 0 === f ?
                                                                        void 0 :
                                                                        f.code,
                                                                        null === s ||
                                                                        void 0 === s ||
                                                                        null === (m = s.error) ||
                                                                        void 0 === m ?
                                                                        void 0 :
                                                                        m.data
                                                                    )
                                                                ) :
                                                                "result" in s ?
                                                                l(s.result) :
                                                                d(
                                                                    new Y(
                                                                        "Received unexpected JSON-RPC response to ".concat(
                                                                            b,
                                                                            " request."
                                                                        ), -32e3,
                                                                        s
                                                                    )
                                                                ));
                                                    } catch (j) {
                                                        c.e(j);
                                                    } finally {
                                                        c.f();
                                                    }
                                                case 30:
                                                case "end":
                                                    return e.stop();
                                            }
                                    },
                                    e,
                                    null, [
                                        [4, 10],
                                        [17, 23],
                                    ]
                                );
                            })
                        )),
                        (this.sendAsync = function(e, n) {
                            a.request(e.method, e.params)
                                .then(function(t) {
                                    return n(null, {
                                        jsonrpc: "2.0",
                                        id: e.id,
                                        result: t,
                                    });
                                })
                                .catch(function(e) {
                                    return n(e, null);
                                });
                        }),
                        (this.request = (function() {
                            var e = Object(m.a)(
                                j.a.mark(function e(n, t) {
                                    var r, i;
                                    return j.a.wrap(function(e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    if ("string" === typeof n) {
                                                        e.next = 2;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        a.request(n.method, n.params)
                                                    );
                                                case 2:
                                                    if ("eth_chainId" !== n) {
                                                        e.next = 4;
                                                        break;
                                                    }
                                                    return e.abrupt(
                                                        "return",
                                                        "0x".concat(a.chainId.toString(16))
                                                    );
                                                case 4:
                                                    return (
                                                        (i = new Promise(function(e, r) {
                                                            a.batch.push({
                                                                request: {
                                                                    jsonrpc: "2.0",
                                                                    id: a.nextId++,
                                                                    method: n,
                                                                    params: t,
                                                                },
                                                                resolve: e,
                                                                reject: r,
                                                            });
                                                        })),
                                                        (a.batchTimeoutId =
                                                            null !== (r = a.batchTimeoutId) && void 0 !== r ?
                                                            r :
                                                            setTimeout(a.clearBatch, a.batchWaitTimeMs)),
                                                        e.abrupt("return", i)
                                                    );
                                                case 7:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                })
                            );
                            return function(n, t) {
                                return e.apply(this, arguments);
                            };
                        })()),
                        (this.chainId = n),
                        (this.url = t);
                    var i = new URL(t);
                    (this.host = i.host),
                    (this.path = i.pathname),
                    (this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50);
                },
                W = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t(e) {
                        var r,
                            a = e.urls,
                            i = e.defaultChainId;
                        return (
                            Object(R.a)(this, t),
                            Object(z.a)(
                                i || 1 === Object.keys(a).length,
                                "defaultChainId is a required argument with >1 url"
                            ),
                            ((r = n.call(this, {
                                supportedChainIds: Object.keys(a).map(function(e) {
                                    return Number(e);
                                }),
                            })).providers = void 0),
                            (r.currentChainId = void 0),
                            (r.currentChainId = i || Number(Object.keys(a)[0])),
                            (r.providers = Object.keys(a).reduce(function(e, n) {
                                return (e[Number(n)] = new q(Number(n), a[Number(n)])), e;
                            }, {})),
                            r
                        );
                    }
                    return (
                        Object(S.a)(t, [{
                                key: "activate",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", {
                                                                    provider: this.providers[this.currentChainId],
                                                                    chainId: this.currentChainId,
                                                                    account: null,
                                                                });
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProvider",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt(
                                                                    "return",
                                                                    this.providers[this.currentChainId]
                                                                );
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getChainId",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return e.abrupt("return", this.currentChainId);
                                                            case 1:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getAccount",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.abrupt("return", null);
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "deactivate",
                                value: function() {
                                    return null;
                                },
                            },
                            {
                                key: "provider",
                                get: function() {
                                    return this.providers[this.currentChainId];
                                },
                            },
                        ]),
                        t
                    );
                })(F.a),
                V = t(13),
                H = t(23),
                G = t(61);

            function K(e) {
                return e.hasOwnProperty("result") ? e.result : e;
            }
            var Q = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t() {
                        var e;
                        return (
                            Object(R.a)(this, t),
                            ((e = n.call(this)).name = e.constructor.name),
                            (e.message = "No BSC provider was found on window.BinanceChain."),
                            e
                        );
                    }
                    return t;
                })(Object(M.a)(Error)),
                X = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t() {
                        var e;
                        return (
                            Object(R.a)(this, t),
                            ((e = n.call(this)).name = e.constructor.name),
                            (e.message = "The user rejected the request."),
                            e
                        );
                    }
                    return t;
                })(Object(M.a)(Error)),
                J = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t(e) {
                        var r;
                        return (
                            Object(R.a)(this, t),
                            ((r = n.call(this, e)).handleNetworkChanged =
                                r.handleNetworkChanged.bind(Object(H.a)(r))),
                            (r.handleChainChanged = r.handleChainChanged.bind(
                                Object(H.a)(r)
                            )),
                            (r.handleAccountsChanged = r.handleAccountsChanged.bind(
                                Object(H.a)(r)
                            )),
                            (r.handleClose = r.handleClose.bind(Object(H.a)(r))),
                            r
                        );
                    }
                    return (
                        Object(S.a)(t, [{
                                key: "handleChainChanged",
                                value: function(e) {
                                    this.emitUpdate({
                                        chainId: e,
                                        provider: window.BinanceChain,
                                    });
                                },
                            },
                            {
                                key: "handleAccountsChanged",
                                value: function(e) {
                                    0 === e.length ?
                                        this.emitDeactivate() :
                                        this.emitUpdate({
                                            account: e[0],
                                        });
                                },
                            },
                            {
                                key: "handleClose",
                                value: function() {
                                    this.emitDeactivate();
                                },
                            },
                            {
                                key: "handleNetworkChanged",
                                value: function(e) {
                                    this.emitUpdate({
                                        chainId: e,
                                        provider: window.BinanceChain,
                                    });
                                },
                            },
                            {
                                key: "activate",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            var n;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (window.BinanceChain) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                throw new Q();
                                                            case 2:
                                                                return (
                                                                    window.BinanceChain.on &&
                                                                    (window.BinanceChain.on(
                                                                            "chainChanged",
                                                                            this.handleChainChanged
                                                                        ),
                                                                        window.BinanceChain.on(
                                                                            "accountsChanged",
                                                                            this.handleAccountsChanged
                                                                        ),
                                                                        window.BinanceChain.on(
                                                                            "close",
                                                                            this.handleClose
                                                                        ),
                                                                        window.BinanceChain.on(
                                                                            "networkChanged",
                                                                            this.handleNetworkChanged
                                                                        )),
                                                                    window.BinanceChain.isMetaMask &&
                                                                    (window.BinanceChain.autoRefreshOnNetworkChange = !1),
                                                                    (e.prev = 4),
                                                                    (e.next = 7),
                                                                    window.BinanceChain.send(
                                                                        "eth_requestAccounts"
                                                                    ).then(function(e) {
                                                                        return K(e)[0];
                                                                    })
                                                                );
                                                            case 7:
                                                                (n = e.sent), (e.next = 15);
                                                                break;
                                                            case 10:
                                                                if (
                                                                    ((e.prev = 10),
                                                                        (e.t0 = e.catch(4)),
                                                                        4001 !== e.t0.code)
                                                                ) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                throw new X();
                                                            case 14:
                                                                Object(G.a)(!1,
                                                                    "eth_requestAccounts was unsuccessful, falling back to enable"
                                                                );
                                                            case 15:
                                                                if (n) {
                                                                    e.next = 19;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.next = 18),
                                                                    window.BinanceChain.enable().then(function(
                                                                        e
                                                                    ) {
                                                                        return e && K(e)[0];
                                                                    })
                                                                );
                                                            case 18:
                                                                n = e.sent;
                                                            case 19:
                                                                return e.abrupt(
                                                                    "return",
                                                                    Object(V.a)({
                                                                            provider: window.BinanceChain,
                                                                        },
                                                                        n ?
                                                                        {
                                                                            account: n,
                                                                        } :
                                                                        {}
                                                                    )
                                                                );
                                                            case 20:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this, [
                                                    [4, 10]
                                                ]
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getProvider",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(function(e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return e.abrupt("return", window.BinanceChain);
                                                        case 1:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getChainId",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            var n;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (window.BinanceChain) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                throw new Q();
                                                            case 2:
                                                                return (
                                                                    (e.prev = 2),
                                                                    (e.next = 5),
                                                                    window.BinanceChain.send("eth_chainId").then(
                                                                        K
                                                                    )
                                                                );
                                                            case 5:
                                                                (n = e.sent), (e.next = 11);
                                                                break;
                                                            case 8:
                                                                (e.prev = 8),
                                                                (e.t0 = e.catch(2)),
                                                                Object(G.a)(!1,
                                                                    "eth_chainId was unsuccessful, falling back to net_version"
                                                                );
                                                            case 11:
                                                                if (n) {
                                                                    e.next = 21;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.prev = 12),
                                                                    (e.next = 15),
                                                                    window.BinanceChain.send("net_version").then(
                                                                        K
                                                                    )
                                                                );
                                                            case 15:
                                                                (n = e.sent), (e.next = 21);
                                                                break;
                                                            case 18:
                                                                (e.prev = 18),
                                                                (e.t1 = e.catch(12)),
                                                                Object(G.a)(!1,
                                                                    "net_version was unsuccessful, falling back to net version v2"
                                                                );
                                                            case 21:
                                                                if (!n)
                                                                    try {
                                                                        n = K(
                                                                            window.BinanceChain.send({
                                                                                method: "net_version",
                                                                            })
                                                                        );
                                                                    } catch (t) {
                                                                        Object(G.a)(!1,
                                                                            "net_version v2 was unsuccessful, falling back to manual matches and static properties"
                                                                        );
                                                                    }
                                                                return (
                                                                    n ||
                                                                    (n = window.BinanceChain.isDapper ?
                                                                        K(
                                                                            window.BinanceChain.cachedResults
                                                                            .net_version
                                                                        ) :
                                                                        window.BinanceChain.chainId ||
                                                                        window.BinanceChain.netVersion ||
                                                                        window.BinanceChain.networkVersion ||
                                                                        window.BinanceChain._chainId),
                                                                    e.abrupt("return", n)
                                                                );
                                                            case 24:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [2, 8],
                                                    [12, 18],
                                                ]
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "getAccount",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            var n;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (window.BinanceChain) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                throw new Q();
                                                            case 2:
                                                                return (
                                                                    (e.prev = 2),
                                                                    (e.next = 5),
                                                                    window.BinanceChain.send("eth_accounts").then(
                                                                        function(e) {
                                                                            return K(e)[0];
                                                                        }
                                                                    )
                                                                );
                                                            case 5:
                                                                (n = e.sent), (e.next = 11);
                                                                break;
                                                            case 8:
                                                                (e.prev = 8),
                                                                (e.t0 = e.catch(2)),
                                                                Object(G.a)(!1,
                                                                    "eth_accounts was unsuccessful, falling back to enable"
                                                                );
                                                            case 11:
                                                                if (n) {
                                                                    e.next = 21;
                                                                    break;
                                                                }
                                                                return (
                                                                    (e.prev = 12),
                                                                    (e.next = 15),
                                                                    window.BinanceChain.enable().then(function(
                                                                        e
                                                                    ) {
                                                                        return K(e)[0];
                                                                    })
                                                                );
                                                            case 15:
                                                                (n = e.sent), (e.next = 21);
                                                                break;
                                                            case 18:
                                                                (e.prev = 18),
                                                                (e.t1 = e.catch(12)),
                                                                Object(G.a)(!1,
                                                                    "enable was unsuccessful, falling back to eth_accounts v2"
                                                                );
                                                            case 21:
                                                                return (
                                                                    n ||
                                                                    (n = K(
                                                                        window.BinanceChain.send({
                                                                            method: "eth_accounts",
                                                                        })
                                                                    )[0]),
                                                                    e.abrupt("return", n)
                                                                );
                                                            case 23:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [2, 8],
                                                    [12, 18],
                                                ]
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "deactivate",
                                value: function() {
                                    window.BinanceChain &&
                                        window.BinanceChain.removeListener &&
                                        (window.BinanceChain.removeListener(
                                                "chainChanged",
                                                this.handleChainChanged
                                            ),
                                            window.BinanceChain.removeListener(
                                                "accountsChanged",
                                                this.handleAccountsChanged
                                            ),
                                            window.BinanceChain.removeListener(
                                                "close",
                                                this.handleClose
                                            ),
                                            window.BinanceChain.removeListener(
                                                "networkChanged",
                                                this.handleNetworkChanged
                                            ));
                                },
                            },
                            {
                                key: "isAuthorized",
                                value: (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (window.BinanceChain) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", !1);
                                                            case 2:
                                                                return (
                                                                    (e.prev = 2),
                                                                    (e.next = 5),
                                                                    window.BinanceChain.send("eth_accounts").then(
                                                                        function(e) {
                                                                            return K(e).length > 0;
                                                                        }
                                                                    )
                                                                );
                                                            case 5:
                                                                return e.abrupt("return", e.sent);
                                                            case 8:
                                                                return (
                                                                    (e.prev = 8),
                                                                    (e.t0 = e.catch(2)),
                                                                    e.abrupt("return", !1)
                                                                );
                                                            case 11:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [2, 8]
                                                ]
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        t
                    );
                })(F.a),
                Z = "https://bsc-dataseed1.defibit.io",
                $ = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: ".",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_GTAG: "GTM-TLF66T4",
                }).REACT_APP_FORTMATIC_KEY,
                ee = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: ".",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_GTAG: "GTM-TLF66T4",
                }).REACT_APP_PORTIS_ID,
                ne = parseInt(null !== "56" ? "56" : "1");
            var te,
                re = new W({
                    urls: Object(w.a)({}, ne, Z),
                });
            var ae,
                ie = new T.a({
                    supportedChainIds: [56, 97],
                }),
                ce = new J({
                    supportedChainIds: [56],
                }),
                oe = new I.a({
                    rpc: {
                        1: Z,
                    },
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 15e3,
                }),
                se =
                (new D({
                        apiKey: null !== $ && void 0 !== $ ? $ : "",
                        chainId: 1,
                    }),
                    new N.a({
                        dAppId: null !== ee && void 0 !== ee ? ee : "",
                        networks: [1],
                    }),
                    new E.a({
                        url: Z,
                        appName: "Uniswap",
                        appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg",
                    }),
                    t(27)),
                ue = "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                le = new B.j(
                    B.a.MAINNET,
                    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
                    18,
                    "DAI",
                    "Dai Stablecoin"
                ),
                de = new B.j(
                    B.a.MAINNET,
                    "0xe9e7cea3dedca5984780bafc599bd69add087d56",
                    18,
                    "BUSD",
                    "Binance USD"
                ),
                be = new B.j(
                    B.a.MAINNET,
                    "0x55d398326f99059ff775485246999027b3197955",
                    18,
                    "USDT",
                    "Tether USD"
                ),
                pe = new B.j(
                    B.a.MAINNET,
                    "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
                    18,
                    "UST",
                    "Wrapped UST Token"
                ),
                fe =
                ((ae = {}),
                    Object(w.a)(ae, B.a.MAINNET, [B.n[B.a.MAINNET]]),
                    Object(w.a)(ae, B.a.BSCTESTNET, [B.n[B.a.BSCTESTNET]]),
                    ae),
                je = Object(V.a)(
                    Object(V.a)({}, fe), {},
                    Object(w.a)({},
                        B.a.MAINNET, [].concat(Object(se.a)(fe[B.a.MAINNET]), [le, de, be, pe])
                    )
                ),
                me = Object(w.a)({}, B.a.MAINNET, {}),
                he = Object(V.a)(
                    Object(V.a)({}, fe), {},
                    Object(w.a)({},
                        B.a.MAINNET, [].concat(Object(se.a)(fe[B.a.MAINNET]), [le, de, be])
                    )
                ),
                ve = Object(V.a)(
                    Object(V.a)({}, fe), {},
                    Object(w.a)({},
                        B.a.MAINNET, [].concat(Object(se.a)(fe[B.a.MAINNET]), [le, de, be])
                    )
                ),
                ye = Object(w.a)({}, B.a.MAINNET, [
                    [
                        new B.j(
                            B.a.MAINNET,
                            "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
                            18,
                            "CAKE",
                            "PancakeSwap Token"
                        ),
                        new B.j(
                            B.a.MAINNET,
                            "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                            18,
                            "WBNB",
                            "Wrapped BNB"
                        ),
                    ],
                    [de, be],
                    [le, be],
                ]),
                Oe = "NETWORK",
                xe = 650,
                ge = 1200,
                Ce = new B.g(B.e.BigInt(1), B.e.BigInt(1e4)),
                we = B.e.BigInt(1e4),
                ke = new B.g(B.e.BigInt(100), we),
                Te = new B.g(B.e.BigInt(300), we),
                Ie = new B.g(B.e.BigInt(500), we),
                Ee = new B.g(B.e.BigInt(1e3), we),
                Ne = new B.g(B.e.BigInt(1500), we),
                Re = B.e.exponentiate(B.e.BigInt(10), B.e.BigInt(16));

            function Se() {
                var e = Object(g.c)(),
                    n = Object(g.c)(Oe);
                return e.active ? e : n;
            }
            var Ae = t(21),
                Ue = Object(Ae.b)("app/updateBlockNumber"),
                Be = Object(Ae.b)("app/toggleWalletModal"),
                Pe = Object(Ae.b)("app/toggleSettingsMenu"),
                _e = Object(Ae.b)("app/addPopup"),
                De = Object(Ae.b)("app/removePopup");

            function Le() {
                var e = Se().chainId;
                return Object(x.d)(function(n) {
                    return n.application.blockNumber[null !== e && void 0 !== e ? e : -1];
                });
            }

            function Me() {
                var e = Object(x.c)();
                return Object(a.useCallback)(
                    function(n) {
                        e(
                            De({
                                key: n,
                            })
                        );
                    }, [e]
                );
            }

            function Fe() {
                var e = Object(u.a)([
                    "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
                    ";\n  justify-items: ",
                    ";\n",
                ]);
                return (
                    (Fe = function() {
                        return e;
                    }),
                    e
                );
            }

            function ze() {
                var e = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]);
                return (
                    (ze = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ye() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n",
                ]);
                return (
                    (Ye = function() {
                        return e;
                    }),
                    e
                );
            }
            var qe = l.default.div(Ye()),
                We = Object(l.default)(qe)(ze()),
                Ve = l.default.div(
                    Fe(),
                    function(e) {
                        var n = e.gap;
                        return (
                            ("sm" === n ? "8px" : "md" === n && "12px") ||
                            ("lg" === n && "24px") ||
                            n
                        );
                    },
                    function(e) {
                        var n = e.justify;
                        return n && n;
                    }
                ),
                He = qe,
                Ge = t(501),
                Ke = t(95),
                Qe = t(68),
                Xe = {
                    pending: Object(Ae.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(Ae.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(Ae.b)("lists/fetchTokenList/rejected"),
                },
                Je = Object(Ae.b)("lists/acceptListUpdate"),
                Ze = Object(Ae.b)("lists/addList"),
                $e = Object(Ae.b)("lists/removeList"),
                en = Object(Ae.b)("lists/selectList"),
                nn = (Object(Ae.b)("lists/rejectVersionUpdate"), t(55)),
                tn = t(43),
                rn = t(502);

            function an() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return (
                    (an = function() {
                        return e;
                    }),
                    e
                );
            }

            function cn() {
                var e = Object(u.a)([
                    "\n  animation: 2s ",
                    " linear infinite;\n  width: 16px;\n  height: 16px;\n",
                ]);
                return (
                    (cn = function() {
                        return e;
                    }),
                    e
                );
            }

            function on() {
                var e = Object(u.a)([
                    "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
                ]);
                return (
                    (on = function() {
                        return e;
                    }),
                    e
                );
            }

            function sn() {
                var e = Object(u.a)([
                    "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                    ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                ]);
                return (
                    (sn = function() {
                        return e;
                    }),
                    e
                );
            }

            function un() {
                var e = Object(u.a)([
                    "\n  text-decoration: none;\n  cursor: pointer;\n  color: ",
                    ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                ]);
                return (
                    (un = function() {
                        return e;
                    }),
                    e
                );
            }

            function ln() {
                var e = Object(u.a)([
                    "\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ",
                    ";\n  color: ",
                    ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ",
                    ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ",
                    ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n",
                ]);
                return (
                    (ln = function() {
                        return e;
                    }),
                    e
                );
            }

            function dn() {
                var e = Object(u.a)(["\n  cursor: pointer;\n"]);
                return (
                    (dn = function() {
                        return e;
                    }),
                    e
                );
            }

            function bn() {
                var e = Object(u.a)([
                    "\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ",
                    ";\n  #FFFFFFwidth: 100%;\n\n  :hover,\n  :focus {\n    background-color: ",
                    ";\n  }\n\n  :active {\n    background-color: ",
                    ";\n  }\n\n  :disabled {\n    background-color: ",
                    ";\n    color: ",
                    ";\n    cursor: auto;\n  }\n",
                ]);
                return (
                    (bn = function() {
                        return e;
                    }),
                    e
                );
            }
            l.default.button.attrs(function(e) {
                var n = e.warning,
                    t = e.theme;
                return {
                    backgroundColor: n ? t.colors.failure : t.colors.primary,
                };
            })(
                bn(),
                function(e) {
                    return e.backgroundColor;
                },
                function(e) {
                    var n = e.backgroundColor;
                    return Object(tn.a)(0.05, n);
                },
                function(e) {
                    var n = e.backgroundColor;
                    return Object(tn.a)(0.1, n);
                },
                function(e) {
                    return e.theme.colors.invertedContrast;
                },
                function(e) {
                    return e.theme.colors.textDisabled;
                }
            );
            var pn = Object(l.default)(Ge.a)(dn()),
                fn = l.default.button(
                    ln(),
                    function(e) {
                        return e.disabled ? "default" : "pointer";
                    },
                    function(e) {
                        var n = e.theme;
                        return e.disabled ? n.colors.textSubtle : n.colors.primary;
                    },
                    function(e) {
                        return e.disabled ? null : "underline";
                    },
                    function(e) {
                        return e.disabled ? null : "underline";
                    }
                ),
                jn = Object(l.default)(v.b)(un(), function(e) {
                    return e.theme.colors.primary;
                }),
                mn = l.default.a(sn(), function(e) {
                    return e.theme.colors.primary;
                });

            function hn(e) {
                var n = e.target,
                    t = void 0 === n ? "_blank" : n,
                    i = e.href,
                    c = e.rel,
                    o = void 0 === c ? "noopener noreferrer" : c,
                    s = Object(nn.a)(e, ["target", "href", "rel"]),
                    u = Object(a.useCallback)(
                        function(e) {
                            "_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault();
                        }, [t]
                    );
                return Object(r.jsx)(
                    mn,
                    Object(V.a)({
                            target: t,
                            rel: o,
                            href: i,
                            onClick: u,
                        },
                        s
                    )
                );
            }
            var vn = Object(l.keyframes)(on()),
                yn = l.default.img(cn(), vn);
            Object(l.default)(jn)(an(), function(e) {
                return e.theme.colors.text;
            });
            var On = {
                main: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                link: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                black: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                body: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                largeHeader: function(e) {
                    return Object(r.jsx)(
                        s.v,
                        Object(V.a)({
                                bold: !0,
                                fontSize: "24px",
                            },
                            e
                        )
                    );
                },
                mediumHeader: function(e) {
                    return Object(r.jsx)(
                        s.v,
                        Object(V.a)({
                                bold: !0,
                                fontSize: "20px",
                            },
                            e
                        )
                    );
                },
                subHeader: function(e) {
                    return Object(r.jsx)(
                        s.v,
                        Object(V.a)({
                                fontSize: "14px",
                            },
                            e
                        )
                    );
                },
                blue: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                darkGray: function(e) {
                    return Object(r.jsx)(s.v, Object(V.a)({}, e));
                },
                italic: function(e) {
                    return Object(r.jsx)(
                        s.v,
                        Object(V.a)({
                                fontSize: "12px",
                                style: {
                                    fontStyle: "italic",
                                },
                            },
                            e
                        )
                    );
                },
                error: function(e) {
                    return Object(r.jsx)(
                        s.v,
                        Object(V.a)({
                                color: "failure",
                            },
                            e
                        )
                    );
                },
            };

            function xn(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch);
            }
            var gn = t(260);

            function Cn() {
                var e = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
                return (
                    (Cn = function() {
                        return e;
                    }),
                    e
                );
            }

            function wn() {
                var e = Object(u.a)([
                    "\n  flex-wrap: wrap;\n  margin: ",
                    ";\n  justify-content: ",
                    ";\n\n  & > * {\n    margin: ",
                    " !important;\n  }\n",
                ]);
                return (
                    (wn = function() {
                        return e;
                    }),
                    e
                );
            }

            function kn() {
                var e = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
                return (
                    (kn = function() {
                        return e;
                    }),
                    e
                );
            }

            function Tn() {
                var e = Object(u.a)(["\n  justify-content: space-between;\n"]);
                return (
                    (Tn = function() {
                        return e;
                    }),
                    e
                );
            }

            function In() {
                var e = Object(u.a)([
                    "\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ",
                    ";\n  padding: ",
                    ";\n  border: ",
                    ";\n  border-radius: ",
                    ";\n",
                ]);
                return (
                    (In = function() {
                        return e;
                    }),
                    e
                );
            }
            var En = Object(l.default)(gn.Box)(
                    In(),
                    function(e) {
                        return e.align || "center";
                    },
                    function(e) {
                        return e.padding;
                    },
                    function(e) {
                        return e.border;
                    },
                    function(e) {
                        return e.borderRadius;
                    }
                ),
                Nn = Object(l.default)(En)(Tn()),
                Rn = l.default.div(kn()),
                Sn = Object(l.default)(En)(
                    wn(),
                    function(e) {
                        var n = e.gap;
                        return n && "-".concat(n);
                    },
                    function(e) {
                        var n = e.justify;
                        return n && n;
                    },
                    function(e) {
                        return e.gap;
                    }
                ),
                An = Object(l.default)(En)(Cn(), function(e) {
                    var n = e.gap;
                    return n && "-".concat(n);
                }),
                Un = En,
                Bn = On.body;

            function Pn(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    c = e.oldList,
                    o = e.newList,
                    u = e.auto,
                    l = Me(),
                    d = Object(a.useCallback)(
                        function() {
                            return l(n);
                        }, [n, l]
                    ),
                    b = Object(x.c)(),
                    p = Object(a.useCallback)(
                        function() {
                            u || (b(Je(t)), d());
                        }, [u, b, t, d]
                    ),
                    f = Object(a.useMemo)(
                        function() {
                            return Object(Qe.b)(c.tokens, o.tokens);
                        }, [o.tokens, c.tokens]
                    ),
                    j = f.added,
                    m = f.changed,
                    h = f.removed,
                    v = Object(a.useMemo)(
                        function() {
                            return Object.keys(m).reduce(function(e, n) {
                                return e + Object.keys(m[n]).length;
                            }, 0);
                        }, [m]
                    );
                return Object(r.jsx)(Sn, {
                    children: Object(r.jsx)(Ve, {
                        style: {
                            flex: "1",
                        },
                        gap: "8px",
                        children: u ?
                            Object(r.jsxs)(Bn, {
                                fontWeight: 500,
                                children: [
                                    'The token list "',
                                    c.name,
                                    '" has been updated to',
                                    " ",
                                    Object(r.jsx)("strong", {
                                        children: xn(o.version),
                                    }),
                                    ".",
                                ],
                            }) :
                            Object(r.jsxs)(r.Fragment, {
                                children: [
                                    Object(r.jsxs)("div", {
                                        children: [
                                            Object(r.jsxs)(s.v, {
                                                fontSize: "14px",
                                                children: [
                                                    'An update is available for the token list "',
                                                    c.name,
                                                    '" (',
                                                    xn(c.version),
                                                    " to ",
                                                    xn(o.version),
                                                    ").",
                                                ],
                                            }),
                                            Object(r.jsxs)("ul", {
                                                children: [
                                                    j.length > 0 ?
                                                    Object(r.jsxs)("li", {
                                                        children: [
                                                            j.map(function(e, n) {
                                                                return Object(r.jsxs)(
                                                                    i.a.Fragment, {
                                                                        children: [
                                                                            Object(r.jsx)("strong", {
                                                                                title: e.address,
                                                                                children: e.symbol,
                                                                            }),
                                                                            n === j.length - 1 ? null : ", ",
                                                                        ],
                                                                    },
                                                                    ""
                                                                    .concat(e.chainId, "-")
                                                                    .concat(e.address)
                                                                );
                                                            }),
                                                            " ",
                                                            "added",
                                                        ],
                                                    }) :
                                                    null,
                                                    h.length > 0 ?
                                                    Object(r.jsxs)("li", {
                                                        children: [
                                                            h.map(function(e, n) {
                                                                return Object(r.jsxs)(
                                                                    i.a.Fragment, {
                                                                        children: [
                                                                            Object(r.jsx)("strong", {
                                                                                title: e.address,
                                                                                children: e.symbol,
                                                                            }),
                                                                            n === h.length - 1 ? null : ", ",
                                                                        ],
                                                                    },
                                                                    ""
                                                                    .concat(e.chainId, "-")
                                                                    .concat(e.address)
                                                                );
                                                            }),
                                                            " ",
                                                            "removed",
                                                        ],
                                                    }) :
                                                    null,
                                                    v > 0 ?
                                                    Object(r.jsxs)("li", {
                                                        children: [v, " tokens updated"],
                                                    }) :
                                                    null,
                                                ],
                                            }),
                                        ],
                                    }),
                                    Object(r.jsxs)(Sn, {
                                        children: [
                                            Object(r.jsx)("div", {
                                                style: {
                                                    flexGrow: 1,
                                                    marginRight: 12,
                                                },
                                                children: Object(r.jsx)(s.c, {
                                                    onClick: p,
                                                    children: "Accept update",
                                                }),
                                            }),
                                            Object(r.jsx)("div", {
                                                style: {
                                                    flexGrow: 1,
                                                },
                                                children: Object(r.jsx)(s.c, {
                                                    onClick: d,
                                                    children: "Dismiss",
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                    }),
                });
            }
            var _n = t(503),
                Dn = t(504),
                Ln = t(97),
                Mn = t(30),
                Fn = t(488),
                zn = t(24),
                Yn = t(261);

            function qn(e) {
                try {
                    return Object(Mn.getAddress)(e);
                } catch (n) {
                    return !1;
                }
            }
            var Wn = {
                56: "",
                97: "testnet.",
            };

            function Vn(e, n, t) {
                var r = "https://".concat(Wn[e] || Wn[B.a.MAINNET], "bscscan.com");
                switch (t) {
                    case "transaction":
                        return "".concat(r, "/tx/").concat(n);
                    case "token":
                        return "".concat(r, "/token/").concat(n);
                    case "address":
                    default:
                        return "".concat(r, "/address/").concat(n);
                }
            }

            function Hn(e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = qn(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return ""
                    .concat(t.substring(0, n + 2), "...")
                    .concat(t.substring(42 - n));
            }

            function Gn(e) {
                return e.mul(zn.a.from(1e4).add(zn.a.from(1e3))).div(zn.a.from(1e4));
            }

            function Kn(e, n) {
                if (n < 0 || n > 1e4)
                    throw Error("Unexpected slippage value: ".concat(n));
                return [
                    B.e.divide(B.e.multiply(e.raw, B.e.BigInt(1e4 - n)), B.e.BigInt(1e4)),
                    B.e.divide(B.e.multiply(e.raw, B.e.BigInt(1e4 + n)), B.e.BigInt(1e4)),
                ];
            }

            function Qn(e, n, t, r) {
                if (!qn(e) || e === Fn.a)
                    throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new Ln.a(
                    e,
                    n,
                    (function(e, n) {
                        return n ?
                            (function(e, n) {
                                return e.getSigner(n).connectUnchecked();
                            })(e, n) :
                            e;
                    })(t, r)
                );
            }

            function Xn(e, n, t) {
                return Qn(ue, Yn.a, n, t);
            }

            function Jn() {
                var e = Object(u.a)(["\n  flex-wrap: nowrap;\n"]);
                return (
                    (Jn = function() {
                        return e;
                    }),
                    e
                );
            }
            var Zn = On.body,
                $n = Object(l.default)(Sn)(Jn());

            function et(e) {
                var n = e.hash,
                    t = e.success,
                    i = e.summary,
                    c = Se().chainId,
                    o = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)($n, {
                    children: [
                        Object(r.jsx)("div", {
                            style: {
                                paddingRight: 16,
                            },
                            children: t ?
                                Object(r.jsx)(_n.a, {
                                    color: o.colors.success,
                                    size: 24,
                                }) :
                                Object(r.jsx)(Dn.a, {
                                    color: o.colors.failure,
                                    size: 24,
                                }),
                        }),
                        Object(r.jsxs)(Ve, {
                            gap: "8px",
                            children: [
                                Object(r.jsx)(Zn, {
                                    fontWeight: 500,
                                    children: null !== i && void 0 !== i ?
                                        i :
                                        "Hash: "
                                        .concat(n.slice(0, 8), "...")
                                        .concat(n.slice(58, 65)),
                                }),
                                c &&
                                Object(r.jsx)(hn, {
                                    href: Vn(c, n, "transaction"),
                                    children: "View on BscScan",
                                }),
                            ],
                        }),
                    ],
                });
            }

            function nt() {
                var e = Object(u.a)([
                    "\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (nt = function() {
                        return e;
                    }),
                    e
                );
            }

            function tt() {
                var e = Object(u.a)([
                    "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
                    ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ",
                    " {\n    min-width: 290px;\n  }\n",
                ]);
                return (
                    (tt = function() {
                        return e;
                    }),
                    e
                );
            }

            function rt() {
                var e = Object(u.a)([
                    "\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n",
                ]);
                return (
                    (rt = function() {
                        return e;
                    }),
                    e
                );
            }
            var at = Object(l.default)(Ge.a)(rt()),
                it = l.default.div(
                    tt(),
                    function(e) {
                        return e.theme.colors.card;
                    },
                    function(e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                ct = l.default.div(nt(), function(e) {
                    return e.theme.colors.tertiary;
                }),
                ot = Object(Ke.a)(ct);

            function st(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    i = e.popKey,
                    c = Me(),
                    o = Object(a.useCallback)(
                        function() {
                            return c(i);
                        }, [i, c]
                    );
                Object(a.useEffect)(
                    function() {
                        if (null !== n) {
                            var e = setTimeout(function() {
                                o();
                            }, n);
                            return function() {
                                clearTimeout(e);
                            };
                        }
                    }, [n, o]
                );
                var s,
                    u = Object(a.useContext)(l.ThemeContext);
                if ("txn" in t) {
                    var d = t.txn,
                        b = d.hash,
                        p = d.success,
                        f = d.summary;
                    s = Object(r.jsx)(et, {
                        hash: b,
                        success: p,
                        summary: f,
                    });
                } else if ("listUpdate" in t) {
                    var j = t.listUpdate,
                        m = j.listUrl,
                        h = j.oldList,
                        v = j.newList,
                        y = j.auto;
                    s = Object(r.jsx)(Pn, {
                        popKey: i,
                        listUrl: m,
                        oldList: h,
                        newList: v,
                        auto: y,
                    });
                }
                var O = Object(Ke.b)({
                    from: {
                        width: "100%",
                    },
                    to: {
                        width: "0%",
                    },
                    config: {
                        duration: null !== n && void 0 !== n ? n : void 0,
                    },
                });
                return Object(r.jsxs)(it, {
                    children: [
                        Object(r.jsx)(at, {
                            color: u.colors.textSubtle,
                            onClick: o,
                        }),
                        s,
                        null !== n ?
                        Object(r.jsx)(ot, {
                            style: O,
                        }) :
                        null,
                    ],
                });
            }

            function ut() {
                var e = Object(u.a)([
                    "\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ",
                    " {\n    display: none;\n  }\n",
                ]);
                return (
                    (ut = function() {
                        return e;
                    }),
                    e
                );
            }

            function lt() {
                var e = Object(u.a)([
                    "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
                ]);
                return (
                    (lt = function() {
                        return e;
                    }),
                    e
                );
            }

            function dt() {
                var e = Object(u.a)([
                    "\n  position: relative;\n  max-width: 100%;\n  height: ",
                    ";\n  margin: ",
                    ";\n  margin-bottom: ",
                    "};\n  display: none;\n\n  ",
                    " {\n    display: block;\n  }\n",
                ]);
                return (
                    (dt = function() {
                        return e;
                    }),
                    e
                );
            }
            var bt = l.default.div(
                    dt(),
                    function(e) {
                        return e.height;
                    },
                    function(e) {
                        return e.height ? "0 auto;" : 0;
                    },
                    function(e) {
                        return e.height ? "20px" : 0;
                    },
                    function(e) {
                        return e.theme.mediaQueries.sm;
                    }
                ),
                pt = l.default.div(lt()),
                ft = Object(l.default)(Ve)(ut(), function(e) {
                    return e.theme.mediaQueries.sm;
                });

            function jt() {
                var e = (function() {
                    var e = Object(x.d)(function(e) {
                        return e.application.popupList;
                    });
                    return Object(a.useMemo)(
                        function() {
                            return e.filter(function(e) {
                                return e.show;
                            });
                        }, [e]
                    );
                })();
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsx)(ft, {
                            gap: "20px",
                            children: e.map(function(e) {
                                return Object(r.jsx)(
                                    st, {
                                        content: e.content,
                                        popKey: e.key,
                                        removeAfterMs: e.removeAfterMs,
                                    },
                                    e.key
                                );
                            }),
                        }),
                        Object(r.jsx)(bt, {
                            height:
                                (null === e || void 0 === e ? void 0 : e.length) > 0 ?
                                "fit-content" :
                                0,
                            children: Object(r.jsx)(pt, {
                                children: e
                                    .slice(0)
                                    .reverse()
                                    .map(function(e) {
                                        return Object(r.jsx)(
                                            st, {
                                                content: e.content,
                                                popKey: e.key,
                                                removeAfterMs: e.removeAfterMs,
                                            },
                                            e.key
                                        );
                                    }),
                            }),
                        }),
                    ],
                });
            }
            var mt = t(112);

            function ht() {
                var e = Object(u.a)([
                    "\n  animation: 2s ",
                    " linear infinite;\n  height: ",
                    ";\n  width: ",
                    ";\n  path {\n    stroke: ",
                    ";\n  }\n",
                ]);
                return (
                    (ht = function() {
                        return e;
                    }),
                    e
                );
            }

            function vt() {
                var e = Object(u.a)([
                    "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
                ]);
                return (
                    (vt = function() {
                        return e;
                    }),
                    e
                );
            }
            var yt = Object(l.keyframes)(vt()),
                Ot = l.default.svg(
                    ht(),
                    yt,
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        var n = e.stroke,
                            t = e.theme;
                        return null !== n && void 0 !== n ? n : t.colors.primary;
                    }
                );

            function xt(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    i = Object(nn.a)(e, ["size", "stroke"]);
                return Object(r.jsx)(
                    Ot,
                    Object(V.a)(
                        Object(V.a)({
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                size: t,
                                stroke: a,
                            },
                            i
                        ), {}, {
                            children: Object(r.jsx)("path", {
                                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                                strokeWidth: "2.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                            }),
                        }
                    )
                );
            }

            function gt() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return (
                    (gt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ct() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n",
                ]);
                return (
                    (Ct = function() {
                        return e;
                    }),
                    e
                );
            }
            var wt = l.default.div(Ct()),
                kt = l.default.h2(gt(), function(e) {
                    return e.theme.colors.primaryDark;
                });

            function Tt(e) {
                var n = e.children,
                    t = Object(mt.b)().t,
                    i = Object(g.c)().active,
                    c = Object(g.c)(Oe),
                    o = c.active,
                    s = c.error,
                    u = c.activate,
                    l = (function() {
                        var e = Object(g.c)(),
                            n = e.activate,
                            t = e.active,
                            r = Object(a.useState)(!1),
                            i = Object(h.a)(r, 2),
                            c = i[0],
                            o = i[1];
                        return (
                            Object(a.useEffect)(
                                function() {
                                    ie.isAuthorized().then(function(e) {
                                        var t = window.localStorage.getItem("accountStatus");
                                        (e && t) || (C.isMobile && window.ethereum && t) ?
                                        n(ie, void 0, !0).catch(function() {
                                            o(!0);
                                        }): o(!0);
                                    });
                                }, [n]
                            ),
                            Object(a.useEffect)(
                                function() {
                                    t && o(!0);
                                }, [t]
                            ),
                            c
                        );
                    })();
                Object(a.useEffect)(
                        function() {
                            !l || o || s || i || u(re);
                        }, [l, o, s, u, i]
                    ),
                    (function() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(g.c)(),
                            t = n.active,
                            r = n.error,
                            i = n.activate;
                        Object(a.useEffect)(
                            function() {
                                var n = window.ethereum;
                                if (n && n.on && !t && !r && !e) {
                                    var a = function() {
                                            i(ie, void 0, !0).catch(function(e) {
                                                console.error(
                                                    "Failed to activate after chain changed",
                                                    e
                                                );
                                            });
                                        },
                                        c = function(e) {
                                            e.length > 0 &&
                                                i(ie, void 0, !0).catch(function(e) {
                                                    console.error(
                                                        "Failed to activate after accounts changed",
                                                        e
                                                    );
                                                });
                                        };
                                    return (
                                        n.on("chainChanged", a),
                                        n.on("accountsChanged", c),
                                        function() {
                                            n.removeListener &&
                                                (n.removeListener("chainChanged", a),
                                                    n.removeListener("accountsChanged", c));
                                        }
                                    );
                                }
                            }, [t, r, e, i]
                        );
                    })(!l);
                var d = Object(a.useState)(!1),
                    b = Object(h.a)(d, 2),
                    p = b[0],
                    f = b[1];
                return (
                    Object(a.useEffect)(function() {
                        var e = setTimeout(function() {
                            f(!0);
                        }, 600);
                        return function() {
                            clearTimeout(e);
                        };
                    }, []),
                    l ?
                    !i && s ?
                    Object(r.jsx)(wt, {
                        children: Object(r.jsx)(kt, {
                            children: t("unknownError"),
                        }),
                    }) :
                    i || o ?
                    n :
                    p ?
                    Object(r.jsx)(wt, {
                        children: Object(r.jsx)(xt, {}),
                    }) :
                    null :
                    null
                );
            }

            function It() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  color: ",
                    ";\n  border-radius: 12px;\n  width: fit-content;\n",
                ]);
                return (
                    (It = function() {
                        return e;
                    }),
                    e
                );
            }

            function Et() {
                var e = Object(u.a)([
                    "\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ",
                    ";\n  font-weight: 500;\n",
                ]);
                return (
                    (Et = function() {
                        return e;
                    }),
                    e
                );
            }

            function Nt() {
                var e = Object(u.a)([
                    "\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ",
                    ";\n  font-weight: 500;\n",
                ]);
                return (
                    (Nt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Rt() {
                var e = Object(u.a)(["\n  border: 1px solid ", ";\n"]);
                return (
                    (Rt = function() {
                        return e;
                    }),
                    e
                );
            }

            function St() {
                var e = Object(u.a)(["\n  background-color: ", ";\n"]);
                return (
                    (St = function() {
                        return e;
                    }),
                    e
                );
            }

            function At() {
                var e = Object(u.a)([
                    "\n  border: 1px solid ",
                    ";\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (At = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ut() {
                var e = Object(u.a)([
                    "\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ",
                    ";\n  border: ",
                    ";\n  border-radius: ",
                    ";\n",
                ]);
                return (
                    (Ut = function() {
                        return e;
                    }),
                    e
                );
            }
            var Bt = l.default.div(
                    Ut(),
                    function(e) {
                        return e.padding;
                    },
                    function(e) {
                        return e.border;
                    },
                    function(e) {
                        return e.borderRadius;
                    }
                ),
                Pt = Bt,
                _t = Object(l.default)(Bt)(
                    At(),
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                Dt = Object(l.default)(Bt)(St(), function(e) {
                    return e.theme.colors.tertiary;
                }),
                Lt =
                (Object(l.default)(Bt)(Rt(), function(e) {
                        return e.theme.colors.tertiary;
                    }),
                    Object(l.default)(Bt)(Nt(), function(e) {
                        return e.theme.colors.binance;
                    }),
                    Object(l.default)(Bt)(Et(), function(e) {
                        return e.theme.colors.primary;
                    }),
                    Object(l.default)(Bt)(
                        It(),
                        function(e) {
                            return e.theme.colors.primaryDark;
                        },
                        function(e) {
                            return e.theme.colors.primary;
                        }
                    ),
                    t(177));
            t(399);

            function Mt() {
                var e = Object(u.a)([
                    "\n        min-height: calc(",
                    "vh - 64px);\n      ",
                ]);
                return (
                    (Mt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ft() {
                var e = Object(u.a)(["\n        max-height: ", "vh;\n      "]);
                return (
                    (Ft = function() {
                        return e;
                    }),
                    e
                );
            }

            function zt() {
                var e = Object(u.a)([
                    "\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    // border: 1px solid ",
                    ";\n    // background-color: ",
                    ";\n    // box-shadow: 0 4px 8px 0 ",
                    ";\n    background: ",
                    ";\n    box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n    border: 1px solid ",
                    ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ",
                    ";\n\n    max-width: 420px;\n    ",
                    "\n    ",
                    "\n    display: flex;\n    border-radius: 20px;\n\n    ",
                    " {\n      width: 65vw;\n    }\n    ",
                    " {\n      width: 85vw;\n    }\n  }\n",
                ]);
                return (
                    (zt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Yt() {
                var e = Object(u.a)([
                    "\n  &[data-reach-dialog-overlay] {\n    z-index: 999;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(255, 114, 13, 0.2);\n  }\n",
                ]);
                return (
                    (Yt = function() {
                        return e;
                    }),
                    e
                );
            }
            var qt = Object(Ke.a)(Lt.b),
                Wt = Object(l.default)(qt)(Yt()),
                Vt = Object(Ke.a)(Lt.a),
                Ht = Object(l.default)(function(e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var n = Object(nn.a)(e, [
                        "minHeight",
                        "maxHeight",
                        "mobile",
                        "isOpen",
                    ]);
                    return Object(r.jsx)(Vt, Object(V.a)({}, n));
                }).attrs({
                    "aria-label": "dialog",
                })(
                    zt(),
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    Object(tn.b)(0.95, "#191326"),
                    function(e) {
                        return e.theme.modal.background;
                    },
                    function(e) {
                        return e.theme.colors.borderColor;
                    },
                    function(e) {
                        return e.mobile ? "flex-end" : "center";
                    },
                    function(e) {
                        var n = e.maxHeight;
                        return n && Object(l.css)(Ft(), n);
                    },
                    function(e) {
                        var n = e.minHeight;
                        return n && Object(l.css)(Mt(), n);
                    },
                    function(e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function(e) {
                        return e.theme.mediaQueries.sm;
                    }
                );

            function Gt(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.minHeight,
                    i = void 0 !== a && a,
                    c = e.maxHeight,
                    o = void 0 === c ? 50 : c,
                    s = e.initialFocusRef,
                    u = e.children,
                    l = Object(Ke.c)(n, null, {
                        config: {
                            duration: 200,
                        },
                        from: {
                            opacity: 0,
                        },
                        enter: {
                            opacity: 1,
                        },
                        leave: {
                            opacity: 0,
                        },
                    });
                return Object(r.jsx)(r.Fragment, {
                    children: l.map(function(e) {
                        var n = e.item,
                            a = e.key,
                            c = e.props;
                        return (
                            n &&
                            Object(r.jsx)(
                                Wt, {
                                    style: c,
                                    onDismiss: t,
                                    initialFocusRef: s,
                                    children: Object(r.jsxs)(Ht, {
                                        "aria-label": "dialog content",
                                        minHeight: i,
                                        maxHeight: o,
                                        mobile: C.isMobile,
                                        children: [!s && C.isMobile ?
                                            Object(r.jsx)("div", {
                                                tabIndex: 1,
                                            }) :
                                            null,
                                            u,
                                        ],
                                    }),
                                },
                                a
                            )
                        );
                    }),
                });
            }

            function Kt() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  display: flex;\n\n  & > ",
                    " {\n    flex: 1;\n  }\n",
                ]);
                return (
                    (Kt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Qt() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n",
                ]);
                return (
                    (Qt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Xt() {
                var e = Object(u.a)(["\n  padding: 40px 0;\n"]);
                return (
                    (Xt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Jt() {
                var e = Object(u.a)(["\n  padding: 24px;\n"]);
                return (
                    (Jt = function() {
                        return e;
                    }),
                    e
                );
            }

            function Zt() {
                var e = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
                return (
                    (Zt = function() {
                        return e;
                    }),
                    e
                );
            }
            var $t = l.default.div(Zt()),
                er = Object(l.default)(Ve)(Jt()),
                nr = Object(l.default)(We)(Xt()),
                tr = Object(l.default)(er)(Qt(), function(e) {
                    return e.theme.colors.card;
                }),
                rr = l.default.div(Kt(), s.m),
                ar = function(e) {
                    var n = e.children,
                        t = e.onDismiss;
                    return Object(r.jsxs)(rr, {
                        children: [
                            Object(r.jsx)(s.m, {
                                children: n,
                            }),
                            Object(r.jsx)(s.n, {
                                onClick: t,
                                variant: "text",
                                children: Object(r.jsx)(s.j, {
                                    color: "primary",
                                }),
                            }),
                        ],
                    });
                };

            function ir() {
                var e = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"]);
                return (
                    (ir = function() {
                        return e;
                    }),
                    e
                );
            }
            var cr = Object(l.default)(yn)(
                    ir(),
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    }
                ),
                or = function(e) {
                    var n = e.onDismiss,
                        t = e.pendingText;
                    return Object(r.jsx)($t, {
                        children: Object(r.jsxs)(er, {
                            children: [
                                Object(r.jsx)(ar, {
                                    onDismiss: n,
                                    children: "Waiting for confirmation",
                                }),
                                Object(r.jsx)(nr, {
                                    children: Object(r.jsx)(cr, {
                                        src: "images/logo-footer.png",
                                        alt: "loader",
                                        size: "90px",
                                    }),
                                }),
                                Object(r.jsxs)(Ve, {
                                    gap: "12px",
                                    justify: "center",
                                    children: [
                                        Object(r.jsx)(Ve, {
                                            gap: "12px",
                                            justify: "center",
                                            children: Object(r.jsx)(s.v, {
                                                fontSize: "14px",
                                                children: Object(r.jsx)("strong", {
                                                    children: t,
                                                }),
                                            }),
                                        }),
                                        Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: "Confirm this transaction in your wallet",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                sr = t(505),
                ur = function(e) {
                    var n = e.onDismiss,
                        t = e.chainId,
                        i = e.hash,
                        c = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)($t, {
                        children: Object(r.jsxs)(er, {
                            children: [
                                Object(r.jsx)(ar, {
                                    onDismiss: n,
                                    children: "Transaction submitted",
                                }),
                                Object(r.jsx)(nr, {
                                    children: Object(r.jsx)(sr.a, {
                                        strokeWidth: 0.5,
                                        size: 97,
                                        color: c.colors.primary,
                                    }),
                                }),
                                Object(r.jsxs)(Ve, {
                                    gap: "8px",
                                    justify: "center",
                                    children: [
                                        t &&
                                        i &&
                                        Object(r.jsx)(s.p, {
                                            href: Vn(t, i, "transaction"),
                                            children: "View on BscScan",
                                        }),
                                        Object(r.jsx)(s.c, {
                                            onClick: n,
                                            mt: "20px",
                                            children: "Close",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                lr = function(e) {
                    var n = e.isOpen,
                        t = e.onDismiss,
                        a = e.attemptingTxn,
                        i = e.hash,
                        c = e.pendingText,
                        o = e.content,
                        s = Se().chainId;
                    return s ?
                        Object(r.jsx)(Gt, {
                            isOpen: n,
                            onDismiss: t,
                            maxHeight: 90,
                            children: a ?
                                Object(r.jsx)(or, {
                                    onDismiss: t,
                                    pendingText: c,
                                }) :
                                i ?
                                Object(r.jsx)(ur, {
                                    chainId: s,
                                    hash: i,
                                    onDismiss: t,
                                }) :
                                o(),
                        }) :
                        null;
                },
                dr = function(e) {
                    var n = e.title,
                        t = e.bottomContent,
                        a = e.onDismiss,
                        i = e.topContent;
                    return Object(r.jsxs)($t, {
                        children: [
                            Object(r.jsxs)(er, {
                                children: [
                                    Object(r.jsx)(ar, {
                                        onDismiss: a,
                                        children: n,
                                    }),
                                    i(),
                                ],
                            }),
                            Object(r.jsx)(tr, {
                                gap: "12px",
                                children: t(),
                            }),
                        ],
                    });
                },
                br = t(506),
                pr = function(e) {
                    var n = e.message,
                        t = e.onDismiss,
                        i = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsxs)($t, {
                        children: [
                            Object(r.jsxs)(er, {
                                children: [
                                    Object(r.jsx)(ar, {
                                        onDismiss: t,
                                        children: "Error",
                                    }),
                                    Object(r.jsxs)(Ve, {
                                        style: {
                                            marginTop: 20,
                                            padding: "2rem 0",
                                        },
                                        gap: "24px",
                                        justify: "center",
                                        children: [
                                            Object(r.jsx)(br.a, {
                                                color: i.colors.failure,
                                                style: {
                                                    strokeWidth: 1.5,
                                                },
                                                size: 64,
                                            }),
                                            Object(r.jsx)(s.v, {
                                                fontSize: "16px",
                                                color: "failure",
                                                style: {
                                                    textAlign: "center",
                                                    width: "85%",
                                                },
                                                children: n,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsx)(tr, {
                                gap: "12px",
                                children: Object(r.jsx)(s.c, {
                                    fullWidth: !0,
                                    onClick: t,
                                    children: "Dismiss",
                                }),
                            }),
                        ],
                    });
                },
                fr = lr,
                jr = {
                    translations: [],
                    setTranslations: function() {},
                },
                mr = Object(a.createContext)(jr),
                hr = /%(.*?)%/,
                vr = function(e, n, t) {
                    var r = e.find(function(e) {
                        return e.data.stringId === n;
                    });
                    if (r) {
                        var a = r.data.text;
                        return a.includes("%") ?
                            (function(e, n) {
                                var t = hr.exec(e)[0],
                                    r = e.split(" ").indexOf(t),
                                    a = n.split(" ")[r];
                                return e.replace(t, a);
                            })(a, t) :
                            a;
                    }
                    return t;
                },
                yr = function(e, n) {
                    var t = Object(a.useContext)(mr).translations;
                    return "error" === t[0] ? n : t.length > 0 ? vr(t, e, n) : null;
                },
                Or = function() {
                    var e = Object(a.useContext)(mr).translations;
                    return function(n, t) {
                        return "error" === e[0] ? t : e.length > 0 ? vr(e, n, t) : t;
                    };
                },
                xr = function(e) {
                    var n = e.translationId,
                        t = e.children,
                        a = Or();
                    return Object(r.jsx)(r.Fragment, {
                        children: a(n, t),
                    });
                };

            function gr() {
                var e = Object(u.a)(["\n  margin-bottom: 40px;\n"]);
                return (
                    (gr = function() {
                        return e;
                    }),
                    e
                );
            }
            var Cr,
                wr = l.default.div(gr()),
                kr = function(e) {
                    var n = e.activeIndex,
                        t = void 0 === n ? 0 : n;
                    return Object(r.jsx)(wr, {
                        children: Object(r.jsxs)(s.d, {
                            activeIndex: t,
                            size: "sm",
                            variant: "subtle",
                            children: [
                                Object(r.jsx)(s.e, {
                                    id: "swap-nav-link",
                                    to: "/swap",
                                    as: v.b,
                                    children: Object(r.jsx)(xr, {
                                        translationId: 8,
                                        children: "Swap",
                                    }),
                                }),
                                Object(r.jsx)(s.e, {
                                    id: "pool-nav-link",
                                    to: "/pool",
                                    as: v.b,
                                    children: Object(r.jsx)(xr, {
                                        translationId: 74,
                                        children: "Liquidity",
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                Tr = t(119),
                Ir = t(123),
                Er = t(167),
                Nr = new Tr.b(Ir),
                Rr = (new Tr.b(Er), Nr),
                Sr = t(156),
                Ar = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t(e, r) {
                        var a;
                        return (
                            Object(R.a)(this, t),
                            ((a = n.call(
                                this,
                                e.chainId,
                                e.address,
                                e.decimals,
                                e.symbol,
                                e.name
                            )).tokenInfo = void 0),
                            (a.tags = void 0),
                            (a.tokenInfo = e),
                            (a.tags = r),
                            a
                        );
                    }
                    return (
                        Object(S.a)(t, [{
                            key: "logoURI",
                            get: function() {
                                return this.tokenInfo.logoURI;
                            },
                        }, ]),
                        t
                    );
                })(B.j),
                Ur =
                ((Cr = {}),
                    Object(w.a)(Cr, B.a.MAINNET, {}),
                    Object(w.a)(Cr, B.a.BSCTESTNET, {}),
                    Cr),
                Br = "undefined" !== typeof WeakMap ? new WeakMap() : null;

            function Pr(e) {
                var n = Object(x.d)(function(e) {
                    return e.lists.byUrl;
                });
                return Object(a.useMemo)(
                    function() {
                        var t;
                        if (!e) return Ur;
                        var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
                        if (!r) return Ur;
                        try {
                            return (function(e) {
                                var n = null === Br || void 0 === Br ? void 0 : Br.get(e);
                                if (n) return n;
                                var t = e.tokens.reduce(function(n, t) {
                                    var r,
                                        a,
                                        i,
                                        c =
                                        null !==
                                        (r =
                                            null === (a = t.tags) ||
                                            void 0 === a ||
                                            null ===
                                            (i = a.map(function(n) {
                                                var t;
                                                if (
                                                    null === (t = e.tags) || void 0 === t ?
                                                    void 0 :
                                                    t[n]
                                                )
                                                    return Object(V.a)(
                                                        Object(V.a)({}, e.tags[n]), {}, {
                                                            id: n,
                                                        }
                                                    );
                                            })) ||
                                            void 0 === i ?
                                            void 0 :
                                            i.filter(function(e) {
                                                return Boolean(e);
                                            })) && void 0 !== r ?
                                        r :
                                        [],
                                        o = new Ar(t, c);
                                    if (void 0 !== n[o.chainId][o.address])
                                        throw Error("Duplicate tokens.");
                                    return Object(V.a)(
                                        Object(V.a)({}, n), {},
                                        Object(w.a)({},
                                            o.chainId,
                                            Object(V.a)(
                                                Object(V.a)({}, n[o.chainId]), {},
                                                Object(w.a)({}, o.address, o)
                                            )
                                        )
                                    );
                                }, Object(V.a)({}, Ur));
                                return null === Br || void 0 === Br || Br.set(e, t), t;
                            })(r);
                        } catch (a) {
                            return (
                                console.error("Could not show token list due to error", a), Ur
                            );
                        }
                    }, [n, e]
                );
            }

            function _r() {
                return Object(x.d)(function(e) {
                    return e.lists.selectedListUrl;
                });
            }

            function Dr() {
                return Pr(_r());
            }
            var Lr = /^0x[a-fA-F0-9]{40}$/,
                Mr = /^0x[a-f0-9]*$/;

            function Fr(e) {
                if (!Lr.test(e.address))
                    throw new Error("Invalid address: ".concat(e.address));
                if (!Mr.test(e.callData))
                    throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData);
            }

            function zr(e) {
                var n = e.split("-");
                if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
                return {
                    address: n[0],
                    callData: n[1],
                };
            }
            var Yr = Object(Ae.b)("multicall/addMulticallListeners"),
                qr = Object(Ae.b)("multicall/removeMulticallListeners"),
                Wr = Object(Ae.b)("multicall/fetchingMulticallResults"),
                Vr = Object(Ae.b)("multicall/errorFetchingMulticallResults"),
                Hr = Object(Ae.b)("multicall/updateMulticallResults");

            function Gr(e) {
                return -1 !== ["string", "number"].indexOf(typeof e);
            }

            function Kr(e) {
                return (
                    void 0 === e ||
                    (Array.isArray(e) &&
                        e.every(function(e) {
                            return Gr(e) || (Array.isArray(e) && e.every(Gr));
                        }))
                );
            }
            var Qr = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0,
                },
                Xr = {
                    blocksPerFetch: 1 / 0,
                };

            function Jr(e, n) {
                var t = Se().chainId,
                    r = Object(x.d)(function(e) {
                        return e.multicall.callResults;
                    }),
                    i = Object(x.c)(),
                    c = Object(a.useMemo)(
                        function() {
                            var n, t, r;
                            return JSON.stringify(
                                null !==
                                (n =
                                    null === e ||
                                    void 0 === e ||
                                    null ===
                                    (t = e.filter(function(e) {
                                        return Boolean(e);
                                    })) ||
                                    void 0 === t ||
                                    null === (r = t.map(Fr)) ||
                                    void 0 === r ?
                                    void 0 :
                                    r.sort()) && void 0 !== n ?
                                n :
                                []
                            );
                        }, [e]
                    );
                return (
                    Object(a.useEffect)(
                        function() {
                            var e = JSON.parse(c);
                            if (t && 0 !== e.length) {
                                var r = e.map(function(e) {
                                    return zr(e);
                                });
                                return (
                                    i(
                                        Yr({
                                            chainId: t,
                                            calls: r,
                                            options: n,
                                        })
                                    ),
                                    function() {
                                        i(
                                            qr({
                                                chainId: t,
                                                calls: r,
                                                options: n,
                                            })
                                        );
                                    }
                                );
                            }
                        }, [t, i, n, c]
                    ),
                    Object(a.useMemo)(
                        function() {
                            return e.map(function(e) {
                                var n;
                                if (!t || !e) return Qr;
                                var a = null === (n = r[t]) || void 0 === n ? void 0 : n[Fr(e)];
                                return {
                                    valid: !0,
                                    data:
                                        (null === a || void 0 === a ? void 0 : a.data) &&
                                        "0x" !== (null === a || void 0 === a ? void 0 : a.data) ?
                                        a.data :
                                        null,
                                    blockNumber: null === a || void 0 === a ? void 0 : a.blockNumber,
                                };
                            });
                        }, [r, e, t]
                    )
                );
            }
            var Zr = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1,
                },
                $r = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1,
                };

            function ea(e, n, t, r) {
                if (!e) return Zr;
                var a = e.valid,
                    i = e.data,
                    c = e.blockNumber;
                if (!a) return Zr;
                if (a && !c) return $r;
                if (!n || !t || !r) return $r;
                var o,
                    s = i && i.length > 2,
                    u = (null !== c && void 0 !== c ? c : 0) < r;
                if (s && i)
                    try {
                        o = n.decodeFunctionResult(t, i);
                    } catch (l) {
                        return (
                            console.error("Result data parsing failed", t, i), {
                                valid: !0,
                                loading: !1,
                                error: !0,
                                syncing: u,
                                result: o,
                            }
                        );
                    }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: u,
                    result: o,
                    error: !s,
                };
            }

            function na(e, n, t, r, i) {
                var c = Object(a.useMemo)(
                        function() {
                            return n.getFunction(t);
                        }, [n, t]
                    ),
                    o = Object(a.useMemo)(
                        function() {
                            return c && Kr(r) ? n.encodeFunctionData(c, r) : void 0;
                        }, [r, n, c]
                    ),
                    s = Jr(
                        Object(a.useMemo)(
                            function() {
                                return c && e && e.length > 0 && o ?
                                    e.map(function(e) {
                                        return e && o ?
                                            {
                                                address: e,
                                                callData: o,
                                            } :
                                            void 0;
                                    }) :
                                    [];
                            }, [e, o, c]
                        ),
                        i
                    ),
                    u = Le();
                return Object(a.useMemo)(
                    function() {
                        return s.map(function(e) {
                            return ea(e, n, c, u);
                        });
                    }, [c, s, n, u]
                );
            }

            function ta(e, n, t, r) {
                var i = Object(a.useMemo)(
                        function() {
                            var t;
                            return null === e ||
                                void 0 === e ||
                                null === (t = e.interface) ||
                                void 0 === t ?
                                void 0 :
                                t.getFunction(n);
                        }, [e, n]
                    ),
                    c = Jr(
                        Object(a.useMemo)(
                            function() {
                                return e && i && Kr(t) ?
                                    [{
                                        address: e.address,
                                        callData: e.interface.encodeFunctionData(i, t),
                                    }, ] :
                                    [];
                            }, [e, i, t]
                        ),
                        r
                    )[0],
                    o = Le();
                return Object(a.useMemo)(
                    function() {
                        return ea(
                            c,
                            null === e || void 0 === e ? void 0 : e.interface,
                            i,
                            o
                        );
                    }, [c, e, i, o]
                );
            }
            var ra = t(139),
                aa = t.n(ra),
                ia = Object(Ae.b)("user/updateMatchesDarkMode"),
                ca = Object(Ae.b)("user/updateUserDarkMode"),
                oa = Object(Ae.b)("user/updateUserExpertMode"),
                sa = Object(Ae.b)("user/updateUserSlippageTolerance"),
                ua = Object(Ae.b)("user/updateUserDeadline"),
                la = Object(Ae.b)("user/addSerializedToken"),
                da = Object(Ae.b)("user/removeSerializedToken"),
                ba = Object(Ae.b)("user/addSerializedPair"),
                pa = Object(Ae.b)("user/removeSerializedPair"),
                fa = Object(Ae.b)("user/muteAudio"),
                ja = Object(Ae.b)("user/unmuteAudio"),
                ma = "IS_DARK";

            function ha(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name,
                };
            }

            function va(e) {
                return new B.j(e.chainId, e.address, e.decimals, e.symbol, e.name);
            }

            function ya() {
                return Object(x.d)(function(e) {
                    return e.user.userExpertMode;
                });
            }

            function Oa() {
                var e = Object(x.c)();
                return [
                    Object(x.d)(function(e) {
                        return e.user.userSlippageTolerance;
                    }),
                    Object(a.useCallback)(
                        function(n) {
                            e(
                                sa({
                                    userSlippageTolerance: n,
                                })
                            );
                        }, [e]
                    ),
                ];
            }

            function xa() {
                var e = Object(x.c)();
                return [
                    Object(x.d)(function(e) {
                        return e.user.userDeadline;
                    }),
                    Object(a.useCallback)(
                        function(n) {
                            e(
                                ua({
                                    userDeadline: n,
                                })
                            );
                        }, [e]
                    ),
                ];
            }

            function ga() {
                var e = Se().chainId,
                    n = Object(x.d)(function(e) {
                        return e.user.tokens;
                    });
                return Object(a.useMemo)(
                    function() {
                        var t;
                        return e ?
                            Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(
                                va
                            ) :
                            [];
                    }, [n, e]
                );
            }

            function Ca(e) {
                return {
                    token0: ha(e.token0),
                    token1: ha(e.token1),
                };
            }

            function wa(e) {
                var n = Object(h.a)(e, 2),
                    t = n[0],
                    r = n[1];
                return new B.j(
                    t.chainId,
                    B.f.getAddress(t, r),
                    18,
                    "Cake-LP",
                    "Pancake LPs"
                );
            }
            var ka,
                Ta = t(147),
                Ia = t(264),
                Ea = t(265),
                Na = (t(266), t(267)),
                Ra = t(231),
                Sa =
                ((ka = {}),
                    Object(w.a)(
                        ka,
                        B.a.MAINNET,
                        "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"
                    ),
                    Object(w.a)(
                        ka,
                        B.a.BSCTESTNET,
                        "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"
                    ),
                    ka);

            function Aa(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Se(),
                    i = r.library,
                    c = r.account;
                return Object(a.useMemo)(
                    function() {
                        if (!e || !n || !i) return null;
                        try {
                            return Qn(e, n, i, t && c ? c : void 0);
                        } catch (r) {
                            return console.error("Failed to get contract", r), null;
                        }
                    }, [e, n, i, t, c]
                );
            }

            function Ua(e, n) {
                return Aa(e, Ir, n);
            }

            function Ba(e) {
                var n = Se().chainId;
                if (n)
                    switch (n) {
                        case B.a.MAINNET:
                        case B.a.BSCTESTNET:
                    }
                return Aa(undefined, Ia, e);
            }

            function Pa(e, n) {
                return Aa(e, Ea, n);
            }

            function _a() {
                var e = Se().chainId;
                return Aa(e && Sa[e], Ra, !1);
            }

            function Da() {
                var e = Se().chainId,
                    n = ga(),
                    t = Dr();
                return Object(a.useMemo)(
                    function() {
                        return e ?
                            n.reduce(function(e, n) {
                                return (e[n.address] = n), e;
                            }, Object(V.a)({}, t[e])) :
                            {};
                    }, [e, n, t]
                );
            }
            var La = /^0x[a-fA-F0-9]{64}$/;

            function Ma(e, n, t) {
                return e && e.length > 0 ? e : n && La.test(n) ? Object(Sr.b)(n) : t;
            }

            function Fa(e) {
                var n = Se().chainId,
                    t = Da(),
                    r = qn(e),
                    i = Ua(r || void 0, !1),
                    c = (function(e, n) {
                        return Aa(e, Er, n);
                    })(r || void 0, !1),
                    o = r ? t[r] : void 0,
                    s = ta(o ? void 0 : i, "name", void 0, Xr),
                    u = ta(o ? void 0 : c, "name", void 0, Xr),
                    l = ta(o ? void 0 : i, "symbol", void 0, Xr),
                    d = ta(o ? void 0 : c, "symbol", void 0, Xr),
                    b = ta(o ? void 0 : i, "decimals", void 0, Xr);
                return Object(a.useMemo)(
                    function() {
                        if (o) return o;
                        if (n && r) {
                            if (b.loading || l.loading || s.loading) return null;
                            var e, t, a, i;
                            if (b.result)
                                return new B.j(
                                    n,
                                    r,
                                    b.result[0],
                                    Ma(
                                        null === (e = l.result) || void 0 === e ? void 0 : e[0],
                                        null === (t = d.result) || void 0 === t ? void 0 : t[0],
                                        "UNKNOWN"
                                    ),
                                    Ma(
                                        null === (a = s.result) || void 0 === a ? void 0 : a[0],
                                        null === (i = u.result) || void 0 === i ? void 0 : i[0],
                                        "Unknown Token"
                                    )
                                );
                        }
                    }, [
                        r,
                        n,
                        b.loading,
                        b.result,
                        l.loading,
                        l.result,
                        d.result,
                        o,
                        s.loading,
                        s.result,
                        u.result,
                    ]
                );
            }

            function za(e) {
                var n =
                    "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    t = Fa(n ? void 0 : e);
                return n ? B.d : t;
            }

            function Ya(e) {
                var n = _a(),
                    t = Object(a.useMemo)(
                        function() {
                            return e ?
                                e
                                .map(qn)
                                .filter(function(e) {
                                    return !1 !== e;
                                })
                                .sort() :
                                [];
                        }, [e]
                    ),
                    r = (function(e, n, t, r) {
                        var i = Object(a.useMemo)(
                                function() {
                                    var t;
                                    return null === e ||
                                        void 0 === e ||
                                        null === (t = e.interface) ||
                                        void 0 === t ?
                                        void 0 :
                                        t.getFunction(n);
                                }, [e, n]
                            ),
                            c = Jr(
                                Object(a.useMemo)(
                                    function() {
                                        return e && i && t && t.length > 0 ?
                                            t.map(function(n) {
                                                return {
                                                    address: e.address,
                                                    callData: e.interface.encodeFunctionData(i, n),
                                                };
                                            }) :
                                            [];
                                    }, [t, e, i]
                                ),
                                r
                            ),
                            o = Le();
                        return Object(a.useMemo)(
                            function() {
                                return c.map(function(n) {
                                    return ea(
                                        n,
                                        null === e || void 0 === e ? void 0 : e.interface,
                                        i,
                                        o
                                    );
                                });
                            }, [i, e, c, o]
                        );
                    })(
                        n,
                        "getEthBalance",
                        t.map(function(e) {
                            return [e];
                        })
                    );
                return Object(a.useMemo)(
                    function() {
                        return t.reduce(function(e, n, t) {
                            var a,
                                i,
                                c =
                                null === r ||
                                void 0 === r ||
                                null === (a = r[t]) ||
                                void 0 === a ||
                                null === (i = a.result) ||
                                void 0 === i ?
                                void 0 :
                                i[0];
                            return c && (e[n] = B.c.ether(B.e.BigInt(c.toString()))), e;
                        }, {});
                    }, [t, r]
                );
            }

            function qa(e, n) {
                var t = Object(a.useMemo)(
                        function() {
                            var e;
                            return null !==
                                (e =
                                    null === n || void 0 === n ?
                                    void 0 :
                                    n.filter(function(e) {
                                        return (!1 !==
                                            qn(null === e || void 0 === e ? void 0 : e.address)
                                        );
                                    })) && void 0 !== e ?
                                e :
                                [];
                        }, [n]
                    ),
                    r = na(
                        Object(a.useMemo)(
                            function() {
                                return t.map(function(e) {
                                    return e.address;
                                });
                            }, [t]
                        ),
                        Rr,
                        "balanceOf", [e]
                    ),
                    i = Object(a.useMemo)(
                        function() {
                            return r.some(function(e) {
                                return e.loading;
                            });
                        }, [r]
                    );
                return [
                    Object(a.useMemo)(
                        function() {
                            return e && t.length > 0 ?
                                t.reduce(function(e, n, t) {
                                    var a,
                                        i,
                                        c =
                                        null === r ||
                                        void 0 === r ||
                                        null === (a = r[t]) ||
                                        void 0 === a ||
                                        null === (i = a.result) ||
                                        void 0 === i ?
                                        void 0 :
                                        i[0],
                                        o = c ? B.e.BigInt(c.toString()) : void 0;
                                    return o && (e[n.address] = new B.k(n, o)), e;
                                }, {}) :
                                {};
                        }, [e, t, r]
                    ),
                    i,
                ];
            }

            function Wa(e, n) {
                return qa(e, n)[0];
            }

            function Va(e, n) {
                var t = Wa(e, [n]);
                if (n) return t[n.address];
            }

            function Ha(e, n) {
                var t = Object(a.useMemo)(
                        function() {
                            var e;
                            return null !==
                                (e =
                                    null === n || void 0 === n ?
                                    void 0 :
                                    n.filter(function(e) {
                                        return e instanceof B.j;
                                    })) && void 0 !== e ?
                                e :
                                [];
                        }, [n]
                    ),
                    r = Wa(e, t),
                    i = Ya(
                        Object(a.useMemo)(
                            function() {
                                var e;
                                return (
                                    null !==
                                    (e =
                                        null === n || void 0 === n ?
                                        void 0 :
                                        n.some(function(e) {
                                            return e === B.d;
                                        })) &&
                                    void 0 !== e &&
                                    e
                                );
                            }, [n]
                        ) ?
                        [e] :
                        []
                    );
                return Object(a.useMemo)(
                    function() {
                        var t;
                        return null !==
                            (t =
                                null === n || void 0 === n ?
                                void 0 :
                                n.map(function(n) {
                                    if (e && n)
                                        return n instanceof B.j ?
                                            r[n.address] :
                                            n === B.d ?
                                            i[e] :
                                            void 0;
                                })) && void 0 !== t ?
                            t :
                            [];
                    }, [e, n, i, r]
                );
            }

            function Ga(e, n) {
                return Ha(e, [n])[0];
            }

            function Ka(e, n) {
                var t = Object(a.useState)(n && n(e) ? e : void 0),
                    r = Object(h.a)(t, 2),
                    i = r[0],
                    c = r[1];
                return (
                    Object(a.useEffect)(
                        function() {
                            c(function(t) {
                                return !n || n(e) ? e : t;
                            });
                        }, [n, e]
                    ),
                    i
                );
            }

            function Qa(e) {
                return null !== e && void 0 !== e;
            }
            var Xa = t(268),
                Ja = t(175),
                Za = t.n(Ja),
                $a = t(128),
                ei = t(111);
            var ni = new TextDecoder();

            function ti(e) {
                var n = (function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0)
                            throw new Error("hex must have length that is multiple of 2");
                        for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++)
                            n[t] = parseInt(e.substr(2 * t, 2), 16);
                        return n;
                    })(e),
                    t = Object($a.getCodec)(n);
                switch (t) {
                    case "ipfs-ns":
                        var r = Object($a.rmPrefix)(n),
                            a = new Za.a(r);
                        return "ipfs://".concat(Object(ei.toB58String)(a.multihash));
                    case "ipns-ns":
                        var i = Object($a.rmPrefix)(n),
                            c = new Za.a(i),
                            o = Object(ei.decode)(c.multihash);
                        return "identity" === o.name ?
                            "ipns://".concat(ni.decode(o.digest).trim()) :
                            "ipns://".concat(Object(ei.toB58String)(c.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(t));
                }
            }
            var ri = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

            function ai(e) {
                var n = e.match(ri);
                if (n)
                    return {
                        ensName: "".concat(n[1].toLowerCase(), "eth"),
                        ensPath: n[3],
                    };
            }

            function ii(e) {
                var n, t;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https".concat(e.substr(4)), e];
                    case "ipfs":
                        var r =
                            null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ?
                            void 0 :
                            n[2];
                        return [
                            "https://cloudflare-ipfs.com/ipfs/".concat(r, "/"),
                            "https://ipfs.io/ipfs/".concat(r, "/"),
                        ];
                    case "ipns":
                        var a =
                            null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ?
                            void 0 :
                            t[2];
                        return [
                            "https://cloudflare-ipfs.com/ipns/".concat(a, "/"),
                            "https://ipfs.io/ipns/".concat(a, "/"),
                        ];
                    default:
                        return [];
                }
            }
            var ci = t(90);

            function oi(e) {
                return /^0x0*$/.test(e);
            }

            function si(e) {
                var n = Object(a.useMemo)(
                        function() {
                            return e ? ai(e) : void 0;
                        }, [e]
                    ),
                    t = (function(e) {
                        var n,
                            t,
                            r,
                            i = Object(a.useMemo)(
                                function() {
                                    if (!e) return [void 0];
                                    try {
                                        return e ? [Object(ci.namehash)(e)] : [void 0];
                                    } catch (n) {
                                        return [void 0];
                                    }
                                }, [e]
                            ),
                            c = ta(Ba(!1), "resolver", i),
                            o = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                            s = ta(Pa(o && oi(o) ? void 0 : o, !1), "contenthash", i);
                        return {
                            contenthash: null !==
                                (t =
                                    null === (r = s.result) || void 0 === r ? void 0 : r[0]) &&
                                void 0 !== t ?
                                t :
                                null,
                            loading: c.loading || s.loading,
                        };
                    })(null === n || void 0 === n ? void 0 : n.ensName);
                return Object(a.useMemo)(
                    function() {
                        return n ?
                            t.contenthash ?
                            ii(ti(t.contenthash)) :
                            [] :
                            e ?
                            ii(e) :
                            [];
                    }, [n, t.contenthash, e]
                );
            }
            var ui = t(507),
                li = {};

            function di(e) {
                var n = e.srcs,
                    t = e.alt,
                    i = Object(nn.a)(e, ["srcs", "alt"]),
                    c = Object(a.useState)(0),
                    o = Object(h.a)(c, 2)[1],
                    s = n.find(function(e) {
                        return !li[e];
                    });
                return s ?
                    Object(r.jsx)(
                        "img",
                        Object(V.a)(
                            Object(V.a)({}, i), {}, {
                                alt: t,
                                src: s,
                                onError: function() {
                                    s && (li[s] = !0),
                                        o(function(e) {
                                            return e + 1;
                                        });
                                },
                            }
                        )
                    ) :
                    Object(r.jsx)(ui.a, Object(V.a)({}, i));
            }

            function bi() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return (
                    (bi = function() {
                        return e;
                    }),
                    e
                );
            }
            var pi = Object(l.default)(di)(
                bi(),
                function(e) {
                    return e.size;
                },
                function(e) {
                    return e.size;
                }
            );

            function fi(e) {
                var n = e.logoURI,
                    t = e.style,
                    a = e.size,
                    i = void 0 === a ? "24px" : a,
                    c = e.alt,
                    o = si(n);
                return Object(r.jsx)(pi, {
                    alt: c,
                    size: i,
                    srcs: o,
                    style: t,
                });
            }
            var ji = t(514),
                mi = t(146);

            function hi(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Object(a.useRef)();
                Object(a.useEffect)(
                        function() {
                            r.current = e;
                        }, [e]
                    ),
                    Object(a.useEffect)(
                        function() {
                            function e() {
                                var e = r.current;
                                e && e();
                            }
                            if (null !== n) {
                                t && e();
                                var a = setInterval(e, n);
                                return function() {
                                    return clearInterval(a);
                                };
                            }
                        }, [n, t]
                    );
            }

            function vi() {
                var e = Object(u.a)([
                    "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
                    ";\n    transform: rotate(45deg);\n    background: ",
                    ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n",
                ]);
                return (
                    (vi = function() {
                        return e;
                    }),
                    e
                );
            }

            function yi() {
                var e = Object(u.a)(["\n  display: inline-block;\n"]);
                return (
                    (yi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Oi() {
                var e = Object(u.a)([
                    "\n  z-index: 9999;\n\n  visibility: ",
                    ";\n  opacity: ",
                    ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ",
                    ";\n  border: 1px solid ",
                    ";\n  box-shadow: 0 4px 8px 0 ",
                    ";\n  color: ",
                    ";\n  border-radius: 8px;\n",
                ]);
                return (
                    (Oi = function() {
                        return e;
                    }),
                    e
                );
            }
            var xi = l.default.div(
                    Oi(),
                    function(e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function(e) {
                        return e.show ? 1 : 0;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    Object(tn.b)(0.9, "#2F80ED"),
                    function(e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                gi = l.default.div(yi()),
                Ci = l.default.div(
                    vi(),
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    }
                );

            function wi(e) {
                var n,
                    t,
                    i = e.content,
                    c = e.show,
                    o = e.children,
                    s = e.placement,
                    u = void 0 === s ? "auto" : s,
                    l = Object(a.useState)(null),
                    d = Object(h.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = Object(a.useState)(null),
                    j = Object(h.a)(f, 2),
                    m = j[0],
                    v = j[1],
                    y = Object(a.useState)(null),
                    O = Object(h.a)(y, 2),
                    x = O[0],
                    g = O[1],
                    C = Object(ji.a)(b, m, {
                        placement: u,
                        strategy: "fixed",
                        modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8],
                                },
                            },
                            {
                                name: "arrow",
                                options: {
                                    element: x,
                                },
                            },
                        ],
                    }),
                    w = C.styles,
                    k = C.update,
                    T = C.attributes;
                return (
                    hi(
                        Object(a.useCallback)(
                            function() {
                                k && k();
                            }, [k]
                        ),
                        c ? 100 : null
                    ),
                    Object(r.jsxs)(r.Fragment, {
                        children: [
                            Object(r.jsx)(gi, {
                                ref: p,
                                children: o,
                            }),
                            Object(r.jsx)(mi.a, {
                                children: Object(r.jsxs)(
                                    xi,
                                    Object(V.a)(
                                        Object(V.a)({
                                                show: c,
                                                ref: v,
                                                style: w.popper,
                                            },
                                            T.popper
                                        ), {}, {
                                            children: [
                                                i,
                                                Object(r.jsx)(
                                                    Ci,
                                                    Object(V.a)({
                                                            className: "arrow-".concat(
                                                                null !==
                                                                (n =
                                                                    null === (t = T.popper) || void 0 === t ?
                                                                    void 0 :
                                                                    t["data-popper-placement"]) &&
                                                                void 0 !== n ?
                                                                n :
                                                                ""
                                                            ),
                                                            ref: g,
                                                            style: w.arrow,
                                                        },
                                                        T.arrow
                                                    )
                                                ),
                                            ],
                                        }
                                    )
                                ),
                            }),
                        ],
                    })
                );
            }

            function ki() {
                var e = Object(u.a)([
                    "\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n",
                ]);
                return (
                    (ki = function() {
                        return e;
                    }),
                    e
                );
            }
            var Ti = l.default.div(ki());

            function Ii(e) {
                var n = e.text,
                    t = Object(nn.a)(e, ["text"]);
                return Object(r.jsx)(
                    wi,
                    Object(V.a)({
                            content: Object(r.jsx)(Ti, {
                                children: n,
                            }),
                        },
                        t
                    )
                );
            }

            function Ei(e) {
                var n = e.children,
                    t = Object(nn.a)(e, ["children"]),
                    i = Object(a.useState)(!1),
                    c = Object(h.a)(i, 2),
                    o = c[0],
                    s = c[1],
                    u = Object(a.useCallback)(
                        function() {
                            return s(!0);
                        }, [s]
                    ),
                    l = Object(a.useCallback)(
                        function() {
                            return s(!1);
                        }, [s]
                    );
                return Object(r.jsx)(
                    Ii,
                    Object(V.a)(
                        Object(V.a)({}, t), {}, {
                            show: o,
                            children: Object(r.jsx)("div", {
                                onMouseEnter: u,
                                onMouseLeave: l,
                                children: n,
                            }),
                        }
                    )
                );
            }

            function Ni() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  // background-color: ",
                    ";\n  background-color: transparent;\n  color: ",
                    ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n",
                ]);
                return (
                    (Ni = function() {
                        return e;
                    }),
                    e
                );
            }
            var Ri = l.default.div(
                Ni(),
                function(e) {
                    return e.theme.colors.invertedContrast;
                },
                function(e) {
                    return e.theme.colors.textSubtle;
                }
            );

            function Si(e) {
                var n = e.text,
                    t = Object(a.useState)(!1),
                    i = Object(h.a)(t, 2),
                    c = i[0],
                    o = i[1],
                    s = Object(a.useCallback)(
                        function() {
                            return o(!0);
                        }, [o]
                    ),
                    u = Object(a.useCallback)(
                        function() {
                            return o(!1);
                        }, [o]
                    );
                return Object(r.jsx)("span", {
                    style: {
                        marginLeft: 4,
                    },
                    children: Object(r.jsx)(Ii, {
                        text: n,
                        show: c,
                        children: Object(r.jsx)(Ri, {
                            onClick: s,
                            onMouseEnter: s,
                            onMouseLeave: u,
                            children: Object(r.jsx)(ui.a, {
                                size: 16,
                            }),
                        }),
                    }),
                });
            }

            function Ai() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return (
                    (Ai = function() {
                        return e;
                    }),
                    e
                );
            }
            var Ui = Object(l.default)(di)(
                Ai(),
                function(e) {
                    return e.size;
                },
                function(e) {
                    return e.size;
                }
            );

            function Bi() {
                var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return (
                    (Bi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Pi() {
                var e = Object(u.a)([
                    "\n  width: ",
                    ";\n  height: ",
                    ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n",
                ]);
                return (
                    (Pi = function() {
                        return e;
                    }),
                    e
                );
            }
            var _i = function(e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(
                        e,
                        "/logo.png"
                    );
                },
                Di = l.default.img(
                    Pi(),
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    }
                ),
                Li = Object(l.default)(di)(
                    Bi(),
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    }
                );

            function Mi(e) {
                var n,
                    t,
                    i = e.currency,
                    c = e.size,
                    o = void 0 === c ? "24px" : c,
                    s = e.style,
                    u = si(i instanceof Ar ? i.logoURI : void 0),
                    l = Object(a.useMemo)(
                        function() {
                            return i === B.d ?
                                [] :
                                i instanceof B.j ?
                                i instanceof Ar ?
                                [].concat(Object(se.a)(u), [
                                    "/images/coins/".concat(
                                        null !==
                                        (n =
                                            null === i || void 0 === i ? void 0 : i.symbol) &&
                                        void 0 !== n ?
                                        n :
                                        "token",
                                        ".png"
                                    ),
                                    _i(i.address),
                                ]) :
                                [
                                    "/images/coins/".concat(
                                        null !==
                                        (e =
                                            null === i || void 0 === i ? void 0 : i.symbol) &&
                                        void 0 !== e ?
                                        e :
                                        "token",
                                        ".png"
                                    ),
                                    _i(i.address),
                                ] :
                                [];
                            var e, n;
                        }, [i, u]
                    );
                return i === B.d ?
                    Object(r.jsx)(Di, {
                        src: "images/bnb.png",
                        size: o,
                        style: s,
                    }) :
                    (null === i || void 0 === i ? void 0 : i.symbol) ?
                    Object(r.jsx)(Ui, {
                        size: o,
                        srcs: l,
                        alt: "".concat(
                            null !== (n = null === i || void 0 === i ? void 0 : i.symbol) &&
                            void 0 !== n ?
                            n :
                            "token",
                            " logo"
                        ),
                        style: s,
                    }) :
                    Object(r.jsx)(Li, {
                        size: o,
                        srcs: l,
                        alt: "".concat(
                            null !== (t = null === i || void 0 === i ? void 0 : i.symbol) &&
                            void 0 !== t ?
                            t :
                            "token",
                            " logo"
                        ),
                        style: s,
                    });
            }

            function Fi() {
                var e = Object(u.a)([
                    "\n  border: 1px solid ",
                    ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
                    ";\n    background-color: ",
                    ";\n  }\n\n  background-color: ",
                    ";\n  opacity: ",
                    ";\n",
                ]);
                return (
                    (Fi = function() {
                        return e;
                    }),
                    e
                );
            }
            var zi = l.default.div(
                Fi(),
                function(e) {
                    var n = e.theme;
                    return e.disable ? "transparent" : n.colors.tertiary;
                },
                function(e) {
                    return !e.disable && "pointer";
                },
                function(e) {
                    var n = e.theme;
                    return !e.disable && n.colors.invertedContrast;
                },
                function(e) {
                    var n = e.theme;
                    return e.disable && n.colors.tertiary;
                },
                function(e) {
                    return e.disable && "0.4";
                }
            );

            function Yi(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    a = e.selectedCurrency;
                return Object(r.jsxs)(Ve, {
                    gap: "md",
                    children: [
                        Object(r.jsxs)(Sn, {
                            children: [
                                Object(r.jsx)(s.v, {
                                    fontSize: "14px",
                                    children: "Common bases",
                                }),
                                Object(r.jsx)(Si, {
                                    text: "These tokens are commonly paired with other tokens.",
                                }),
                            ],
                        }),
                        Object(r.jsxs)(Sn, {
                            gap: "4px",
                            children: [
                                Object(r.jsxs)(zi, {
                                    onClick: function() {
                                        (a && Object(B.o)(a, B.d)) || t(B.d);
                                    },
                                    disable: a === B.d,
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: B.d,
                                            style: {
                                                marginRight: 8,
                                            },
                                        }),
                                        Object(r.jsx)(s.v, {
                                            children: "BNB",
                                        }),
                                    ],
                                }),
                                (n ? he[n] : []).map(function(e) {
                                    var n = a instanceof B.j && a.address === e.address;
                                    return Object(r.jsxs)(
                                        zi, {
                                            onClick: function() {
                                                return !n && t(e);
                                            },
                                            disable: n,
                                            children: [
                                                Object(r.jsx)(Mi, {
                                                    currency: e,
                                                    style: {
                                                        marginRight: 8,
                                                    },
                                                }),
                                                Object(r.jsx)(s.v, {
                                                    children: e.symbol,
                                                }),
                                            ],
                                        },
                                        e.address
                                    );
                                }),
                            ],
                        }),
                    ],
                });
            }
            var qi = t(277);

            function Wi() {
                var e = Object(u.a)([
                    "\n  width: 100%;\n  height: 1px;\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (Wi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Vi() {
                var e = Object(u.a)([
                    "\n  width: 100%;\n  height: 1px;\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (Vi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Hi() {
                var e = Object(u.a)([
                    "\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ",
                    ";\n  border-style: solid;\n  border: 1px solid ",
                    ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ",
                    ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ",
                    ";\n    outline: none;\n  }\n",
                ]);
                return (
                    (Hi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Gi() {
                var e = Object(u.a)([
                    "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ",
                    ";\n  pointer-events: ",
                    ";\n  :hover {\n    background-color: ",
                    ";\n  }\n  opacity: ",
                    ";\n",
                ]);
                return (
                    (Gi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ki() {
                var e = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
                return (
                    (Ki = function() {
                        return e;
                    }),
                    e
                );
            }

            function Qi() {
                var e = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
                return (
                    (Qi = function() {
                        return e;
                    }),
                    e
                );
            }

            function Xi() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n",
                ]);
                return (
                    (Xi = function() {
                        return e;
                    }),
                    e
                );
            }
            l.default.div(Xi());
            var Ji = Object(l.default)(An)(Qi(), function(e) {
                    return e.theme.colors.primary;
                }),
                Zi = Object(l.default)(Ve)(Ki()),
                $i = Object(l.default)(Nn)(
                    Gi(),
                    function(e) {
                        return !e.disabled && "pointer";
                    },
                    function(e) {
                        return e.disabled && "none";
                    },
                    function(e) {
                        var n = e.theme;
                        return !e.disabled && n.colors.tertiary;
                    },
                    function(e) {
                        var n = e.disabled,
                            t = e.selected;
                        return n || t ? 0.5 : 1;
                    }
                ),
                ec = l.default.input(
                    Hi(),
                    function(e) {
                        return e.theme.colors.text;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.textDisabled;
                    },
                    function(e) {
                        return e.theme.colors.primary;
                    }
                ),
                nc = l.default.div(Vi(), function(e) {
                    return e.theme.colors.borderColor;
                }),
                tc = l.default.div(Wi(), function(e) {
                    return e.theme.colors.tertiary;
                });

            function rc() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  justify-content: flex-end;\n",
                ]);
                return (
                    (rc = function() {
                        return e;
                    }),
                    e
                );
            }

            function ac() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  color: ",
                    ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n",
                ]);
                return (
                    (ac = function() {
                        return e;
                    }),
                    e
                );
            }

            function ic() {
                var e = Object(u.a)([
                    "\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n",
                ]);
                return (
                    (ic = function() {
                        return e;
                    }),
                    e
                );
            }
            var cc = On.main;

            function oc(e) {
                return e instanceof B.j ? e.address : e === B.d ? "ETHER" : "";
            }
            var sc = Object(l.default)(s.v)(ic()),
                uc = l.default.div(
                    ac(),
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.textSubtle;
                    }
                );

            function lc(e) {
                var n = e.balance;
                return Object(r.jsx)(sc, {
                    title: n.toExact(),
                    children: n.toSignificant(4),
                });
            }
            var dc = l.default.div(rc());

            function bc(e) {
                var n = e.currency;
                if (!(n instanceof Ar)) return Object(r.jsx)("span", {});
                var t = n.tags;
                if (!t || 0 === t.length) return Object(r.jsx)("span", {});
                var a = t[0];
                return Object(r.jsxs)(dc, {
                    children: [
                        Object(r.jsx)(Ei, {
                            text: a.description,
                            children: Object(r.jsx)(
                                uc, {
                                    children: a.name,
                                },
                                a.id
                            ),
                        }),
                        t.length > 1 ?
                        Object(r.jsx)(Ei, {
                            text: t
                                .slice(1)
                                .map(function(e) {
                                    var n = e.name,
                                        t = e.description;
                                    return "".concat(n, ": ").concat(t);
                                })
                                .join("; \n"),
                            children: Object(r.jsx)(uc, {
                                children: "...",
                            }),
                        }) :
                        null,
                    ],
                });
            }

            function pc(e) {
                var n = e.currency,
                    t = e.onSelect,
                    i = e.isSelected,
                    c = e.otherSelected,
                    o = e.style,
                    u = Se(),
                    l = u.account,
                    d = u.chainId,
                    b = oc(n),
                    p = (function(e, n) {
                        var t;
                        return (
                            n === B.d ||
                            Boolean(
                                n instanceof B.j &&
                                (null === (t = e[n.chainId]) || void 0 === t ?
                                    void 0 :
                                    t[n.address])
                            )
                        );
                    })(Dr(), n),
                    f = (function(e) {
                        return !!ga().find(function(n) {
                            return Object(B.o)(e, n);
                        });
                    })(n),
                    j = Ga(null !== l && void 0 !== l ? l : void 0, n),
                    m = (function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)(
                            function(n, t) {
                                e(
                                    da({
                                        chainId: n,
                                        address: t,
                                    })
                                );
                            }, [e]
                        );
                    })(),
                    h = (function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)(
                            function(n) {
                                e(
                                    la({
                                        serializedToken: ha(n),
                                    })
                                );
                            }, [e]
                        );
                    })();
                return Object(r.jsxs)($i, {
                    style: o,
                    className: "token-item-".concat(b),
                    onClick: function() {
                        return i ? null : t();
                    },
                    disabled: i,
                    selected: c,
                    children: [
                        Object(r.jsx)(Mi, {
                            currency: n,
                            size: "24px",
                        }),
                        Object(r.jsxs)(He, {
                            children: [
                                Object(r.jsx)(s.v, {
                                    title: n.name,
                                    children: n.symbol,
                                }),
                                Object(r.jsxs)(Ji, {
                                    children: [
                                        p || !f || n instanceof Ar ?
                                        null :
                                        Object(r.jsxs)(cc, {
                                            fontWeight: 500,
                                            children: [
                                                "Added by user",
                                                Object(r.jsx)(fn, {
                                                    onClick: function(e) {
                                                        e.stopPropagation(),
                                                            d && n instanceof B.j && m(d, n.address);
                                                    },
                                                    children: "(Remove)",
                                                }),
                                            ],
                                        }),
                                        p || f || n instanceof Ar ?
                                        null :
                                        Object(r.jsxs)(cc, {
                                            fontWeight: 500,
                                            children: [
                                                "Found by address",
                                                Object(r.jsx)(fn, {
                                                    onClick: function(e) {
                                                        e.stopPropagation(), n instanceof B.j && h(n);
                                                    },
                                                    children: "(Add)",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsx)(bc, {
                            currency: n,
                        }),
                        Object(r.jsx)(An, {
                            style: {
                                justifySelf: "flex-end",
                            },
                            children: j ?
                                Object(r.jsx)(lc, {
                                    balance: j,
                                }) :
                                l ?
                                Object(r.jsx)(xt, {}) :
                                null,
                        }),
                    ],
                });
            }

            function fc(e) {
                var n = e.height,
                    t = e.currencies,
                    i = e.selectedCurrency,
                    c = e.onCurrencySelect,
                    o = e.otherCurrency,
                    s = e.fixedListRef,
                    u = e.showETH,
                    l = Object(a.useMemo)(
                        function() {
                            return u ? [B.b.ETHER].concat(Object(se.a)(t)) : Object(se.a)(t);
                        }, [t, u]
                    ),
                    d = Object(a.useCallback)(
                        function(e) {
                            var n = e.data,
                                t = e.index,
                                a = e.style,
                                s = n[t],
                                u = Boolean(i && Object(B.o)(i, s)),
                                l = Boolean(o && Object(B.o)(o, s));
                            return Object(r.jsx)(pc, {
                                style: a,
                                currency: s,
                                isSelected: u,
                                onSelect: function() {
                                    return c(s);
                                },
                                otherSelected: l,
                            });
                        }, [c, o, i]
                    ),
                    b = Object(a.useCallback)(function(e, n) {
                        return oc(n[e]);
                    }, []);
                return Object(r.jsx)(qi.a, {
                    height: n,
                    ref: s,
                    width: "100%",
                    itemData: l,
                    itemCount: l.length,
                    itemSize: 56,
                    itemKey: b,
                    children: d,
                });
            }

            function jc(e, n) {
                if (0 === n.length) return e;
                var t = qn(n);
                if (t)
                    return e.filter(function(e) {
                        return e.address === t;
                    });
                var r = n
                    .toLowerCase()
                    .split(/\s+/)
                    .filter(function(e) {
                        return e.length > 0;
                    });
                if (0 === r.length) return e;
                var a = function(e) {
                    var n = e
                        .toLowerCase()
                        .split(/\s+/)
                        .filter(function(e) {
                            return e.length > 0;
                        });
                    return r.every(function(e) {
                        return (
                            0 === e.length ||
                            n.some(function(n) {
                                return n.startsWith(e) || n.endsWith(e);
                            })
                        );
                    });
                };
                return e.filter(function(e) {
                    var n = e.symbol,
                        t = e.name;
                    return (n && a(n)) || (t && a(t));
                });
            }

            function mc() {
                var e = Object(u.a)([
                    "\n  padding: 8px;\n  background-color: ",
                    ";\n  color: ",
                    ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n",
                ]);
                return (
                    (mc = function() {
                        return e;
                    }),
                    e
                );
            }
            var hc = Object(l.default)(An)(
                mc(),
                function(e) {
                    return e.theme.colors.invertedContrast;
                },
                function(e) {
                    return e.theme.colors.text;
                }
            );

            function vc(e) {
                var n = e.toggleSortOrder,
                    t = e.ascending;
                return Object(r.jsx)(hc, {
                    onClick: n,
                    children: Object(r.jsx)(s.v, {
                        fontSize: "14px",
                        children: t ? "\u2191" : "\u2193",
                    }),
                });
            }

            function yc(e) {
                var n = (function() {
                        var e = Se().account,
                            n = Da(),
                            t = Wa(
                                null !== e && void 0 !== e ? e : void 0,
                                Object(a.useMemo)(
                                    function() {
                                        return Object.values(null !== n && void 0 !== n ? n : {});
                                    }, [n]
                                )
                            );
                        return null !== t && void 0 !== t ? t : {};
                    })(),
                    t = Object(a.useMemo)(
                        function() {
                            return (function(e) {
                                return function(n, t) {
                                    var r,
                                        a,
                                        i =
                                        ((r = e[n.address]),
                                            (a = e[t.address]),
                                            r && a ?
                                            r.greaterThan(a) ?
                                            -1 :
                                            r.equalTo(a) ?
                                            0 :
                                            1 :
                                            r && r.greaterThan("0") ?
                                            -1 :
                                            a && a.greaterThan("0") ?
                                            1 :
                                            0);
                                    return 0 !== i ?
                                        i :
                                        n.symbol && t.symbol ?
                                        n.symbol.toLowerCase() < t.symbol.toLowerCase() ?
                                        -1 :
                                        1 :
                                        n.symbol || t.symbol ?
                                        -1 :
                                        0;
                                };
                            })(null !== n && void 0 !== n ? n : {});
                        }, [n]
                    );
                return Object(a.useMemo)(
                    function() {
                        return e ?
                            function(e, n) {
                                return -1 * t(e, n);
                            } :
                            t;
                    }, [e, t]
                );
            }

            function Oc(e) {
                var n = e.selectedCurrency,
                    t = e.onCurrencySelect,
                    i = e.otherSelectedCurrency,
                    c = e.showCommonBases,
                    o = e.onDismiss,
                    u = e.isOpen,
                    d = (e.onChangeList, Object(mt.b)().t),
                    b = Se().chainId,
                    p = (Object(a.useContext)(l.ThemeContext), Object(a.useRef)()),
                    f = Object(a.useState)(""),
                    j = Object(h.a)(f, 2),
                    m = j[0],
                    v = j[1],
                    y = Object(a.useState)(!1),
                    O = Object(h.a)(y, 2),
                    g = O[0],
                    C = O[1],
                    w = Da(),
                    k = qn(m),
                    T = Fa(m),
                    I = Object(a.useMemo)(
                        function() {
                            var e = m.toLowerCase().trim();
                            return "" === e || "e" === e || "et" === e || "eth" === e;
                        }, [m]
                    ),
                    E = yc(g),
                    N = Object(x.d)(function(e) {
                        return e.user.audioPlay;
                    }),
                    R = Object(a.useMemo)(
                        function() {
                            return k ? (T ? [T] : []) : jc(Object.values(w), m);
                        }, [k, T, w, m]
                    ),
                    S = Object(a.useMemo)(
                        function() {
                            if (T) return [T];
                            var e = R.sort(E),
                                n = m
                                .toLowerCase()
                                .split(/\s+/)
                                .filter(function(e) {
                                    return e.length > 0;
                                });
                            return n.length > 1 ?
                                e :
                                [].concat(
                                    Object(se.a)(T ? [T] : []),
                                    Object(se.a)(
                                        e.filter(function(e) {
                                            var t;
                                            return (
                                                (null === (t = e.symbol) || void 0 === t ?
                                                    void 0 :
                                                    t.toLowerCase()) === n[0]
                                            );
                                        })
                                    ),
                                    Object(se.a)(
                                        e.filter(function(e) {
                                            var t;
                                            return (
                                                (null === (t = e.symbol) || void 0 === t ?
                                                    void 0 :
                                                    t.toLowerCase()) !== n[0]
                                            );
                                        })
                                    )
                                );
                        }, [R, m, T, E]
                    ),
                    A = Object(a.useCallback)(
                        function(e) {
                            if ((t(e), o(), N)) {
                                var n = document.getElementById("bgMusic");
                                n && n.play();
                            }
                        }, [o, t, N]
                    );
                Object(a.useEffect)(
                    function() {
                        u && v("");
                    }, [u]
                );
                var U = Object(a.useRef)(),
                    P = Object(a.useCallback)(function(e) {
                        var n,
                            t = e.target.value,
                            r = qn(t);
                        v(r || t),
                            null === (n = p.current) || void 0 === n || n.scrollTo(0);
                    }, []),
                    _ = Object(a.useCallback)(
                        function(e) {
                            if ("Enter" === e.key)
                                if ("eth" === m.toLowerCase().trim()) A(B.d);
                                else if (S.length > 0) {
                                var n;
                                ((null === (n = S[0].symbol) || void 0 === n ?
                                        void 0 :
                                        n.toLowerCase()) !== m.trim().toLowerCase() &&
                                    1 !== S.length) ||
                                A(S[0]);
                            }
                        }, [S, A, m]
                    );
                !(function() {
                    var e,
                        n,
                        t = _r(),
                        r = Object(x.d)(function(e) {
                            return e.lists.byUrl;
                        }),
                        a = t ? r[t] : void 0;
                    (e = null === a || void 0 === a ? void 0 : a.current),
                    (n = null === a || void 0 === a ? void 0 : a.pendingUpdate),
                    null === a || void 0 === a || a.loadingRequestId;
                })();
                return Object(r.jsxs)(He, {
                    style: {
                        width: "100%",
                        flex: "1 1",
                    },
                    children: [
                        Object(r.jsxs)(Zi, {
                            gap: "14px",
                            children: [
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsxs)(s.v, {
                                            children: [
                                                Object(r.jsx)(xr, {
                                                    translationId: 82,
                                                    children: "Select a token",
                                                }),
                                                Object(r.jsx)(Si, {
                                                    text: yr(
                                                        130,
                                                        "Find a token by searching for its name or symbol or by pasting its address below."
                                                    ),
                                                }),
                                            ],
                                        }),
                                        Object(r.jsx)(s.j, {
                                            onClick: o,
                                        }),
                                    ],
                                }),
                                Object(r.jsx)(ec, {
                                    type: "text",
                                    id: "token-search-input",
                                    placeholder: d("tokenSearchPlaceholder"),
                                    value: m,
                                    ref: U,
                                    onChange: P,
                                    onKeyDown: _,
                                }),
                                c &&
                                Object(r.jsx)(Yi, {
                                    chainId: b,
                                    onSelect: A,
                                    selectedCurrency: n,
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: Object(r.jsx)(xr, {
                                                translationId: 126,
                                                children: "Token name",
                                            }),
                                        }),
                                        Object(r.jsx)(vc, {
                                            ascending: g,
                                            toggleSortOrder: function() {
                                                return C(function(e) {
                                                    return !e;
                                                });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsx)(nc, {}),
                        Object(r.jsx)("div", {
                            style: {
                                flex: "1",
                            },
                            children: Object(r.jsx)(Xa.a, {
                                disableWidth: !0,
                                children: function(e) {
                                    var t = e.height;
                                    return Object(r.jsx)(fc, {
                                        height: t,
                                        showETH: I,
                                        currencies: S,
                                        onCurrencySelect: A,
                                        otherCurrency: i,
                                        selectedCurrency: n,
                                        fixedListRef: p,
                                    });
                                },
                            }),
                        }),
                        null,
                    ],
                });
            }
            var xc = t(271),
                gc = t(272),
                Cc = t.n(gc),
                wc = "pancakeswap",
                kc = [wc],
                Tc = t(149),
                Ic = new Cc.a({
                    allErrors: !0,
                }).compile(xc);

            function Ec(e, n) {
                return Nc.apply(this, arguments);
            }

            function Nc() {
                return (Nc = Object(m.a)(
                    j.a.mark(function e(n, t) {
                        var r, a, i, c, o, s, u, l, d, b, p, f, m;
                        return j.a.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (n !== wc) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return", Tc);
                                        case 2:
                                            if (!(r = ai(n))) {
                                                e.next = 25;
                                                break;
                                            }
                                            return (e.prev = 4), (e.next = 7), t(r.ensName);
                                        case 7:
                                            (c = e.sent), (e.next = 14);
                                            break;
                                        case 10:
                                            throw (
                                                ((e.prev = 10),
                                                    (e.t0 = e.catch(4)),
                                                    console.error(
                                                        "Failed to resolve ENS name: ".concat(r.ensName),
                                                        e.t0
                                                    ),
                                                    new Error(
                                                        "Failed to resolve ENS name: ".concat(r.ensName)
                                                    ))
                                            );
                                        case 14:
                                            (e.prev = 14), (o = ti(c)), (e.next = 22);
                                            break;
                                        case 18:
                                            throw (
                                                ((e.prev = 18),
                                                    (e.t1 = e.catch(14)),
                                                    console.error(
                                                        "Failed to translate contenthash to URI",
                                                        c
                                                    ),
                                                    new Error(
                                                        "Failed to translate contenthash to URI: ".concat(c)
                                                    ))
                                            );
                                        case 22:
                                            (a = ii(
                                                ""
                                                .concat(o)
                                                .concat(
                                                    null !== (i = r.ensPath) && void 0 !== i ? i : ""
                                                )
                                            )),
                                            (e.next = 26);
                                            break;
                                        case 25:
                                            a = ii(n);
                                        case 26:
                                            s = 0;
                                        case 27:
                                            if (!(s < a.length)) {
                                                e.next = 57;
                                                break;
                                            }
                                            return (
                                                (u = a[s]),
                                                (l = s === a.length - 1),
                                                (d = void 0),
                                                (e.prev = 31),
                                                (e.next = 34),
                                                fetch(u)
                                            );
                                        case 34:
                                            (d = e.sent), (e.next = 43);
                                            break;
                                        case 37:
                                            if (
                                                ((e.prev = 37),
                                                    (e.t2 = e.catch(31)),
                                                    console.error("Failed to fetch list", n, e.t2), !l)
                                            ) {
                                                e.next = 42;
                                                break;
                                            }
                                            throw new Error("Failed to download list ".concat(n));
                                        case 42:
                                            return e.abrupt("continue", 54);
                                        case 43:
                                            if (d.ok) {
                                                e.next = 47;
                                                break;
                                            }
                                            if (!l) {
                                                e.next = 46;
                                                break;
                                            }
                                            throw new Error("Failed to download list ".concat(n));
                                        case 46:
                                            return e.abrupt("continue", 54);
                                        case 47:
                                            return (e.next = 49), d.json();
                                        case 49:
                                            if (((b = e.sent), Ic(b))) {
                                                e.next = 53;
                                                break;
                                            }
                                            throw (
                                                ((m =
                                                        null !==
                                                        (p =
                                                            null === (f = Ic.errors) || void 0 === f ?
                                                            void 0 :
                                                            f.reduce(function(e, n) {
                                                                var t,
                                                                    r = ""
                                                                    .concat(n.dataPath, " ")
                                                                    .concat(
                                                                        null !== (t = n.message) &&
                                                                        void 0 !== t ?
                                                                        t :
                                                                        ""
                                                                    );
                                                                return e.length > 0 ?
                                                                    "".concat(e, "; ").concat(r) :
                                                                    "".concat(r);
                                                            }, "")) && void 0 !== p ?
                                                        p :
                                                        "unknown error"),
                                                    new Error("Token list failed validation: ".concat(m)))
                                            );
                                        case 53:
                                            return e.abrupt("return", b);
                                        case 54:
                                            s++, (e.next = 27);
                                            break;
                                        case 57:
                                            throw new Error("Unrecognized list URL protocol.");
                                        case 58:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null, [
                                [4, 10],
                                [14, 18],
                                [31, 37],
                            ]
                        );
                    })
                )).apply(this, arguments);
            }
            var Rc = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32",
                    }, ],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address",
                    }, ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                }, ],
                Sc = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                Ac = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32",
                    }, ],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes",
                    }, ],
                    payable: !1,
                    stateMutability: "view",
                    type: "function",
                }, ];

            function Uc(e, n) {
                return new Ln.a(e, Ac, n);
            }

            function Bc(e, n) {
                return Pc.apply(this, arguments);
            }

            function Pc() {
                return (Pc = Object(m.a)(
                    j.a.mark(function e(n, t) {
                        var r, a, i;
                        return j.a.wrap(function(e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        return (
                                            (r = new Ln.a(Sc, Rc, t)),
                                            (a = Object(ci.namehash)(n)),
                                            (e.next = 4),
                                            r.resolver(a)
                                        );
                                    case 4:
                                        return (
                                            (i = e.sent), e.abrupt("return", Uc(i, t).contenthash(a))
                                        );
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }

            function _c() {
                var e = Se(),
                    n = e.chainId,
                    t = e.library,
                    r = Object(x.c)(),
                    i = Object(a.useCallback)(
                        function(e) {
                            if (!t || n !== B.a.MAINNET) {
                                if (ne === B.a.MAINNET) {
                                    var r = (function() {
                                        var e;
                                        return (te =
                                            null !== (e = te) && void 0 !== e ?
                                            e :
                                            new k.a(re.provider));
                                    })();
                                    if (r) return Bc(e, r);
                                }
                                throw new Error("Could not construct mainnet ENS resolver");
                            }
                            return Bc(e, t);
                        }, [n, t]
                    );
                return Object(a.useCallback)(
                    (function() {
                        var e = Object(m.a)(
                            j.a.mark(function e(n) {
                                var t;
                                return j.a.wrap(function(e) {
                                    for (;;)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (t = Object(Ae.e)()),
                                                    r(
                                                        Xe.pending({
                                                            requestId: t,
                                                            url: n,
                                                        })
                                                    ),
                                                    e.abrupt(
                                                        "return",
                                                        Ec(n, i)
                                                        .then(function(e) {
                                                            return (
                                                                r(
                                                                    Xe.fulfilled({
                                                                        url: n,
                                                                        tokenList: e,
                                                                        requestId: t,
                                                                    })
                                                                ),
                                                                e
                                                            );
                                                        })
                                                        .catch(function(e) {
                                                            throw (
                                                                (console.error(
                                                                        "Failed to get list at url ".concat(n),
                                                                        e
                                                                    ),
                                                                    r(
                                                                        Xe.rejected({
                                                                            url: n,
                                                                            requestId: t,
                                                                            errorMessage: e.message,
                                                                        })
                                                                    ),
                                                                    e)
                                                            );
                                                        })
                                                    )
                                                );
                                            case 3:
                                            case "end":
                                                return e.stop();
                                        }
                                }, e);
                            })
                        );
                        return function(n) {
                            return e.apply(this, arguments);
                        };
                    })(), [r, i]
                );
            }

            function Dc(e, n) {
                var t = Object(a.useRef)(n);
                Object(a.useEffect)(
                        function() {
                            t.current = n;
                        }, [n]
                    ),
                    Object(a.useEffect)(
                        function() {
                            var n = function(n) {
                                var r, a;
                                (null !==
                                    (r =
                                        null === (a = e.current) || void 0 === a ?
                                        void 0 :
                                        a.contains(n.target)) &&
                                    void 0 !== r &&
                                    r) ||
                                (t.current && t.current());
                            };
                            return (
                                document.addEventListener("mousedown", n),
                                function() {
                                    document.removeEventListener("mousedown", n);
                                }
                            );
                        }, [e]
                    );
            }

            function Lc() {
                var e = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
                return (
                    (Lc = function() {
                        return e;
                    }),
                    e
                );
            }

            function Mc() {
                var e = Object(u.a)([
                    "\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n",
                ]);
                return (
                    (Mc = function() {
                        return e;
                    }),
                    e
                );
            }

            function Fc() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n",
                ]);
                return (
                    (Fc = function() {
                        return e;
                    }),
                    e
                );
            }

            function zc() {
                var e = Object(u.a)([
                    "\n  z-index: 100;\n  visibility: ",
                    ";\n  opacity: ",
                    ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ",
                    ";\n  border: 1px solid ",
                    ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ",
                    ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n",
                ]);
                return (
                    (zc = function() {
                        return e;
                    }),
                    e
                );
            }

            function Yc() {
                var e = Object(u.a)([
                    "\n  padding: 0;\n  font-size: 1rem;\n  opacity: ",
                    ";\n",
                ]);
                return (
                    (Yc = function() {
                        return e;
                    }),
                    e
                );
            }
            var qc = On.error,
                Wc = Object(l.default)(fn)(Yc(), function(e) {
                    return e.disabled ? "0.4" : "1";
                }),
                Vc = l.default.div(
                    zc(),
                    function(e) {
                        return e.show ? "visible" : "hidden";
                    },
                    function(e) {
                        return e.show ? 1 : 0;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                Hc = l.default.div(Fc()),
                Gc = l.default.div(Mc());

            function Kc(e) {
                var n = e.listUrl,
                    t = Object(a.useMemo)(
                        function() {
                            var e;
                            return null === (e = ai(n)) || void 0 === e ? void 0 : e.ensName;
                        }, [n]
                    ),
                    i = Object(a.useMemo)(
                        function() {
                            if (!t) {
                                var e = n.toLowerCase();
                                if (e.startsWith("ipfs://") || e.startsWith("ipns://"))
                                    return n;
                                try {
                                    return new URL(n).host;
                                } catch (r) {
                                    return;
                                }
                            }
                        }, [n, t]
                    );
                return Object(r.jsx)(r.Fragment, {
                    children: null !== t && void 0 !== t ? t : i,
                });
            }

            function Qc(e) {
                return "list-row-".concat(e.replace(/\./g, "-"));
            }
            var Xc = Object(a.memo)(function(e) {
                    var n = e.listUrl,
                        t = e.onBack,
                        i = Object(x.d)(function(e) {
                            return e.lists.byUrl;
                        }),
                        c = _r(),
                        o = Object(x.c)(),
                        u = i[n],
                        l = u.current,
                        d = u.pendingUpdate,
                        b = n === c,
                        p = (function() {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0],
                                n = Object(a.useState)(e),
                                t = Object(h.a)(n, 2),
                                r = t[0],
                                i = t[1],
                                c = Object(a.useCallback)(function() {
                                    return i(function(e) {
                                        return !e;
                                    });
                                }, []);
                            return [r, c];
                        })(!1),
                        f = Object(h.a)(p, 2),
                        j = f[0],
                        m = f[1],
                        v = Object(a.useRef)(),
                        y = Object(a.useState)(),
                        O = Object(h.a)(y, 2),
                        g = O[0],
                        C = O[1],
                        w = Object(a.useState)(),
                        k = Object(h.a)(w, 2),
                        T = k[0],
                        I = k[1],
                        E = Object(ji.a)(g, T, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8],
                                },
                            }, ],
                        }),
                        N = E.styles,
                        R = E.attributes;
                    Dc(v, j ? m : void 0);
                    var S = Object(a.useCallback)(
                            function() {
                                b || (o(en(n)), t());
                            }, [o, b, n, t]
                        ),
                        A = Object(a.useCallback)(
                            function() {
                                d && o(Je(n));
                            }, [o, n, d]
                        ),
                        U = Object(a.useCallback)(
                            function() {
                                "REMOVE" ===
                                window.prompt(
                                    "Please confirm you would like to remove this list by typing REMOVE"
                                ) && o($e(n));
                            }, [o, n]
                        );
                    return l ?
                        Object(r.jsxs)(
                            Un, {
                                align: "center",
                                padding: "16px",
                                id: Qc(n),
                                children: [
                                    l.logoURI ?
                                    Object(r.jsx)(fi, {
                                        style: {
                                            marginRight: "1rem",
                                        },
                                        logoURI: l.logoURI,
                                        alt: "".concat(l.name, " list logo"),
                                    }) :
                                    Object(r.jsx)("div", {
                                        style: {
                                            width: "24px",
                                            height: "24px",
                                            marginRight: "1rem",
                                        },
                                    }),
                                    Object(r.jsxs)(He, {
                                        style: {
                                            flex: "1",
                                        },
                                        children: [
                                            Object(r.jsx)(Un, {
                                                children: Object(r.jsx)(s.v, {
                                                    bold: b,
                                                    fontSize: "16px",
                                                    style: {
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    },
                                                    children: l.name,
                                                }),
                                            }),
                                            Object(r.jsx)(Un, {
                                                style: {
                                                    marginTop: "4px",
                                                },
                                                children: Object(r.jsx)(Gc, {
                                                    title: n,
                                                    children: Object(r.jsx)(Kc, {
                                                        listUrl: n,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    Object(r.jsxs)(Hc, {
                                        ref: v,
                                        children: [
                                            Object(r.jsx)("div", {
                                                style: {
                                                    display: "inline-block",
                                                },
                                                ref: C,
                                                children: Object(r.jsx)(s.c, {
                                                    style: {
                                                        width: "32px",
                                                        marginRight: "8px",
                                                    },
                                                    onClick: m,
                                                    variant: "secondary",
                                                    children: Object(r.jsx)(s.i, {}),
                                                }),
                                            }),
                                            j &&
                                            Object(r.jsxs)(
                                                Vc,
                                                Object(V.a)(
                                                    Object(V.a)({
                                                            show: !0,
                                                            ref: I,
                                                            style: N.popper,
                                                        },
                                                        R.popper
                                                    ), {}, {
                                                        children: [
                                                            Object(r.jsx)("div", {
                                                                children: l && xn(l.version),
                                                            }),
                                                            Object(r.jsx)(tc, {}),
                                                            Object(r.jsx)(hn, {
                                                                href: "https://tokenlists.org/token-list?url=".concat(
                                                                    n
                                                                ),
                                                                children: "View list",
                                                            }),
                                                            Object(r.jsx)(Wc, {
                                                                onClick: U,
                                                                disabled: 1 === Object.keys(i).length,
                                                                children: "Remove list",
                                                            }),
                                                            d &&
                                                            Object(r.jsx)(Wc, {
                                                                onClick: A,
                                                                children: "Update list",
                                                            }),
                                                        ],
                                                    }
                                                )
                                            ),
                                        ],
                                    }),
                                    b ?
                                    Object(r.jsx)(s.c, {
                                        disabled: !0,
                                        style: {
                                            width: "5rem",
                                            minWidth: "5rem",
                                        },
                                        children: "Selected",
                                    }) :
                                    Object(r.jsx)(r.Fragment, {
                                        children: Object(r.jsx)(s.c, {
                                            className: "select-button",
                                            style: {
                                                width: "5rem",
                                                minWidth: "4.5rem",
                                            },
                                            onClick: S,
                                            children: "Select",
                                        }),
                                    }),
                                ],
                            },
                            n
                        ) :
                        null;
                }),
                Jc = l.default.div(Lc());

            function Zc(e) {
                var n,
                    t = e.onDismiss,
                    i = e.onBack,
                    c = Object(a.useState)(""),
                    o = Object(h.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(x.c)(),
                    b = Object(x.d)(function(e) {
                        return e.lists.byUrl;
                    }),
                    p = Boolean(
                        null === (n = b[u]) || void 0 === n ? void 0 : n.loadingRequestId
                    ),
                    f = Object(a.useState)(null),
                    j = Object(h.a)(f, 2),
                    m = j[0],
                    v = j[1],
                    y = Object(a.useCallback)(function(e) {
                        l(e.target.value), v(null);
                    }, []),
                    O = _c(),
                    g = Object(a.useCallback)(
                        function() {
                            p ||
                                (v(null),
                                    O(u)
                                    .then(function() {
                                        l("");
                                    })
                                    .catch(function(e) {
                                        v(e.message), d($e(u));
                                    }));
                        }, [p, d, O, u]
                    ),
                    C = Object(a.useMemo)(
                        function() {
                            return ii(u).length > 0 || Boolean(ai(u));
                        }, [u]
                    ),
                    w = Object(a.useCallback)(
                        function(e) {
                            C && "Enter" === e.key && g();
                        }, [g, C]
                    ),
                    k = Object(a.useMemo)(
                        function() {
                            return Object.keys(b)
                                .filter(function(e) {
                                    return Boolean(b[e].current);
                                })
                                .sort(function(e, n) {
                                    var t = b[e].current,
                                        r = b[n].current;
                                    return t && r ?
                                        t.name.toLowerCase() < r.name.toLowerCase() ?
                                        -1 :
                                        t.name.toLowerCase() === r.name.toLowerCase() ?
                                        0 :
                                        1 :
                                        t ?
                                        -1 :
                                        r ?
                                        1 :
                                        0;
                                });
                        }, [b]
                    );
                return Object(r.jsxs)(He, {
                    style: {
                        width: "100%",
                        flex: "1 1",
                    },
                    children: [
                        Object(r.jsx)(Zi, {
                            children: Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsx)("div", {
                                        children: Object(r.jsx)(rn.a, {
                                            style: {
                                                cursor: "pointer",
                                            },
                                            onClick: i,
                                        }),
                                    }),
                                    Object(r.jsx)(s.v, {
                                        fontSize: "20px",
                                        children: "Manage Lists",
                                    }),
                                    Object(r.jsx)(pn, {
                                        onClick: t,
                                    }),
                                ],
                            }),
                        }),
                        Object(r.jsx)(nc, {}),
                        Object(r.jsxs)(Zi, {
                            gap: "14px",
                            children: [
                                Object(r.jsxs)(s.v, {
                                    bold: !0,
                                    children: [
                                        "Add a list",
                                        " ",
                                        Object(r.jsx)(Si, {
                                            text: "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens.",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Un, {
                                    children: [
                                        Object(r.jsx)(ec, {
                                            type: "text",
                                            id: "list-add-input",
                                            placeholder: "https:// or ipfs:// or ENS name",
                                            value: u,
                                            onChange: y,
                                            onKeyDown: w,
                                            style: {
                                                height: "2.75rem",
                                                borderRadius: 12,
                                                padding: "12px",
                                            },
                                        }),
                                        Object(r.jsx)(s.c, {
                                            onClick: g,
                                            style: {
                                                maxWidth: "4em",
                                                marginLeft: "1em",
                                            },
                                            disabled: !C,
                                            children: "Add",
                                        }),
                                    ],
                                }),
                                m ?
                                Object(r.jsx)(qc, {
                                    title: m,
                                    style: {
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                    },
                                    error: !0,
                                    children: m,
                                }) :
                                null,
                            ],
                        }),
                        Object(r.jsx)(nc, {}),
                        Object(r.jsx)(Jc, {
                            children: k.map(function(e) {
                                return Object(r.jsx)(
                                    Xc, {
                                        listUrl: e,
                                        onBack: i,
                                    },
                                    e
                                );
                            }),
                        }),
                        Object(r.jsx)(nc, {}),
                        Object(r.jsx)("div", {
                            style: {
                                padding: "16px",
                                textAlign: "center",
                            },
                            children: Object(r.jsx)(hn, {
                                href: "https://tokenlists.org",
                                children: "Browse lists",
                            }),
                        }),
                    ],
                });
            }

            function $c(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    i = e.onCurrencySelect,
                    c = e.selectedCurrency,
                    o = e.otherSelectedCurrency,
                    s = Object(a.useState)(!1),
                    u = Object(h.a)(s, 2),
                    l = u[0],
                    d = u[1],
                    b = Ka(n);
                Object(a.useEffect)(
                    function() {
                        n && !b && d(!1);
                    }, [n, b]
                );
                var p = Object(a.useCallback)(
                        function(e) {
                            i(e), t();
                        }, [t, i]
                    ),
                    f = Object(a.useCallback)(function() {
                        d(!0);
                    }, []),
                    j = Object(a.useCallback)(function() {
                        d(!1);
                    }, []),
                    m = !_r();
                return Object(r.jsx)(Gt, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 90,
                    minHeight: l ? 40 : m ? 0 : 80,
                    children: l ?
                        Object(r.jsx)(Zc, {
                            onDismiss: t,
                            onBack: j,
                        }) :
                        Object(r.jsx)(Oc, {
                            isOpen: n,
                            onDismiss: t,
                            onCurrencySelect: p,
                            onChangeList: f,
                            selectedCurrency: c,
                            otherSelectedCurrency: o,
                            showCommonBases: !1,
                        }),
                });
            }

            function eo() {
                var e = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"]);
                return (
                    (eo = function() {
                        return e;
                    }),
                    e
                );
            }

            function no() {
                var e = Object(u.a)(["\n  z-index: 2;\n"]);
                return (
                    (no = function() {
                        return e;
                    }),
                    e
                );
            }

            function to() {
                var e = Object(u.a)([
                    "\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ",
                    ";\n",
                ]);
                return (
                    (to = function() {
                        return e;
                    }),
                    e
                );
            }
            var ro = l.default.div(to(), function(e) {
                    var n = e.sizeraw;
                    return e.margin && "".concat((n / 3 + 8).toString(), "px");
                }),
                ao = Object(l.default)(Mi)(no()),
                io = Object(l.default)(Mi)(eo(), function(e) {
                    var n = e.sizeraw;
                    return "".concat((n / 2).toString(), "px");
                });

            function co(e) {
                var n = e.currency0,
                    t = e.currency1,
                    a = e.size,
                    i = void 0 === a ? 16 : a,
                    c = e.margin,
                    o = void 0 !== c && c;
                return Object(r.jsxs)(ro, {
                    sizeraw: i,
                    margin: o,
                    children: [
                        n &&
                        Object(r.jsx)(ao, {
                            currency: n,
                            size: "".concat(i.toString(), "px"),
                        }),
                        t &&
                        Object(r.jsx)(io, {
                            currency: t,
                            size: "".concat(i.toString(), "px"),
                            sizeraw: i,
                        }),
                    ],
                });
            }

            function oo() {
                var e = Object(u.a)([
                    "\n  color: ",
                    ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",
                    ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (oo = function() {
                        return e;
                    }),
                    e
                );
            }
            var so = l.default.input(
                    oo(),
                    function(e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.text;
                    },
                    function(e) {
                        var n = e.align;
                        return n && n;
                    },
                    function(e) {
                        return e.theme.colors.textSubtle;
                    }
                ),
                uo = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                lo = i.a.memo(function(e) {
                    var n = e.value,
                        t = e.onUserInput,
                        a = e.placeholder,
                        i = Object(nn.a)(e, ["value", "onUserInput", "placeholder"]);
                    return Object(r.jsx)(
                        so,
                        Object(V.a)(
                            Object(V.a)({}, i), {}, {
                                value: n,
                                onChange: function(e) {
                                    var n;
                                    ("" === (n = e.target.value.replace(/,/g, ".")) ||
                                        uo.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) &&
                                    t(n);
                                },
                                inputMode: "decimal",
                                title: "Token Amount",
                                autoComplete: "off",
                                autoCorrect: "off",
                                type: "text",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                placeholder: a || "0.0",
                                minLength: 1,
                                maxLength: 79,
                                spellCheck: "false",
                            }
                        )
                    );
                });

            function bo() {
                var e = Object(u.a)([
                    "\n  border-radius: 16px;\n  background-color: ",
                    ";\n  box-shadow: ",
                    ";\n",
                ]);
                return (
                    (bo = function() {
                        return e;
                    }),
                    e
                );
            }

            function po() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ",
                    ";\n  background-color: ",
                    ";\n  z-index: 1;\n",
                ]);
                return (
                    (po = function() {
                        return e;
                    }),
                    e
                );
            }

            function fo() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
                ]);
                return (
                    (fo = function() {
                        return e;
                    }),
                    e
                );
            }

            function jo() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ",
                    ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (jo = function() {
                        return e;
                    }),
                    e
                );
            }

            function mo() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ",
                    ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ",
                    ";\n  }\n",
                ]);
                return (
                    (mo = function() {
                        return e;
                    }),
                    e
                );
            }

            function ho() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ",
                    ";\n",
                ]);
                return (
                    (ho = function() {
                        return e;
                    }),
                    e
                );
            }
            var vo = l.default.div(ho(), function(e) {
                    return e.selected ?
                        "0.75rem 0.5rem 0.75rem 1rem" :
                        "0.75rem 0.75rem 0.75rem 1rem";
                }),
                yo = l.default.button(
                    mo(),
                    function(e) {
                        var n = e.selected,
                            t = e.theme;
                        return n ? t.colors.text : "#FFFFFF";
                    },
                    function(e) {
                        var n = e.theme;
                        return Object(tn.a)(0.05, n.colors.input);
                    }
                ),
                Oo = l.default.div(
                    jo(),
                    function(e) {
                        return e.theme.colors.text;
                    },
                    function(e) {
                        var n = e.theme;
                        return Object(tn.a)(0.2, n.colors.textSubtle);
                    }
                ),
                xo = l.default.span(fo()),
                go = l.default.div(
                    po(),
                    function(e) {
                        return e.hideInput ? "8px" : "20px";
                    },
                    function(e) {
                        return e.theme.colors.background;
                    }
                ),
                Co = l.default.div(
                    bo(),
                    function(e) {
                        return e.theme.colors.input;
                    },
                    function(e) {
                        return e.theme.shadows.inset;
                    }
                );

            function wo(e) {
                var n = e.value,
                    t = e.onUserInput,
                    i = e.onMax,
                    c = e.showMaxButton,
                    o = e.label,
                    u = void 0 === o ? yr(132, "Input") : o,
                    l = e.onCurrencySelect,
                    d = e.currency,
                    b = e.disableCurrencySelect,
                    p = void 0 !== b && b,
                    f = e.hideBalance,
                    j = void 0 !== f && f,
                    m = e.pair,
                    v = void 0 === m ? null : m,
                    y = e.hideInput,
                    O = void 0 !== y && y,
                    x = e.otherCurrency,
                    g = e.id,
                    C = e.showCommonBases,
                    w = Object(a.useState)(!1),
                    k = Object(h.a)(w, 2),
                    T = k[0],
                    I = k[1],
                    E = Se().account,
                    N = Ga(
                        null !== E && void 0 !== E ? E : void 0,
                        null !== d && void 0 !== d ? d : void 0
                    ),
                    R = Object(a.useCallback)(
                        function() {
                            I(!1);
                        }, [I]
                    );
                return Object(r.jsxs)(go, {
                    id: g,
                    children: [
                        Object(r.jsxs)(Co, {
                            hideInput: O,
                            children: [!O &&
                                Object(r.jsx)(Oo, {
                                    children: Object(r.jsxs)(Nn, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "14px",
                                                children: u,
                                            }),
                                            E &&
                                            Object(r.jsx)(s.v, {
                                                onClick: i,
                                                fontSize: "14px",
                                                style: {
                                                    display: "inline",
                                                    cursor: "pointer",
                                                },
                                                children:
                                                    !j && d && N ?
                                                    "Balance: ".concat(
                                                        null === N || void 0 === N ?
                                                        void 0 :
                                                        N.toSignificant(6)
                                                    ) :
                                                    " -",
                                            }),
                                        ],
                                    }),
                                }),
                                Object(r.jsxs)(vo, {
                                    style: O ?
                                        {
                                            padding: "0",
                                            borderRadius: "8px",
                                        } :
                                        {},
                                    selected: p,
                                    children: [!O &&
                                        Object(r.jsxs)(r.Fragment, {
                                            children: [
                                                Object(r.jsx)(lo, {
                                                    className: "token-amount-input",
                                                    value: n,
                                                    onUserInput: function(e) {
                                                        t(e);
                                                    },
                                                }),
                                                E &&
                                                d &&
                                                c &&
                                                "To" !== u &&
                                                Object(r.jsx)(s.c, {
                                                    onClick: i,
                                                    size: "sm",
                                                    variant: "text",
                                                    children: "MAX",
                                                }),
                                            ],
                                        }),
                                        Object(r.jsx)(yo, {
                                            selected: !!d,
                                            className: "open-currency-select-button",
                                            onClick: function() {
                                                p || I(!0);
                                            },
                                            children: Object(r.jsxs)(xo, {
                                                children: [
                                                    v ?
                                                    Object(r.jsx)(co, {
                                                        currency0: v.token0,
                                                        currency1: v.token1,
                                                        size: 16,
                                                        margin: !0,
                                                    }) :
                                                    d ?
                                                    Object(r.jsx)(Mi, {
                                                        currency: d,
                                                        size: "24px",
                                                        style: {
                                                            marginRight: "8px",
                                                        },
                                                    }) :
                                                    null,
                                                    v ?
                                                    Object(r.jsxs)(s.v, {
                                                        children: [
                                                            null === v || void 0 === v ?
                                                            void 0 :
                                                            v.token0.symbol,
                                                            ":",
                                                            null === v || void 0 === v ?
                                                            void 0 :
                                                            v.token1.symbol,
                                                        ],
                                                    }) :
                                                    Object(r.jsx)(s.v, {
                                                        children:
                                                            (d && d.symbol && d.symbol.length > 20 ?
                                                                ""
                                                                .concat(d.symbol.slice(0, 4), "...")
                                                                .concat(
                                                                    d.symbol.slice(
                                                                        d.symbol.length - 5,
                                                                        d.symbol.length
                                                                    )
                                                                ) :
                                                                null === d || void 0 === d ?
                                                                void 0 :
                                                                d.symbol) ||
                                                            Object(r.jsx)(xr, {
                                                                translationId: 82,
                                                                children: "Select a currency",
                                                            }),
                                                    }), !p && Object(r.jsx)(s.i, {}),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }), !p &&
                        l &&
                        Object(r.jsx)($c, {
                            isOpen: T,
                            onDismiss: R,
                            onCurrencySelect: l,
                            selectedCurrency: d,
                            otherSelectedCurrency: x,
                            showCommonBases: C,
                        }),
                    ],
                });
            }

            function ko() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return (
                    (ko = function() {
                        return e;
                    }),
                    e
                );
            }

            function To() {
                var e = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
                return (
                    (To = function() {
                        return e;
                    }),
                    e
                );
            }

            function Io() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
                    ";\n  font-size: 20px;\n\n  &.",
                    " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
                    ";\n  }\n\n  :hover,\n  :focus {\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (Io = function() {
                        return e;
                    }),
                    e
                );
            }

            function Eo() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ",
                    ";\n  font-size: 20px;\n\n  &.",
                    " {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ",
                    ";\n  }\n\n  :hover,\n  :focus {\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (Eo = function() {
                        return e;
                    }),
                    e
                );
            }

            function No() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n",
                ]);
                return (
                    (No = function() {
                        return e;
                    }),
                    e
                );
            }
            var Ro = l.default.div(No()),
                So = "ACTIVE",
                Ao =
                (l.default.a(
                        Eo(),
                        function(e) {
                            return e.theme.colors.textDisabled;
                        },
                        So,
                        function(e) {
                            return e.theme.colors.text;
                        },
                        function(e) {
                            var n = e.theme;
                            return Object(tn.a)(0.1, n.colors.text);
                        }
                    ),
                    Object(l.default)(v.c).attrs({
                        activeClassName: So,
                    })(
                        Io(),
                        function(e) {
                            return e.theme.colors.textDisabled;
                        },
                        So,
                        function(e) {
                            return e.theme.colors.text;
                        },
                        function(e) {
                            var n = e.theme;
                            return Object(tn.a)(0.1, n.colors.text);
                        }
                    ),
                    l.default.div(To())),
                Uo = Object(l.default)(rn.a)(ko(), function(e) {
                    return e.theme.colors.text;
                });

            function Bo() {
                return Object(r.jsx)(Ro, {
                    children: Object(r.jsxs)(Nn, {
                        style: {
                            padding: "1rem",
                        },
                        children: [
                            Object(r.jsx)(v.b, {
                                to: "/pool",
                                children: Object(r.jsx)(Uo, {}),
                            }),
                            Object(r.jsx)(Ao, {
                                children: "Import Pool",
                            }),
                            Object(r.jsx)(Si, {
                                text: "Use this tool to find pairs that don't automatically appear in the interface.",
                            }),
                        ],
                    }),
                });
            }

            function Po(e) {
                var n = e.adding;
                return Object(r.jsx)(Ro, {
                    children: Object(r.jsxs)(Nn, {
                        style: {
                            padding: "1rem",
                        },
                        children: [
                            Object(r.jsx)(v.b, {
                                to: "/pool",
                                children: Object(r.jsx)(Uo, {}),
                            }),
                            Object(r.jsxs)(Ao, {
                                children: [n ? "Add" : "Remove", " Liquidity"],
                            }),
                            Object(r.jsx)(Si, {
                                text: n ?
                                    "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time." :
                                    "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.",
                            }),
                        ],
                    }),
                });
            }
            var _o = t(508),
                Do = t(509);

            function Lo(e) {
                var n,
                    t,
                    r =
                    null ===
                    (n = ta(
                        Ua(null === e || void 0 === e ? void 0 : e.address, !1),
                        "totalSupply"
                    )) ||
                    void 0 === n ||
                    null === (t = n.result) ||
                    void 0 === t ?
                    void 0 :
                    t[0];
                return e && r ? new B.k(e, r.toString()) : void 0;
            }

            function Mo(e) {
                if (e === B.d) return "ETH";
                if (e instanceof B.j) return e.address;
                throw new Error("invalid currency");
            }

            function Fo(e, n) {
                return n && e === B.d ? B.n[n] : e instanceof B.j ? e : void 0;
            }

            function zo(e, n) {
                var t = e && n ? Fo(e.currency, n) : void 0;
                return t && e ? new B.k(t, e.raw) : void 0;
            }

            function Yo(e) {
                return e.equals(B.n[e.chainId]) ? B.d : e;
            }

            function qo() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  color: ",
                    ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n",
                ]);
                return (
                    (qo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Wo() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n",
                ]);
                return (
                    (Wo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Vo() {
                var e = Object(u.a)([
                    "\n  background-color: ",
                    ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
                    ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
                ]);
                return (
                    (Vo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ho() {
                var e = Object(u.a)([
                    "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                ]);
                return (
                    (Ho = function() {
                        return e;
                    }),
                    e
                );
            }

            function Go() {
                var e = Object(u.a)([
                    "\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n",
                ]);
                return (
                    (Go = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ko() {
                var e = Object(u.a)([
                    "\n  height: 22px;\n  width: 22px;\n  background-color: ",
                    ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
                    ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
                    ";\n  }\n  :focus {\n    background-color: ",
                    ";\n    outline: none;\n  }\n",
                ]);
                return (
                    (Ko = function() {
                        return e;
                    }),
                    e
                );
            }

            function Qo() {
                var e = Object(u.a)(["\n  color: ", ";\n"]);
                return (
                    (Qo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Xo() {
                var e = Object(u.a)(["\n  margin-top: 1rem;\n"]);
                return (
                    (Xo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Jo() {
                var e = Object(u.a)([
                    "\n  height: 1px;\n  width: 100%;\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (Jo = function() {
                        return e;
                    }),
                    e
                );
            }

            function Zo() {
                var e = Object(u.a)([
                    "\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        ",
                ]);
                return (
                    (Zo = function() {
                        return e;
                    }),
                    e
                );
            }

            function $o() {
                var e = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"]);
                return (
                    ($o = function() {
                        return e;
                    }),
                    e
                );
            }

            function es() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return (
                    (es = function() {
                        return e;
                    }),
                    e
                );
            }
            var ns = l.default.div(es()),
                ts = l.default.div($o(), function(e) {
                    return e.clickable ? Object(l.css)(Zo()) : null;
                }),
                rs = l.default.div(Jo(), function(e) {
                    return e.theme.colors.tertiary;
                }),
                as = l.default.div(Xo()),
                is = Object(l.default)(s.v)(Qo(), function(e) {
                    var n = e.theme,
                        t = e.severity;
                    return 3 === t || 4 === t ?
                        n.colors.failure :
                        2 === t ?
                        n.colors.binance :
                        1 === t ?
                        n.colors.text :
                        n.colors.success;
                }),
                cs = l.default.button(
                    Ko(),
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.textSubtle;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    }
                ),
                os = (Object(l.default)(s.v)(Go()), l.default.span(Ho())),
                ss = l.default.div(
                    Vo(),
                    function(e) {
                        var n = e.theme;
                        return Object(tn.b)(0.9, n.colors.failure);
                    },
                    function(e) {
                        return e.theme.colors.failure;
                    }
                ),
                us = l.default.div(Wo(), function(e) {
                    var n = e.theme;
                    return Object(tn.b)(0.9, n.colors.failure);
                });

            function ls(e) {
                var n = e.error;
                return Object(r.jsxs)(ss, {
                    children: [
                        Object(r.jsx)(us, {
                            children: Object(r.jsx)(br.a, {
                                size: 24,
                            }),
                        }),
                        Object(r.jsx)("p", {
                            children: n,
                        }),
                    ],
                });
            }
            var ds = Object(l.default)(Ve)(
                qo(),
                function(e) {
                    var n = e.theme;
                    return Object(tn.b)(0.9, n.colors.primary);
                },
                function(e) {
                    return e.theme.colors.primary;
                }
            );

            function bs() {
                var e = Object(u.a)([
                    "\n  border: 1px solid ",
                    ";\n  :hover {\n    border: 1px solid ",
                    ";\n  }\n",
                ]);
                return (
                    (bs = function() {
                        return e;
                    }),
                    e
                );
            }

            function ps() {
                var e = Object(u.a)(["\n  height: 24px;\n"]);
                return (
                    (ps = function() {
                        return e;
                    }),
                    e
                );
            }
            var fs = Object(l.default)(Nn)(ps()),
                js = Object(l.default)(Pt)(
                    bs(),
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        var n = e.theme;
                        return Object(tn.a)(0.06, n.colors.invertedContrast);
                    }
                );

            function ms(e) {
                var n = e.pair,
                    t = e.showUnwrapped,
                    i = void 0 !== t && t,
                    c = Se().account,
                    o = i ? n.token0 : Yo(n.token0),
                    u = i ? n.token1 : Yo(n.token1),
                    l = Object(a.useState)(!1),
                    d = Object(h.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = Va(null !== c && void 0 !== c ? c : void 0, n.liquidityToken),
                    j = Lo(n.liquidityToken),
                    m =
                    n && j && f && B.e.greaterThanOrEqual(j.raw, f.raw) ?
                    [
                        n.getLiquidityValue(n.token0, j, f, !1),
                        n.getLiquidityValue(n.token1, j, f, !1),
                    ] :
                    [void 0, void 0],
                    v = Object(h.a)(m, 2),
                    y = v[0],
                    O = v[1];
                return Object(r.jsx)(r.Fragment, {
                    children: f &&
                        Object(r.jsx)(s.f, {
                            children: Object(r.jsx)(s.g, {
                                children: Object(r.jsxs)(Ve, {
                                    gap: "12px",
                                    children: [
                                        Object(r.jsx)(fs, {
                                            children: Object(r.jsx)(An, {
                                                children: Object(r.jsx)(s.v, {
                                                    style: {
                                                        textTransform: "uppercase",
                                                        fontWeight: 600,
                                                    },
                                                    fontSize: "14px",
                                                    color: "textSubtle",
                                                    children: "LP Tokens in your Wallet",
                                                }),
                                            }),
                                        }),
                                        Object(r.jsxs)(fs, {
                                            onClick: function() {
                                                return p(!b);
                                            },
                                            children: [
                                                Object(r.jsxs)(An, {
                                                    children: [
                                                        Object(r.jsx)(co, {
                                                            currency0: o,
                                                            currency1: u,
                                                            margin: !0,
                                                            size: 20,
                                                        }),
                                                        Object(r.jsxs)(s.v, {
                                                            fontSize: "14px",
                                                            children: [o.symbol, "/", u.symbol],
                                                        }),
                                                    ],
                                                }),
                                                Object(r.jsx)(An, {
                                                    children: Object(r.jsx)(s.v, {
                                                        fontSize: "14px",
                                                        children: f ? f.toSignificant(4) : "-",
                                                    }),
                                                }),
                                            ],
                                        }),
                                        Object(r.jsxs)(Ve, {
                                            gap: "4px",
                                            children: [
                                                Object(r.jsxs)(fs, {
                                                    children: [
                                                        Object(r.jsxs)(s.v, {
                                                            fontSize: "14px",
                                                            children: [o.symbol, ":"],
                                                        }),
                                                        y ?
                                                        Object(r.jsx)(An, {
                                                            children: Object(r.jsx)(s.v, {
                                                                ml: "6px",
                                                                fontSize: "14px",
                                                                children: null === y || void 0 === y ?
                                                                    void 0 :
                                                                    y.toSignificant(6),
                                                            }),
                                                        }) :
                                                        "-",
                                                    ],
                                                }),
                                                Object(r.jsxs)(fs, {
                                                    children: [
                                                        Object(r.jsxs)(s.v, {
                                                            fontSize: "14px",
                                                            children: [u.symbol, ":"],
                                                        }),
                                                        O ?
                                                        Object(r.jsx)(An, {
                                                            children: Object(r.jsx)(s.v, {
                                                                ml: "6px",
                                                                fontSize: "14px",
                                                                children: null === O || void 0 === O ?
                                                                    void 0 :
                                                                    O.toSignificant(6),
                                                            }),
                                                        }) :
                                                        "-",
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                });
            }

            function hs(e) {
                var n = e.pair,
                    t = Se().account,
                    i = Yo(n.token0),
                    c = Yo(n.token1),
                    o = Object(a.useState)(!1),
                    u = Object(h.a)(o, 2),
                    l = u[0],
                    d = u[1],
                    b = Va(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
                    p = Lo(n.liquidityToken),
                    f =
                    b && p && B.e.greaterThanOrEqual(p.raw, b.raw) ?
                    new B.g(b.raw, p.raw) :
                    void 0,
                    j =
                    n && p && b && B.e.greaterThanOrEqual(p.raw, b.raw) ?
                    [
                        n.getLiquidityValue(n.token0, p, b, !1),
                        n.getLiquidityValue(n.token1, p, b, !1),
                    ] :
                    [void 0, void 0],
                    m = Object(h.a)(j, 2),
                    y = m[0],
                    O = m[1];
                return Object(r.jsx)(js, {
                    children: Object(r.jsxs)(Ve, {
                        gap: "12px",
                        children: [
                            Object(r.jsxs)(fs, {
                                onClick: function() {
                                    return d(!l);
                                },
                                style: {
                                    cursor: "pointer",
                                },
                                children: [
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(co, {
                                                currency0: i,
                                                currency1: c,
                                                margin: !0,
                                                size: 20,
                                            }),
                                            Object(r.jsx)(s.v, {
                                                children: i && c ?
                                                    "".concat(i.symbol, "/").concat(c.symbol) :
                                                    Object(r.jsx)(os, {
                                                        children: "Loading",
                                                    }),
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(An, {
                                        children: l ?
                                            Object(r.jsx)(_o.a, {
                                                size: "20",
                                                style: {
                                                    marginLeft: "10px",
                                                },
                                            }) :
                                            Object(r.jsx)(Do.a, {
                                                size: "20",
                                                style: {
                                                    marginLeft: "10px",
                                                },
                                            }),
                                    }),
                                ],
                            }),
                            l &&
                            Object(r.jsxs)(Ve, {
                                gap: "8px",
                                children: [
                                    Object(r.jsxs)(fs, {
                                        children: [
                                            Object(r.jsx)(An, {
                                                children: Object(r.jsxs)(s.v, {
                                                    children: ["Pooled ", i.symbol, ":"],
                                                }),
                                            }),
                                            y ?
                                            Object(r.jsxs)(An, {
                                                children: [
                                                    Object(r.jsx)(s.v, {
                                                        ml: "6px",
                                                        children: null === y || void 0 === y ?
                                                            void 0 :
                                                            y.toSignificant(6),
                                                    }),
                                                    Object(r.jsx)(Mi, {
                                                        size: "20px",
                                                        style: {
                                                            marginLeft: "8px",
                                                        },
                                                        currency: i,
                                                    }),
                                                ],
                                            }) :
                                            "-",
                                        ],
                                    }),
                                    Object(r.jsxs)(fs, {
                                        children: [
                                            Object(r.jsx)(An, {
                                                children: Object(r.jsxs)(s.v, {
                                                    children: ["Pooled ", c.symbol, ":"],
                                                }),
                                            }),
                                            O ?
                                            Object(r.jsxs)(An, {
                                                children: [
                                                    Object(r.jsx)(s.v, {
                                                        ml: "6px",
                                                        children: null === O || void 0 === O ?
                                                            void 0 :
                                                            O.toSignificant(6),
                                                    }),
                                                    Object(r.jsx)(Mi, {
                                                        size: "20px",
                                                        style: {
                                                            marginLeft: "8px",
                                                        },
                                                        currency: c,
                                                    }),
                                                ],
                                            }) :
                                            "-",
                                        ],
                                    }),
                                    Object(r.jsxs)(fs, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                children: "Your pool tokens:",
                                            }),
                                            Object(r.jsx)(s.v, {
                                                children: b ? b.toSignificant(4) : "-",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsxs)(fs, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                children: "Your pool share:",
                                            }),
                                            Object(r.jsx)(s.v, {
                                                children: f ? "".concat(f.toFixed(2), "%") : "-",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsxs)(Nn, {
                                        marginTop: "10px",
                                        children: [
                                            Object(r.jsx)(s.c, {
                                                as: v.b,
                                                to: "/add/".concat(Mo(i), "/").concat(Mo(c)),
                                                style: {
                                                    width: "48%",
                                                },
                                                children: "Add",
                                            }),
                                            Object(r.jsx)(s.c, {
                                                as: v.b,
                                                style: {
                                                    width: "48%",
                                                },
                                                to: "/remove/".concat(Mo(i), "/").concat(Mo(c)),
                                                children: "Remove",
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            var vs,
                ys = new Tr.b(Ta.a);

            function Os(e) {
                var n = Se().chainId,
                    t = Object(a.useMemo)(
                        function() {
                            return e.map(function(e) {
                                var t = Object(h.a)(e, 2),
                                    r = t[0],
                                    a = t[1];
                                return [Fo(r, n), Fo(a, n)];
                            });
                        }, [n, e]
                    ),
                    r = na(
                        Object(a.useMemo)(
                            function() {
                                return t.map(function(e) {
                                    var n = Object(h.a)(e, 2),
                                        t = n[0],
                                        r = n[1];
                                    return t && r && !t.equals(r) ? B.f.getAddress(t, r) : void 0;
                                });
                            }, [t]
                        ),
                        ys,
                        "getReserves"
                    );
                return Object(a.useMemo)(
                    function() {
                        return r.map(function(e, n) {
                            var r = e.result,
                                a = e.loading,
                                i = t[n][0],
                                c = t[n][1];
                            if (a) return [vs.LOADING, null];
                            if (!i || !c || i.equals(c)) return [vs.INVALID, null];
                            if (!r) return [vs.NOT_EXISTS, null];
                            var o = r.reserve0,
                                s = r.reserve1,
                                u = i.sortsBefore(c) ? [i, c] : [c, i],
                                l = Object(h.a)(u, 2),
                                d = l[0],
                                b = l[1];
                            return [
                                vs.EXISTS,
                                new B.f(new B.k(d, o.toString()), new B.k(b, s.toString())),
                            ];
                        });
                    }, [r, t]
                );
            }

            function xs(e, n) {
                return Os([
                    [e, n]
                ])[0];
            }!(function(e) {
                (e[(e.LOADING = 0)] = "LOADING"),
                (e[(e.NOT_EXISTS = 1)] = "NOT_EXISTS"),
                (e[(e.EXISTS = 2)] = "EXISTS"),
                (e[(e.INVALID = 3)] = "INVALID");
            })(vs || (vs = {}));
            var gs = t(500);

            function Cs(e, n, t) {
                var r = ta(
                    Ua(null === e || void 0 === e ? void 0 : e.address, !1),
                    "allowance",
                    Object(a.useMemo)(
                        function() {
                            return [n, t];
                        }, [n, t]
                    )
                ).result;
                return Object(a.useMemo)(
                    function() {
                        return e && r ? new B.k(e, r.toString()) : void 0;
                    }, [e, r]
                );
            }
            var ws;
            !(function(e) {
                (e.INPUT = "INPUT"), (e.OUTPUT = "OUTPUT");
            })(ws || (ws = {}));
            var ks = Object(Ae.b)("swap/selectCurrency"),
                Ts = Object(Ae.b)("swap/switchCurrencies"),
                Is = Object(Ae.b)("swap/typeInput"),
                Es = Object(Ae.b)("swap/replaceSwapState"),
                Ns = Object(Ae.b)("swap/setRecipient"),
                Rs = Object(Ae.b)("transactions/addTransaction"),
                Ss = Object(Ae.b)("transactions/clearAllTransactions"),
                As = Object(Ae.b)("transactions/finalizeTransaction"),
                Us = Object(Ae.b)("transactions/checkedTransaction");

            function Bs() {
                var e = Se(),
                    n = e.chainId,
                    t = e.account,
                    r = Object(x.c)();
                return Object(a.useCallback)(
                    function(e) {
                        var a =
                            arguments.length > 1 && void 0 !== arguments[1] ?
                            arguments[1] :
                            {},
                            i = a.summary,
                            c = a.approval;
                        if (t && n) {
                            var o = e.hash;
                            if (!o) throw Error("No transaction hash found.");
                            r(
                                Rs({
                                    hash: o,
                                    from: t,
                                    chainId: n,
                                    approval: c,
                                    summary: i,
                                })
                            );
                        }
                    }, [r, n, t]
                );
            }

            function Ps() {
                var e,
                    n = Se().chainId,
                    t = Object(x.d)(function(e) {
                        return e.transactions;
                    });
                return n && null !== (e = t[n]) && void 0 !== e ? e : {};
            }

            function _s(e) {
                return new Date().getTime() - e.addedTime < 864e5;
            }
            var Ds,
                Ls,
                Ms = new B.g(B.e.BigInt(20), B.e.BigInt(1e4)),
                Fs = new B.g(B.e.BigInt(1e4), B.e.BigInt(1e4)),
                zs = Fs.subtract(Ms);

            function Ys(e) {
                var n = e ?
                    Fs.subtract(
                        e.route.pairs.reduce(function(e) {
                            return e.multiply(zs);
                        }, Fs)
                    ) :
                    void 0,
                    t = e && n ? e.priceImpact.subtract(n) : void 0;
                return {
                    priceImpactWithoutFee: t ?
                        new B.g(
                            null === t || void 0 === t ? void 0 : t.numerator,
                            null === t || void 0 === t ? void 0 : t.denominator
                        ) :
                        void 0,
                    realizedLPFee: n &&
                        e &&
                        (e.inputAmount instanceof B.k ?
                            new B.k(
                                e.inputAmount.token,
                                n.multiply(e.inputAmount.raw).quotient
                            ) :
                            B.c.ether(n.multiply(e.inputAmount.raw).quotient)),
                };
            }

            function qs(e, n) {
                var t,
                    r,
                    a = ((r = n), new B.g(B.e.BigInt(Math.floor(r)), B.e.BigInt(1e4)));
                return (
                    (t = {}),
                    Object(w.a)(
                        t,
                        ws.INPUT,
                        null === e || void 0 === e ? void 0 : e.maximumAmountIn(a)
                    ),
                    Object(w.a)(
                        t,
                        ws.OUTPUT,
                        null === e || void 0 === e ? void 0 : e.minimumAmountOut(a)
                    ),
                    t
                );
            }

            function Ws(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(Ne)) ?
                    (null === e || void 0 === e ? void 0 : e.lessThan(Ie)) ?
                    (null === e || void 0 === e ? void 0 : e.lessThan(Te)) ?
                    (null === e || void 0 === e ? void 0 : e.lessThan(ke)) ?
                    0 :
                    1 :
                    2 :
                    3 :
                    4;
            }

            function Vs(e, n) {
                return e ?
                    n ?
                    ""
                    .concat(e.executionPrice.invert().toSignificant(6), " ")
                    .concat(e.inputAmount.currency.symbol, " / ")
                    .concat(e.outputAmount.currency.symbol) :
                    ""
                    .concat(e.executionPrice.toSignificant(6), " ")
                    .concat(e.outputAmount.currency.symbol, " / ")
                    .concat(e.inputAmount.currency.symbol) :
                    "";
            }

            function Hs(e, n) {
                var t = Se().account,
                    r = e instanceof B.k ? e.token : void 0,
                    i = Cs(r, null !== t && void 0 !== t ? t : void 0, n),
                    c = (function(e, n) {
                        var t = Ps();
                        return Object(a.useMemo)(
                            function() {
                                return (
                                    "string" === typeof e &&
                                    "string" === typeof n &&
                                    Object.keys(t).some(function(r) {
                                        var a = t[r];
                                        if (!a) return !1;
                                        if (a.receipt) return !1;
                                        var i = a.approval;
                                        return (!!i && i.spender === n && i.tokenAddress === e && _s(a));
                                    })
                                );
                            }, [t, n, e]
                        );
                    })(null === r || void 0 === r ? void 0 : r.address, n),
                    o = Object(a.useMemo)(
                        function() {
                            return e && n ?
                                e.currency === B.d ?
                                Ds.APPROVED :
                                i ?
                                i.lessThan(e) ?
                                c ?
                                Ds.PENDING :
                                Ds.NOT_APPROVED :
                                Ds.APPROVED :
                                Ds.UNKNOWN :
                                Ds.UNKNOWN;
                        }, [e, i, c, n]
                    ),
                    s = Ua(null === r || void 0 === r ? void 0 : r.address),
                    u = Bs(),
                    l = Object(a.useCallback)(
                        Object(m.a)(
                            j.a.mark(function t() {
                                var a, i;
                                return j.a.wrap(function(t) {
                                    for (;;)
                                        switch ((t.prev = t.next)) {
                                            case 0:
                                                if (o === Ds.NOT_APPROVED) {
                                                    t.next = 3;
                                                    break;
                                                }
                                                return (
                                                    console.error("approve was called unnecessarily"),
                                                    t.abrupt("return")
                                                );
                                            case 3:
                                                if (r) {
                                                    t.next = 6;
                                                    break;
                                                }
                                                return console.error("no token"), t.abrupt("return");
                                            case 6:
                                                if (s) {
                                                    t.next = 9;
                                                    break;
                                                }
                                                return (
                                                    console.error("tokenContract is null"),
                                                    t.abrupt("return")
                                                );
                                            case 9:
                                                if (e) {
                                                    t.next = 12;
                                                    break;
                                                }
                                                return (
                                                    console.error("missing amount to approve"),
                                                    t.abrupt("return")
                                                );
                                            case 12:
                                                if (n) {
                                                    t.next = 15;
                                                    break;
                                                }
                                                return console.error("no spender"), t.abrupt("return");
                                            case 15:
                                                return (
                                                    (a = !1),
                                                    (t.next = 18),
                                                    s.estimateGas.approve(n, gs.a).catch(function() {
                                                        return (
                                                            (a = !0),
                                                            s.estimateGas.approve(n, e.raw.toString())
                                                        );
                                                    })
                                                );
                                            case 18:
                                                return (
                                                    (i = t.sent),
                                                    t.abrupt(
                                                        "return",
                                                        s
                                                        .approve(n, a ? e.raw.toString() : gs.a, {
                                                            gasLimit: Gn(i),
                                                        })
                                                        .then(function(t) {
                                                            u(t, {
                                                                summary: "Approve ".concat(e.currency.symbol),
                                                                approval: {
                                                                    tokenAddress: r.address,
                                                                    spender: n,
                                                                },
                                                            });
                                                        })
                                                        .catch(function(e) {
                                                            throw (
                                                                (console.error("Failed to approve token", e),
                                                                    e)
                                                            );
                                                        })
                                                    )
                                                );
                                            case 20:
                                            case "end":
                                                return t.stop();
                                        }
                                }, t);
                            })
                        ), [o, r, s, e, n, u]
                    );
                return [o, l];
            }!(function(e) {
                (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
                (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
                (e[(e.PENDING = 2)] = "PENDING"),
                (e[(e.APPROVED = 3)] = "APPROVED");
            })(Ds || (Ds = {})),
            (function(e) {
                (e.CURRENCY_A = "CURRENCY_A"), (e.CURRENCY_B = "CURRENCY_B");
            })(Ls || (Ls = {}));
            var Gs = Object(Ae.b)("mint/typeInputMint"),
                Ks = Object(Ae.b)("mint/resetMintState"),
                Qs = t(168);

            function Xs(e, n) {
                var t = Object(a.useState)(e),
                    r = Object(h.a)(t, 2),
                    i = r[0],
                    c = r[1];
                return (
                    Object(a.useEffect)(
                        function() {
                            var t = setTimeout(function() {
                                c(e);
                            }, n);
                            return function() {
                                clearTimeout(t);
                            };
                        }, [e, n]
                    ),
                    i
                );
            }

            function Js(e) {
                var n = qn(e),
                    t = (function(e) {
                        var n,
                            t,
                            r,
                            i = Xs(e, 200),
                            c = Object(a.useMemo)(
                                function() {
                                    if (!i || !qn(i)) return [void 0];
                                    try {
                                        return i ?
                                            [
                                                Object(ci.namehash)(
                                                    "".concat(
                                                        i.toLowerCase().substr(2),
                                                        ".addr.reverse"
                                                    )
                                                ),
                                            ] :
                                            [void 0];
                                    } catch (e) {
                                        return [void 0];
                                    }
                                }, [i]
                            ),
                            o = ta(Ba(!1), "resolver", c),
                            s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            u = ta(Pa(s && !oi(s) ? s : void 0, !1), "name", c),
                            l = i !== e;
                        return {
                            ENSName: l ?
                                null :
                                null !==
                                (t =
                                    null === (r = u.result) || void 0 === r ?
                                    void 0 :
                                    r[0]) && void 0 !== t ?
                                t :
                                null,
                            loading: l || o.loading || u.loading,
                        };
                    })(n || void 0),
                    r = (function(e) {
                        var n,
                            t,
                            r,
                            i = Xs(e, 200),
                            c = Object(a.useMemo)(
                                function() {
                                    if (!i) return [void 0];
                                    try {
                                        return i ? [Object(ci.namehash)(i)] : [void 0];
                                    } catch (e) {
                                        return [void 0];
                                    }
                                }, [i]
                            ),
                            o = ta(Ba(!1), "resolver", c),
                            s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            u = ta(Pa(s && !oi(s) ? s : void 0, !1), "addr", c),
                            l = i !== e;
                        return {
                            address: l ?
                                null :
                                null !==
                                (t =
                                    null === (r = u.result) || void 0 === r ?
                                    void 0 :
                                    r[0]) && void 0 !== t ?
                                t :
                                null,
                            loading: l || o.loading || u.loading,
                        };
                    })(e);
                return {
                    loading: t.loading || r.loading,
                    address: n || r.address,
                    name: t.ENSName ? t.ENSName : (!n && r.address && e) || null,
                };
            }

            function Zs(e, n) {
                var t = Se().chainId,
                    r = Object(a.useMemo)(
                        function() {
                            return t ? je[t] : [];
                        }, [t]
                    ),
                    i = Object(a.useMemo)(
                        function() {
                            return aa()(r, function(e) {
                                return r.map(function(n) {
                                    return [e, n];
                                });
                            }).filter(function(e) {
                                var n = Object(h.a)(e, 2),
                                    t = n[0],
                                    r = n[1];
                                return t.address !== r.address;
                            });
                        }, [r]
                    ),
                    c = t ? [Fo(e, t), Fo(n, t)] : [void 0, void 0],
                    o = Object(h.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Os(
                        Object(a.useMemo)(
                            function() {
                                return s && u ?
                                    [
                                        [s, u]
                                    ]
                                    .concat(
                                        Object(se.a)(
                                            r.map(function(e) {
                                                return [s, e];
                                            })
                                        ),
                                        Object(se.a)(
                                            r.map(function(e) {
                                                return [u, e];
                                            })
                                        ),
                                        Object(se.a)(i)
                                    )
                                    .filter(function(e) {
                                        return Boolean(e[0] && e[1]);
                                    })
                                    .filter(function(e) {
                                        var n = Object(h.a)(e, 2),
                                            t = n[0],
                                            r = n[1];
                                        return t.address !== r.address;
                                    })
                                    .filter(function(e) {
                                        var n = Object(h.a)(e, 2),
                                            r = n[0],
                                            a = n[1];
                                        if (!t) return !0;
                                        var i = me[t];
                                        if (!i) return !0;
                                        var c = i[r.address],
                                            o = i[a.address];
                                        return (
                                            (!c && !o) ||
                                            (!(
                                                    c &&
                                                    !c.find(function(e) {
                                                        return a.equals(e);
                                                    })
                                                ) &&
                                                !(
                                                    o &&
                                                    !o.find(function(e) {
                                                        return r.equals(e);
                                                    })
                                                ))
                                        );
                                    }) :
                                    [];
                            }, [s, u, r, i, t]
                        )
                    );
                return Object(a.useMemo)(
                    function() {
                        return Object.values(
                            l
                            .filter(function(e) {
                                return Boolean(e[0] === vs.EXISTS && e[1]);
                            })
                            .reduce(function(e, n) {
                                var t,
                                    r = Object(h.a)(n, 2)[1];
                                return (
                                    (e[r.liquidityToken.address] =
                                        null !== (t = e[r.liquidityToken.address]) && void 0 !== t ?
                                        t :
                                        r),
                                    e
                                );
                            }, {})
                        );
                    }, [l]
                );
            }
            var $s = t(273);

            function eu() {
                return Object(x.d)(function(e) {
                    return e.swap;
                });
            }

            function nu(e, n) {
                if (e && n)
                    try {
                        var t = Object(Qs.parseUnits)(e, n.decimals).toString();
                        if ("0" !== t)
                            return n instanceof B.j ?
                                new B.k(n, B.e.BigInt(t)) :
                                B.c.ether(B.e.BigInt(t));
                    } catch (r) {
                        console.info('Failed to parse input amount: "'.concat(e, '"'), r);
                    }
            }
            var tu = [
                "0xBCfCcbde45cE874adCB698cC183deBcF17952812",
                "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
                "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
            ];

            function ru(e, n) {
                return (
                    e.route.path.some(function(e) {
                        return e.address === n;
                    }) ||
                    e.route.pairs.some(function(e) {
                        return e.liquidityToken.address === n;
                    })
                );
            }

            function au() {
                var e,
                    n,
                    t,
                    r,
                    i,
                    c,
                    o,
                    s = Se().account,
                    u = eu(),
                    l = u.independentField,
                    d = u.typedValue,
                    b = u[ws.INPUT].currencyId,
                    p = u[ws.OUTPUT].currencyId,
                    f = u.recipient,
                    j = za(b),
                    m = za(p),
                    v = Js(null !== f && void 0 !== f ? f : void 0),
                    y =
                    null !== (e = null === f ? s : v.address) && void 0 !== e ?
                    e :
                    null,
                    O = Ha(null !== s && void 0 !== s ? s : void 0, [
                        null !== j && void 0 !== j ? j : void 0,
                        null !== m && void 0 !== m ? m : void 0,
                    ]),
                    x = l === ws.INPUT,
                    g = nu(d, null !== (n = x ? j : m) && void 0 !== n ? n : void 0),
                    C = (function(e, n) {
                        var t = Zs(null === e || void 0 === e ? void 0 : e.currency, n);
                        return Object(a.useMemo)(
                            function() {
                                var r;
                                return e &&
                                    n &&
                                    t.length > 0 &&
                                    null !==
                                    (r = B.l.bestTradeExactIn(t, e, n, {
                                        maxHops: 3,
                                        maxNumResults: 1,
                                    })[0]) &&
                                    void 0 !== r ?
                                    r :
                                    null;
                            }, [t, e, n]
                        );
                    })(x ? g : void 0, null !== m && void 0 !== m ? m : void 0),
                    k = (function(e, n) {
                        var t = Zs(e, null === n || void 0 === n ? void 0 : n.currency);
                        return Object(a.useMemo)(
                            function() {
                                var r;
                                return e &&
                                    n &&
                                    t.length > 0 &&
                                    null !==
                                    (r = B.l.bestTradeExactOut(t, e, n, {
                                        maxHops: 3,
                                        maxNumResults: 1,
                                    })[0]) &&
                                    void 0 !== r ?
                                    r :
                                    null;
                            }, [t, e, n]
                        );
                    })(null !== j && void 0 !== j ? j : void 0, x ? void 0 : g),
                    T = x ? C : k,
                    I =
                    ((t = {}),
                        Object(w.a)(t, ws.INPUT, O[0]),
                        Object(w.a)(t, ws.OUTPUT, O[1]),
                        t),
                    E =
                    ((r = {}),
                        Object(w.a)(r, ws.INPUT, null !== j && void 0 !== j ? j : void 0),
                        Object(w.a)(r, ws.OUTPUT, null !== m && void 0 !== m ? m : void 0),
                        r);
                (s || (i = "Connect Wallet"), g) ||
                (i = null !== (c = i) && void 0 !== c ? c : "Enter an amount");
                (E[ws.INPUT] && E[ws.OUTPUT]) ||
                (i = null !== (o = i) && void 0 !== o ? o : "Select a token");
                var N,
                    R = qn(y);
                if (y && R) {
                    if (-1 !== tu.indexOf(R) || (C && ru(C, R)) || (k && ru(k, R))) {
                        var S;
                        i = null !== (S = i) && void 0 !== S ? S : "Invalid recipient";
                    }
                } else i = null !== (N = i) && void 0 !== N ? N : "Enter a recipient";
                var A = Oa(),
                    U = Object(h.a)(A, 1)[0],
                    P = T && U && qs(T, U),
                    _ = [I[ws.INPUT], P ? P[ws.INPUT] : null],
                    D = _[0],
                    L = _[1];
                return (
                    D &&
                    L &&
                    D.lessThan(L) &&
                    (i = "Insufficient ".concat(L.currency.symbol, " balance")), {
                        currencies: E,
                        currencyBalances: I,
                        parsedAmount: g,
                        v2Trade: null !== T && void 0 !== T ? T : void 0,
                        inputError: i,
                    }
                );
            }

            function iu(e) {
                if ("string" === typeof e) {
                    var n = qn(e);
                    if (n) return n;
                    if ("ETH" === e.toUpperCase()) return "ETH";
                    if (!1 === n) return "ETH";
                }
                return null !== "ETH" ? "ETH" : "";
            }
            var cu =
                /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                ou = /^0x[a-fA-F0-9]{40}$/;

            function su(e) {
                var n,
                    t = iu(e.inputCurrency),
                    r = iu(e.outputCurrency);
                t === r && ("string" === typeof e.outputCurrency ? (t = "") : (r = ""));
                var a,
                    i = (function(e) {
                        return "string" !== typeof e ?
                            null :
                            qn(e) || (cu.test(e) || ou.test(e) ? e : null);
                    })(e.recipient);
                return (
                    (n = {}),
                    Object(w.a)(n, ws.INPUT, {
                        currencyId: t,
                    }),
                    Object(w.a)(n, ws.OUTPUT, {
                        currencyId: r,
                    }),
                    Object(w.a)(
                        n,
                        "typedValue",
                        "string" !== typeof(a = e.exactAmount) || isNaN(parseFloat(a)) ?
                        "" :
                        a
                    ),
                    Object(w.a)(
                        n,
                        "independentField",
                        (function(e) {
                            return "string" === typeof e && "output" === e.toLowerCase() ?
                                ws.OUTPUT :
                                ws.INPUT;
                        })(e.exactField)
                    ),
                    Object(w.a)(n, "recipient", i),
                    n
                );
            }

            function uu() {
                var e = Se().chainId,
                    n = Object(x.c)(),
                    t = (function() {
                        var e = Object(y.g)().search;
                        return Object(a.useMemo)(
                            function() {
                                return e && e.length > 1 ?
                                    Object($s.parse)(e, {
                                        parseArrays: !1,
                                        ignoreQueryPrefix: !0,
                                    }) :
                                    {};
                            }, [e]
                        );
                    })(),
                    r = Object(a.useState)(),
                    i = Object(h.a)(r, 2),
                    c = i[0],
                    o = i[1];
                return (
                    Object(a.useEffect)(
                        function() {
                            if (e) {
                                var r = su(t);
                                n(
                                        Es({
                                            typedValue: r.typedValue,
                                            field: r.independentField,
                                            inputCurrencyId: r[ws.INPUT].currencyId,
                                            outputCurrencyId: r[ws.OUTPUT].currencyId,
                                            recipient: r.recipient,
                                        })
                                    ),
                                    o({
                                        inputCurrencyId: r[ws.INPUT].currencyId,
                                        outputCurrencyId: r[ws.OUTPUT].currencyId,
                                    });
                            }
                        }, [n, e]
                    ),
                    c
                );
            }
            var lu = B.e.BigInt(0);

            function du() {
                return Object(x.d)(function(e) {
                    return e.mint;
                });
            }

            function bu(e) {
                if (e)
                    return e.currency === B.d ?
                        B.e.greaterThan(e.raw, Re) ?
                        B.c.ether(B.e.subtract(e.raw, Re)) :
                        B.c.ether(B.e.BigInt(0)) :
                        e;
            }

            function pu() {
                var e = Object(u.a)([
                    "\n  border: 2px solid ",
                    ";\n  border-radius: 16px;\n  padding: 16px;\n",
                ]);
                return (
                    (pu = function() {
                        return e;
                    }),
                    e
                );
            }
            var fu = l.default.div(pu(), function(e) {
                    return e.theme.colors.borderColor;
                }),
                ju = function(e) {
                    var n = Or(),
                        t = Object(g.c)(),
                        a = t.account,
                        i = t.activate,
                        c = t.deactivate,
                        o = Object(s.z)(
                            function(e) {
                                return i("walletconnect" === e ? oe : ie);
                            },
                            c,
                            a
                        ).onPresentConnectModal;
                    return Object(r.jsx)(
                        s.c,
                        Object(V.a)(
                            Object(V.a)({
                                    onClick: o,
                                },
                                e
                            ), {}, {
                                children: n(292, "Unlock Wallet"),
                            }
                        )
                    );
                };

            function mu() {
                var e = Object(u.a)([
                    "\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n",
                ]);
                return (
                    (mu = function() {
                        return e;
                    }),
                    e
                );
            }
            var hu = Object(l.default)(s.f)(mu());

            function vu(e) {
                var n = e.children;
                return Object(r.jsx)(hu, {
                    children: n,
                });
            }

            function yu() {
                var e = Object(u.a)([
                    "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n",
                ]);
                return (
                    (yu = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ou() {
                var e = Object(u.a)([
                    "\n  padding: 0.5rem 1rem;\n  background-color: ",
                    ";\n  border: 1px solid ",
                    ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ",
                    " {\n    padding: 0.25rem 0.5rem;\n  }\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ",
                    ";\n  :hover {\n    border: 1px solid ",
                    ";\n  }\n  :focus {\n    border: 1px solid ",
                    ";\n    outline: none;\n  }\n",
                ]);
                return (
                    (Ou = function() {
                        return e;
                    }),
                    e
                );
            }

            function xu() {
                var e = Object(u.a)([
                    "\n  :hover {\n    cursor: pointer;\n  }\n  color: ",
                    ";\n",
                ]);
                return (
                    (xu = function() {
                        return e;
                    }),
                    e
                );
            }

            function gu() {
                var e = Object(u.a)(["\n  position: relative;\n"]);
                return (
                    (gu = function() {
                        return e;
                    }),
                    e
                );
            }
            var Cu = l.default.div(gu()),
                wu = Object(l.default)(s.v)(xu(), function(e) {
                    return e.theme.colors.primary;
                }),
                ku =
                (l.default.button(
                        Ou(),
                        function(e) {
                            return e.theme.colors.primaryDark;
                        },
                        function(e) {
                            return e.theme.colors.primaryDark;
                        },
                        function(e) {
                            return e.theme.mediaQueries.sm;
                        },
                        function(e) {
                            return e.theme.colors.primary;
                        },
                        function(e) {
                            return e.theme.colors.primary;
                        },
                        function(e) {
                            return e.theme.colors.primary;
                        }
                    ),
                    l.default.span(yu())),
                Tu = On.body;

            function Iu(e) {
                var n,
                    t,
                    a,
                    i,
                    c,
                    o,
                    u,
                    l,
                    d = e.noLiquidity,
                    b = e.price,
                    p = e.currencies,
                    f = e.parsedAmounts,
                    j = e.poolTokenPercentage,
                    m = e.onAdd;
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsxs)(Nn, {
                            children: [
                                Object(r.jsxs)(Tu, {
                                    children: [
                                        null === (n = p[Ls.CURRENCY_A]) || void 0 === n ?
                                        void 0 :
                                        n.symbol,
                                        " Deposited",
                                    ],
                                }),
                                Object(r.jsxs)(An, {
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: p[Ls.CURRENCY_A],
                                            style: {
                                                marginRight: "8px",
                                            },
                                        }),
                                        Object(r.jsx)(Tu, {
                                            children: null === (t = f[Ls.CURRENCY_A]) || void 0 === t ?
                                                void 0 :
                                                t.toSignificant(6),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsxs)(Nn, {
                            children: [
                                Object(r.jsxs)(Tu, {
                                    children: [
                                        null === (a = p[Ls.CURRENCY_B]) || void 0 === a ?
                                        void 0 :
                                        a.symbol,
                                        " Deposited",
                                    ],
                                }),
                                Object(r.jsxs)(An, {
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: p[Ls.CURRENCY_B],
                                            style: {
                                                marginRight: "8px",
                                            },
                                        }),
                                        Object(r.jsx)(Tu, {
                                            children: null === (i = f[Ls.CURRENCY_B]) || void 0 === i ?
                                                void 0 :
                                                i.toSignificant(6),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsxs)(Nn, {
                            children: [
                                Object(r.jsx)(Tu, {
                                    children: "Rates",
                                }),
                                Object(r.jsx)(Tu, {
                                    children: "1 "
                                        .concat(
                                            null === (c = p[Ls.CURRENCY_A]) || void 0 === c ?
                                            void 0 :
                                            c.symbol,
                                            " = "
                                        )
                                        .concat(
                                            null === b || void 0 === b ? void 0 : b.toSignificant(4),
                                            " "
                                        )
                                        .concat(
                                            null === (o = p[Ls.CURRENCY_B]) || void 0 === o ?
                                            void 0 :
                                            o.symbol
                                        ),
                                }),
                            ],
                        }),
                        Object(r.jsx)(Nn, {
                            style: {
                                justifyContent: "flex-end",
                            },
                            children: Object(r.jsx)(Tu, {
                                children: "1 "
                                    .concat(
                                        null === (u = p[Ls.CURRENCY_B]) || void 0 === u ?
                                        void 0 :
                                        u.symbol,
                                        " = "
                                    )
                                    .concat(
                                        null === b || void 0 === b ?
                                        void 0 :
                                        b.invert().toSignificant(4),
                                        " "
                                    )
                                    .concat(
                                        null === (l = p[Ls.CURRENCY_A]) || void 0 === l ?
                                        void 0 :
                                        l.symbol
                                    ),
                            }),
                        }),
                        Object(r.jsxs)(Nn, {
                            children: [
                                Object(r.jsx)(Tu, {
                                    children: "Share of Pool:",
                                }),
                                Object(r.jsxs)(Tu, {
                                    children: [
                                        d ?
                                        "100" :
                                        null === j || void 0 === j ?
                                        void 0 :
                                        j.toSignificant(4),
                                        "%",
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsx)(s.c, {
                            mt: "20px",
                            onClick: m,
                            children: d ? "Create Pool & Supply" : "Confirm Supply",
                        }),
                    ],
                });
            }
            var Eu = On.black;

            function Nu(e) {
                var n,
                    t,
                    a,
                    i,
                    c,
                    o,
                    u,
                    l,
                    d = e.currencies,
                    b = e.noLiquidity,
                    p = e.poolTokenPercentage,
                    f = e.price;
                return Object(r.jsx)(Ve, {
                    gap: "md",
                    children: Object(r.jsxs)(Sn, {
                        justify: "space-around",
                        gap: "4px",
                        children: [
                            Object(r.jsxs)(Ve, {
                                justify: "center",
                                children: [
                                    Object(r.jsx)(Eu, {
                                        children: null !==
                                            (n =
                                                null === f || void 0 === f ?
                                                void 0 :
                                                f.toSignificant(6)) && void 0 !== n ?
                                            n :
                                            "-",
                                    }),
                                    Object(r.jsxs)(s.v, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [
                                            null === (t = d[Ls.CURRENCY_B]) || void 0 === t ?
                                            void 0 :
                                            t.symbol,
                                            " per ",
                                            null === (a = d[Ls.CURRENCY_A]) || void 0 === a ?
                                            void 0 :
                                            a.symbol,
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsxs)(Ve, {
                                justify: "center",
                                children: [
                                    Object(r.jsx)(Eu, {
                                        children: null !==
                                            (i =
                                                null === f ||
                                                void 0 === f ||
                                                null === (c = f.invert()) ||
                                                void 0 === c ?
                                                void 0 :
                                                c.toSignificant(6)) && void 0 !== i ?
                                            i :
                                            "-",
                                    }),
                                    Object(r.jsxs)(s.v, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: [
                                            null === (o = d[Ls.CURRENCY_A]) || void 0 === o ?
                                            void 0 :
                                            o.symbol,
                                            " per ",
                                            null === (u = d[Ls.CURRENCY_B]) || void 0 === u ?
                                            void 0 :
                                            u.symbol,
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsxs)(Ve, {
                                justify: "center",
                                children: [
                                    Object(r.jsxs)(Eu, {
                                        children: [
                                            b && f ?
                                            "100" :
                                            null !==
                                            (l = (
                                                    null === p || void 0 === p ?
                                                    void 0 :
                                                    p.lessThan(Ce)
                                                ) ?
                                                "<0.01" :
                                                null === p || void 0 === p ?
                                                void 0 :
                                                p.toFixed(2)) && void 0 !== l ?
                                            l :
                                            "0",
                                            "%",
                                        ],
                                    }),
                                    Object(r.jsx)(s.v, {
                                        fontSize: "14px",
                                        color: "textSubtle",
                                        pt: 1,
                                        children: "Share of Pool",
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            var Ru = On.italic;

            function Su(e) {
                var n,
                    t,
                    i,
                    c,
                    o,
                    u,
                    l,
                    d,
                    b,
                    p,
                    f,
                    v = e.match.params,
                    y = v.currencyIdA,
                    O = v.currencyIdB,
                    g = e.history,
                    C = Se(),
                    k = C.account,
                    T = C.chainId,
                    I = C.library,
                    E = za(y),
                    N = za(O),
                    R = Boolean(
                        T &&
                        ((E && Object(B.o)(E, B.n[T])) || (N && Object(B.o)(N, B.n[T])))
                    ),
                    S = ya(),
                    A = du(),
                    U = A.independentField,
                    P = A.typedValue,
                    _ = A.otherTypedValue,
                    D = (function(e, n) {
                        var t,
                            r,
                            i,
                            c,
                            o,
                            s,
                            u,
                            l = Se(),
                            d = l.account,
                            b = l.chainId,
                            p = du(),
                            f = p.independentField,
                            j = p.typedValue,
                            m = p.otherTypedValue,
                            v = f === Ls.CURRENCY_A ? Ls.CURRENCY_B : Ls.CURRENCY_A,
                            y = Object(a.useMemo)(
                                function() {
                                    var t;
                                    return (
                                        (t = {}),
                                        Object(w.a)(
                                            t,
                                            Ls.CURRENCY_A,
                                            null !== e && void 0 !== e ? e : void 0
                                        ),
                                        Object(w.a)(
                                            t,
                                            Ls.CURRENCY_B,
                                            null !== n && void 0 !== n ? n : void 0
                                        ),
                                        t
                                    );
                                }, [e, n]
                            ),
                            O = xs(y[Ls.CURRENCY_A], y[Ls.CURRENCY_B]),
                            x = Object(h.a)(O, 2),
                            g = x[0],
                            C = x[1],
                            k = Lo(null === C || void 0 === C ? void 0 : C.liquidityToken),
                            T = g === vs.NOT_EXISTS || Boolean(k && B.e.equal(k.raw, lu)),
                            I = Ha(null !== d && void 0 !== d ? d : void 0, [
                                y[Ls.CURRENCY_A],
                                y[Ls.CURRENCY_B],
                            ]),
                            E =
                            ((t = {}),
                                Object(w.a)(t, Ls.CURRENCY_A, I[0]),
                                Object(w.a)(t, Ls.CURRENCY_B, I[1]),
                                t),
                            N = nu(j, y[f]),
                            R = Object(a.useMemo)(
                                function() {
                                    if (T) return m && y[v] ? nu(m, y[v]) : void 0;
                                    if (N) {
                                        var t = zo(N, b),
                                            r = [Fo(e, b), Fo(n, b)],
                                            a = r[0],
                                            i = r[1];
                                        if (a && i && t && C) {
                                            var c = v === Ls.CURRENCY_B ? n : e,
                                                o =
                                                v === Ls.CURRENCY_B ?
                                                C.priceOf(a).quote(t) :
                                                C.priceOf(i).quote(t);
                                            return c === B.d ? B.c.ether(o.raw) : o;
                                        }
                                    }
                                }, [T, m, y, v, N, e, b, n, C]
                            ),
                            S =
                            ((r = {}),
                                Object(w.a)(r, Ls.CURRENCY_A, f === Ls.CURRENCY_A ? N : R),
                                Object(w.a)(r, Ls.CURRENCY_B, f === Ls.CURRENCY_A ? R : N),
                                r),
                            A = Object(a.useMemo)(
                                function() {
                                    if (T) {
                                        var n = S[Ls.CURRENCY_A],
                                            t = S[Ls.CURRENCY_B];
                                        return n && t ?
                                            new B.h(n.currency, t.currency, n.raw, t.raw) :
                                            void 0;
                                    }
                                    var r = Fo(e, b);
                                    return C && r ? C.priceOf(r) : void 0;
                                }, [b, e, T, C, S]
                            ),
                            U = Object(a.useMemo)(
                                function() {
                                    var e = S[Ls.CURRENCY_A],
                                        n = S[Ls.CURRENCY_B],
                                        t = [zo(e, b), zo(n, b)],
                                        r = t[0],
                                        a = t[1];
                                    if (C && k && r && a) return C.getLiquidityMinted(k, r, a);
                                }, [S, b, C, k]
                            ),
                            P = Object(a.useMemo)(
                                function() {
                                    if (U && k) return new B.g(U.raw, k.add(U).raw);
                                }, [U, k]
                            );
                        d || (o = "Connect Wallet"),
                            g === vs.INVALID &&
                            (o =
                                null !== (s = o) && void 0 !== s ?
                                s :
                                yr(136, "Invalid pair")),
                            (S[Ls.CURRENCY_A] && S[Ls.CURRENCY_B]) ||
                            (o =
                                null !== (u = o) && void 0 !== u ?
                                u :
                                yr(84, "Enter an amount"));
                        var _,
                            D,
                            L = S[Ls.CURRENCY_A],
                            M = S[Ls.CURRENCY_B];
                        return (
                            L &&
                            (null === E ||
                                void 0 === E ||
                                null === (i = E[Ls.CURRENCY_A]) ||
                                void 0 === i ?
                                void 0 :
                                i.lessThan(L)) &&
                            (o = "Insufficient ".concat(
                                null === (_ = y[Ls.CURRENCY_A]) || void 0 === _ ?
                                void 0 :
                                _.symbol,
                                " balance"
                            )),
                            M &&
                            (null === E ||
                                void 0 === E ||
                                null === (c = E[Ls.CURRENCY_B]) ||
                                void 0 === c ?
                                void 0 :
                                c.lessThan(M)) &&
                            (o = "Insufficient ".concat(
                                null === (D = y[Ls.CURRENCY_B]) || void 0 === D ?
                                void 0 :
                                D.symbol,
                                " balance"
                            )), {
                                dependentField: v,
                                currencies: y,
                                pair: C,
                                pairState: g,
                                currencyBalances: E,
                                parsedAmounts: S,
                                price: A,
                                noLiquidity: T,
                                liquidityMinted: U,
                                poolTokenPercentage: P,
                                error: o,
                            }
                        );
                    })(
                        null !== E && void 0 !== E ? E : void 0,
                        null !== N && void 0 !== N ? N : void 0
                    ),
                    L = D.dependentField,
                    M = D.currencies,
                    F = D.pair,
                    z = D.pairState,
                    Y = D.currencyBalances,
                    q = D.parsedAmounts,
                    W = D.price,
                    H = D.noLiquidity,
                    G = D.liquidityMinted,
                    K = D.poolTokenPercentage,
                    Q = D.error,
                    X = (function(e) {
                        var n = Object(x.c)();
                        return {
                            onFieldAInput: Object(a.useCallback)(
                                function(t) {
                                    n(
                                        Gs({
                                            field: Ls.CURRENCY_A,
                                            typedValue: t,
                                            noLiquidity: !0 === e,
                                        })
                                    );
                                }, [n, e]
                            ),
                            onFieldBInput: Object(a.useCallback)(
                                function(t) {
                                    n(
                                        Gs({
                                            field: Ls.CURRENCY_B,
                                            typedValue: t,
                                            noLiquidity: !0 === e,
                                        })
                                    );
                                }, [n, e]
                            ),
                        };
                    })(H),
                    J = X.onFieldAInput,
                    Z = X.onFieldBInput,
                    $ = !Q,
                    ee = Object(a.useState)(!1),
                    ne = Object(h.a)(ee, 2),
                    te = ne[0],
                    re = ne[1],
                    ae = Object(a.useState)(!1),
                    ie = Object(h.a)(ae, 2),
                    ce = ie[0],
                    oe = ie[1],
                    le = xa(),
                    de = Object(h.a)(le, 1)[0],
                    be = Oa(),
                    pe = Object(h.a)(be, 1)[0],
                    fe = Object(a.useState)(""),
                    je = Object(h.a)(fe, 2),
                    me = je[0],
                    he = je[1],
                    ve =
                    ((i = {}),
                        Object(w.a)(i, U, P),
                        Object(w.a)(
                            i,
                            L,
                            H ?
                            _ :
                            null !==
                            (n =
                                null === (t = q[L]) || void 0 === t ?
                                void 0 :
                                t.toSignificant(6)) && void 0 !== n ?
                            n :
                            ""
                        ),
                        i),
                    ye = [Ls.CURRENCY_A, Ls.CURRENCY_B].reduce(function(e, n) {
                        return Object(V.a)(
                            Object(V.a)({}, e), {},
                            Object(w.a)({}, n, bu(Y[n]))
                        );
                    }, {}),
                    Oe = [Ls.CURRENCY_A, Ls.CURRENCY_B].reduce(function(e, n) {
                        var t, r;
                        return Object(V.a)(
                            Object(V.a)({}, e), {},
                            Object(w.a)({},
                                n,
                                null === (t = ye[n]) || void 0 === t ?
                                void 0 :
                                t.equalTo(null !== (r = q[n]) && void 0 !== r ? r : "0")
                            )
                        );
                    }, {}),
                    xe = Hs(q[Ls.CURRENCY_A], ue),
                    ge = Object(h.a)(xe, 2),
                    Ce = ge[0],
                    we = ge[1],
                    ke = Hs(q[Ls.CURRENCY_B], ue),
                    Te = Object(h.a)(ke, 2),
                    Ie = Te[0],
                    Ee = Te[1],
                    Ne = Bs();

                function Re() {
                    return Ae.apply(this, arguments);
                }

                function Ae() {
                    return (Ae = Object(m.a)(
                        j.a.mark(function e() {
                            var n, t, r, a, i, c, o, s, u, l, d, b, p, f, m, h, v;
                            return j.a.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (T && I && k) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (
                                                ((t = Xn(0, I, k)),
                                                    (r = q[Ls.CURRENCY_A]),
                                                    (a = q[Ls.CURRENCY_B]),
                                                    r && a && E && N)
                                            ) {
                                                e.next = 6;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 6:
                                            return (
                                                (n = {}),
                                                Object(w.a)(n, Ls.CURRENCY_A, Kn(r, H ? 0 : pe)[0]),
                                                Object(w.a)(n, Ls.CURRENCY_B, Kn(a, H ? 0 : pe)[0]),
                                                (i = n),
                                                (c = Math.ceil(Date.now() / 1e3) + de),
                                                E === B.d || N === B.d ?
                                                ((p = N === B.d),
                                                    (o = t.estimateGas.addLiquidityETH),
                                                    (s = t.addLiquidityETH),
                                                    (u = [
                                                        null !==
                                                        (d =
                                                            null === (b = Fo(p ? E : N, T)) ||
                                                            void 0 === b ?
                                                            void 0 :
                                                            b.address) && void 0 !== d ?
                                                        d :
                                                        "",
                                                        (p ? r : a).raw.toString(),
                                                        i[p ? Ls.CURRENCY_A : Ls.CURRENCY_B].toString(),
                                                        i[p ? Ls.CURRENCY_B : Ls.CURRENCY_A].toString(),
                                                        k,
                                                        c,
                                                    ]),
                                                    (l = zn.a.from((p ? a : r).raw.toString()))) :
                                                ((o = t.estimateGas.addLiquidity),
                                                    (s = t.addLiquidity),
                                                    (u = [
                                                        null !==
                                                        (f =
                                                            null === (m = Fo(E, T)) || void 0 === m ?
                                                            void 0 :
                                                            m.address) && void 0 !== f ?
                                                        f :
                                                        "",
                                                        null !==
                                                        (h =
                                                            null === (v = Fo(N, T)) || void 0 === v ?
                                                            void 0 :
                                                            v.address) && void 0 !== h ?
                                                        h :
                                                        "",
                                                        r.raw.toString(),
                                                        a.raw.toString(),
                                                        i[Ls.CURRENCY_A].toString(),
                                                        i[Ls.CURRENCY_B].toString(),
                                                        k,
                                                        c,
                                                    ]),
                                                    (l = null)),
                                                oe(!0),
                                                (e.next = 12),
                                                o
                                                .apply(
                                                    void 0,
                                                    Object(se.a)(u).concat([
                                                        l ?
                                                        {
                                                            value: l,
                                                        } :
                                                        {},
                                                    ])
                                                )
                                                .then(function(e) {
                                                    return s
                                                        .apply(
                                                            void 0,
                                                            Object(se.a)(u).concat([
                                                                Object(V.a)(
                                                                    Object(V.a)({},
                                                                        l ?
                                                                        {
                                                                            value: l,
                                                                        } :
                                                                        {}
                                                                    ), {}, {
                                                                        gasLimit: Gn(e),
                                                                    }
                                                                ),
                                                            ])
                                                        )
                                                        .then(function(e) {
                                                            var n, t, r, a;
                                                            oe(!1),
                                                                Ne(e, {
                                                                    summary: "Add "
                                                                        .concat(
                                                                            null === (n = q[Ls.CURRENCY_A]) ||
                                                                            void 0 === n ?
                                                                            void 0 :
                                                                            n.toSignificant(3),
                                                                            " "
                                                                        )
                                                                        .concat(
                                                                            null === (t = M[Ls.CURRENCY_A]) ||
                                                                            void 0 === t ?
                                                                            void 0 :
                                                                            t.symbol,
                                                                            " and "
                                                                        )
                                                                        .concat(
                                                                            null === (r = q[Ls.CURRENCY_B]) ||
                                                                            void 0 === r ?
                                                                            void 0 :
                                                                            r.toSignificant(3),
                                                                            " "
                                                                        )
                                                                        .concat(
                                                                            null === (a = M[Ls.CURRENCY_B]) ||
                                                                            void 0 === a ?
                                                                            void 0 :
                                                                            a.symbol
                                                                        ),
                                                                }),
                                                                he(e.hash);
                                                        });
                                                })
                                                .catch(function(e) {
                                                    oe(!1),
                                                        4001 !==
                                                        (null === e || void 0 === e ?
                                                            void 0 :
                                                            e.code) && console.error(e);
                                                })
                                            );
                                        case 12:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var Ue = function() {
                        var e, n, t, a;
                        return H ?
                            Object(r.jsx)(Ve, {
                                gap: "20px",
                                children: Object(r.jsx)(_t, {
                                    mt: "20px",
                                    borderRadius: "20px",
                                    children: Object(r.jsxs)(Rn, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "48px",
                                                mr: "8px",
                                                children: ""
                                                    .concat(
                                                        null === (e = M[Ls.CURRENCY_A]) || void 0 === e ?
                                                        void 0 :
                                                        e.symbol,
                                                        "/"
                                                    )
                                                    .concat(
                                                        null === (n = M[Ls.CURRENCY_B]) || void 0 === n ?
                                                        void 0 :
                                                        n.symbol
                                                    ),
                                            }),
                                            Object(r.jsx)(co, {
                                                currency0: M[Ls.CURRENCY_A],
                                                currency1: M[Ls.CURRENCY_B],
                                                size: 30,
                                            }),
                                        ],
                                    }),
                                }),
                            }) :
                            Object(r.jsxs)(Ve, {
                                gap: "20px",
                                children: [
                                    Object(r.jsxs)(Rn, {
                                        style: {
                                            marginTop: "20px",
                                        },
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "48px",
                                                mr: "8px",
                                                children: null === G || void 0 === G ?
                                                    void 0 :
                                                    G.toSignificant(6),
                                            }),
                                            Object(r.jsx)(co, {
                                                currency0: M[Ls.CURRENCY_A],
                                                currency1: M[Ls.CURRENCY_B],
                                                size: 30,
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(Un, {
                                        children: Object(r.jsx)(s.v, {
                                            fontSize: "24px",
                                            children: ""
                                                .concat(
                                                    null === (t = M[Ls.CURRENCY_A]) || void 0 === t ?
                                                    void 0 :
                                                    t.symbol,
                                                    "/"
                                                )
                                                .concat(
                                                    null === (a = M[Ls.CURRENCY_B]) || void 0 === a ?
                                                    void 0 :
                                                    a.symbol,
                                                    " Pool Tokens"
                                                ),
                                        }),
                                    }),
                                    Object(r.jsx)(Ru, {
                                        fontSize: 12,
                                        textAlign: "left",
                                        padding: "8px 0 0 0 ",
                                        children: "Output is estimated. If the price changes by more than ".concat(
                                            pe / 100,
                                            "% your transaction will revert."
                                        ),
                                    }),
                                ],
                            });
                    },
                    Be = function() {
                        return Object(r.jsx)(Iu, {
                            price: W,
                            currencies: M,
                            parsedAmounts: q,
                            noLiquidity: H,
                            onAdd: Re,
                            poolTokenPercentage: K,
                        });
                    },
                    Pe = "Supplying "
                    .concat(
                        null === (c = q[Ls.CURRENCY_A]) || void 0 === c ?
                        void 0 :
                        c.toSignificant(6),
                        " "
                    )
                    .concat(
                        null === (o = M[Ls.CURRENCY_A]) || void 0 === o ?
                        void 0 :
                        o.symbol,
                        " and "
                    )
                    .concat(
                        null === (u = q[Ls.CURRENCY_B]) || void 0 === u ?
                        void 0 :
                        u.toSignificant(6),
                        " "
                    )
                    .concat(
                        null === (l = M[Ls.CURRENCY_B]) || void 0 === l ?
                        void 0 :
                        l.symbol
                    ),
                    _e = Object(a.useCallback)(
                        function(e) {
                            var n = Mo(e);
                            n === O ?
                                g.push("/add/".concat(O, "/").concat(y)) :
                                g.push("/add/".concat(n, "/").concat(O));
                        }, [O, g, y]
                    ),
                    De = Object(a.useCallback)(
                        function(e) {
                            var n = Mo(e);
                            y === n ?
                                O ?
                                g.push("/add/".concat(O, "/").concat(n)) :
                                g.push("/add/".concat(n)) :
                                g.push("/add/".concat(y || "ETH", "/").concat(n));
                        }, [y, g, O]
                    ),
                    Le = Object(a.useCallback)(
                        function() {
                            re(!1), me && J(""), he("");
                        }, [J, me]
                    );
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsx)(kr, {
                            activeIndex: 1,
                        }),
                        Object(r.jsxs)(vu, {
                            children: [
                                Object(r.jsx)(Po, {
                                    adding: !0,
                                }),
                                Object(r.jsxs)(Cu, {
                                    children: [
                                        Object(r.jsx)(fr, {
                                            isOpen: te,
                                            onDismiss: Le,
                                            attemptingTxn: ce,
                                            hash: me,
                                            content: function() {
                                                return Object(r.jsx)(dr, {
                                                    title: H ?
                                                        "You are creating a pool" :
                                                        "You will receive",
                                                    onDismiss: Le,
                                                    topContent: Ue,
                                                    bottomContent: Be,
                                                });
                                            },
                                            pendingText: Pe,
                                        }),
                                        Object(r.jsx)(s.g, {
                                            children: Object(r.jsxs)(Ve, {
                                                gap: "20px",
                                                children: [
                                                    H &&
                                                    Object(r.jsx)(We, {
                                                        children: Object(r.jsx)(fu, {
                                                            children: Object(r.jsxs)(Ve, {
                                                                gap: "12px",
                                                                children: [
                                                                    Object(r.jsx)(s.v, {
                                                                        children: "You are the first liquidity provider.",
                                                                    }),
                                                                    Object(r.jsx)(s.v, {
                                                                        children: "The ratio of tokens you add will set the price of this pool.",
                                                                    }),
                                                                    Object(r.jsx)(s.v, {
                                                                        children: "Once you are happy with the rate click supply to review.",
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                    Object(r.jsx)(wo, {
                                                        value: ve[Ls.CURRENCY_A],
                                                        onUserInput: J,
                                                        onMax: function() {
                                                            var e, n;
                                                            J(
                                                                null !==
                                                                (e =
                                                                    null === (n = ye[Ls.CURRENCY_A]) ||
                                                                    void 0 === n ?
                                                                    void 0 :
                                                                    n.toExact()) && void 0 !== e ?
                                                                e :
                                                                ""
                                                            );
                                                        },
                                                        onCurrencySelect: _e,
                                                        showMaxButton: !Oe[Ls.CURRENCY_A],
                                                        currency: M[Ls.CURRENCY_A],
                                                        id: "add-liquidity-input-tokena",
                                                        showCommonBases: !1,
                                                    }),
                                                    Object(r.jsx)(We, {
                                                        children: Object(r.jsx)(s.a, {
                                                            color: "textSubtle",
                                                        }),
                                                    }),
                                                    Object(r.jsx)(wo, {
                                                        value: ve[Ls.CURRENCY_B],
                                                        onUserInput: Z,
                                                        onCurrencySelect: De,
                                                        onMax: function() {
                                                            var e, n;
                                                            Z(
                                                                null !==
                                                                (e =
                                                                    null === (n = ye[Ls.CURRENCY_B]) ||
                                                                    void 0 === n ?
                                                                    void 0 :
                                                                    n.toExact()) && void 0 !== e ?
                                                                e :
                                                                ""
                                                            );
                                                        },
                                                        showMaxButton: !Oe[Ls.CURRENCY_B],
                                                        currency: M[Ls.CURRENCY_B],
                                                        id: "add-liquidity-input-tokenb",
                                                        showCommonBases: !1,
                                                    }),
                                                    M[Ls.CURRENCY_A] &&
                                                    M[Ls.CURRENCY_B] &&
                                                    z !== vs.INVALID &&
                                                    Object(r.jsxs)("div", {
                                                        children: [
                                                            Object(r.jsx)(s.v, {
                                                                style: {
                                                                    textTransform: "uppercase",
                                                                    fontWeight: 600,
                                                                },
                                                                color: "textSubtle",
                                                                fontSize: "12px",
                                                                mb: "2px",
                                                                children: H ?
                                                                    "Initial prices and pool share" :
                                                                    "Prices and pool share",
                                                            }),
                                                            Object(r.jsx)(fu, {
                                                                children: Object(r.jsx)(Nu, {
                                                                    currencies: M,
                                                                    poolTokenPercentage: K,
                                                                    noLiquidity: H,
                                                                    price: W,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    k ?
                                                    Object(r.jsxs)(Ve, {
                                                        gap: "md",
                                                        children: [
                                                            (Ce === Ds.NOT_APPROVED ||
                                                                Ce === Ds.PENDING ||
                                                                Ie === Ds.NOT_APPROVED ||
                                                                Ie === Ds.PENDING) &&
                                                            $ &&
                                                            Object(r.jsxs)(Nn, {
                                                                children: [
                                                                    Ce !== Ds.APPROVED &&
                                                                    Object(r.jsx)(s.c, {
                                                                        onClick: we,
                                                                        disabled: Ce === Ds.PENDING,
                                                                        style: {
                                                                            width: Ie !== Ds.APPROVED ?
                                                                                "48%" :
                                                                                "100%",
                                                                        },
                                                                        children: Ce === Ds.PENDING ?
                                                                            Object(r.jsxs)(ku, {
                                                                                children: [
                                                                                    "Approving ",
                                                                                    null ===
                                                                                    (d =
                                                                                        M[Ls.CURRENCY_A]) ||
                                                                                    void 0 === d ?
                                                                                    void 0 :
                                                                                    d.symbol,
                                                                                ],
                                                                            }) :
                                                                            "Approve ".concat(
                                                                                null ===
                                                                                (b = M[Ls.CURRENCY_A]) ||
                                                                                void 0 === b ?
                                                                                void 0 :
                                                                                b.symbol
                                                                            ),
                                                                    }),
                                                                    Ie !== Ds.APPROVED &&
                                                                    Object(r.jsx)(s.c, {
                                                                        onClick: Ee,
                                                                        disabled: Ie === Ds.PENDING,
                                                                        style: {
                                                                            width: Ce !== Ds.APPROVED ?
                                                                                "48%" :
                                                                                "100%",
                                                                        },
                                                                        children: Ie === Ds.PENDING ?
                                                                            Object(r.jsxs)(ku, {
                                                                                children: [
                                                                                    "Approving ",
                                                                                    null ===
                                                                                    (p =
                                                                                        M[Ls.CURRENCY_B]) ||
                                                                                    void 0 === p ?
                                                                                    void 0 :
                                                                                    p.symbol,
                                                                                ],
                                                                            }) :
                                                                            "Approve ".concat(
                                                                                null ===
                                                                                (f = M[Ls.CURRENCY_B]) ||
                                                                                void 0 === f ?
                                                                                void 0 :
                                                                                f.symbol
                                                                            ),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(r.jsx)(s.c, {
                                                                onClick: function() {
                                                                    S ? Re() : re(!0);
                                                                },
                                                                disabled:
                                                                    !$ ||
                                                                    Ce !== Ds.APPROVED ||
                                                                    Ie !== Ds.APPROVED,
                                                                variant:
                                                                    !$ && q[Ls.CURRENCY_A] && q[Ls.CURRENCY_B] ?
                                                                    "danger" :
                                                                    "primary",
                                                                fullWidth: !0,
                                                                children: null !== Q && void 0 !== Q ? Q : "Supply",
                                                            }),
                                                        ],
                                                    }) :
                                                    Object(r.jsx)(ju, {
                                                        fullWidth: !0,
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        F && !H && z !== vs.INVALID ?
                        Object(r.jsx)(Ve, {
                            style: {
                                maxWidth: "436px",
                                width: "100%",
                                marginTop: "1rem",
                            },
                            children: Object(r.jsx)(ms, {
                                showUnwrapped: R,
                                pair: F,
                            }),
                        }) :
                        null,
                    ],
                });
            }
            var Au = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function Uu(e) {
                var n = e.match.params.currencyIdA.match(Au);
                return (null === n || void 0 === n ? void 0 : n.length) ?
                    Object(r.jsx)(y.a, {
                        to: "/add/".concat(n[1], "/").concat(n[2]),
                    }) :
                    Object(r.jsx)(Su, Object(V.a)({}, e));
            }

            function Bu(e) {
                var n = e.match.params,
                    t = n.currencyIdA,
                    a = n.currencyIdB;
                return t.toLowerCase() === a.toLowerCase() ?
                    Object(r.jsx)(y.a, {
                        to: "/add/".concat(t),
                    }) :
                    Object(r.jsx)(Su, Object(V.a)({}, e));
            }
            var Pu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function _u(e) {
                var n = e.match.params.tokens;
                if (!Pu.test(n))
                    return Object(r.jsx)(y.a, {
                        to: "/pool",
                    });
                var t = n.split("-"),
                    a = Object(h.a)(t, 2),
                    i = a[0],
                    c = a[1];
                return Object(r.jsx)(y.a, {
                    to: "/remove/".concat(i, "/").concat(c),
                });
            }

            function Du() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n",
                ]);
                return (
                    (Du = function() {
                        return e;
                    }),
                    e
                );
            }

            function Lu() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ",
                    ":first-child {\n    padding-left: 0;\n  }\n\n  ",
                    ":last-child {\n    padding-right: 0;\n  }\n\n  ",
                    " {\n    flex-direction: row;\n  }\n",
                ]);
                return (
                    (Lu = function() {
                        return e;
                    }),
                    e
                );
            }

            function Mu() {
                var e = Object(u.a)(["\n  padding: 0 4px;\n"]);
                return (
                    (Mu = function() {
                        return e;
                    }),
                    e
                );
            }

            function Fu() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return (
                    (Fu = function() {
                        return e;
                    }),
                    e
                );
            }
            var zu = l.default.div(Fu()),
                Yu = l.default.div(Mu()),
                qu = l.default.div(Lu(), Yu, Yu, function(e) {
                    return e.theme.mediaQueries.sm;
                }),
                Wu = l.default.div(Du()),
                Vu = [{
                        label: "0.1%",
                        value: 0.1,
                    },
                    {
                        label: "0.5%",
                        value: 0.5,
                    },
                    {
                        label: "1%",
                        value: 1,
                    },
                ],
                Hu = function() {
                    var e = Oa(),
                        n = Object(h.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = Object(a.useState)(t / 100),
                        o = Object(h.a)(c, 2),
                        u = o[0],
                        l = o[1],
                        d = Object(a.useState)(null),
                        b = Object(h.a)(d, 2),
                        p = b[0],
                        f = b[1];
                    return (
                        Object(a.useEffect)(
                            function() {
                                try {
                                    var e = 100 * u;
                                    !Number.isNaN(e) && e > 0 && e < 5e3 ?
                                        (i(e), f(null)) :
                                        f("Enter a valid slippage percentage");
                                } catch (n) {
                                    f("Enter a valid slippage percentage");
                                }
                            }, [u, f, i]
                        ),
                        Object(a.useEffect)(
                            function() {
                                t < 50 ?
                                    f("Your transaction may fail") :
                                    t > 500 && f("Your transaction may be frontrun");
                            }, [t, f]
                        ),
                        Object(r.jsxs)(zu, {
                            children: [
                                Object(r.jsxs)(Wu, {
                                    children: [
                                        Object(r.jsx)(s.v, {
                                            style: {
                                                fontWeight: 600,
                                            },
                                            children: Object(r.jsx)(xr, {
                                                translationId: 88,
                                                children: "Slippage tolerance",
                                            }),
                                        }),
                                        Object(r.jsx)(Si, {
                                            text: "Your transaction will revert if the price changes unfavorably by more than this percentage.",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(qu, {
                                    children: [
                                        Object(r.jsx)(s.l, {
                                            mb: ["8px", 0],
                                            mr: [0, "8px"],
                                            children: Vu.map(function(e) {
                                                var n = e.label,
                                                    t = e.value;
                                                return Object(r.jsx)(
                                                    Yu, {
                                                        children: Object(r.jsx)(s.c, {
                                                            variant: u === t ? "primary" : "tertiary",
                                                            onClick: function() {
                                                                return l(t);
                                                            },
                                                            children: n,
                                                        }),
                                                    },
                                                    t
                                                );
                                            }),
                                        }),
                                        Object(r.jsxs)(s.l, {
                                            alignItems: "center",
                                            children: [
                                                Object(r.jsx)(Yu, {
                                                    children: Object(r.jsx)(s.o, {
                                                        type: "number",
                                                        scale: "lg",
                                                        step: 0.1,
                                                        min: 0.1,
                                                        placeholder: "5%",
                                                        value: u,
                                                        onChange: function(e) {
                                                            var n = e.target.value;
                                                            l(parseFloat(n));
                                                        },
                                                        isWarning: null !== p,
                                                    }),
                                                }),
                                                Object(r.jsx)(Yu, {
                                                    children: Object(r.jsx)(s.v, {
                                                        fontSize: "18px",
                                                        children: "%",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                p &&
                                Object(r.jsx)(s.v, {
                                    mt: "8px",
                                    color: "failure",
                                    children: p,
                                }),
                            ],
                        })
                    );
                };

            function Gu() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  display: inline-flex;\n\n  & > ",
                    " {\n    max-width: 100px;\n  }\n\n  & > ",
                    " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n",
                ]);
                return (
                    (Gu = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ku() {
                var e = Object(u.a)([
                    "\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n",
                ]);
                return (
                    (Ku = function() {
                        return e;
                    }),
                    e
                );
            }

            function Qu() {
                var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
                return (
                    (Qu = function() {
                        return e;
                    }),
                    e
                );
            }
            var Xu = l.default.div(Qu()),
                Ju = l.default.div(Ku()),
                Zu = l.default.div(Gu(), s.o, s.v),
                $u = function() {
                    var e = xa(),
                        n = Object(h.a)(e, 2),
                        t = n[0],
                        i = n[1],
                        c = Object(a.useState)(t / 60),
                        o = Object(h.a)(c, 2),
                        u = o[0],
                        l = o[1],
                        d = Object(a.useState)(null),
                        b = Object(h.a)(d, 2),
                        p = b[0],
                        f = b[1];
                    return (
                        Object(a.useEffect)(
                            function() {
                                try {
                                    var e = 60 * u;
                                    !Number.isNaN(e) && e > 0 ?
                                        (i(e), f(null)) :
                                        f("Enter a valid deadline");
                                } catch (n) {
                                    f("Enter a valid deadline");
                                }
                            }, [u, f, i]
                        ),
                        Object(r.jsxs)(Xu, {
                            children: [
                                Object(r.jsxs)(Ju, {
                                    children: [
                                        Object(r.jsx)(s.v, {
                                            style: {
                                                fontWeight: 600,
                                            },
                                            children: Object(r.jsx)(xr, {
                                                translationId: 90,
                                                children: "Transaction deadline",
                                            }),
                                        }),
                                        Object(r.jsx)(Si, {
                                            text: "Your transaction will revert if it is pending for more than this long.",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Zu, {
                                    children: [
                                        Object(r.jsx)(s.o, {
                                            type: "number",
                                            step: "1",
                                            min: "1",
                                            value: u,
                                            onChange: function(e) {
                                                var n = e.target.value;
                                                l(parseInt(n, 10));
                                            },
                                        }),
                                        Object(r.jsx)(s.v, {
                                            children: "Minutes",
                                        }),
                                    ],
                                }),
                                p &&
                                Object(r.jsx)(s.v, {
                                    mt: "8px",
                                    color: "failure",
                                    children: p,
                                }),
                            ],
                        })
                    );
                },
                el = function() {
                    return null;
                },
                nl = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? el : n;
                    return Object(r.jsxs)(s.r, {
                        title: "Settings",
                        onDismiss: t,
                        children: [Object(r.jsx)(Hu, {}), Object(r.jsx)($u, {})],
                    });
                },
                tl = function() {
                    return null;
                },
                rl = function(e, n) {
                    return n.addedTime - e.addedTime;
                },
                al = function(e) {
                    var n = e.onDismiss,
                        t = void 0 === n ? tl : n,
                        i = Se(),
                        c = i.account,
                        o = i.chainId,
                        u = Ps(),
                        l = Object(a.useMemo)(
                            function() {
                                return Object.values(u).filter(_s).sort(rl);
                            }, [u]
                        );
                    return Object(r.jsxs)(s.r, {
                        title: "Recent Transactions",
                        onDismiss: t,
                        children: [!c &&
                            Object(r.jsxs)(s.l, {
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                children: [
                                    Object(r.jsx)(s.v, {
                                        mb: "8px",
                                        bold: !0,
                                        children: "Please connect your wallet to view your recent transactions",
                                    }),
                                    Object(r.jsx)(s.c, {
                                        variant: "tertiary",
                                        size: "sm",
                                        onClick: t,
                                        children: "Close",
                                    }),
                                ],
                            }),
                            c &&
                            o &&
                            0 === l.length &&
                            Object(r.jsxs)(s.l, {
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center",
                                children: [
                                    Object(r.jsx)(s.v, {
                                        mb: "8px",
                                        bold: !0,
                                        children: "No recent transactions",
                                    }),
                                    Object(r.jsx)(s.c, {
                                        variant: "tertiary",
                                        size: "sm",
                                        onClick: t,
                                        children: "Close",
                                    }),
                                ],
                            }),
                            c &&
                            o &&
                            l.map(function(e) {
                                var n = e.hash,
                                    t = e.summary,
                                    a = (function(e) {
                                        var n = e.hash,
                                            t = e.receipt;
                                        return n ?
                                            n &&
                                            1 === (null === t || void 0 === t ? void 0 : t.status) ?
                                            {
                                                icon: Object(r.jsx)(s.h, {
                                                    color: "success",
                                                }),
                                                color: "success",
                                            } :
                                            {
                                                icon: Object(r.jsx)(s.k, {
                                                    color: "failure",
                                                }),
                                                color: "failure",
                                            } :
                                            {
                                                icon: Object(r.jsx)(xt, {}),
                                                color: "text",
                                            };
                                    })(e),
                                    i = a.icon,
                                    c = a.color;
                                return Object(r.jsx)(r.Fragment, {
                                    children: Object(r.jsxs)(
                                        s.l, {
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            mb: "4px",
                                            children: [
                                                Object(r.jsx)(s.p, {
                                                    href: Vn(o, n, "transaction"),
                                                    color: c,
                                                    children: null !== t && void 0 !== t ? t : n,
                                                }),
                                                i,
                                            ],
                                        },
                                        n
                                    ),
                                });
                            }),
                        ],
                    });
                };

            function il() {
                var e = Object(u.a)(["\n  flex: 1;\n"]);
                return (
                    (il = function() {
                        return e;
                    }),
                    e
                );
            }

            function cl() {
                var e = Object(u.a)([
                    "\n  border-bottom: 1px solid ",
                    ";\n  padding: 24px;\n",
                ]);
                return (
                    (cl = function() {
                        return e;
                    }),
                    e
                );
            }
            var ol,
                sl = function() {
                    return Object(r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(r.jsx)("path", {
                            d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z",
                            fill: "currentColor",
                        }),
                    });
                },
                ul = function() {
                    return Object(r.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: Object(r.jsx)("path", {
                            d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
                            fill: "currentColor",
                        }),
                    });
                },
                ll = l.default.div(cl(), function(e) {
                    return e.theme.colors.borderColor;
                }),
                dl = l.default.div(il()),
                bl = function(e) {
                    var n = e.title,
                        t = e.description,
                        a = e.children,
                        i = Object(s.y)(Object(r.jsx)(nl, {})),
                        c = Object(h.a)(i, 1)[0],
                        o = Object(s.y)(Object(r.jsx)(al, {})),
                        u = Object(h.a)(o, 1)[0];
                    return Object(r.jsxs)(ll, {
                        children: [
                            Object(r.jsxs)(s.l, {
                                alignItems: "center",
                                children: [
                                    Object(r.jsxs)(dl, {
                                        children: [
                                            Object(r.jsx)(s.m, {
                                                mb: "8px",
                                                children: n,
                                            }),
                                            t &&
                                            Object(r.jsx)(s.v, {
                                                color: "textSubtle",
                                                fontSize: "14px",
                                                children: t,
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(s.n, {
                                        variant: "text",
                                        onClick: c,
                                        title: "Settings",
                                        children: Object(r.jsx)(sl, {}),
                                    }),
                                    Object(r.jsx)(s.n, {
                                        variant: "text",
                                        onClick: u,
                                        title: "Recent transactions",
                                        children: Object(r.jsx)(ul, {}),
                                    }),
                                ],
                            }),
                            a &&
                            Object(r.jsx)(s.v, {
                                mt: "16px",
                                children: a,
                            }),
                        ],
                    });
                },
                pl = On.body;

            function fl() {
                var e = Object(a.useContext)(l.ThemeContext),
                    n = Se().account,
                    t = (function() {
                        var e = Se().chainId,
                            n = Da(),
                            t = Object(a.useMemo)(
                                function() {
                                    var n;
                                    return e && null !== (n = ye[e]) && void 0 !== n ? n : [];
                                }, [e]
                            ),
                            r = Object(a.useMemo)(
                                function() {
                                    return e ?
                                        aa()(Object.keys(n), function(t) {
                                            var r,
                                                a = n[t];
                                            return (null !== (r = ve[e]) && void 0 !== r ? r : [])
                                                .map(function(e) {
                                                    return e.address === a.address ? null : [e, a];
                                                })
                                                .filter(function(e) {
                                                    return null !== e;
                                                });
                                        }) :
                                        [];
                                }, [n, e]
                            ),
                            i = Object(x.d)(function(e) {
                                return e.user.pairs;
                            }),
                            c = Object(a.useMemo)(
                                function() {
                                    if (!e || !i) return [];
                                    var n = i[e];
                                    return n ?
                                        Object.keys(n).map(function(e) {
                                            return [va(n[e].token0), va(n[e].token1)];
                                        }) :
                                        [];
                                }, [i, e]
                            ),
                            o = Object(a.useMemo)(
                                function() {
                                    return c.concat(r).concat(t);
                                }, [r, t, c]
                            );
                        return Object(a.useMemo)(
                            function() {
                                var e = o.reduce(function(e, n) {
                                    var t = Object(h.a)(n, 2),
                                        r = t[0],
                                        a = t[1],
                                        i = r.sortsBefore(a),
                                        c = i ?
                                        "".concat(r.address, ":").concat(a.address) :
                                        "".concat(a.address, ":").concat(r.address);
                                    return e[c] || (e[c] = i ? [r, a] : [a, r]), e;
                                }, {});
                                return Object.keys(e).map(function(n) {
                                    return e[n];
                                });
                            }, [o]
                        );
                    })(),
                    i = Object(a.useMemo)(
                        function() {
                            return t.map(function(e) {
                                return {
                                    liquidityToken: wa(e),
                                    tokens: e,
                                };
                            });
                        }, [t]
                    ),
                    c = qa(
                        null !== n && void 0 !== n ? n : void 0,
                        Object(a.useMemo)(
                            function() {
                                return i.map(function(e) {
                                    return e.liquidityToken;
                                });
                            }, [i]
                        )
                    ),
                    o = Object(h.a)(c, 2),
                    u = o[0],
                    d = o[1],
                    b = Object(a.useMemo)(
                        function() {
                            return i.filter(function(e) {
                                var n,
                                    t = e.liquidityToken;
                                return null === (n = u[t.address]) || void 0 === n ?
                                    void 0 :
                                    n.greaterThan("0");
                            });
                        }, [i, u]
                    ),
                    p = Os(
                        b.map(function(e) {
                            return e.tokens;
                        })
                    ),
                    f =
                    d ||
                    (null === p || void 0 === p ? void 0 : p.length) < b.length ||
                    (null === p || void 0 === p ?
                        void 0 :
                        p.some(function(e) {
                            return !e;
                        })),
                    j = p
                    .map(function(e) {
                        return Object(h.a)(e, 2)[1];
                    })
                    .filter(function(e) {
                        return Boolean(e);
                    });
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsx)(kr, {
                            activeIndex: 1,
                        }),
                        Object(r.jsxs)(vu, {
                            children: [
                                Object(r.jsx)(bl, {
                                    title: "Liquidity",
                                    description: "Add liquidity to receive LP tokens",
                                    children: Object(r.jsx)(s.c, {
                                        id: "join-pool-button",
                                        as: v.b,
                                        to: "/add/ETH",
                                        children: Object(r.jsx)(xr, {
                                            translationId: 100,
                                            children: "Add Liquidity",
                                        }),
                                    }),
                                }),
                                Object(r.jsx)(Ve, {
                                    gap: "lg",
                                    justify: "center",
                                    children: Object(r.jsx)(s.g, {
                                        children: Object(r.jsxs)(Ve, {
                                            gap: "12px",
                                            style: {
                                                width: "100%",
                                            },
                                            children: [
                                                Object(r.jsxs)(Nn, {
                                                    padding: "0 8px",
                                                    children: [
                                                        Object(r.jsx)(s.v, {
                                                            color: e.colors.text,
                                                            children: Object(r.jsx)(xr, {
                                                                translationId: 102,
                                                                children: "Your Liquidity",
                                                            }),
                                                        }),
                                                        Object(r.jsx)(Si, {
                                                            text: yr(
                                                                130,
                                                                "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below."
                                                            ),
                                                        }),
                                                    ],
                                                }),
                                                n ?
                                                f ?
                                                Object(r.jsx)(_t, {
                                                    padding: "40px",
                                                    children: Object(r.jsx)(pl, {
                                                        color: e.colors.textDisabled,
                                                        textAlign: "center",
                                                        children: Object(r.jsx)(os, {
                                                            children: "Loading",
                                                        }),
                                                    }),
                                                }) :
                                                (null === j || void 0 === j ? void 0 : j.length) >
                                                0 ?
                                                Object(r.jsx)(r.Fragment, {
                                                    children: j.map(function(e) {
                                                        return Object(r.jsx)(
                                                            hs, {
                                                                pair: e,
                                                            },
                                                            e.liquidityToken.address
                                                        );
                                                    }),
                                                }) :
                                                Object(r.jsx)(_t, {
                                                    padding: "40px",
                                                    children: Object(r.jsx)(pl, {
                                                        color: e.colors.textDisabled,
                                                        textAlign: "center",
                                                        children: Object(r.jsx)(xr, {
                                                            translationId: 104,
                                                            children: "No liquidity found.",
                                                        }),
                                                    }),
                                                }) :
                                                Object(r.jsx)(_t, {
                                                    padding: "40px",
                                                    children: Object(r.jsx)(pl, {
                                                        color: e.colors.textDisabled,
                                                        textAlign: "center",
                                                        children: "Connect to a wallet to view your liquidity.",
                                                    }),
                                                }),
                                                Object(r.jsxs)("div", {
                                                    children: [
                                                        Object(r.jsxs)(s.v, {
                                                            fontSize: "14px",
                                                            style: {
                                                                padding: ".5rem 0 .5rem 0",
                                                            },
                                                            children: [
                                                                yr(106, "Don't see a pool you joined?"),
                                                                " ",
                                                                Object(r.jsx)(jn, {
                                                                    id: "import-pool-link",
                                                                    to: "/find",
                                                                    children: yr(108, "Import it."),
                                                                }),
                                                            ],
                                                        }),
                                                        Object(r.jsx)(s.v, {
                                                            fontSize: "14px",
                                                            style: {
                                                                padding: ".5rem 0 .5rem 0",
                                                            },
                                                            children: "Or, if you staked your LP tokens in a farm, unstake them to see them here.",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }

            function jl() {
                var e,
                    n = Se().account,
                    t = Object(a.useState)(!1),
                    i = Object(h.a)(t, 2),
                    c = i[0],
                    o = i[1],
                    u = Object(a.useState)(ol.TOKEN1),
                    l = Object(h.a)(u, 2),
                    d = l[0],
                    b = l[1],
                    p = Object(a.useState)(B.d),
                    f = Object(h.a)(p, 2),
                    j = f[0],
                    m = f[1],
                    v = Object(a.useState)(null),
                    y = Object(h.a)(v, 2),
                    O = y[0],
                    g = y[1],
                    C = xs(
                        null !== j && void 0 !== j ? j : void 0,
                        null !== O && void 0 !== O ? O : void 0
                    ),
                    w = Object(h.a)(C, 2),
                    k = w[0],
                    T = w[1],
                    I = (function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)(
                            function(n) {
                                e(
                                    ba({
                                        serializedPair: Ca(n),
                                    })
                                );
                            }, [e]
                        );
                    })();
                Object(a.useEffect)(
                    function() {
                        T && I(T);
                    }, [T, I]
                );
                var E =
                    k === vs.NOT_EXISTS ||
                    Boolean(
                        k === vs.EXISTS &&
                        T &&
                        B.e.equal(T.reserve0.raw, B.e.BigInt(0)) &&
                        B.e.equal(T.reserve1.raw, B.e.BigInt(0))
                    ),
                    N = Va(
                        null !== n && void 0 !== n ? n : void 0,
                        null === T || void 0 === T ? void 0 : T.liquidityToken
                    ),
                    R = Boolean(N && B.e.greaterThan(N.raw, B.e.BigInt(0))),
                    S = Object(a.useCallback)(
                        function(e) {
                            d === ol.TOKEN0 ? m(e) : g(e);
                        }, [d]
                    ),
                    A = Object(a.useCallback)(
                        function() {
                            o(!1);
                        }, [o]
                    ),
                    U = Object(r.jsx)(_t, {
                        padding: "45px 10px",
                        children: Object(r.jsx)(s.v, {
                            style: {
                                textAlign: "center",
                            },
                            children: n ?
                                "Select a token to find your liquidity." :
                                "Connect to a wallet to find pools",
                        }),
                    });
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsx)(kr, {
                            activeIndex: 1,
                        }),
                        Object(r.jsxs)(vu, {
                            children: [
                                Object(r.jsx)(Bo, {}),
                                Object(r.jsxs)(s.g, {
                                    children: [
                                        Object(r.jsxs)(Ve, {
                                            gap: "md",
                                            children: [
                                                Object(r.jsx)(s.c, {
                                                    variant: "secondary",
                                                    onClick: function() {
                                                        o(!0), b(ol.TOKEN0);
                                                    },
                                                    startIcon: j ?
                                                        Object(r.jsx)(Mi, {
                                                            currency: j,
                                                            style: {
                                                                marginRight: ".5rem",
                                                            },
                                                        }) :
                                                        null,
                                                    endIcon: Object(r.jsx)(s.i, {
                                                        width: "24px",
                                                        color: "textSubtle",
                                                    }),
                                                    fullWidth: !0,
                                                    children: j ?
                                                        j.symbol :
                                                        Object(r.jsx)(xr, {
                                                            translationId: 82,
                                                            children: "Select a Token",
                                                        }),
                                                }),
                                                Object(r.jsx)(We, {
                                                    children: Object(r.jsx)(s.a, {
                                                        color: "textSubtle",
                                                    }),
                                                }),
                                                Object(r.jsx)(s.c, {
                                                    variant: "secondary",
                                                    onClick: function() {
                                                        o(!0), b(ol.TOKEN1);
                                                    },
                                                    startIcon: O ?
                                                        Object(r.jsx)(Mi, {
                                                            currency: O,
                                                            style: {
                                                                marginRight: ".5rem",
                                                            },
                                                        }) :
                                                        null,
                                                    endIcon: Object(r.jsx)(s.i, {
                                                        width: "24px",
                                                        color: "textSubtle",
                                                    }),
                                                    fullWidth: !0,
                                                    children: O ?
                                                        O.symbol :
                                                        Object(r.jsx)(xr, {
                                                            translationId: 82,
                                                            children: "Select a Token",
                                                        }),
                                                }),
                                                R &&
                                                Object(r.jsx)(We, {
                                                    style: {
                                                        justifyItems: "center",
                                                        backgroundColor: "",
                                                        padding: "12px 0px",
                                                        borderRadius: "12px",
                                                    },
                                                    children: Object(r.jsx)(s.v, {
                                                        style: {
                                                            textAlign: "center",
                                                        },
                                                        children: "Pool Found!",
                                                    }),
                                                }),
                                                j && O ?
                                                k === vs.EXISTS ?
                                                R && T ?
                                                Object(r.jsx)(ms, {
                                                    pair: T,
                                                }) :
                                                Object(r.jsx)(_t, {
                                                    padding: "45px 10px",
                                                    children: Object(r.jsxs)(Ve, {
                                                        gap: "sm",
                                                        justify: "center",
                                                        children: [
                                                            Object(r.jsx)(s.v, {
                                                                style: {
                                                                    textAlign: "center",
                                                                },
                                                                children: "You don\u2019t have liquidity in this pool yet.",
                                                            }),
                                                            Object(r.jsx)(jn, {
                                                                to: "/add/"
                                                                    .concat(Mo(j), "/")
                                                                    .concat(Mo(O)),
                                                                children: Object(r.jsx)(s.v, {
                                                                    style: {
                                                                        textAlign: "center",
                                                                    },
                                                                    children: Object(r.jsx)(xr, {
                                                                        translationId: 100,
                                                                        children: "Add Liquidity",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                }) :
                                                E ?
                                                Object(r.jsx)(_t, {
                                                    padding: "45px 10px",
                                                    children: Object(r.jsxs)(Ve, {
                                                        gap: "sm",
                                                        justify: "center",
                                                        children: [
                                                            Object(r.jsx)(s.v, {
                                                                style: {
                                                                    textAlign: "center",
                                                                },
                                                                children: "No pool found.",
                                                            }),
                                                            Object(r.jsx)(jn, {
                                                                to: "/add/"
                                                                    .concat(Mo(j), "/")
                                                                    .concat(Mo(O)),
                                                                children: "Create pool.",
                                                            }),
                                                        ],
                                                    }),
                                                }) :
                                                k === vs.INVALID ?
                                                Object(r.jsx)(_t, {
                                                    padding: "45px 10px",
                                                    children: Object(r.jsx)(Ve, {
                                                        gap: "sm",
                                                        justify: "center",
                                                        children: Object(r.jsx)(s.v, {
                                                            style: {
                                                                textAlign: "center",
                                                            },
                                                            children: Object(r.jsx)(xr, {
                                                                translationId: 136,
                                                                children: "Invalid pair.",
                                                            }),
                                                        }),
                                                    }),
                                                }) :
                                                k === vs.LOADING ?
                                                Object(r.jsx)(_t, {
                                                    padding: "45px 10px",
                                                    children: Object(r.jsx)(Ve, {
                                                        gap: "sm",
                                                        justify: "center",
                                                        children: Object(r.jsxs)(s.v, {
                                                            style: {
                                                                textAlign: "center",
                                                            },
                                                            children: [
                                                                "Loading",
                                                                Object(r.jsx)(ku, {}),
                                                            ],
                                                        }),
                                                    }),
                                                }) :
                                                null :
                                                U,
                                            ],
                                        }),
                                        Object(r.jsx)($c, {
                                            isOpen: c,
                                            onCurrencySelect: S,
                                            onDismiss: A,
                                            showCommonBases: !0,
                                            selectedCurrency: null !== (e = d === ol.TOKEN0 ? O : j) && void 0 !== e ?
                                                e :
                                                void 0,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }!(function(e) {
                (e[(e.TOKEN0 = 0)] = "TOKEN0"), (e[(e.TOKEN1 = 1)] = "TOKEN1");
            })(ol || (ol = {}));
            var ml = t(2),
                hl = t(510),
                vl = t(511);

            function yl() {
                var e = Object(u.a)([
                    "\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ",
                    "px;\n    width: ",
                    "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ",
                    ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ",
                    "px;\n    width: ",
                    "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ",
                    ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ",
                    "px;\n    width: ",
                    "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ",
                    ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ",
                    ",\n      ",
                    "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ",
                    ",\n      ",
                    "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ",
                    ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ",
                    ";\n  }\n  &::-ms-fill-upper {\n    background: ",
                    ";\n  }\n",
                ]);
                return (
                    (yl = function() {
                        return e;
                    }),
                    e
                );
            }
            var Ol,
                xl = l.default.input(
                    yl(),
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.size;
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.theme.colors.primaryDark;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.primaryDark;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    },
                    function(e) {
                        return e.theme.colors.primaryDark;
                    },
                    function(e) {
                        return e.theme.colors.primaryDark;
                    },
                    function(e) {
                        return e.theme.colors.tertiary;
                    }
                );

            function gl(e) {
                var n = e.value,
                    t = e.onChange,
                    i = e.min,
                    c = void 0 === i ? 0 : i,
                    o = e.step,
                    s = void 0 === o ? 1 : o,
                    u = e.max,
                    l = void 0 === u ? 100 : u,
                    d = e.size,
                    b = void 0 === d ? 28 : d,
                    p = Object(a.useCallback)(
                        function(e) {
                            t(parseInt(e.target.value));
                        }, [t]
                    );
                return Object(r.jsx)(xl, {
                    size: b,
                    type: "range",
                    value: n,
                    style: {
                        width: "90%",
                        marginLeft: 15,
                        marginRight: 15,
                        padding: "15px 0",
                    },
                    onChange: p,
                    "aria-labelledby": "input slider",
                    step: s,
                    min: c,
                    max: l,
                });
            }!(function(e) {
                (e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT"),
                (e.LIQUIDITY = "LIQUIDITY"),
                (e.CURRENCY_A = "CURRENCY_A"),
                (e.CURRENCY_B = "CURRENCY_B");
            })(Ol || (Ol = {}));
            var Cl = Object(Ae.b)("burn/typeInputBurn");

            function wl() {
                return Object(x.d)(function(e) {
                    return e.burn;
                });
            }

            function kl() {
                var e = Object(u.a)([
                    "\n  padding-left: 24px;\n  padding-right: 24px;\n",
                ]);
                return (
                    (kl = function() {
                        return e;
                    }),
                    e
                );
            }

            function Tl() {
                var e = Object(u.a)([
                    "\n  border: 1px solid ",
                    ";\n  border-radius: 16px;\n  padding: 24px;\n",
                ]);
                return (
                    (Tl = function() {
                        return e;
                    }),
                    e
                );
            }
            var Il = On.italic,
                El = l.default.div(Tl(), function(e) {
                    return e.theme.colors.borderColor;
                }),
                Nl = l.default.div(kl());

            function Rl(e) {
                var n,
                    t,
                    i,
                    c,
                    o,
                    u,
                    d,
                    b,
                    p,
                    f,
                    v,
                    y,
                    O,
                    g,
                    C = e.history,
                    k = e.match.params,
                    T = k.currencyIdA,
                    I = k.currencyIdB,
                    E = null !== (n = za(T)) && void 0 !== n ? n : void 0,
                    N = null !== (t = za(I)) && void 0 !== t ? t : void 0,
                    R = Se(),
                    S = R.account,
                    A = R.chainId,
                    U = R.library,
                    P = Object(a.useMemo)(
                        function() {
                            return [Fo(E, A), Fo(N, A)];
                        }, [E, N, A]
                    ),
                    _ = Object(h.a)(P, 2),
                    D = _[0],
                    L = _[1],
                    M = Object(a.useContext)(l.ThemeContext),
                    F = wl(),
                    z = F.independentField,
                    Y = F.typedValue,
                    q = (function(e, n) {
                        var t,
                            r,
                            a,
                            i,
                            c,
                            o = Se(),
                            s = o.account,
                            u = o.chainId,
                            l = wl(),
                            d = l.independentField,
                            b = l.typedValue,
                            p = xs(e, n),
                            f = Object(h.a)(p, 2)[1],
                            j = Wa(null !== s && void 0 !== s ? s : void 0, [
                                null === f || void 0 === f ? void 0 : f.liquidityToken,
                            ]),
                            m =
                            null === j || void 0 === j ?
                            void 0 :
                            j[
                                null !==
                                (t =
                                    null === f ||
                                    void 0 === f ||
                                    null === (r = f.liquidityToken) ||
                                    void 0 === r ?
                                    void 0 :
                                    r.address) && void 0 !== t ?
                                t :
                                ""
                            ],
                            v = [Fo(e, u), Fo(n, u)],
                            y = v[0],
                            O = v[1],
                            x =
                            ((a = {}),
                                Object(w.a)(a, Ol.CURRENCY_A, y),
                                Object(w.a)(a, Ol.CURRENCY_B, O),
                                Object(w.a)(
                                    a,
                                    Ol.LIQUIDITY,
                                    null === f || void 0 === f ? void 0 : f.liquidityToken
                                ),
                                a),
                            g = Lo(null === f || void 0 === f ? void 0 : f.liquidityToken),
                            C =
                            f && g && m && y && B.e.greaterThanOrEqual(g.raw, m.raw) ?
                            new B.k(y, f.getLiquidityValue(y, g, m, !1).raw) :
                            void 0,
                            k =
                            f && g && m && O && B.e.greaterThanOrEqual(g.raw, m.raw) ?
                            new B.k(O, f.getLiquidityValue(O, g, m, !1).raw) :
                            void 0,
                            T =
                            ((i = {}),
                                Object(w.a)(i, Ol.CURRENCY_A, C),
                                Object(w.a)(i, Ol.CURRENCY_B, k),
                                i),
                            I = new B.g("0", "100");
                        if (d === Ol.LIQUIDITY_PERCENT) I = new B.g(b, "100");
                        else if (d === Ol.LIQUIDITY) {
                            if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
                                var E = nu(b, f.liquidityToken);
                                E && m && !E.greaterThan(m) && (I = new B.g(E.raw, m.raw));
                            }
                        } else if (x[d]) {
                            var N = nu(b, x[d]),
                                R = T[d];
                            N && R && !N.greaterThan(R) && (I = new B.g(N.raw, R.raw));
                        }
                        var S,
                            A,
                            U =
                            ((c = {}),
                                Object(w.a)(c, Ol.LIQUIDITY_PERCENT, I),
                                Object(w.a)(
                                    c,
                                    Ol.LIQUIDITY,
                                    m && I && I.greaterThan("0") ?
                                    new B.k(m.token, I.multiply(m.raw).quotient) :
                                    void 0
                                ),
                                Object(w.a)(
                                    c,
                                    Ol.CURRENCY_A,
                                    y && I && I.greaterThan("0") && C ?
                                    new B.k(y, I.multiply(C.raw).quotient) :
                                    void 0
                                ),
                                Object(w.a)(
                                    c,
                                    Ol.CURRENCY_B,
                                    O && I && I.greaterThan("0") && k ?
                                    new B.k(O, I.multiply(k.raw).quotient) :
                                    void 0
                                ),
                                c);
                        return (
                            s || (S = "Connect Wallet"),
                            (U[Ol.LIQUIDITY] && U[Ol.CURRENCY_A] && U[Ol.CURRENCY_B]) ||
                            (S = null !== (A = S) && void 0 !== A ? A : "Enter an amount"), {
                                pair: f,
                                parsedAmounts: U,
                                error: S,
                            }
                        );
                    })(
                        null !== E && void 0 !== E ? E : void 0,
                        null !== N && void 0 !== N ? N : void 0
                    ),
                    W = q.pair,
                    V = q.parsedAmounts,
                    H = q.error,
                    G = (function() {
                        var e = Object(x.c)();
                        return {
                            onUserInput: Object(a.useCallback)(
                                function(n, t) {
                                    e(
                                        Cl({
                                            field: n,
                                            typedValue: t,
                                        })
                                    );
                                }, [e]
                            ),
                        };
                    })().onUserInput,
                    K = !H,
                    Q = Object(a.useState)(!1),
                    X = Object(h.a)(Q, 2),
                    J = X[0],
                    Z = X[1],
                    $ = Object(a.useState)(!1),
                    ee = Object(h.a)($, 2),
                    ne = ee[0],
                    te = ee[1],
                    re = Object(a.useState)(!1),
                    ae = Object(h.a)(re, 2),
                    ie = ae[0],
                    ce = ae[1],
                    oe = Object(a.useState)(""),
                    le = Object(h.a)(oe, 2),
                    de = le[0],
                    be = le[1],
                    pe = xa(),
                    fe = Object(h.a)(pe, 1)[0],
                    je = Oa(),
                    me = Object(h.a)(je, 1)[0],
                    he =
                    ((p = {}),
                        Object(w.a)(
                            p,
                            Ol.LIQUIDITY_PERCENT,
                            V[Ol.LIQUIDITY_PERCENT].equalTo("0") ?
                            "0" :
                            V[Ol.LIQUIDITY_PERCENT].lessThan(new B.g("1", "100")) ?
                            "<1" :
                            V[Ol.LIQUIDITY_PERCENT].toFixed(0)
                        ),
                        Object(w.a)(
                            p,
                            Ol.LIQUIDITY,
                            z === Ol.LIQUIDITY ?
                            Y :
                            null !==
                            (i =
                                null === (c = V[Ol.LIQUIDITY]) || void 0 === c ?
                                void 0 :
                                c.toSignificant(6)) && void 0 !== i ?
                            i :
                            ""
                        ),
                        Object(w.a)(
                            p,
                            Ol.CURRENCY_A,
                            z === Ol.CURRENCY_A ?
                            Y :
                            null !==
                            (o =
                                null === (u = V[Ol.CURRENCY_A]) || void 0 === u ?
                                void 0 :
                                u.toSignificant(6)) && void 0 !== o ?
                            o :
                            ""
                        ),
                        Object(w.a)(
                            p,
                            Ol.CURRENCY_B,
                            z === Ol.CURRENCY_B ?
                            Y :
                            null !==
                            (d =
                                null === (b = V[Ol.CURRENCY_B]) || void 0 === b ?
                                void 0 :
                                b.toSignificant(6)) && void 0 !== d ?
                            d :
                            ""
                        ),
                        p),
                    ve =
                    null === (f = V[Ol.LIQUIDITY_PERCENT]) || void 0 === f ?
                    void 0 :
                    f.equalTo(new B.g("1")),
                    ye = Aa(
                        null === W ||
                        void 0 === W ||
                        null === (v = W.liquidityToken) ||
                        void 0 === v ?
                        void 0 :
                        v.address,
                        Ta.a,
                        g
                    ),
                    Oe = Object(a.useState)(null),
                    xe = Object(h.a)(Oe, 2),
                    ge = xe[0],
                    Ce = xe[1],
                    we = Hs(V[Ol.LIQUIDITY], ue),
                    ke = Object(h.a)(we, 2),
                    Te = ke[0],
                    Ie = ke[1];

                function Ee() {
                    return (Ee = Object(m.a)(
                        j.a.mark(function e() {
                            var n, t, r, a, i, c, o, s;
                            return j.a.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (ye && W && U) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if ((n = V[Ol.LIQUIDITY])) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 5:
                                            return (e.next = 7), ye.nonces(S);
                                        case 7:
                                            (t = e.sent),
                                            (r = Math.ceil(Date.now() / 1e3) + fe),
                                            (a = [{
                                                    name: "name",
                                                    type: "string",
                                                },
                                                {
                                                    name: "version",
                                                    type: "string",
                                                },
                                                {
                                                    name: "chainId",
                                                    type: "uint256",
                                                },
                                                {
                                                    name: "verifyingContract",
                                                    type: "address",
                                                },
                                            ]),
                                            (i = {
                                                name: "Pancake LPs",
                                                version: "1",
                                                chainId: A,
                                                verifyingContract: W.liquidityToken.address,
                                            }),
                                            (c = [{
                                                    name: "owner",
                                                    type: "address",
                                                },
                                                {
                                                    name: "spender",
                                                    type: "address",
                                                },
                                                {
                                                    name: "value",
                                                    type: "uint256",
                                                },
                                                {
                                                    name: "nonce",
                                                    type: "uint256",
                                                },
                                                {
                                                    name: "deadline",
                                                    type: "uint256",
                                                },
                                            ]),
                                            (o = {
                                                owner: S,
                                                spender: ue,
                                                value: n.raw.toString(),
                                                nonce: t.toHexString(),
                                                deadline: r,
                                            }),
                                            (s = JSON.stringify({
                                                types: {
                                                    EIP712Domain: a,
                                                    Permit: c,
                                                },
                                                domain: i,
                                                primaryType: "Permit",
                                                message: o,
                                            })),
                                            U.send("eth_signTypedData_v4", [S, s])
                                                .then(ml.splitSignature)
                                                .then(function(e) {
                                                    Ce({
                                                        v: e.v,
                                                        r: e.r,
                                                        s: e.s,
                                                        deadline: r,
                                                    });
                                                })
                                                .catch(function(e) {
                                                    4001 !==
                                                        (null === e || void 0 === e ? void 0 : e.code) &&
                                                        Ie();
                                                });
                                        case 15:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }
                var Ne = Object(a.useCallback)(
                        function(e, n) {
                            return Ce(null), G(e, n);
                        }, [G]
                    ),
                    Re = Object(a.useCallback)(
                        function(e) {
                            return Ne(Ol.LIQUIDITY, e);
                        }, [Ne]
                    ),
                    Ae = Object(a.useCallback)(
                        function(e) {
                            return Ne(Ol.CURRENCY_A, e);
                        }, [Ne]
                    ),
                    Ue = Object(a.useCallback)(
                        function(e) {
                            return Ne(Ol.CURRENCY_B, e);
                        }, [Ne]
                    ),
                    Be = Bs();

                function Pe() {
                    return _e.apply(this, arguments);
                }

                function _e() {
                    return (_e = Object(m.a)(
                        j.a.mark(function e() {
                            var n, t, r, a, i, c, o, s, u, l, d, b, p, f, m;
                            return j.a.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            if (A && U && S) {
                                                e.next = 2;
                                                break;
                                            }
                                            throw new Error("missing dependencies");
                                        case 2:
                                            if (
                                                ((t = V[Ol.CURRENCY_A]), (r = V[Ol.CURRENCY_B]), t && r)
                                            ) {
                                                e.next = 5;
                                                break;
                                            }
                                            throw new Error("missing currency amounts");
                                        case 5:
                                            if (
                                                ((a = Xn(0, U, S)),
                                                    (n = {}),
                                                    Object(w.a)(n, Ol.CURRENCY_A, Kn(t, me)[0]),
                                                    Object(w.a)(n, Ol.CURRENCY_B, Kn(r, me)[0]),
                                                    (i = n),
                                                    E && N)
                                            ) {
                                                e.next = 9;
                                                break;
                                            }
                                            throw new Error("missing tokens");
                                        case 9:
                                            if ((c = V[Ol.LIQUIDITY])) {
                                                e.next = 12;
                                                break;
                                            }
                                            throw new Error("missing liquidity amount");
                                        case 12:
                                            if (
                                                ((o = N === B.d),
                                                    (s = E === B.d || o),
                                                    (u = Math.ceil(Date.now() / 1e3) + fe),
                                                    D && L)
                                            ) {
                                                e.next = 17;
                                                break;
                                            }
                                            throw new Error("could not wrap");
                                        case 17:
                                            if (Te !== Ds.APPROVED) {
                                                e.next = 21;
                                                break;
                                            }
                                            s
                                                ?
                                                ((l = [
                                                        "removeLiquidityETH",
                                                        "removeLiquidityETHSupportingFeeOnTransferTokens",
                                                    ]),
                                                    (d = [
                                                        o ? D.address : L.address,
                                                        c.raw.toString(),
                                                        i[o ? Ol.CURRENCY_A : Ol.CURRENCY_B].toString(),
                                                        i[o ? Ol.CURRENCY_B : Ol.CURRENCY_A].toString(),
                                                        S,
                                                        u,
                                                    ])) :
                                                ((l = ["removeLiquidity"]),
                                                    (d = [
                                                        D.address,
                                                        L.address,
                                                        c.raw.toString(),
                                                        i[Ol.CURRENCY_A].toString(),
                                                        i[Ol.CURRENCY_B].toString(),
                                                        S,
                                                        u,
                                                    ])),
                                                (e.next = 26);
                                            break;
                                        case 21:
                                            if (null === ge) {
                                                e.next = 25;
                                                break;
                                            }
                                            s
                                                ?
                                                ((l = [
                                                        "removeLiquidityETHWithPermit",
                                                        "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
                                                    ]),
                                                    (d = [
                                                        o ? D.address : L.address,
                                                        c.raw.toString(),
                                                        i[o ? Ol.CURRENCY_A : Ol.CURRENCY_B].toString(),
                                                        i[o ? Ol.CURRENCY_B : Ol.CURRENCY_A].toString(),
                                                        S,
                                                        ge.deadline, !1,
                                                        ge.v,
                                                        ge.r,
                                                        ge.s,
                                                    ])) :
                                                ((l = ["removeLiquidityWithPermit"]),
                                                    (d = [
                                                        D.address,
                                                        L.address,
                                                        c.raw.toString(),
                                                        i[Ol.CURRENCY_A].toString(),
                                                        i[Ol.CURRENCY_B].toString(),
                                                        S,
                                                        ge.deadline, !1,
                                                        ge.v,
                                                        ge.r,
                                                        ge.s,
                                                    ])),
                                                (e.next = 26);
                                            break;
                                        case 25:
                                            throw new Error(
                                                "Attempting to confirm without approval or a signature. Please contact support."
                                            );
                                        case 26:
                                            return (
                                                (e.next = 28),
                                                Promise.all(
                                                    l.map(function(e, n) {
                                                        var t;
                                                        return (t = a.estimateGas)[e]
                                                            .apply(t, Object(se.a)(d))
                                                            .then(Gn)
                                                            .catch(function(t) {
                                                                console.error("estimateGas failed", n, e, d, t);
                                                            });
                                                    })
                                                )
                                            );
                                        case 28:
                                            if (
                                                ((b = e.sent), -1 !==
                                                    (p = b.findIndex(function(e) {
                                                        return zn.a.isBigNumber(e);
                                                    })))
                                            ) {
                                                e.next = 34;
                                                break;
                                            }
                                            console.error(
                                                    "This transaction would fail. Please contact support."
                                                ),
                                                (e.next = 39);
                                            break;
                                        case 34:
                                            return (
                                                (f = l[p]),
                                                (m = b[p]),
                                                ce(!0),
                                                (e.next = 39),
                                                a[f]
                                                .apply(
                                                    a,
                                                    Object(se.a)(d).concat([{
                                                        gasLimit: m,
                                                    }, ])
                                                )
                                                .then(function(e) {
                                                    var n, t;
                                                    ce(!1),
                                                        Be(e, {
                                                            summary: "Remove "
                                                                .concat(
                                                                    null === (n = V[Ol.CURRENCY_A]) ||
                                                                    void 0 === n ?
                                                                    void 0 :
                                                                    n.toSignificant(3),
                                                                    " "
                                                                )
                                                                .concat(
                                                                    null === E || void 0 === E ?
                                                                    void 0 :
                                                                    E.symbol,
                                                                    " and "
                                                                )
                                                                .concat(
                                                                    null === (t = V[Ol.CURRENCY_B]) ||
                                                                    void 0 === t ?
                                                                    void 0 :
                                                                    t.toSignificant(3),
                                                                    " "
                                                                )
                                                                .concat(
                                                                    null === N || void 0 === N ?
                                                                    void 0 :
                                                                    N.symbol
                                                                ),
                                                        }),
                                                        be(e.hash);
                                                })
                                                .catch(function(e) {
                                                    ce(!1), console.error(e);
                                                })
                                            );
                                        case 39:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    )).apply(this, arguments);
                }

                function De() {
                    var e, n;
                    return Object(r.jsxs)(Ve, {
                        gap: "md",
                        style: {
                            marginTop: "20px",
                        },
                        children: [
                            Object(r.jsxs)(Nn, {
                                align: "flex-end",
                                children: [
                                    Object(r.jsx)(s.v, {
                                        fontSize: "24px",
                                        children: null === (e = V[Ol.CURRENCY_A]) || void 0 === e ?
                                            void 0 :
                                            e.toSignificant(6),
                                    }),
                                    Object(r.jsxs)(An, {
                                        gap: "4px",
                                        children: [
                                            Object(r.jsx)(Mi, {
                                                currency: E,
                                                size: "24px",
                                            }),
                                            Object(r.jsx)(s.v, {
                                                fontSize: "24px",
                                                style: {
                                                    marginLeft: "10px",
                                                },
                                                children: null === E || void 0 === E ? void 0 : E.symbol,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsx)(An, {
                                children: Object(r.jsx)(hl.a, {
                                    size: "16",
                                    color: M.colors.textSubtle,
                                }),
                            }),
                            Object(r.jsxs)(Nn, {
                                align: "flex-end",
                                children: [
                                    Object(r.jsx)(s.v, {
                                        fontSize: "24px",
                                        children: null === (n = V[Ol.CURRENCY_B]) || void 0 === n ?
                                            void 0 :
                                            n.toSignificant(6),
                                    }),
                                    Object(r.jsxs)(An, {
                                        gap: "4px",
                                        children: [
                                            Object(r.jsx)(Mi, {
                                                currency: N,
                                                size: "24px",
                                            }),
                                            Object(r.jsx)(s.v, {
                                                fontSize: "24px",
                                                style: {
                                                    marginLeft: "10px",
                                                },
                                                children: null === N || void 0 === N ? void 0 : N.symbol,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsx)(Il, {
                                fontSize: 12,
                                color: M.colors.textSubtle,
                                textAlign: "left",
                                padding: "12px 0 0 0",
                                children: "Output is estimated. If the price changes by more than ".concat(
                                    me / 100,
                                    "% your transaction will revert."
                                ),
                            }),
                        ],
                    });
                }

                function Le() {
                    var e;
                    return Object(r.jsxs)(r.Fragment, {
                        children: [
                            Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsxs)(s.v, {
                                        color: "textSubtle",
                                        children: [
                                            "FLIP "
                                            .concat(
                                                null === E || void 0 === E ? void 0 : E.symbol,
                                                "/"
                                            )
                                            .concat(null === N || void 0 === N ? void 0 : N.symbol),
                                            " Burned",
                                        ],
                                    }),
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(co, {
                                                currency0: E,
                                                currency1: N,
                                                margin: !0,
                                            }),
                                            Object(r.jsx)(s.v, {
                                                children: null === (e = V[Ol.LIQUIDITY]) || void 0 === e ?
                                                    void 0 :
                                                    e.toSignificant(6),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            W &&
                            Object(r.jsxs)(r.Fragment, {
                                children: [
                                    Object(r.jsxs)(Nn, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                color: "textSubtle",
                                                children: "Price",
                                            }),
                                            Object(r.jsxs)(s.v, {
                                                children: [
                                                    "1 ",
                                                    null === E || void 0 === E ? void 0 : E.symbol,
                                                    " = ",
                                                    D ? W.priceOf(D).toSignificant(6) : "-",
                                                    " ",
                                                    null === N || void 0 === N ? void 0 : N.symbol,
                                                ],
                                            }),
                                        ],
                                    }),
                                    Object(r.jsxs)(Nn, {
                                        children: [
                                            Object(r.jsx)("div", {}),
                                            Object(r.jsxs)(s.v, {
                                                children: [
                                                    "1 ",
                                                    null === N || void 0 === N ? void 0 : N.symbol,
                                                    " = ",
                                                    L ? W.priceOf(L).toSignificant(6) : "-",
                                                    " ",
                                                    null === E || void 0 === E ? void 0 : E.symbol,
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            Object(r.jsx)(s.c, {
                                disabled: !(Te === Ds.APPROVED || null !== ge),
                                onClick: Pe,
                                children: "Confirm",
                            }),
                        ],
                    });
                }
                var Me = "Removing "
                    .concat(
                        null === (y = V[Ol.CURRENCY_A]) || void 0 === y ?
                        void 0 :
                        y.toSignificant(6),
                        " "
                    )
                    .concat(null === E || void 0 === E ? void 0 : E.symbol, " and ")
                    .concat(
                        null === (O = V[Ol.CURRENCY_B]) || void 0 === O ?
                        void 0 :
                        O.toSignificant(6),
                        " "
                    )
                    .concat(null === N || void 0 === N ? void 0 : N.symbol),
                    Fe = Object(a.useCallback)(
                        function(e) {
                            Ne(Ol.LIQUIDITY_PERCENT, e.toString());
                        }, [Ne]
                    ),
                    ze = E === B.d || N === B.d,
                    Ye = Boolean(
                        A &&
                        ((E && Object(B.o)(B.n[A], E)) || (N && Object(B.o)(B.n[A], N)))
                    ),
                    qe = Object(a.useCallback)(
                        function(e) {
                            I && Mo(e) === I ?
                                C.push("/remove/".concat(Mo(e), "/").concat(T)) :
                                C.push("/remove/".concat(Mo(e), "/").concat(I));
                        }, [T, I, C]
                    ),
                    He = Object(a.useCallback)(
                        function(e) {
                            T && Mo(e) === T ?
                                C.push("/remove/".concat(I, "/").concat(Mo(e))) :
                                C.push("/remove/".concat(T, "/").concat(Mo(e)));
                        }, [T, I, C]
                    ),
                    Ge = Object(a.useCallback)(
                        function() {
                            Z(!1), Ce(null), de && Ne(Ol.LIQUIDITY_PERCENT, "0"), be("");
                        }, [Ne, de]
                    ),
                    Ke = (function(e, n) {
                        var t =
                            arguments.length > 2 && void 0 !== arguments[2] ?
                            arguments[2] :
                            100,
                            r = Object(a.useState)(function() {
                                return e;
                            }),
                            i = Object(h.a)(r, 2),
                            c = i[0],
                            o = i[1],
                            s = Object(a.useRef)(),
                            u = Object(a.useCallback)(
                                function(e) {
                                    o(e),
                                        s.current && clearTimeout(s.current),
                                        (s.current = setTimeout(function() {
                                            n(e), (s.current = void 0);
                                        }, t));
                                }, [t, n]
                            );
                        return (
                            Object(a.useEffect)(
                                function() {
                                    s.current && (clearTimeout(s.current), (s.current = void 0)),
                                        o(e);
                                }, [e]
                            ), [c, u]
                        );
                    })(Number.parseInt(V[Ol.LIQUIDITY_PERCENT].toFixed(0)), Fe),
                    Qe = Object(h.a)(Ke, 2),
                    Xe = Qe[0],
                    Je = Qe[1];
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsxs)(vu, {
                            children: [
                                Object(r.jsx)(Po, {
                                    adding: !1,
                                }),
                                Object(r.jsxs)(Cu, {
                                    children: [
                                        Object(r.jsx)(fr, {
                                            isOpen: J,
                                            onDismiss: Ge,
                                            attemptingTxn: ie,
                                            hash: de || "",
                                            content: function() {
                                                return Object(r.jsx)(dr, {
                                                    title: "You will receive",
                                                    onDismiss: Ge,
                                                    topContent: De,
                                                    bottomContent: Le,
                                                });
                                            },
                                            pendingText: Me,
                                        }),
                                        Object(r.jsxs)(Ve, {
                                            gap: "md",
                                            children: [
                                                Object(r.jsx)(Nl, {
                                                    children: Object(r.jsx)(El, {
                                                        children: Object(r.jsxs)(Ve, {
                                                            children: [
                                                                Object(r.jsxs)(Nn, {
                                                                    children: [
                                                                        Object(r.jsx)(s.v, {
                                                                            children: "Amount",
                                                                        }),
                                                                        Object(r.jsx)(wu, {
                                                                            onClick: function() {
                                                                                te(!ne);
                                                                            },
                                                                            children: ne ? "Simple" : "Detailed",
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(r.jsx)(s.l, {
                                                                    justifyContent: "start",
                                                                    children: Object(r.jsxs)(s.v, {
                                                                        fontSize: "64px",
                                                                        children: [he[Ol.LIQUIDITY_PERCENT], "%"],
                                                                    }),
                                                                }), !ne &&
                                                                Object(r.jsxs)(r.Fragment, {
                                                                    children: [
                                                                        Object(r.jsx)(s.l, {
                                                                            mb: "8px",
                                                                            children: Object(r.jsx)(gl, {
                                                                                value: Xe,
                                                                                onChange: Je,
                                                                            }),
                                                                        }),
                                                                        Object(r.jsxs)(s.l, {
                                                                            justifyContent: "space-around",
                                                                            children: [
                                                                                Object(r.jsx)(s.c, {
                                                                                    variant: "tertiary",
                                                                                    size: "sm",
                                                                                    onClick: function() {
                                                                                        return Ne(
                                                                                            Ol.LIQUIDITY_PERCENT,
                                                                                            "25"
                                                                                        );
                                                                                    },
                                                                                    children: "25%",
                                                                                }),
                                                                                Object(r.jsx)(s.c, {
                                                                                    variant: "tertiary",
                                                                                    size: "sm",
                                                                                    onClick: function() {
                                                                                        return Ne(
                                                                                            Ol.LIQUIDITY_PERCENT,
                                                                                            "50"
                                                                                        );
                                                                                    },
                                                                                    children: "50%",
                                                                                }),
                                                                                Object(r.jsx)(s.c, {
                                                                                    variant: "tertiary",
                                                                                    size: "sm",
                                                                                    onClick: function() {
                                                                                        return Ne(
                                                                                            Ol.LIQUIDITY_PERCENT,
                                                                                            "75"
                                                                                        );
                                                                                    },
                                                                                    children: "75%",
                                                                                }),
                                                                                Object(r.jsx)(s.c, {
                                                                                    variant: "tertiary",
                                                                                    size: "sm",
                                                                                    onClick: function() {
                                                                                        return Ne(
                                                                                            Ol.LIQUIDITY_PERCENT,
                                                                                            "100"
                                                                                        );
                                                                                    },
                                                                                    children: "Max",
                                                                                }),
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                }), !ne &&
                                                Object(r.jsxs)(r.Fragment, {
                                                    children: [
                                                        Object(r.jsx)(We, {
                                                            children: Object(r.jsx)(vl.a, {
                                                                size: "16",
                                                                color: M.colors.textSubtle,
                                                            }),
                                                        }),
                                                        Object(r.jsx)(Nl, {
                                                            children: Object(r.jsx)(El, {
                                                                children: Object(r.jsxs)(Ve, {
                                                                    gap: "10px",
                                                                    children: [
                                                                        Object(r.jsxs)(Nn, {
                                                                            children: [
                                                                                Object(r.jsx)(s.v, {
                                                                                    fontSize: "24px",
                                                                                    children: he[Ol.CURRENCY_A] || "-",
                                                                                }),
                                                                                Object(r.jsxs)(An, {
                                                                                    children: [
                                                                                        Object(r.jsx)(Mi, {
                                                                                            currency: E,
                                                                                            style: {
                                                                                                marginRight: "12px",
                                                                                            },
                                                                                        }),
                                                                                        Object(r.jsx)(s.v, {
                                                                                            fontSize: "24px",
                                                                                            id: "remove-liquidity-tokena-symbol",
                                                                                            children: null === E || void 0 === E ?
                                                                                                void 0 :
                                                                                                E.symbol,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        Object(r.jsxs)(Nn, {
                                                                            children: [
                                                                                Object(r.jsx)(s.v, {
                                                                                    fontSize: "24px",
                                                                                    children: he[Ol.CURRENCY_B] || "-",
                                                                                }),
                                                                                Object(r.jsxs)(An, {
                                                                                    children: [
                                                                                        Object(r.jsx)(Mi, {
                                                                                            currency: N,
                                                                                            style: {
                                                                                                marginRight: "12px",
                                                                                            },
                                                                                        }),
                                                                                        Object(r.jsx)(s.v, {
                                                                                            fontSize: "24px",
                                                                                            id: "remove-liquidity-tokenb-symbol",
                                                                                            children: null === N || void 0 === N ?
                                                                                                void 0 :
                                                                                                N.symbol,
                                                                                        }),
                                                                                    ],
                                                                                }),
                                                                            ],
                                                                        }),
                                                                        A && (Ye || ze) ?
                                                                        Object(r.jsx)(Nn, {
                                                                            style: {
                                                                                justifyContent: "flex-end",
                                                                            },
                                                                            children: ze ?
                                                                                Object(r.jsx)(jn, {
                                                                                    to: "/remove/"
                                                                                        .concat(
                                                                                            E === B.d ?
                                                                                            B.n[A].address :
                                                                                            T,
                                                                                            "/"
                                                                                        )
                                                                                        .concat(
                                                                                            N === B.d ?
                                                                                            B.n[A].address :
                                                                                            I
                                                                                        ),
                                                                                    children: "Receive WBNB",
                                                                                }) :
                                                                                Ye ?
                                                                                Object(r.jsx)(jn, {
                                                                                    to: "/remove/"
                                                                                        .concat(
                                                                                            E &&
                                                                                            Object(B.o)(E, B.n[A]) ?
                                                                                            "ETH" :
                                                                                            T,
                                                                                            "/"
                                                                                        )
                                                                                        .concat(
                                                                                            N &&
                                                                                            Object(B.o)(N, B.n[A]) ?
                                                                                            "ETH" :
                                                                                            I
                                                                                        ),
                                                                                    children: "Receive BNB",
                                                                                }) :
                                                                                null,
                                                                        }) :
                                                                        null,
                                                                    ],
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                Object(r.jsxs)(Nl, {
                                                    style: {
                                                        paddingBottom: "24px",
                                                    },
                                                    children: [
                                                        ne &&
                                                        Object(r.jsxs)(r.Fragment, {
                                                            children: [
                                                                Object(r.jsx)(wo, {
                                                                    value: he[Ol.LIQUIDITY],
                                                                    onUserInput: Re,
                                                                    onMax: function() {
                                                                        Ne(Ol.LIQUIDITY_PERCENT, "100");
                                                                    },
                                                                    showMaxButton: !ve,
                                                                    disableCurrencySelect: !0,
                                                                    currency: null === W || void 0 === W ?
                                                                        void 0 :
                                                                        W.liquidityToken,
                                                                    pair: W,
                                                                    id: "liquidity-amount",
                                                                }),
                                                                Object(r.jsx)(We, {
                                                                    children: Object(r.jsx)(vl.a, {
                                                                        size: "16",
                                                                        color: M.colors.textSubtle,
                                                                    }),
                                                                }),
                                                                Object(r.jsx)(wo, {
                                                                    hideBalance: !0,
                                                                    value: he[Ol.CURRENCY_A],
                                                                    onUserInput: Ae,
                                                                    onMax: function() {
                                                                        return Ne(Ol.LIQUIDITY_PERCENT, "100");
                                                                    },
                                                                    showMaxButton: !ve,
                                                                    currency: E,
                                                                    label: "Output",
                                                                    onCurrencySelect: qe,
                                                                    id: "remove-liquidity-tokena",
                                                                }),
                                                                Object(r.jsx)(We, {
                                                                    children: Object(r.jsx)(hl.a, {
                                                                        size: "16",
                                                                        color: M.colors.textSubtle,
                                                                    }),
                                                                }),
                                                                Object(r.jsx)(wo, {
                                                                    hideBalance: !0,
                                                                    value: he[Ol.CURRENCY_B],
                                                                    onUserInput: Ue,
                                                                    onMax: function() {
                                                                        return Ne(Ol.LIQUIDITY_PERCENT, "100");
                                                                    },
                                                                    showMaxButton: !ve,
                                                                    currency: N,
                                                                    label: "Output",
                                                                    onCurrencySelect: He,
                                                                    id: "remove-liquidity-tokenb",
                                                                }),
                                                            ],
                                                        }),
                                                        W &&
                                                        Object(r.jsxs)("div", {
                                                            style: {
                                                                padding: "24px",
                                                            },
                                                            children: [
                                                                Object(r.jsxs)(s.l, {
                                                                    justifyContent: "space-between",
                                                                    mb: "8px",
                                                                    children: [
                                                                        "Price:",
                                                                        Object(r.jsxs)("div", {
                                                                            children: [
                                                                                "1 ",
                                                                                null === E || void 0 === E ?
                                                                                void 0 :
                                                                                E.symbol,
                                                                                " = ",
                                                                                D ?
                                                                                W.priceOf(D).toSignificant(6) :
                                                                                "-",
                                                                                " ",
                                                                                null === N || void 0 === N ?
                                                                                void 0 :
                                                                                N.symbol,
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(r.jsxs)(s.l, {
                                                                    justifyContent: "space-between",
                                                                    children: [
                                                                        Object(r.jsx)("div", {}),
                                                                        Object(r.jsxs)("div", {
                                                                            children: [
                                                                                "1 ",
                                                                                null === N || void 0 === N ?
                                                                                void 0 :
                                                                                N.symbol,
                                                                                " = ",
                                                                                L ?
                                                                                W.priceOf(L).toSignificant(6) :
                                                                                "-",
                                                                                " ",
                                                                                null === E || void 0 === E ?
                                                                                void 0 :
                                                                                E.symbol,
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                        Object(r.jsx)("div", {
                                                            style: {
                                                                position: "relative",
                                                            },
                                                            children: S ?
                                                                Object(r.jsxs)(Nn, {
                                                                    children: [
                                                                        Object(r.jsx)(s.c, {
                                                                            onClick: function() {
                                                                                return Ee.apply(this, arguments);
                                                                            },
                                                                            variant: Te === Ds.APPROVED || null !== ge ?
                                                                                "success" :
                                                                                "primary",
                                                                            disabled: Te !== Ds.NOT_APPROVED || null !== ge,
                                                                            mr: "8px",
                                                                            children: Te === Ds.PENDING ?
                                                                                Object(r.jsx)(os, {
                                                                                    children: "Approving",
                                                                                }) :
                                                                                Te === Ds.APPROVED || null !== ge ?
                                                                                "Approved" :
                                                                                "Approve",
                                                                        }),
                                                                        Object(r.jsx)(s.c, {
                                                                            onClick: function() {
                                                                                Z(!0);
                                                                            },
                                                                            disabled:
                                                                                !K ||
                                                                                (null === ge && Te !== Ds.APPROVED),
                                                                            variant:
                                                                                !K &&
                                                                                V[Ol.CURRENCY_A] &&
                                                                                V[Ol.CURRENCY_B] ?
                                                                                "danger" :
                                                                                "primary",
                                                                            children: H || "Remove",
                                                                        }),
                                                                    ],
                                                                }) :
                                                                Object(r.jsx)(ju, {
                                                                    fullWidth: !0,
                                                                }),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        W ?
                        Object(r.jsx)(Ve, {
                            style: {
                                maxWidth: "436px",
                                width: "100%",
                                marginTop: "1rem",
                            },
                            children: Object(r.jsx)(ms, {
                                showUnwrapped: Ye,
                                pair: W,
                            }),
                        }) :
                        null,
                    ],
                });
            }

            function Sl() {
                var e = Object(u.a)([
                    "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ",
                    ";\n  transition: color 300ms ",
                    ";\n  color: ",
                    ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
                    ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (Sl = function() {
                        return e;
                    }),
                    e
                );
            }

            function Al() {
                var e = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return (
                    (Al = function() {
                        return e;
                    }),
                    e
                );
            }

            function Ul() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
                    ";\n  transition: border-color 300ms ",
                    ",\n    color 500ms ",
                    ";\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (Ul = function() {
                        return e;
                    }),
                    e
                );
            }

            function Bl() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",
                    ";\n  z-index: 1;\n  width: 100%;\n",
                ]);
                return (
                    (Bl = function() {
                        return e;
                    }),
                    e
                );
            }
            var Pl = On.black,
                _l = l.default.div(Bl(), function(e) {
                    return e.theme.colors.invertedContrast;
                }),
                Dl = l.default.div(
                    Ul(),
                    function(e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.invertedContrast;
                    },
                    function(e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function(e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                Ll = l.default.div(Al()),
                Ml = l.default.input(
                    Sl(),
                    function(e) {
                        return e.theme.colors.invertedContrast;
                    },
                    function(e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function(e) {
                        var n = e.error,
                            t = e.theme;
                        return n ? t.colors.failure : t.colors.primary;
                    },
                    function(e) {
                        return e.theme.colors.textDisabled;
                    },
                    function(e) {
                        return e.theme.colors.textDisabled;
                    }
                );

            function Fl(e) {
                var n = e.id,
                    t = e.value,
                    i = e.onChange,
                    c = Se().chainId,
                    o = Object(a.useContext)(l.ThemeContext),
                    s = Js(t),
                    u = s.address,
                    d = s.loading,
                    b = s.name,
                    p = Object(a.useCallback)(
                        function(e) {
                            var n = e.target.value.replace(/\s+/g, "");
                            i(n);
                        }, [i]
                    ),
                    f = Boolean(t.length > 0 && !d && !u);
                return Object(r.jsx)(_l, {
                    id: n,
                    children: Object(r.jsx)(Dl, {
                        error: f,
                        children: Object(r.jsx)(Ll, {
                            children: Object(r.jsxs)(Ve, {
                                gap: "md",
                                children: [
                                    Object(r.jsxs)(Nn, {
                                        children: [
                                            Object(r.jsx)(Pl, {
                                                color: o.colors.textSubtle,
                                                fontWeight: 500,
                                                fontSize: 14,
                                                children: "Recipient",
                                            }),
                                            u &&
                                            c &&
                                            Object(r.jsx)(hn, {
                                                href: Vn(
                                                    c,
                                                    null !== b && void 0 !== b ? b : u,
                                                    "address"
                                                ),
                                                style: {
                                                    fontSize: "14px",
                                                },
                                                children: "(View on BscScan)",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(Ml, {
                                        className: "recipient-address-input",
                                        type: "text",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false",
                                        placeholder: "Wallet Address or ENS name",
                                        error: f,
                                        pattern: "^(0x[a-fA-F0-9]{40})$",
                                        onChange: p,
                                        value: t,
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            var zl = t(512);

            function Yl(e) {
                var n = e.priceImpact;
                return Object(r.jsx)(is, {
                    fontSize: "14px",
                    severity: Ws(n),
                    children: n ?
                        n.lessThan(Ce) ?
                        "<0.01%" :
                        "".concat(n.toFixed(2), "%") :
                        "-",
                });
            }

            function ql(e) {
                var n,
                    t,
                    i,
                    c,
                    o = e.trade,
                    u = e.onConfirm,
                    l = e.allowedSlippage,
                    d = e.swapErrorMessage,
                    b = e.disabledConfirm,
                    p = Object(a.useState)(!1),
                    f = Object(h.a)(p, 2),
                    j = f[0],
                    m = f[1],
                    v = Object(a.useMemo)(
                        function() {
                            return qs(o, l);
                        }, [l, o]
                    ),
                    y = Object(a.useMemo)(
                        function() {
                            return Ys(o);
                        }, [o]
                    ),
                    O = y.priceImpactWithoutFee,
                    x = y.realizedLPFee,
                    g = Ws(O);
                return Object(r.jsxs)(r.Fragment, {
                    children: [
                        Object(r.jsxs)(Ve, {
                            gap: "0px",
                            children: [
                                Object(r.jsxs)(Nn, {
                                    align: "center",
                                    children: [
                                        Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: "Price",
                                        }),
                                        Object(r.jsxs)(s.v, {
                                            fontSize: "14px",
                                            style: {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                textAlign: "right",
                                                paddingLeft: "8px",
                                                fontWeight: 500,
                                            },
                                            children: [
                                                Vs(o, j),
                                                Object(r.jsx)(cs, {
                                                    onClick: function() {
                                                        return m(!j);
                                                    },
                                                    children: Object(r.jsx)(zl.a, {
                                                        size: 14,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsxs)(An, {
                                            children: [
                                                Object(r.jsx)(s.v, {
                                                    fontSize: "14px",
                                                    children: o.tradeType === B.m.EXACT_INPUT ?
                                                        "Minimum received" :
                                                        "Maximum sold",
                                                }),
                                                Object(r.jsx)(Si, {
                                                    text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                                                }),
                                            ],
                                        }),
                                        Object(r.jsxs)(An, {
                                            children: [
                                                Object(r.jsx)(s.v, {
                                                    fontSize: "14px",
                                                    children: o.tradeType === B.m.EXACT_INPUT ?
                                                        null !==
                                                        (n =
                                                            null === (t = v[ws.OUTPUT]) || void 0 === t ?
                                                            void 0 :
                                                            t.toSignificant(4)) && void 0 !== n ?
                                                        n :
                                                        "-" :
                                                        null !==
                                                        (i =
                                                            null === (c = v[ws.INPUT]) || void 0 === c ?
                                                            void 0 :
                                                            c.toSignificant(4)) && void 0 !== i ?
                                                        i :
                                                        "-",
                                                }),
                                                Object(r.jsx)(s.v, {
                                                    fontSize: "14px",
                                                    marginLeft: "4px",
                                                    children: o.tradeType === B.m.EXACT_INPUT ?
                                                        o.outputAmount.currency.symbol :
                                                        o.inputAmount.currency.symbol,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsxs)(An, {
                                            children: [
                                                Object(r.jsx)(s.v, {
                                                    fontSize: "14px",
                                                    children: "Price Impact",
                                                }),
                                                Object(r.jsx)(Si, {
                                                    text: "The difference between the market price and your price due to trade size.",
                                                }),
                                            ],
                                        }),
                                        Object(r.jsx)(Yl, {
                                            priceImpact: O,
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsxs)(An, {
                                            children: [
                                                Object(r.jsx)(s.v, {
                                                    fontSize: "14px",
                                                    children: "Liquidity Provider Fee",
                                                }),
                                                Object(r.jsx)(Si, {
                                                    text: "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.",
                                                }),
                                            ],
                                        }),
                                        Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: x ?
                                                ""
                                                .concat(
                                                    null === x || void 0 === x ?
                                                    void 0 :
                                                    x.toSignificant(6),
                                                    " "
                                                )
                                                .concat(o.inputAmount.currency.symbol) :
                                                "-",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(r.jsxs)(Sn, {
                            children: [
                                Object(r.jsx)(s.c, {
                                    onClick: u,
                                    disabled: b,
                                    variant: g > 2 ? "danger" : "primary",
                                    mt: "10px",
                                    id: "confirm-swap-or-send",
                                    fullWidth: !0,
                                    children: g > 2 ? "Swap Anyway" : "Confirm Swap",
                                }),
                                d ?
                                Object(r.jsx)(ls, {
                                    error: d,
                                }) :
                                null,
                            ],
                        }),
                    ],
                });
            }

            function Wl() {
                var e = Object(u.a)([
                    "\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ",
                    ";\n    font-weight: 600;\n  }\n",
                ]);
                return (
                    (Wl = function() {
                        return e;
                    }),
                    e
                );
            }
            var Vl = On.main,
                Hl = Object(l.default)(s.v)(Wl(), function(e) {
                    return e.theme.colors.primary;
                });

            function Gl(e) {
                var n,
                    t,
                    i = e.trade,
                    c = e.allowedSlippage,
                    o = e.recipient,
                    u = e.showAcceptChanges,
                    d = e.onAcceptChanges,
                    b = Object(a.useMemo)(
                        function() {
                            return qs(i, c);
                        }, [i, c]
                    ),
                    p = Ws(
                        Object(a.useMemo)(
                            function() {
                                return Ys(i);
                            }, [i]
                        ).priceImpactWithoutFee
                    ),
                    f = Object(a.useContext)(l.ThemeContext);
                return Object(r.jsxs)(Ve, {
                    gap: "md",
                    style: {
                        marginTop: "20px",
                    },
                    children: [
                        Object(r.jsxs)(Nn, {
                            align: "flex-end",
                            children: [
                                Object(r.jsxs)(An, {
                                    gap: "0px",
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: i.inputAmount.currency,
                                            size: "24px",
                                            style: {
                                                marginRight: "12px",
                                            },
                                        }),
                                        Object(r.jsx)(s.v, {
                                            fontSize: "24px",
                                            color: u && i.tradeType === B.m.EXACT_OUTPUT ?
                                                f.colors.primary :
                                                "text",
                                            children: i.inputAmount.toSignificant(6),
                                        }),
                                    ],
                                }),
                                Object(r.jsx)(An, {
                                    gap: "0px",
                                    children: Object(r.jsx)(s.v, {
                                        fontSize: "24px",
                                        style: {
                                            marginLeft: "10px",
                                            fontWeight: 500,
                                        },
                                        children: i.inputAmount.currency.symbol,
                                    }),
                                }),
                            ],
                        }),
                        Object(r.jsx)(An, {
                            children: Object(r.jsx)(vl.a, {
                                size: "16",
                                color: f.colors.textSubtle,
                                style: {
                                    marginLeft: "4px",
                                    minWidth: "16px",
                                },
                            }),
                        }),
                        Object(r.jsxs)(Nn, {
                            align: "flex-end",
                            children: [
                                Object(r.jsxs)(An, {
                                    gap: "0px",
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: i.outputAmount.currency,
                                            size: "24px",
                                            style: {
                                                marginRight: "12px",
                                            },
                                        }),
                                        Object(r.jsx)(s.v, {
                                            fontSize: "24px",
                                            style: {
                                                marginLeft: "10px",
                                                fontWeight: 500,
                                            },
                                            color: p > 2 ?
                                                f.colors.failure :
                                                u && i.tradeType === B.m.EXACT_INPUT ?
                                                f.colors.primary :
                                                "text",
                                            children: i.outputAmount.toSignificant(6),
                                        }),
                                    ],
                                }),
                                Object(r.jsx)(An, {
                                    gap: "0px",
                                    children: Object(r.jsx)(s.v, {
                                        fontSize: "24px",
                                        style: {
                                            marginLeft: "10px",
                                            fontWeight: 500,
                                        },
                                        children: i.outputAmount.currency.symbol,
                                    }),
                                }),
                            ],
                        }),
                        u ?
                        Object(r.jsx)(ds, {
                            justify: "flex-start",
                            gap: "0px",
                            children: Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(br.a, {
                                                size: 20,
                                                style: {
                                                    marginRight: "8px",
                                                    minWidth: 24,
                                                },
                                            }),
                                            Object(r.jsx)(Vl, {
                                                color: f.colors.primary,
                                                children: " Price Updated",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(s.c, {
                                        onClick: d,
                                        children: "Accept",
                                    }),
                                ],
                            }),
                        }) :
                        null,
                        Object(r.jsx)(Ve, {
                            justify: "flex-start",
                            gap: "sm",
                            style: {
                                padding: "16px 0 0",
                            },
                            children: i.tradeType === B.m.EXACT_INPUT ?
                                Object(r.jsxs)(Hl, {
                                    children: [
                                        "Output is estimated. You will receive at least ",
                                        Object(r.jsxs)("span", {
                                            children: [
                                                null === (n = b[ws.OUTPUT]) || void 0 === n ?
                                                void 0 :
                                                n.toSignificant(6),
                                                " ",
                                                i.outputAmount.currency.symbol,
                                            ],
                                        }),
                                        " or the transaction will revert.",
                                    ],
                                }) :
                                Object(r.jsxs)(Hl, {
                                    children: [
                                        "Input is estimated. You will sell at most ",
                                        Object(r.jsxs)("span", {
                                            children: [
                                                null === (t = b[ws.INPUT]) || void 0 === t ?
                                                void 0 :
                                                t.toSignificant(6),
                                                " ",
                                                i.inputAmount.currency.symbol,
                                            ],
                                        }),
                                        " or the transaction will revert.",
                                    ],
                                }),
                        }),
                        null !== o ?
                        Object(r.jsx)(Ve, {
                            justify: "flex-start",
                            gap: "sm",
                            style: {
                                padding: "16px 0 0",
                            },
                            children: Object(r.jsxs)(Vl, {
                                children: [
                                    "Output will be sent to",
                                    " ",
                                    Object(r.jsx)("b", {
                                        title: o,
                                        children: qn(o) ? Hn(o) : o,
                                    }),
                                ],
                            }),
                        }) :
                        null,
                    ],
                });
            }

            function Kl(e) {
                var n,
                    t,
                    i,
                    c,
                    o,
                    s,
                    u = e.trade,
                    l = e.originalTrade,
                    d = e.onAcceptChanges,
                    b = e.allowedSlippage,
                    p = e.onConfirm,
                    f = e.onDismiss,
                    j = e.recipient,
                    m = e.swapErrorMessage,
                    h = e.isOpen,
                    v = e.attemptingTxn,
                    y = e.txHash,
                    O = Object(a.useMemo)(
                        function() {
                            return Boolean(
                                u &&
                                l &&
                                ((n = l),
                                    (e = u).tradeType !== n.tradeType ||
                                    !Object(B.o)(
                                        e.inputAmount.currency,
                                        n.inputAmount.currency
                                    ) ||
                                    !e.inputAmount.equalTo(n.inputAmount) ||
                                    !Object(B.o)(
                                        e.outputAmount.currency,
                                        n.outputAmount.currency
                                    ) ||
                                    !e.outputAmount.equalTo(n.outputAmount))
                            );
                            var e, n;
                        }, [l, u]
                    ),
                    x = Object(a.useCallback)(
                        function() {
                            return u ?
                                Object(r.jsx)(Gl, {
                                    trade: u,
                                    allowedSlippage: b,
                                    recipient: j,
                                    showAcceptChanges: O,
                                    onAcceptChanges: d,
                                }) :
                                null;
                        }, [b, d, j, O, u]
                    ),
                    g = Object(a.useCallback)(
                        function() {
                            return u ?
                                Object(r.jsx)(ql, {
                                    onConfirm: p,
                                    trade: u,
                                    disabledConfirm: O,
                                    swapErrorMessage: m,
                                    allowedSlippage: b,
                                }) :
                                null;
                        }, [b, p, O, m, u]
                    ),
                    C = "Swapping "
                    .concat(
                        null === u ||
                        void 0 === u ||
                        null === (n = u.inputAmount) ||
                        void 0 === n ?
                        void 0 :
                        n.toSignificant(6),
                        " "
                    )
                    .concat(
                        null === u ||
                        void 0 === u ||
                        null === (t = u.inputAmount) ||
                        void 0 === t ||
                        null === (i = t.currency) ||
                        void 0 === i ?
                        void 0 :
                        i.symbol,
                        " for "
                    )
                    .concat(
                        null === u ||
                        void 0 === u ||
                        null === (c = u.outputAmount) ||
                        void 0 === c ?
                        void 0 :
                        c.toSignificant(6),
                        " "
                    )
                    .concat(
                        null === u ||
                        void 0 === u ||
                        null === (o = u.outputAmount) ||
                        void 0 === o ||
                        null === (s = o.currency) ||
                        void 0 === s ?
                        void 0 :
                        s.symbol
                    ),
                    w = Object(a.useCallback)(
                        function() {
                            return m ?
                                Object(r.jsx)(pr, {
                                    onDismiss: f,
                                    message: m,
                                }) :
                                Object(r.jsx)(dr, {
                                    title: "Confirm Swap",
                                    onDismiss: f,
                                    topContent: x,
                                    bottomContent: g,
                                });
                        }, [f, g, x, m]
                    );
                return Object(r.jsx)(fr, {
                    isOpen: h,
                    onDismiss: f,
                    attemptingTxn: v,
                    hash: y,
                    content: w,
                    pendingText: C,
                });
            }
            var Ql = t(513),
                Xl = On.black,
                Jl = Object(a.memo)(function(e) {
                    var n = e.trade,
                        t = Object(a.useContext)(l.ThemeContext);
                    return Object(r.jsx)(s.l, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        style: {
                            border: "1px solid ".concat(t.colors.borderColor),
                            borderRadius: "1rem",
                        },
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        children: n.route.path.map(function(e, n, i) {
                            var c = n === i.length - 1;
                            return Object(r.jsxs)(
                                a.Fragment, {
                                    children: [
                                        Object(r.jsxs)(s.l, {
                                            my: "0.5rem",
                                            alignItems: "center",
                                            style: {
                                                flexShrink: 0,
                                            },
                                            children: [
                                                Object(r.jsx)(Mi, {
                                                    currency: e,
                                                    size: "1.5rem",
                                                }),
                                                Object(r.jsx)(Xl, {
                                                    fontSize: "14px",
                                                    color: t.colors.text,
                                                    ml: "0.5rem",
                                                    children: e.symbol,
                                                }),
                                            ],
                                        }),
                                        c ?
                                        null :
                                        Object(r.jsx)(Ql.a, {
                                            color: t.colors.textSubtle,
                                        }),
                                    ],
                                },
                                n
                            );
                        }),
                    });
                });

            function Zl(e) {
                var n,
                    t,
                    a,
                    i,
                    c = e.trade,
                    o = e.allowedSlippage,
                    u = Ys(c),
                    l = u.priceImpactWithoutFee,
                    d = u.realizedLPFee,
                    b = c.tradeType === B.m.EXACT_INPUT,
                    p = qs(c, o);
                return Object(r.jsx)(s.f, {
                    children: Object(r.jsxs)(s.g, {
                        children: [
                            Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "14px",
                                                children: b ? "Minimum received" : "Maximum sold",
                                            }),
                                            Object(r.jsx)(Si, {
                                                text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(An, {
                                        children: Object(r.jsx)(s.v, {
                                            fontSize: "14px",
                                            children: b ?
                                                null !==
                                                (n = ""
                                                    .concat(
                                                        null === (t = p[ws.OUTPUT]) || void 0 === t ?
                                                        void 0 :
                                                        t.toSignificant(4),
                                                        " "
                                                    )
                                                    .concat(c.outputAmount.currency.symbol)) &&
                                                void 0 !== n ?
                                                n :
                                                "-" :
                                                null !==
                                                (a = ""
                                                    .concat(
                                                        null === (i = p[ws.INPUT]) || void 0 === i ?
                                                        void 0 :
                                                        i.toSignificant(4),
                                                        " "
                                                    )
                                                    .concat(c.inputAmount.currency.symbol)) &&
                                                void 0 !== a ?
                                                a :
                                                "-",
                                        }),
                                    }),
                                ],
                            }),
                            Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "14px",
                                                children: "Price Impact",
                                            }),
                                            Object(r.jsx)(Si, {
                                                text: "The difference between the market price and estimated price due to trade size.",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(Yl, {
                                        priceImpact: l,
                                    }),
                                ],
                            }),
                            Object(r.jsxs)(Nn, {
                                children: [
                                    Object(r.jsxs)(An, {
                                        children: [
                                            Object(r.jsx)(s.v, {
                                                fontSize: "14px",
                                                children: "Liquidity Provider Fee",
                                            }),
                                            Object(r.jsx)(Si, {
                                                text: "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.",
                                            }),
                                        ],
                                    }),
                                    Object(r.jsx)(s.v, {
                                        fontSize: "14px",
                                        children: d ?
                                            ""
                                            .concat(d.toSignificant(4), " ")
                                            .concat(c.inputAmount.currency.symbol) :
                                            "-",
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }

            function $l(e) {
                var n = e.trade,
                    t = Oa(),
                    a = Object(h.a)(t, 1)[0],
                    i = Boolean(n && n.route.path.length > 2);
                return Object(r.jsx)(Ve, {
                    gap: "md",
                    children: n &&
                        Object(r.jsxs)(r.Fragment, {
                            children: [
                                Object(r.jsx)(Zl, {
                                    trade: n,
                                    allowedSlippage: a,
                                }),
                                i &&
                                Object(r.jsxs)(r.Fragment, {
                                    children: [
                                        Object(r.jsx)(rs, {
                                            style: {
                                                margin: "0 8px",
                                                maxWidth: "100%",
                                                width: "auto",
                                                marginTop: "16px",
                                            },
                                        }),
                                        Object(r.jsxs)(Ve, {
                                            style: {
                                                padding: "0 8px",
                                            },
                                            children: [
                                                Object(r.jsxs)(An, {
                                                    children: [
                                                        Object(r.jsx)(s.v, {
                                                            fontSize: "14px",
                                                            children: "Route",
                                                        }),
                                                        Object(r.jsx)(Si, {
                                                            text: "Routing through these tokens resulted in the best price for your trade.",
                                                        }),
                                                    ],
                                                }),
                                                Object(r.jsx)(Jl, {
                                                    trade: n,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                });
            }

            function ed() {
                var e = Object(u.a)([
                    "\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 436px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
                    ";\n  z-index: 1;\n\n  transform: ",
                    ";\n  transition: transform 300ms ease-in-out;\n",
                ]);
                return (
                    (ed = function() {
                        return e;
                    }),
                    e
                );
            }
            var nd = l.default.div(
                ed(),
                function(e) {
                    return e.theme.colors.textSubtle;
                },
                function(e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)";
                }
            );

            function td(e) {
                var n,
                    t = e.trade,
                    a = Object(nn.a)(e, ["trade"]),
                    i = Ka(t, Qa);
                return Object(r.jsx)(nd, {
                    show: Boolean(t),
                    children: Object(r.jsx)(
                        $l,
                        Object(V.a)(
                            Object(V.a)({}, a), {}, {
                                trade: null !== (n = null !== t && void 0 !== t ? t : i) &&
                                    void 0 !== n ?
                                    n :
                                    void 0,
                            }
                        )
                    ),
                });
            }

            function rd(e) {
                var n,
                    t,
                    a,
                    i,
                    c,
                    o = e.price,
                    u = e.showInverted,
                    l = e.setShowInverted,
                    d = u ?
                    null === o || void 0 === o ?
                    void 0 :
                    o.toSignificant(6) :
                    null === o ||
                    void 0 === o ||
                    null === (n = o.invert()) ||
                    void 0 === n ?
                    void 0 :
                    n.toSignificant(6),
                    b = Boolean(
                        (null === o || void 0 === o ? void 0 : o.baseCurrency) &&
                        (null === o || void 0 === o ? void 0 : o.quoteCurrency)
                    ),
                    p = u ?
                    ""
                    .concat(
                        null === o ||
                        void 0 === o ||
                        null === (t = o.quoteCurrency) ||
                        void 0 === t ?
                        void 0 :
                        t.symbol,
                        " per "
                    )
                    .concat(
                        null === o ||
                        void 0 === o ||
                        null === (a = o.baseCurrency) ||
                        void 0 === a ?
                        void 0 :
                        a.symbol
                    ) :
                    ""
                    .concat(
                        null === o ||
                        void 0 === o ||
                        null === (i = o.baseCurrency) ||
                        void 0 === i ?
                        void 0 :
                        i.symbol,
                        " per "
                    )
                    .concat(
                        null === o ||
                        void 0 === o ||
                        null === (c = o.quoteCurrency) ||
                        void 0 === c ?
                        void 0 :
                        c.symbol
                    );
                return Object(r.jsx)(s.v, {
                    fontSize: "14px",
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                    },
                    children: b ?
                        Object(r.jsxs)(r.Fragment, {
                            children: [
                                null !== d && void 0 !== d ? d : "-",
                                " ",
                                p,
                                Object(r.jsx)(cs, {
                                    onClick: function() {
                                        return l(!u);
                                    },
                                    children: Object(r.jsx)(s.u, {
                                        width: "20px",
                                        color: "primary",
                                    }),
                                }),
                            ],
                        }) :
                        "-",
                });
            }

            function ad() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return (
                    (ad = function() {
                        return e;
                    }),
                    e
                );
            }

            function id() {
                var e = Object(u.a)([
                    "\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 16px;\n  overflow: auto;\n",
                ]);
                return (
                    (id = function() {
                        return e;
                    }),
                    e
                );
            }

            function cd() {
                var e = Object(u.a)([
                    "\n  background: ",
                    ";\n  padding: 0.75rem;\n  border-radius: 16px;\n",
                ]);
                return (
                    (cd = function() {
                        return e;
                    }),
                    e
                );
            }
            var od = On.main,
                sd = On.blue,
                ud = l.default.div(cd(), function(e) {
                    var n = e.theme;
                    return Object(tn.b)(0.6, n.colors.tertiary);
                }),
                ld = l.default.div(id()),
                dd = Object(l.default)(br.a)(ad(), function(e) {
                    return e.theme.colors.failure;
                });

            function bd(e) {
                var n,
                    t,
                    i,
                    c,
                    o = e.token,
                    s = Se().chainId,
                    u =
                    null !==
                    (n =
                        null === o ||
                        void 0 === o ||
                        null === (t = o.symbol) ||
                        void 0 === t ?
                        void 0 :
                        t.toLowerCase()) && void 0 !== n ?
                    n :
                    "",
                    l =
                    null !==
                    (i =
                        null === o ||
                        void 0 === o ||
                        null === (c = o.name) ||
                        void 0 === c ?
                        void 0 :
                        c.toLowerCase()) && void 0 !== i ?
                    i :
                    "",
                    d = Da(),
                    b = Object(a.useMemo)(
                        function() {
                            return (!(!o || !s) &&
                                Object.keys(d).some(function(e) {
                                    var n,
                                        t,
                                        r = d[e];
                                    return (!r.equals(o) &&
                                        ((null === (n = r.symbol) || void 0 === n ?
                                                void 0 :
                                                n.toLowerCase()) === u ||
                                            (null === (t = r.name) || void 0 === t ?
                                                void 0 :
                                                t.toLowerCase()) === l)
                                    );
                                })
                            );
                        }, [o, s, d, u, l]
                    );
                return o ?
                    Object(r.jsx)(ud, {
                        error: b,
                        children: Object(r.jsxs)(Sn, {
                            gap: "6px",
                            children: [
                                Object(r.jsxs)(Ve, {
                                    gap: "24px",
                                    children: [
                                        Object(r.jsx)(Mi, {
                                            currency: o,
                                            size: "16px",
                                        }),
                                        Object(r.jsx)("div", {
                                            children: " ",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Ve, {
                                    gap: "10px",
                                    justify: "flex-start",
                                    children: [
                                        Object(r.jsxs)(od, {
                                            children: [
                                                o && o.name && o.symbol && o.name !== o.symbol ?
                                                "".concat(o.name, " (").concat(o.symbol, ")") :
                                                o.name || o.symbol,
                                                " ",
                                            ],
                                        }),
                                        s &&
                                        Object(r.jsx)(hn, {
                                            style: {
                                                fontWeight: 400,
                                            },
                                            href: Vn(s, o.address, "token"),
                                            children: Object(r.jsxs)(sd, {
                                                title: o.address,
                                                children: [Hn(o.address), " (View on BscScan)"],
                                            }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }) :
                    null;
            }

            function pd(e) {
                var n = e.isOpen,
                    t = e.tokens,
                    i = e.onConfirm,
                    c = Object(a.useState)(!1),
                    o = Object(h.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(a.useCallback)(function() {
                        return l(function(e) {
                            return !e;
                        });
                    }, []),
                    b = Object(a.useCallback)(function() {
                        return null;
                    }, []);
                return Object(r.jsx)(Gt, {
                    isOpen: n,
                    onDismiss: b,
                    maxHeight: 90,
                    children: Object(r.jsx)(ld, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(Ve, {
                            gap: "lg",
                            children: [
                                Object(r.jsxs)(Sn, {
                                    gap: "6px",
                                    children: [
                                        Object(r.jsx)(dd, {}),
                                        Object(r.jsx)(s.v, {
                                            color: "failure",
                                            children: "Token imported",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(s.v, {
                                    children: [
                                        "Anyone can create an BEP20 token on BSC with ",
                                        Object(r.jsx)("em", {
                                            children: "any",
                                        }),
                                        " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.",
                                    ],
                                }),
                                Object(r.jsx)(s.v, {
                                    children: "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.",
                                }),
                                Object(r.jsxs)(s.v, {
                                    children: [
                                        "If you purchase an arbitrary token, ",
                                        Object(r.jsx)("strong", {
                                            children: "you may be unable to sell it back.",
                                        }),
                                    ],
                                }),
                                t.map(function(e) {
                                    return Object(r.jsx)(
                                        bd, {
                                            token: e,
                                        },
                                        e.address
                                    );
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsx)("div", {
                                            children: Object(r.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: {
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                },
                                                children: [
                                                    Object(r.jsx)("input", {
                                                        id: "understand-checkbox",
                                                        type: "checkbox",
                                                        className: "understand-checkbox",
                                                        checked: u,
                                                        onChange: d,
                                                    }),
                                                    " ",
                                                    Object(r.jsx)(s.v, {
                                                        as: "span",
                                                        ml: "4px",
                                                        children: "I understand",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Object(r.jsx)(s.c, {
                                            disabled: !u,
                                            variant: "danger",
                                            style: {
                                                width: "140px",
                                            },
                                            className: "token-dismiss-button",
                                            onClick: function() {
                                                i();
                                            },
                                            children: "Continue",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }

            function fd() {
                var e = Object(u.a)(["\n  stroke: ", ";\n"]);
                return (
                    (fd = function() {
                        return e;
                    }),
                    e
                );
            }

            function jd() {
                var e = Object(u.a)([
                    "\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 16px;\n  overflow: auto;\n",
                ]);
                return (
                    (jd = function() {
                        return e;
                    }),
                    e
                );
            }
            var md = On.main,
                hd = On.body,
                vd = l.default.div(jd()),
                yd = Object(l.default)(br.a)(fd(), function(e) {
                    return e.theme.colors.failure;
                });

            function Od(e) {
                var n = e.isOpen,
                    t = e.transactionType,
                    i = e.onConfirm,
                    c = Object(a.useState)(!1),
                    o = Object(h.a)(c, 2),
                    u = o[0],
                    l = o[1],
                    d = Object(a.useCallback)(function() {
                        return l(function(e) {
                            return !e;
                        });
                    }, []),
                    b = Object(a.useCallback)(function() {
                        return null;
                    }, []);
                return Object(r.jsx)(Gt, {
                    isOpen: n,
                    onDismiss: b,
                    maxHeight: 90,
                    children: Object(r.jsx)(vd, {
                        className: "token-warning-container",
                        children: Object(r.jsxs)(Ve, {
                            gap: "lg",
                            children: [
                                Object(r.jsxs)(Sn, {
                                    gap: "6px",
                                    children: [
                                        Object(r.jsx)(yd, {}),
                                        Object(r.jsx)(md, {
                                            color: "failure",
                                            children: "Syrup Warning",
                                        }),
                                    ],
                                }),
                                "" !== t &&
                                Object(r.jsxs)(r.Fragment, {
                                    children: [
                                        Object(r.jsxs)(hd, {
                                            color: "failure",
                                            children: [
                                                "Please be careful when ",
                                                Object(r.jsx)("strong", {
                                                    children: t,
                                                }),
                                                " SYRUP.",
                                            ],
                                        }),
                                        Object(r.jsx)(hd, {
                                            color: "failure",
                                            children: "Buying" === t ?
                                                "You will not receive CAKE rewards for holding purchased SYRUP." :
                                                "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE.",
                                        }),
                                    ],
                                }),
                                Object(r.jsxs)(Nn, {
                                    children: [
                                        Object(r.jsx)("div", {
                                            children: Object(r.jsxs)("label", {
                                                htmlFor: "understand-checkbox",
                                                style: {
                                                    cursor: "pointer",
                                                    userSelect: "none",
                                                },
                                                children: [
                                                    Object(r.jsx)("input", {
                                                        id: "understand-checkbox",
                                                        type: "checkbox",
                                                        className: "understand-checkbox",
                                                        checked: u,
                                                        onChange: d,
                                                    }),
                                                    " ",
                                                    Object(r.jsx)(s.v, {
                                                        as: "span",
                                                        children: "I understand",
                                                    }),
                                                ],
                                            }),
                                        }),
                                        Object(r.jsx)(s.c, {
                                            disabled: !u,
                                            variant: "danger",
                                            style: {
                                                width: "140px",
                                            },
                                            onClick: function() {
                                                l(!1), i();
                                            },
                                            children: "Continue",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    }),
                });
            }

            function xd() {
                var e = Object(u.a)([
                    "\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ",
                    " 0%,\n    ",
                    " 80%\n  );\n  opacity: 0.6;\n",
                ]);
                return (
                    (xd = function() {
                        return e;
                    }),
                    e
                );
            }

            function gd() {
                var e = Object(u.a)([
                    "\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n",
                ]);
                return (
                    (gd = function() {
                        return e;
                    }),
                    e
                );
            }

            function Cd() {
                var e = Object(u.a)([
                    "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
                    ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ",
                    ";\n",
                ]);
                return (
                    (Cd = function() {
                        return e;
                    }),
                    e
                );
            }

            function wd() {
                var e = Object(u.a)(["\n  width: 50%;\n"]);
                return (
                    (wd = function() {
                        return e;
                    }),
                    e
                );
            }

            function kd() {
                var e = Object(u.a)(["\n  margin-top: 1.25rem;\n"]);
                return (
                    (kd = function() {
                        return e;
                    }),
                    e
                );
            }
            var Td,
                Id,
                Ed = Object(l.default)(Ve)(kd()),
                Nd = Object(l.default)(Nn)(wd()),
                Rd = l.default.div(
                    Cd(),
                    function(e) {
                        var n = e.theme,
                            t = e.confirmed;
                        return e.disabled ?
                            n.colors.backgroundDisabled :
                            t ?
                            n.colors.success :
                            n.colors.primary;
                    },
                    function(e) {
                        var n = e.theme,
                            t = e.confirmed;
                        return e.disabled ?
                            n.colors.text :
                            t ?
                            n.colors.success :
                            "#FFFFFF";
                    }
                ),
                Sd = l.default.div(gd()),
                Ad = l.default.div(
                    xd(),
                    function(e) {
                        var n = e.theme,
                            t = e.prevConfirmed;
                        return Object(tn.b)(0.5, t ? n.colors.success : n.colors.primary);
                    },
                    function(e) {
                        var n = e.theme;
                        return e.prevConfirmed ?
                            n.colors.primary :
                            n.colors.backgroundDisabled;
                    }
                );

            function Ud(e) {
                var n = e.steps;
                return Object(r.jsx)(Ed, {
                    justify: "center",
                    children: Object(r.jsxs)(Nd, {
                        children: [
                            n.map(function(e, t) {
                                return Object(r.jsxs)(
                                    Sd, {
                                        children: [
                                            Object(r.jsx)(Rd, {
                                                confirmed: e,
                                                disabled: !n[t - 1] && 0 !== t,
                                                children: e ? "\u2713" : t + 1,
                                            }),
                                            Object(r.jsx)(Ad, {
                                                prevConfirmed: e,
                                            }),
                                        ],
                                    },
                                    t
                                );
                            }),
                            Object(r.jsx)(Rd, {
                                disabled: !n[n.length - 1],
                                children: n.length + 1,
                            }),
                        ],
                    }),
                });
            }

            function Bd(e) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xe,
                    t =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ge,
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = Se(),
                    c = i.account,
                    o = i.chainId,
                    s = i.library,
                    u = Js(r),
                    l = u.address,
                    d = null === r ? c : l;
                return Object(a.useMemo)(
                    function() {
                        if (!e || !d || !s || !c || !o) return [];
                        var r = Xn(0, s, c);
                        if (!r) return [];
                        var a = [];
                        return (
                            a.push(
                                B.i.swapCallParameters(e, {
                                    feeOnTransfer: !1,
                                    allowedSlippage: new B.g(B.e.BigInt(Math.floor(n)), we),
                                    recipient: d,
                                    ttl: t,
                                })
                            ),
                            e.tradeType === B.m.EXACT_INPUT &&
                            a.push(
                                B.i.swapCallParameters(e, {
                                    feeOnTransfer: !0,
                                    allowedSlippage: new B.g(B.e.BigInt(Math.floor(n)), we),
                                    recipient: d,
                                    ttl: t,
                                })
                            ),
                            a.map(function(e) {
                                return {
                                    parameters: e,
                                    contract: r,
                                };
                            })
                        );
                    }, [c, n, o, t, s, d, e]
                );
            }!(function(e) {
                (e[(e.INVALID = 0)] = "INVALID"),
                (e[(e.LOADING = 1)] = "LOADING"),
                (e[(e.VALID = 2)] = "VALID");
            })(Td || (Td = {})),
            (function(e) {
                (e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
                (e[(e.WRAP = 1)] = "WRAP"),
                (e[(e.UNWRAP = 2)] = "UNWRAP");
            })(Id || (Id = {}));
            var Pd = {
                wrapType: Id.NOT_APPLICABLE,
            };

            function _d(e, n, t) {
                var r = Se(),
                    i = r.chainId,
                    c = r.account,
                    o = (function(e) {
                        var n = Se().chainId;
                        return Aa(n ? B.n[n].address : void 0, Na, e);
                    })(),
                    s = Ga(null !== c && void 0 !== c ? c : void 0, e),
                    u = Object(a.useMemo)(
                        function() {
                            return nu(t, e);
                        }, [e, t]
                    ),
                    l = Bs();
                return Object(a.useMemo)(
                    function() {
                        if (!o || !i || !e || !n) return Pd;
                        var t = u && s && !s.lessThan(u);
                        return e === B.d && Object(B.o)(B.n[i], n) ?
                            {
                                wrapType: Id.WRAP,
                                execute: t && u ?
                                    Object(m.a)(
                                        j.a.mark(function e() {
                                            var n;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (e.next = 3),
                                                                    o.deposit({
                                                                        value: "0x".concat(
                                                                            u.raw.toString(16)
                                                                        ),
                                                                    })
                                                                );
                                                            case 3:
                                                                (n = e.sent),
                                                                l(n, {
                                                                        summary: "Wrap ".concat(
                                                                            u.toSignificant(6),
                                                                            " BNB to WBNB"
                                                                        ),
                                                                    }),
                                                                    (e.next = 10);
                                                                break;
                                                            case 7:
                                                                (e.prev = 7),
                                                                (e.t0 = e.catch(0)),
                                                                console.error(
                                                                    "Could not deposit",
                                                                    e.t0
                                                                );
                                                            case 10:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [0, 7]
                                                ]
                                            );
                                        })
                                    ) :
                                    void 0,
                                inputError: t ? void 0 : "Insufficient ETH balance",
                            } :
                            Object(B.o)(B.n[i], e) && n === B.d ?
                            {
                                wrapType: Id.UNWRAP,
                                execute: t && u ?
                                    Object(m.a)(
                                        j.a.mark(function e() {
                                            var n;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (e.next = 3),
                                                                    o.withdraw(
                                                                        "0x".concat(u.raw.toString(16))
                                                                    )
                                                                );
                                                            case 3:
                                                                (n = e.sent),
                                                                l(n, {
                                                                        summary: "Unwrap ".concat(
                                                                            u.toSignificant(6),
                                                                            " WBNB to BNB"
                                                                        ),
                                                                    }),
                                                                    (e.next = 10);
                                                                break;
                                                            case 7:
                                                                (e.prev = 7),
                                                                (e.t0 = e.catch(0)),
                                                                console.error(
                                                                    "Could not withdraw",
                                                                    e.t0
                                                                );
                                                            case 10:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [0, 7]
                                                ]
                                            );
                                        })
                                    ) :
                                    void 0,
                                inputError: t ? void 0 : "Insufficient WBNB balance",
                            } :
                            Pd;
                    }, [o, i, e, n, u, s, l]
                );
            }
            var Dd = On.main,
                Ld = function() {
                    var e,
                        n,
                        t,
                        i,
                        c,
                        o,
                        u,
                        d,
                        b,
                        p,
                        f = uu(),
                        v = [
                            za(null === f || void 0 === f ? void 0 : f.inputCurrencyId),
                            za(null === f || void 0 === f ? void 0 : f.outputCurrencyId),
                        ],
                        y = v[0],
                        O = v[1],
                        g = Object(a.useState)(!1),
                        C = Object(h.a)(g, 2),
                        k = C[0],
                        T = C[1],
                        I = Object(a.useState)(!1),
                        E = Object(h.a)(I, 2),
                        N = E[0],
                        R = E[1],
                        S = Object(a.useState)(""),
                        A = Object(h.a)(S, 2),
                        U = A[0],
                        P = A[1],
                        _ = Object(a.useMemo)(
                            function() {
                                var e, n;
                                return null !==
                                    (e =
                                        null === (n = [y, O]) || void 0 === n ?
                                        void 0 :
                                        n.filter(function(e) {
                                            return e instanceof B.j;
                                        })) && void 0 !== e ?
                                    e :
                                    [];
                            }, [y, O]
                        ),
                        D = Object(a.useCallback)(function() {
                            T(!0);
                        }, []),
                        L = Object(a.useCallback)(function() {
                            R(!1), P("");
                        }, []),
                        M = Se().account,
                        F = Object(a.useContext)(l.ThemeContext),
                        z = (function() {
                            var e = Object(x.c)(),
                                n = ya(),
                                t = Object(a.useCallback)(
                                    function() {
                                        e(
                                            oa({
                                                userExpertMode: !n,
                                            })
                                        );
                                    }, [n, e]
                                );
                            return [n, t];
                        })(),
                        Y = Object(h.a)(z, 1)[0],
                        q = xa(),
                        W = Object(h.a)(q, 1)[0],
                        H = Oa(),
                        G = Object(h.a)(H, 1)[0],
                        K = eu(),
                        Q = K.independentField,
                        X = K.typedValue,
                        J = K.recipient,
                        Z = au(),
                        $ = Z.v2Trade,
                        ee = Z.currencyBalances,
                        ne = Z.parsedAmount,
                        te = Z.currencies,
                        re = Z.inputError,
                        ae = _d(te[ws.INPUT], te[ws.OUTPUT], X),
                        ie = ae.wrapType,
                        ce = ae.execute,
                        oe = ae.inputError,
                        le = ie !== Id.NOT_APPLICABLE,
                        de = $,
                        be = le ?
                        ((e = {}),
                            Object(w.a)(e, ws.INPUT, ne),
                            Object(w.a)(e, ws.OUTPUT, ne),
                            e) :
                        ((n = {}),
                            Object(w.a)(
                                n,
                                ws.INPUT,
                                Q === ws.INPUT ?
                                ne :
                                null === de || void 0 === de ?
                                void 0 :
                                de.inputAmount
                            ),
                            Object(w.a)(
                                n,
                                ws.OUTPUT,
                                Q === ws.OUTPUT ?
                                ne :
                                null === de || void 0 === de ?
                                void 0 :
                                de.outputAmount
                            ),
                            n),
                        pe = (function() {
                            var e = Object(x.c)(),
                                n = Object(a.useCallback)(
                                    function(n, t) {
                                        e(
                                            ks({
                                                field: n,
                                                currencyId: t instanceof B.j ? t.address : t === B.d ? "ETH" : "",
                                            })
                                        );
                                    }, [e]
                                );
                            return {
                                onSwitchTokens: Object(a.useCallback)(
                                    function() {
                                        e(Ts());
                                    }, [e]
                                ),
                                onCurrencySelection: n,
                                onUserInput: Object(a.useCallback)(
                                    function(n, t) {
                                        e(
                                            Is({
                                                field: n,
                                                typedValue: t,
                                            })
                                        );
                                    }, [e]
                                ),
                                onChangeRecipient: Object(a.useCallback)(
                                    function(n) {
                                        e(
                                            Ns({
                                                recipient: n,
                                            })
                                        );
                                    }, [e]
                                ),
                            };
                        })(),
                        fe = pe.onSwitchTokens,
                        je = pe.onCurrencySelection,
                        me = pe.onUserInput,
                        he = pe.onChangeRecipient,
                        ve = !re,
                        ye = Q === ws.INPUT ? ws.OUTPUT : ws.INPUT,
                        Oe = Object(a.useCallback)(
                            function(e) {
                                me(ws.INPUT, e);
                            }, [me]
                        ),
                        Ce = Object(a.useCallback)(
                            function(e) {
                                me(ws.OUTPUT, e);
                            }, [me]
                        ),
                        we = Object(a.useState)({
                            showConfirm: !1,
                            tradeToConfirm: void 0,
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            txHash: void 0,
                        }),
                        ke = Object(h.a)(we, 2),
                        Te = ke[0],
                        Ne = Te.showConfirm,
                        Re = Te.tradeToConfirm,
                        Ae = Te.swapErrorMessage,
                        Ue = Te.attemptingTxn,
                        Be = Te.txHash,
                        Pe = ke[1],
                        _e =
                        ((u = {}),
                            Object(w.a)(u, Q, X),
                            Object(w.a)(
                                u,
                                ye,
                                le ?
                                null !==
                                (t =
                                    null === (i = be[Q]) || void 0 === i ?
                                    void 0 :
                                    i.toExact()) && void 0 !== t ?
                                t :
                                "" :
                                null !==
                                (c =
                                    null === (o = be[ye]) || void 0 === o ?
                                    void 0 :
                                    o.toSignificant(6)) && void 0 !== c ?
                                c :
                                ""
                            ),
                            u),
                        De = null === de || void 0 === de ? void 0 : de.route,
                        Le = Boolean(
                            te[ws.INPUT] &&
                            te[ws.OUTPUT] &&
                            (null === (d = be[Q]) || void 0 === d ?
                                void 0 :
                                d.greaterThan(B.e.BigInt(0)))
                        ),
                        Me = !De,
                        Fe = (function(e) {
                            var n =
                                arguments.length > 1 && void 0 !== arguments[1] ?
                                arguments[1] :
                                0;
                            return Hs(
                                Object(a.useMemo)(
                                    function() {
                                        return e ? qs(e, n)[ws.INPUT] : void 0;
                                    }, [e, n]
                                ),
                                ue
                            );
                        })(de, G),
                        ze = Object(h.a)(Fe, 2),
                        Ye = ze[0],
                        qe = ze[1],
                        We = Object(a.useState)(!1),
                        He = Object(h.a)(We, 2),
                        Ge = He[0],
                        Ke = He[1];
                    Object(a.useEffect)(
                        function() {
                            Ye === Ds.PENDING && Ke(!0);
                        }, [Ye, Ge]
                    );
                    var Qe = bu(ee[ws.INPUT]),
                        Xe = Boolean(
                            Qe &&
                            (null === (b = be[ws.INPUT]) || void 0 === b ?
                                void 0 :
                                b.equalTo(Qe))
                        ),
                        Je = (function(e) {
                            var n =
                                arguments.length > 1 && void 0 !== arguments[1] ?
                                arguments[1] :
                                xe,
                                t =
                                arguments.length > 2 && void 0 !== arguments[2] ?
                                arguments[2] :
                                ge,
                                r = arguments.length > 3 ? arguments[3] : void 0,
                                i = Se(),
                                c = i.account,
                                o = i.chainId,
                                s = i.library,
                                u = Bd(e, n, t, r),
                                l = Bs(),
                                d = Js(r).address,
                                b = null === r ? c : d;
                            return Object(a.useMemo)(
                                function() {
                                    return e && s && c && o ?
                                        b ?
                                        {
                                            state: Td.VALID,
                                            callback: (function() {
                                                var n = Object(m.a)(
                                                    j.a.mark(function n() {
                                                        var t, a, i, o, s, d, p, f, m, h;
                                                        return j.a.wrap(function(n) {
                                                            for (;;)
                                                                switch ((n.prev = n.next)) {
                                                                    case 0:
                                                                        return (
                                                                            (n.next = 2),
                                                                            Promise.all(
                                                                                u.map(function(e) {
                                                                                    var n,
                                                                                        t = e.parameters,
                                                                                        r = t.methodName,
                                                                                        a = t.args,
                                                                                        i = t.value,
                                                                                        c = e.contract,
                                                                                        o = !i || oi(i) ?
                                                                                        {} :
                                                                                        {
                                                                                            value: i,
                                                                                        };
                                                                                    return (n = c.estimateGas)[r]
                                                                                        .apply(
                                                                                            n,
                                                                                            Object(se.a)(a).concat([o])
                                                                                        )
                                                                                        .then(function(n) {
                                                                                            return {
                                                                                                call: e,
                                                                                                gasEstimate: n,
                                                                                            };
                                                                                        })
                                                                                        .catch(function(n) {
                                                                                            var t;
                                                                                            return (
                                                                                                console.info(
                                                                                                    "Gas estimate failed, trying eth_call to extract error",
                                                                                                    e
                                                                                                ),
                                                                                                (t = c.callStatic)[r]
                                                                                                .apply(
                                                                                                    t,
                                                                                                    Object(se.a)(a).concat([
                                                                                                        o,
                                                                                                    ])
                                                                                                )
                                                                                                .then(function(t) {
                                                                                                    return (
                                                                                                        console.info(
                                                                                                            "Unexpected successful call after failed estimate gas",
                                                                                                            e,
                                                                                                            n,
                                                                                                            t
                                                                                                        ), {
                                                                                                            call: e,
                                                                                                            error: new Error(
                                                                                                                "Unexpected issue with estimating the gas. Please try again."
                                                                                                            ),
                                                                                                        }
                                                                                                    );
                                                                                                })
                                                                                                .catch(function(n) {
                                                                                                    var t;
                                                                                                    switch (
                                                                                                        (console.info(
                                                                                                                "Call threw error",
                                                                                                                e,
                                                                                                                n
                                                                                                            ),
                                                                                                            n.reason)
                                                                                                    ) {
                                                                                                        case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                                                        case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                                                            t =
                                                                                                                "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                                                            break;
                                                                                                        default:
                                                                                                            t =
                                                                                                                "The transaction cannot succeed due to error: ".concat(
                                                                                                                    n.reason,
                                                                                                                    ". This is probably an issue with one of the tokens you are swapping."
                                                                                                                );
                                                                                                    }
                                                                                                    return {
                                                                                                        call: e,
                                                                                                        error: new Error(t),
                                                                                                    };
                                                                                                })
                                                                                            );
                                                                                        });
                                                                                })
                                                                            )
                                                                        );
                                                                    case 2:
                                                                        if (
                                                                            ((t = n.sent),
                                                                                (a = t.find(function(e, n, t) {
                                                                                    return (
                                                                                        "gasEstimate" in e &&
                                                                                        (n === t.length - 1 ||
                                                                                            "gasEstimate" in t[n + 1])
                                                                                    );
                                                                                })))
                                                                        ) {
                                                                            n.next = 9;
                                                                            break;
                                                                        }
                                                                        if (!(
                                                                                (i = t.filter(function(e) {
                                                                                    return "error" in e;
                                                                                })).length > 0
                                                                            )) {
                                                                            n.next = 8;
                                                                            break;
                                                                        }
                                                                        throw i[i.length - 1].error;
                                                                    case 8:
                                                                        throw new Error(
                                                                            "Unexpected error. Please contact support: none of the calls threw an error"
                                                                        );
                                                                    case 9:
                                                                        return (
                                                                            (o = a.call),
                                                                            (s = o.contract),
                                                                            (d = o.parameters),
                                                                            (p = d.methodName),
                                                                            (f = d.args),
                                                                            (m = d.value),
                                                                            (h = a.gasEstimate),
                                                                            n.abrupt(
                                                                                "return",
                                                                                s[p]
                                                                                .apply(
                                                                                    s,
                                                                                    Object(se.a)(f).concat([
                                                                                        Object(V.a)({
                                                                                                gasLimit: Gn(h),
                                                                                            },
                                                                                            m && !oi(m) ?
                                                                                            {
                                                                                                value: m,
                                                                                                from: c,
                                                                                            } :
                                                                                            {
                                                                                                from: c,
                                                                                            }
                                                                                        ),
                                                                                    ])
                                                                                )
                                                                                .then(function(n) {
                                                                                    var t =
                                                                                        e.inputAmount.currency
                                                                                        .symbol,
                                                                                        a =
                                                                                        e.outputAmount.currency
                                                                                        .symbol,
                                                                                        i =
                                                                                        e.inputAmount.toSignificant(
                                                                                            3
                                                                                        ),
                                                                                        o =
                                                                                        e.outputAmount.toSignificant(
                                                                                            3
                                                                                        ),
                                                                                        s = "Swap "
                                                                                        .concat(i, " ")
                                                                                        .concat(t, " for ")
                                                                                        .concat(o, " ")
                                                                                        .concat(a),
                                                                                        u =
                                                                                        b === c ?
                                                                                        s :
                                                                                        ""
                                                                                        .concat(s, " to ")
                                                                                        .concat(
                                                                                            r && qn(r) ?
                                                                                            Hn(r) :
                                                                                            r
                                                                                        );
                                                                                    return (
                                                                                        l(n, {
                                                                                            summary: u,
                                                                                        }),
                                                                                        n.hash
                                                                                    );
                                                                                })
                                                                                .catch(function(e) {
                                                                                    throw 4001 ===
                                                                                        (null === e || void 0 === e ?
                                                                                            void 0 :
                                                                                            e.code) ?
                                                                                        new Error(
                                                                                            "Transaction rejected."
                                                                                        ) :
                                                                                        (console.error(
                                                                                                "Swap failed",
                                                                                                e,
                                                                                                p,
                                                                                                f,
                                                                                                m
                                                                                            ),
                                                                                            new Error(
                                                                                                "Swap failed: ".concat(
                                                                                                    e.message
                                                                                                )
                                                                                            ));
                                                                                })
                                                                            )
                                                                        );
                                                                    case 11:
                                                                    case "end":
                                                                        return n.stop();
                                                                }
                                                        }, n);
                                                    })
                                                );
                                                return function() {
                                                    return n.apply(this, arguments);
                                                };
                                            })(),
                                            error: null,
                                        } :
                                        null !== r ?
                                        {
                                            state: Td.INVALID,
                                            callback: null,
                                            error: "Invalid recipient",
                                        } :
                                        {
                                            state: Td.LOADING,
                                            callback: null,
                                            error: null,
                                        } :
                                        {
                                            state: Td.INVALID,
                                            callback: null,
                                            error: "Missing dependencies",
                                        };
                                }, [e, s, c, o, b, r, u, l]
                            );
                        })(de, G, W, J),
                        Ze = Je.callback,
                        $e = Je.error,
                        en = Ys(de).priceImpactWithoutFee,
                        nn = Object(a.useCallback)(
                            function() {
                                (en &&
                                    !(function(e) {
                                        return e.lessThan(Ee) ?
                                            !!e.lessThan(Ie) ||
                                            window.confirm(
                                                "This swap has a price impact of at least ".concat(
                                                    Ie.toFixed(0),
                                                    "%. Please confirm that you would like to continue with this swap."
                                                )
                                            ) :
                                            "confirm" ===
                                            window.prompt(
                                                "This swap has a price impact of at least ".concat(
                                                    Ee.toFixed(0),
                                                    '%. Please type the word "confirm" to continue with this swap.'
                                                )
                                            );
                                    })(en)) ||
                                (Ze &&
                                    (Pe(function(e) {
                                            return Object(V.a)(
                                                Object(V.a)({}, e), {}, {
                                                    attemptingTxn: !0,
                                                    swapErrorMessage: void 0,
                                                    txHash: void 0,
                                                }
                                            );
                                        }),
                                        Ze()
                                        .then(function(e) {
                                            Pe(function(n) {
                                                return Object(V.a)(
                                                    Object(V.a)({}, n), {}, {
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: void 0,
                                                        txHash: e,
                                                    }
                                                );
                                            });
                                        })
                                        .catch(function(e) {
                                            Pe(function(n) {
                                                return Object(V.a)(
                                                    Object(V.a)({}, n), {}, {
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: e.message,
                                                        txHash: void 0,
                                                    }
                                                );
                                            });
                                        })));
                            }, [en, Ze, Pe]
                        ),
                        tn = Object(a.useState)(!1),
                        rn = Object(h.a)(tn, 2),
                        an = rn[0],
                        cn = rn[1],
                        on = Ws(en),
                        sn = !re &&
                        (Ye === Ds.NOT_APPROVED ||
                            Ye === Ds.PENDING ||
                            (Ge && Ye === Ds.APPROVED)) &&
                        !(on > 3 && !Y),
                        un = Object(a.useCallback)(
                            function() {
                                Pe(function(e) {
                                        return Object(V.a)(
                                            Object(V.a)({}, e), {}, {
                                                showConfirm: !1,
                                            }
                                        );
                                    }),
                                    Be && me(ws.INPUT, "");
                            }, [me, Be, Pe]
                        ),
                        ln = Object(a.useCallback)(
                            function() {
                                Pe(function(e) {
                                    return Object(V.a)(
                                        Object(V.a)({}, e), {}, {
                                            tradeToConfirm: de,
                                        }
                                    );
                                });
                            }, [de]
                        ),
                        dn = Object(a.useCallback)(
                            function(e, n) {
                                "syrup" === e && (R(!0), P(n));
                            }, [R, P]
                        ),
                        bn = Object(a.useCallback)(
                            function(e) {
                                Ke(!1),
                                    je(ws.INPUT, e),
                                    "syrup" === e.symbol.toLowerCase() &&
                                    dn(e.symbol.toLowerCase(), "Selling");
                            }, [je, Ke, dn]
                        ),
                        pn = Object(a.useCallback)(
                            function() {
                                Qe && me(ws.INPUT, Qe.toExact());
                            }, [Qe, me]
                        ),
                        jn = Object(a.useCallback)(
                            function(e) {
                                je(ws.OUTPUT, e),
                                    "syrup" === e.symbol.toLowerCase() &&
                                    dn(e.symbol.toLowerCase(), "Buying");
                            }, [je, dn]
                        );
                    return Object(r.jsxs)(r.Fragment, {
                        children: [
                            Object(r.jsx)(pd, {
                                isOpen: _.length > 0 && !k,
                                tokens: _,
                                onConfirm: D,
                            }),
                            Object(r.jsx)(Od, {
                                isOpen: N,
                                transactionType: U,
                                onConfirm: L,
                            }),
                            Object(r.jsx)(kr, {}),
                            Object(r.jsx)(vu, {
                                children: Object(r.jsxs)(ns, {
                                    id: "swap-page",
                                    children: [
                                        Object(r.jsx)(Kl, {
                                            isOpen: Ne,
                                            trade: de,
                                            originalTrade: Re,
                                            onAcceptChanges: ln,
                                            attemptingTxn: Ue,
                                            txHash: Be,
                                            recipient: J,
                                            allowedSlippage: G,
                                            onConfirm: nn,
                                            swapErrorMessage: Ae,
                                            onDismiss: un,
                                        }),
                                        Object(r.jsx)(bl, {
                                            title: "Exchange",
                                            description: "Trade tokens in an instant",
                                        }),
                                        Object(r.jsxs)(s.g, {
                                            children: [
                                                Object(r.jsxs)(Ve, {
                                                    gap: "md",
                                                    children: [
                                                        Object(r.jsx)(wo, {
                                                            label: Q === ws.OUTPUT && !le && de ?
                                                                "From (estimated)" :
                                                                yr(76, "From"),
                                                            value: _e[ws.INPUT],
                                                            showMaxButton: !Xe,
                                                            currency: te[ws.INPUT],
                                                            onUserInput: Oe,
                                                            onMax: pn,
                                                            onCurrencySelect: bn,
                                                            otherCurrency: te[ws.OUTPUT],
                                                            id: "swap-currency-input",
                                                        }),
                                                        Object(r.jsx)(Ve, {
                                                            justify: "space-between",
                                                            children: Object(r.jsxs)(Sn, {
                                                                justify: Y ? "space-between" : "center",
                                                                style: {
                                                                    padding: "0 1rem",
                                                                },
                                                                children: [
                                                                    Object(r.jsx)(ts, {
                                                                        clickable: !0,
                                                                        children: Object(r.jsx)(s.n, {
                                                                            variant: "tertiary",
                                                                            onClick: function() {
                                                                                Ke(!1), fe();
                                                                            },
                                                                            style: {
                                                                                borderRadius: "50%",
                                                                            },
                                                                            size: "sm",
                                                                            children: Object(r.jsx)(s.b, {
                                                                                color: "primary",
                                                                                width: "24px",
                                                                            }),
                                                                        }),
                                                                    }),
                                                                    null === J && !le && Y ?
                                                                    Object(r.jsx)(fn, {
                                                                        id: "add-recipient-button",
                                                                        onClick: function() {
                                                                            return he("");
                                                                        },
                                                                        children: "+ Add a send (optional)",
                                                                    }) :
                                                                    null,
                                                                ],
                                                            }),
                                                        }),
                                                        Object(r.jsx)(wo, {
                                                            value: _e[ws.OUTPUT],
                                                            onUserInput: Ce,
                                                            label: Q === ws.INPUT && !le && de ?
                                                                "To (estimated)" :
                                                                yr(80, "To"),
                                                            showMaxButton: !1,
                                                            currency: te[ws.OUTPUT],
                                                            onCurrencySelect: jn,
                                                            otherCurrency: te[ws.INPUT],
                                                            id: "swap-currency-output",
                                                        }),
                                                        null === J || le ?
                                                        null :
                                                        Object(r.jsxs)(r.Fragment, {
                                                            children: [
                                                                Object(r.jsxs)(Sn, {
                                                                    justify: "space-between",
                                                                    style: {
                                                                        padding: "0 1rem",
                                                                    },
                                                                    children: [
                                                                        Object(r.jsx)(ts, {
                                                                            clickable: !1,
                                                                            children: Object(r.jsx)(vl.a, {
                                                                                size: "16",
                                                                                color: F.colors.textSubtle,
                                                                            }),
                                                                        }),
                                                                        Object(r.jsx)(fn, {
                                                                            id: "remove-recipient-button",
                                                                            onClick: function() {
                                                                                return he(null);
                                                                            },
                                                                            children: "- Remove send",
                                                                        }),
                                                                    ],
                                                                }),
                                                                Object(r.jsx)(Fl, {
                                                                    id: "recipient",
                                                                    value: J,
                                                                    onChange: he,
                                                                }),
                                                            ],
                                                        }),
                                                        le ?
                                                        null :
                                                        Object(r.jsx)(Pt, {
                                                            padding: ".25rem .75rem 0 .75rem",
                                                            borderRadius: "20px",
                                                            children: Object(r.jsxs)(Ve, {
                                                                gap: "4px",
                                                                children: [
                                                                    Boolean(de) &&
                                                                    Object(r.jsxs)(Nn, {
                                                                        align: "center",
                                                                        children: [
                                                                            Object(r.jsx)(s.v, {
                                                                                fontSize: "14px",
                                                                                children: "Price",
                                                                            }),
                                                                            Object(r.jsx)(rd, {
                                                                                price: null === de || void 0 === de ?
                                                                                    void 0 :
                                                                                    de.executionPrice,
                                                                                showInverted: an,
                                                                                setShowInverted: cn,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    G !== xe &&
                                                                    Object(r.jsxs)(Nn, {
                                                                        align: "center",
                                                                        children: [
                                                                            Object(r.jsx)(s.v, {
                                                                                fontSize: "14px",
                                                                                children: "Slippage Tolerance",
                                                                            }),
                                                                            Object(r.jsxs)(s.v, {
                                                                                fontSize: "14px",
                                                                                children: [G / 100, "%"],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                Object(r.jsxs)(as, {
                                                    children: [
                                                        M ?
                                                        le ?
                                                        Object(r.jsx)(s.c, {
                                                            disabled: Boolean(oe),
                                                            onClick: ce,
                                                            fullWidth: !0,
                                                            children: null !== oe && void 0 !== oe ?
                                                                oe :
                                                                ie === Id.WRAP ?
                                                                "Wrap" :
                                                                ie === Id.UNWRAP ?
                                                                "Unwrap" :
                                                                null,
                                                        }) :
                                                        Me && Le ?
                                                        Object(r.jsx)(Dt, {
                                                            style: {
                                                                textAlign: "center",
                                                            },
                                                            children: Object(r.jsx)(Dd, {
                                                                mb: "4px",
                                                                children: "Insufficient liquidity for this trade.",
                                                            }),
                                                        }) :
                                                        sn ?
                                                        Object(r.jsxs)(Nn, {
                                                            children: [
                                                                Object(r.jsx)(s.c, {
                                                                    onClick: qe,
                                                                    disabled: Ye !== Ds.NOT_APPROVED || Ge,
                                                                    style: {
                                                                        width: "48%",
                                                                    },
                                                                    variant: Ye === Ds.APPROVED ?
                                                                        "success" :
                                                                        "primary",
                                                                    children: Ye === Ds.PENDING ?
                                                                        Object(r.jsxs)(Sn, {
                                                                            gap: "6px",
                                                                            justify: "center",
                                                                            children: [
                                                                                "Approving ",
                                                                                Object(r.jsx)(xt, {
                                                                                    stroke: "white",
                                                                                }),
                                                                            ],
                                                                        }) :
                                                                        Ge && Ye === Ds.APPROVED ?
                                                                        "Approved" :
                                                                        "Approve ".concat(
                                                                            null === (p = te[ws.INPUT]) ||
                                                                            void 0 === p ?
                                                                            void 0 :
                                                                            p.symbol
                                                                        ),
                                                                }),
                                                                Object(r.jsx)(s.c, {
                                                                    onClick: function() {
                                                                        Y
                                                                            ?
                                                                            nn() :
                                                                            Pe({
                                                                                tradeToConfirm: de,
                                                                                attemptingTxn: !1,
                                                                                swapErrorMessage: void 0,
                                                                                showConfirm: !0,
                                                                                txHash: void 0,
                                                                            });
                                                                    },
                                                                    style: {
                                                                        width: "48%",
                                                                    },
                                                                    id: "swap-button",
                                                                    disabled:
                                                                        !ve ||
                                                                        Ye !== Ds.APPROVED ||
                                                                        (on > 3 && !Y),
                                                                    variant: ve && on > 2 ? "danger" : "primary",
                                                                    children: on > 3 && !Y ?
                                                                        "Price Impact High" :
                                                                        "Swap".concat(
                                                                            on > 2 ? " Anyway" : ""
                                                                        ),
                                                                }),
                                                            ],
                                                        }) :
                                                        Object(r.jsx)(s.c, {
                                                            onClick: function() {
                                                                Y
                                                                    ?
                                                                    nn() :
                                                                    Pe({
                                                                        tradeToConfirm: de,
                                                                        attemptingTxn: !1,
                                                                        swapErrorMessage: void 0,
                                                                        showConfirm: !0,
                                                                        txHash: void 0,
                                                                    });
                                                            },
                                                            id: "swap-button",
                                                            disabled: !ve || (on > 3 && !Y) || !!$e,
                                                            variant: ve && on > 2 && !$e ?
                                                                "danger" :
                                                                "primary",
                                                            fullWidth: !0,
                                                            children: re ||
                                                                (on > 3 && !Y ?
                                                                    "Price Impact Too High" :
                                                                    "Swap".concat(
                                                                        on > 2 ? " Anyway" : ""
                                                                    )),
                                                        }) :
                                                        Object(r.jsx)(ju, {
                                                            fullWidth: !0,
                                                        }),
                                                        sn &&
                                                        Object(r.jsx)(Ud, {
                                                            steps: [Ye === Ds.APPROVED],
                                                        }),
                                                        Y && Ae ?
                                                        Object(r.jsx)(ls, {
                                                            error: Ae,
                                                        }) :
                                                        null,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            Object(r.jsx)(td, {
                                trade: de,
                            }),
                        ],
                    });
                };

            function Md(e) {
                var n = e.location;
                return Object(r.jsx)(y.a, {
                    to: Object(V.a)(
                        Object(V.a)({}, n), {}, {
                            pathname: "/swap",
                        }
                    ),
                });
            }
            var Fd = {
                    code: "en",
                    language: "English",
                },
                zd = [Fd],
                Yd = {
                    selectedLanguage: {
                        code: "",
                        language: "",
                    },
                    setSelectedLanguage: function() {},
                    translatedLanguage: {
                        code: "",
                        language: "",
                    },
                    setTranslatedLanguage: function() {},
                },
                qd = Object(a.createContext)(Yd),
                Wd = i.a.createContext({
                    isDark: !1,
                    toggleTheme: function() {
                        return null;
                    },
                }),
                Vd = function(e) {
                    var n = e.children,
                        t = Object(a.useState)(function() {
                            return !0;
                        }),
                        i = Object(h.a)(t, 2),
                        c = i[0],
                        o = i[1];
                    return Object(r.jsx)(Wd.Provider, {
                        value: {
                            isDark: c,
                            toggleTheme: function() {
                                o(function(e) {
                                    return (
                                        localStorage.setItem("IS_DARK", JSON.stringify(!e)), !e || !0
                                    );
                                });
                            },
                        },
                        children: Object(r.jsx)(l.ThemeProvider, {
                            theme: c ? s.w : s.x,
                            children: n,
                        }),
                    });
                },
                Hd = function() {
                    var e = Object(a.useContext)(Wd);
                    return {
                        isDark: e.isDark,
                        toggleTheme: e.toggleTheme,
                        theme: Object(a.useContext)(l.ThemeContext),
                    };
                },
                Gd = function() {
                    var e = Object(a.useState)(null),
                        n = Object(h.a)(e, 2),
                        t = n[0],
                        r = n[1];
                    return (
                        Object(a.useEffect)(
                            function() {
                                (function() {
                                    var e = Object(m.a)(
                                        j.a.mark(function e() {
                                            var n, t;
                                            return j.a.wrap(
                                                function(e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (e.prev = 0),
                                                                    (e.next = 3),
                                                                    fetch(
                                                                        "https://api.pancakeswap.com/api/v1/price"
                                                                    )
                                                                );
                                                            case 3:
                                                                return (n = e.sent), (e.next = 6), n.json();
                                                            case 6:
                                                                (t = e.sent), r(t), (e.next = 13);
                                                                break;
                                                            case 10:
                                                                (e.prev = 10),
                                                                (e.t0 = e.catch(0)),
                                                                console.error(
                                                                    "Unable to fetch price data:",
                                                                    e.t0
                                                                );
                                                            case 13:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                null, [
                                                    [0, 10]
                                                ]
                                            );
                                        })
                                    );
                                    return function() {
                                        return e.apply(this, arguments);
                                    };
                                })()();
                            }, [r]
                        ),
                        t
                    );
                },
                Kd = [{
                        label: "Home",
                        icon: "HomeIcon",
                        href: "https://www.catx.live/",
                    },
                    {
                        label: "Trade",
                        icon: "TradeIcon",
                        initialOpenState: !0,
                        items: [{
                                label: "Exchange",
                                href: "/swap",
                            },
                            {
                                label: "Liquidity",
                                href: "/pool",
                            },
                        ],
                    },

                    {
                        label: "CatX Staking",
                        icon: "JungleIcon",
                        href: "https://pools.westakeit.com/bsc/0xF432b092D360dB2bd43fb55Ab3447bb7ef2AD579?fbclid=IwAR1g_4PpOvCnnr5oGHL-zawVdJJRpaeBJrPQSdH4Jo_PzGGGFjO3fAzkLcA",
                    },

                    {
                        label: "Community",
                        icon: "ReferralIcon",
                        href: "https://t.me/CatXChat",
                    },
                    {
                        label: "Contract",
                        icon: "PriceGuardIcon",
                        href: "https://bscscan.com/address/0xf432b092d360db2bd43fb55ab3447bb7ef2ad579#code",
                    },
                    {
                        label: "Lock",
                        icon: "ShieldIcon",
                        href: "https://www.pinksale.finance/pinklock/record/1140293?chain=BSC",
                    },
                    {
                        label: "Pancakeswap",
                        icon: "InfoIcon",
                        href: "https://pancakeswap.finance/swap?outputCurrency=0xF432b092D360dB2bd43fb55Ab3447bb7ef2AD579",
                    },

                ],
                Qd = function(e) {
                    var n = Object(g.c)(),
                        t = n.account,
                        i = n.activate,
                        c = n.deactivate,
                        o = Object(a.useContext)(qd),
                        u = o.selectedLanguage,
                        l = o.setSelectedLanguage,
                        d = Hd(),
                        b = d.isDark,
                        p = d.toggleTheme,
                        f = Gd(),
                        j = f && f.prices.PANTHER ? Number(f.prices.PANTHER) : Number(0);
                    return Object(r.jsx)(
                        s.q,
                        Object(V.a)({
                                links: Kd,
                                account: t,
                                login: function(e) {
                                    return i("walletconnect" === e ? oe : "bsc" === e ? ce : ie);
                                },
                                logout: c,
                                isDark: b,
                                toggleTheme: p,
                                currentLang:
                                    (null === u || void 0 === u ? void 0 : u.code) || "",
                                langs: zd,
                                setLang: l,
                                cakePriceUsd: j,
                                cakePriceLink: "https://bscscan.com/token/",
                            },
                            e
                        )
                    );
                };

            function Xd() {
                var e = Object(u.a)(["\n  margin-top: 5rem;\n"]);
                return (
                    (Xd = function() {
                        return e;
                    }),
                    e
                );
            }

            function Jd() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  // background-image: url('/images/group-pancake.svg');\n  // background-repeat: no-repeat;\n  // background-position: bottom 24px center;\n  // background-size: 90%;\n\n  ",
                    " {\n    background-size: auto;\n  }\n\n  ",
                    " {\n    // background-image: url('/images/arch-",
                    ".svg'),\n    //   url('/images/left-pancake.svg'), url('/images/right-pancake.svg');\n    // background-repeat: no-repeat;\n    // background-position: center 420px, 10% 230px, 90% 230px;\n    // background-size: contain, 266px, 266px;\n    min-height: 90vh;\n  }\n",
                ]);
                return (
                    (Jd = function() {
                        return e;
                    }),
                    e
                );
            }

            function Zd() {
                var e = Object(u.a)([
                    "\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n",
                ]);
                return (
                    (Zd = function() {
                        return e;
                    }),
                    e
                );
            }
            var $d = l.default.div(Zd()),
                eb = l.default.div(
                    Jd(),
                    function(e) {
                        return e.theme.mediaQueries.xs;
                    },
                    function(e) {
                        return e.theme.mediaQueries.lg;
                    },
                    function(e) {
                        return e.theme.isDark ? "dark" : "light";
                    }
                ),
                nb = l.default.div(Xd());

            function tb() {
                var e = Object(a.useState)(void 0),
                    n = Object(h.a)(e, 2),
                    t = n[0],
                    i = n[1],
                    c = Object(a.useState)(void 0),
                    o = Object(h.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Object(a.useState)([]),
                    d = Object(h.a)(l, 2),
                    b = d[0],
                    p = d[1],
                    f = "".concat(
                        Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: ".",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0,
                            FAST_REFRESH: !0,
                            REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                            REACT_APP_CHAIN_ID: "56",
                            REACT_APP_GTAG: "GTM-TLF66T4",
                        }).REACT_APP_CROWDIN_APIKEY
                    ),
                    x = parseInt(
                        "".concat(
                            Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: ".",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                                REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
                                REACT_APP_CHAIN_ID: "56",
                                REACT_APP_GTAG: "GTM-TLF66T4",
                            }).REACT_APP_CROWDIN_PROJECTID
                        )
                    ),
                    g = {
                        token: f,
                    },
                    C = new O.StringTranslations(g);
                Object(a.useEffect)(function() {
                    var e = localStorage.getItem("pancakeSwapLanguage");
                    if (e) {
                        var n = (function(e) {
                            return zd.filter(function(n) {
                                return n.code === e;
                            })[0];
                        })(e);
                        i(n);
                    } else i(Fd);
                }, []);
                var w = (function() {
                    var e = Object(m.a)(
                        j.a.mark(function e() {
                            return j.a.wrap(function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            C.listLanguageTranslations(x, t.code, void 0, 6, 200)
                                                .then(function(e) {
                                                    e.data.length < 1 ? p(["error"]) : p(e.data);
                                                })
                                                .then(function() {
                                                    return u(t);
                                                })
                                                .catch(function(e) {
                                                    p(["error"]), console.error(e);
                                                });
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                            }, e);
                        })
                    );
                    return function() {
                        return e.apply(this, arguments);
                    };
                })();
                return (
                    Object(a.useEffect)(
                        function() {
                            t && w();
                        }, [t]
                    ),
                    Object(r.jsx)(a.Suspense, {
                        fallback: null,
                        children: Object(r.jsx)(v.a, {
                            children: Object(r.jsx)($d, {
                                children: Object(r.jsx)(qd.Provider, {
                                    value: {
                                        selectedLanguage: t,
                                        setSelectedLanguage: i,
                                        translatedLanguage: s,
                                        setTranslatedLanguage: u,
                                    },
                                    children: Object(r.jsx)(mr.Provider, {
                                        value: {
                                            translations: b,
                                            setTranslations: p,
                                        },
                                        children: Object(r.jsx)(Qd, {
                                            children: Object(r.jsxs)(eb, {
                                                children: [
                                                    Object(r.jsx)(jt, {}),
                                                    Object(r.jsx)(Tt, {
                                                        children: Object(r.jsxs)(y.d, {
                                                            children: [
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    strict: !0,
                                                                    path: "/swap",
                                                                    component: Ld,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    strict: !0,
                                                                    path: "/find",
                                                                    component: jl,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    strict: !0,
                                                                    path: "/pool",
                                                                    component: fl,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    path: "/add",
                                                                    component: Su,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    strict: !0,
                                                                    path: "/remove/:currencyIdA/:currencyIdB",
                                                                    component: Rl,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    path: "/add/:currencyIdA",
                                                                    component: Uu,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    path: "/add/:currencyIdA/:currencyIdB",
                                                                    component: Bu,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    exact: !0,
                                                                    strict: !0,
                                                                    path: "/remove/:tokens",
                                                                    component: _u,
                                                                }),
                                                                Object(r.jsx)(y.b, {
                                                                    component: Md,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                    Object(r.jsx)(nb, {}),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                            }),
                        }),
                    })
                );
            }
            var rb = "visibilityState" in document;

            function ab() {
                return !rb || "hidden" !== document.visibilityState;
            }

            function ib() {
                var e = Object(a.useState)(ab()),
                    n = Object(h.a)(e, 2),
                    t = n[0],
                    r = n[1],
                    i = Object(a.useCallback)(
                        function() {
                            r(ab());
                        }, [r]
                    );
                return (
                    Object(a.useEffect)(
                        function() {
                            if (rb)
                                return (
                                    document.addEventListener("visibilitychange", i),
                                    function() {
                                        document.removeEventListener("visibilitychange", i);
                                    }
                                );
                        }, [i]
                    ),
                    t
                );
            }

            function cb() {
                var e = Se(),
                    n = e.library,
                    t = e.chainId,
                    r = Object(x.c)(),
                    i = ib(),
                    c = Object(a.useState)({
                        chainId: t,
                        blockNumber: null,
                    }),
                    o = Object(h.a)(c, 2),
                    s = o[0],
                    u = o[1],
                    l = Object(a.useCallback)(
                        function(e) {
                            u(function(n) {
                                return t === n.chainId ?
                                    "number" !== typeof n.blockNumber ?
                                    {
                                        chainId: t,
                                        blockNumber: e,
                                    } :
                                    {
                                        chainId: t,
                                        blockNumber: Math.max(e, n.blockNumber),
                                    } :
                                    n;
                            });
                        }, [t, u]
                    );
                Object(a.useEffect)(
                    function() {
                        if (n && t && i)
                            return (
                                u({
                                    chainId: t,
                                    blockNumber: null,
                                }),
                                n
                                .getBlockNumber()
                                .then(l)
                                .catch(function(e) {
                                    return console.error(
                                        "Failed to get block number for chainId: ".concat(t),
                                        e
                                    );
                                }),
                                n.on("block", l),
                                function() {
                                    n.removeListener("block", l);
                                }
                            );
                    }, [r, t, n, l, i]
                );
                var d = Xs(s, 100);
                return (
                    Object(a.useEffect)(
                        function() {
                            d.chainId &&
                                d.blockNumber &&
                                i &&
                                r(
                                    Ue({
                                        chainId: d.chainId,
                                        blockNumber: d.blockNumber,
                                    })
                                );
                        }, [i, r, d.blockNumber, d.chainId]
                    ),
                    null
                );
            }

            function ob() {
                var e = Se().library,
                    n = Object(x.c)(),
                    t = Object(x.d)(function(e) {
                        return e.lists.byUrl;
                    }),
                    r = ib(),
                    i = _c();
                return (
                    hi(
                        Object(a.useCallback)(
                            function() {
                                r &&
                                    Object.keys(t).forEach(function(e) {
                                        return i(e).catch(function(e) {
                                            return console.error("interval list fetching error", e);
                                        });
                                    });
                            }, [i, r, t]
                        ),
                        e ? 6e5 : null
                    ),
                    Object(a.useEffect)(
                        function() {
                            Object.keys(t).forEach(function(e) {
                                var n = t[e];
                                n.current ||
                                    n.loadingRequestId ||
                                    n.error ||
                                    i(e).catch(function(e) {
                                        return console.error("list added fetching error", e);
                                    });
                            });
                        }, [n, i, e, t]
                    ),
                    Object(a.useEffect)(
                        function() {
                            Object.keys(t).forEach(function(e) {
                                var r = t[e];
                                if (r.current && r.pendingUpdate) {
                                    var a = Object(Qe.c)(
                                        r.current.version,
                                        r.pendingUpdate.version
                                    );
                                    switch (a) {
                                        case Qe.a.NONE:
                                            throw new Error("unexpected no version bump");
                                        case Qe.a.PATCH:
                                        case Qe.a.MINOR:
                                            a >=
                                                Object(Qe.d)(r.current.tokens, r.pendingUpdate.tokens) ?
                                                (n(Je(e)),
                                                    n(
                                                        _e({
                                                            key: e,
                                                            content: {
                                                                listUpdate: {
                                                                    listUrl: e,
                                                                    oldList: r.current,
                                                                    newList: r.pendingUpdate,
                                                                    auto: !0,
                                                                },
                                                            },
                                                        })
                                                    )) :
                                                console.error(
                                                    "List at url ".concat(
                                                        e,
                                                        " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"
                                                    )
                                                );
                                            break;
                                        case Qe.a.MAJOR:
                                            n(
                                                _e({
                                                    key: e,
                                                    content: {
                                                        listUpdate: {
                                                            listUrl: e,
                                                            auto: !1,
                                                            oldList: r.current,
                                                            newList: r.pendingUpdate,
                                                        },
                                                    },
                                                    removeAfterMs: null,
                                                })
                                            );
                                    }
                                }
                            });
                        }, [n, t]
                    ),
                    null
                );
            }

            function sb(e, n) {
                return (
                    (t = e + Math.round(Math.random() * Math.max(0, n - e))),
                    new Promise(function(e) {
                        return setTimeout(e, t);
                    })
                );
                var t;
            }
            var ub = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t() {
                        return Object(R.a)(this, t), n.call(this, "Cancelled");
                    }
                    return t;
                })(Object(M.a)(Error)),
                lb = (function(e) {
                    Object(A.a)(t, e);
                    var n = Object(U.a)(t);

                    function t() {
                        return Object(R.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(M.a)(Error));

            function db() {
                return (db = Object(m.a)(
                    j.a.mark(function e(n, t, r) {
                        var a, i, c, o;
                        return j.a.wrap(
                            function(e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            return (
                                                (e.prev = 0),
                                                (e.next = 3),
                                                n.aggregate(
                                                    t.map(function(e) {
                                                        return [e.address, e.callData];
                                                    })
                                                )
                                            );
                                        case 3:
                                            (c = e.sent),
                                            (o = Object(h.a)(c, 2)),
                                            (a = o[0]),
                                            (i = o[1]),
                                            (e.next = 13);
                                            break;
                                        case 9:
                                            throw (
                                                ((e.prev = 9),
                                                    (e.t0 = e.catch(0)),
                                                    console.info(
                                                        "Failed to fetch chunk inside retry",
                                                        e.t0
                                                    ),
                                                    e.t0)
                                            );
                                        case 13:
                                            if (!(a.toNumber() < r)) {
                                                e.next = 15;
                                                break;
                                            }
                                            throw new lb("Fetched for old block number");
                                        case 15:
                                            return e.abrupt("return", {
                                                results: i,
                                                blockNumber: a.toNumber(),
                                            });
                                        case 16:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null, [
                                [0, 9]
                            ]
                        );
                    })
                )).apply(this, arguments);
            }

            function bb() {
                var e = Object(x.c)(),
                    n = Object(x.d)(function(e) {
                        return e.multicall;
                    }),
                    t = Xs(n.callListeners, 100),
                    r = Le(),
                    i = Se().chainId,
                    c = _a(),
                    o = Object(a.useRef)(),
                    s = Object(a.useMemo)(
                        function() {
                            return (function(e, n) {
                                if (!e || !n) return {};
                                var t = e[n];
                                return t ?
                                    Object.keys(t).reduce(function(e, n) {
                                        var r = t[n];
                                        return (
                                            (e[n] = Object.keys(r)
                                                .filter(function(e) {
                                                    var n = parseInt(e);
                                                    return !(n <= 0) && r[n] > 0;
                                                })
                                                .reduce(function(e, n) {
                                                    return Math.min(e, parseInt(n));
                                                }, 1 / 0)),
                                            e
                                        );
                                    }, {}) :
                                    {};
                            })(t, i);
                        }, [t, i]
                    ),
                    u = Object(a.useMemo)(
                        function() {
                            return (function(e, n, t, r) {
                                return t && r ?
                                    e[t] ?
                                    Object.keys(n).filter(function(a) {
                                        var i = n[a],
                                            c = e[t][a];
                                        if (!c) return !0;
                                        var o = r - (i - 1);
                                        return (!(
                                                c.fetchingBlockNumber && c.fetchingBlockNumber >= o
                                            ) &&
                                            (!c.blockNumber || c.blockNumber < o)
                                        );
                                    }) :
                                    Object.keys(n) :
                                    [];
                            })(n.callResults, s, i, r);
                        }, [i, n.callResults, s, r]
                    ),
                    l = Object(a.useMemo)(
                        function() {
                            return JSON.stringify(u.sort());
                        }, [u]
                    );
                return (
                    Object(a.useEffect)(
                        function() {
                            var n;
                            if (r && i && c) {
                                var t = JSON.parse(l);
                                if (0 !== t.length) {
                                    var a,
                                        s,
                                        u = t.map(function(e) {
                                            return zr(e);
                                        }),
                                        d = (function(e, n) {
                                            if (n < 1) throw new Error("maxChunkSize must be gte 1");
                                            if (e.length <= n) return [e];
                                            var t = Math.ceil(e.length / n),
                                                r = Math.ceil(e.length / t);
                                            return Object(se.a)(Array(t).keys()).map(function(n) {
                                                return e.slice(n * r, n * r + r);
                                            });
                                        })(u, 500);
                                    if (
                                        (null === (n = o.current) || void 0 === n ?
                                            void 0 :
                                            n.blockNumber) !== r
                                    )
                                        null === (a = o.current) ||
                                        void 0 === a ||
                                        null === (s = a.cancellations) ||
                                        void 0 === s ||
                                        s.forEach(function(e) {
                                            return e();
                                        });
                                    e(
                                            Wr({
                                                calls: u,
                                                chainId: i,
                                                fetchingBlockNumber: r,
                                            })
                                        ),
                                        (o.current = {
                                            blockNumber: r,
                                            cancellations: d.map(function(n, a) {
                                                var s = (function(e, n) {
                                                        var t,
                                                            r = n.n,
                                                            a = n.minWait,
                                                            i = n.maxWait,
                                                            c = !1;
                                                        return {
                                                            promise: new Promise(
                                                                (function() {
                                                                    var n = Object(m.a)(
                                                                        j.a.mark(function n(o, s) {
                                                                            var u;
                                                                            return j.a.wrap(
                                                                                function(n) {
                                                                                    for (;;)
                                                                                        switch ((n.prev = n.next)) {
                                                                                            case 0:
                                                                                                t = s;
                                                                                            case 1:
                                                                                                return (
                                                                                                    (u = void 0),
                                                                                                    (n.prev = 3),
                                                                                                    (n.next = 6),
                                                                                                    e()
                                                                                                );
                                                                                            case 6:
                                                                                                return (
                                                                                                    (u = n.sent),
                                                                                                    c || (o(u), (c = !0)),
                                                                                                    n.abrupt("break", 24)
                                                                                                );
                                                                                            case 11:
                                                                                                if (
                                                                                                    ((n.prev = 11),
                                                                                                        (n.t0 = n.catch(3)), !c)
                                                                                                ) {
                                                                                                    n.next = 15;
                                                                                                    break;
                                                                                                }
                                                                                                return n.abrupt("break", 24);
                                                                                            case 15:
                                                                                                if (!(r <= 0) &&
                                                                                                    n.t0 instanceof lb
                                                                                                ) {
                                                                                                    n.next = 19;
                                                                                                    break;
                                                                                                }
                                                                                                return (
                                                                                                    s(n.t0),
                                                                                                    (c = !0),
                                                                                                    n.abrupt("break", 24)
                                                                                                );
                                                                                            case 19:
                                                                                                r--;
                                                                                            case 20:
                                                                                                return (n.next = 22), sb(a, i);
                                                                                            case 22:
                                                                                                n.next = 1;
                                                                                                break;
                                                                                            case 24:
                                                                                            case "end":
                                                                                                return n.stop();
                                                                                        }
                                                                                },
                                                                                n,
                                                                                null, [
                                                                                    [3, 11]
                                                                                ]
                                                                            );
                                                                        })
                                                                    );
                                                                    return function(e, t) {
                                                                        return n.apply(this, arguments);
                                                                    };
                                                                })()
                                                            ),
                                                            cancel: function() {
                                                                c || ((c = !0), t(new ub()));
                                                            },
                                                        };
                                                    })(
                                                        function() {
                                                            return (function(e, n, t) {
                                                                return db.apply(this, arguments);
                                                            })(c, n, r);
                                                        }, {
                                                            n: 1 / 0,
                                                            minWait: 2500,
                                                            maxWait: 3500,
                                                        }
                                                    ),
                                                    u = s.cancel;
                                                return (
                                                    s.promise
                                                    .then(function(n) {
                                                        var c = n.results,
                                                            s = n.blockNumber;
                                                        o.current = {
                                                            cancellations: [],
                                                            blockNumber: r,
                                                        };
                                                        var u = d.slice(0, a).reduce(function(e, n) {
                                                                return e + n.length;
                                                            }, 0),
                                                            l = u + c.length;
                                                        e(
                                                            Hr({
                                                                chainId: i,
                                                                results: t
                                                                    .slice(u, l)
                                                                    .reduce(function(e, n, t) {
                                                                        var r;
                                                                        return (
                                                                            (e[n] =
                                                                                null !== (r = c[t]) && void 0 !== r ?
                                                                                r :
                                                                                null),
                                                                            e
                                                                        );
                                                                    }, {}),
                                                                blockNumber: s,
                                                            })
                                                        );
                                                    })
                                                    .catch(function(t) {
                                                        t instanceof ub
                                                            ?
                                                            console.error(
                                                                "Cancelled fetch for blockNumber",
                                                                r
                                                            ) :
                                                            (console.error(
                                                                    "Failed to fetch multicall chunk",
                                                                    n,
                                                                    i,
                                                                    t
                                                                ),
                                                                e(
                                                                    Vr({
                                                                        calls: n,
                                                                        chainId: i,
                                                                        fetchingBlockNumber: r,
                                                                    })
                                                                ));
                                                    }),
                                                    u
                                                );
                                            }),
                                        });
                                }
                            }
                        }, [i, c, e, l, r]
                    ),
                    null
                );
            }

            function pb() {
                var e,
                    n = Se(),
                    t = n.chainId,
                    r = n.library,
                    i = Le(),
                    c = Object(x.c)(),
                    o = Object(x.d)(function(e) {
                        return e.transactions;
                    }),
                    s = t && null !== (e = o[t]) && void 0 !== e ? e : {},
                    u = (function() {
                        var e = Object(x.c)();
                        return Object(a.useCallback)(
                            function(n, t) {
                                e(
                                    _e({
                                        content: n,
                                        key: t,
                                    })
                                );
                            }, [e]
                        );
                    })();
                return (
                    Object(a.useEffect)(
                        function() {
                            t &&
                                r &&
                                i &&
                                Object.keys(s)
                                .filter(function(e) {
                                    return (function(e, n) {
                                        if (n.receipt) return !1;
                                        if (!n.lastCheckedBlockNumber) return !0;
                                        var t = e - n.lastCheckedBlockNumber;
                                        if (t < 1) return !1;
                                        var r = (new Date().getTime() - n.addedTime) / 1e3 / 60;
                                        return r > 60 ? t > 9 : !(r > 5) || t > 2;
                                    })(i, s[e]);
                                })
                                .forEach(function(e) {
                                    r.getTransactionReceipt(e)
                                        .then(function(n) {
                                            var r;
                                            n
                                                ?
                                                (c(
                                                        As({
                                                            chainId: t,
                                                            hash: e,
                                                            receipt: {
                                                                blockHash: n.blockHash,
                                                                blockNumber: n.blockNumber,
                                                                contractAddress: n.contractAddress,
                                                                from: n.from,
                                                                status: n.status,
                                                                to: n.to,
                                                                transactionHash: n.transactionHash,
                                                                transactionIndex: n.transactionIndex,
                                                            },
                                                        })
                                                    ),
                                                    u({
                                                            txn: {
                                                                hash: e,
                                                                success: 1 === n.status,
                                                                summary: null === (r = s[e]) || void 0 === r ?
                                                                    void 0 :
                                                                    r.summary,
                                                            },
                                                        },
                                                        e
                                                    )) :
                                                c(
                                                    Us({
                                                        chainId: t,
                                                        hash: e,
                                                        blockNumber: i,
                                                    })
                                                );
                                        })
                                        .catch(function(n) {
                                            console.error(
                                                "failed to check transaction hash: ".concat(e),
                                                n
                                            );
                                        });
                                });
                        }, [t, r, s, i, c, u]
                    ),
                    null
                );
            }
            var fb = t(176),
                jb = Object(Ae.c)({
                        blockNumber: {},
                        popupList: [],
                        walletModalOpen: !1,
                        settingsMenuOpen: !1,
                    },
                    function(e) {
                        return e
                            .addCase(Ue, function(e, n) {
                                var t = n.payload,
                                    r = t.chainId,
                                    a = t.blockNumber;
                                "number" !== typeof e.blockNumber[r] ?
                                    (e.blockNumber[r] = a) :
                                    (e.blockNumber[r] = Math.max(a, e.blockNumber[r]));
                            })
                            .addCase(Be, function(e) {
                                e.walletModalOpen = !e.walletModalOpen;
                            })
                            .addCase(Pe, function(e) {
                                e.settingsMenuOpen = !e.settingsMenuOpen;
                            })
                            .addCase(_e, function(e, n) {
                                var t = n.payload,
                                    r = t.content,
                                    a = t.key,
                                    i = t.removeAfterMs,
                                    c = void 0 === i ? 15e3 : i;
                                e.popupList = (
                                    a ?
                                    e.popupList.filter(function(e) {
                                        return e.key !== a;
                                    }) :
                                    e.popupList
                                ).concat([{
                                    key: a || Object(Ae.e)(),
                                    show: !0,
                                    content: r,
                                    removeAfterMs: c,
                                }, ]);
                            })
                            .addCase(De, function(e, n) {
                                var t = n.payload.key;
                                e.popupList.forEach(function(e) {
                                    e.key === t && (e.show = !1);
                                });
                            });
                    }
                ),
                mb = Object(Ae.b)("global/updateVersion"),
                hb =
                (Ae.b,
                    function() {
                        return new Date().getTime();
                    });

            function vb(e, n) {
                return "".concat(e, ";").concat(n);
            }
            var yb,
                Ob = {
                    userDarkMode: null,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userSlippageTolerance: xe,
                    userDeadline: ge,
                    tokens: {},
                    pairs: {},
                    timestamp: hb(),
                    audioPlay: !0,
                },
                xb = Object(Ae.c)(Ob, function(e) {
                    return e
                        .addCase(mb, function(e) {
                            "number" !== typeof e.userSlippageTolerance &&
                                (e.userSlippageTolerance = xe),
                                "number" !== typeof e.userDeadline && (e.userDeadline = ge),
                                (e.lastUpdateVersionTimestamp = hb());
                        })
                        .addCase(ca, function(e, n) {
                            (e.userDarkMode = n.payload.userDarkMode), (e.timestamp = hb());
                        })
                        .addCase(ia, function(e, n) {
                            (e.matchesDarkMode = n.payload.matchesDarkMode),
                            (e.timestamp = hb());
                        })
                        .addCase(oa, function(e, n) {
                            (e.userExpertMode = n.payload.userExpertMode),
                            (e.timestamp = hb());
                        })
                        .addCase(sa, function(e, n) {
                            (e.userSlippageTolerance = n.payload.userSlippageTolerance),
                            (e.timestamp = hb());
                        })
                        .addCase(ua, function(e, n) {
                            (e.userDeadline = n.payload.userDeadline), (e.timestamp = hb());
                        })
                        .addCase(la, function(e, n) {
                            var t = n.payload.serializedToken;
                            (e.tokens[t.chainId] = e.tokens[t.chainId] || {}),
                            (e.tokens[t.chainId][t.address] = t),
                            (e.timestamp = hb());
                        })
                        .addCase(da, function(e, n) {
                            var t = n.payload,
                                r = t.address,
                                a = t.chainId;
                            (e.tokens[a] = e.tokens[a] || {}),
                            delete e.tokens[a][r],
                                (e.timestamp = hb());
                        })
                        .addCase(ba, function(e, n) {
                            var t = n.payload.serializedPair;
                            if (
                                t.token0.chainId === t.token1.chainId &&
                                t.token0.address !== t.token1.address
                            ) {
                                var r = t.token0.chainId;
                                (e.pairs[r] = e.pairs[r] || {}),
                                (e.pairs[r][vb(t.token0.address, t.token1.address)] = t);
                            }
                            e.timestamp = hb();
                        })
                        .addCase(pa, function(e, n) {
                            var t = n.payload,
                                r = t.chainId,
                                a = t.tokenAAddress,
                                i = t.tokenBAddress;
                            e.pairs[r] &&
                                (delete e.pairs[r][vb(a, i)], delete e.pairs[r][vb(i, a)]),
                                (e.timestamp = hb());
                        })
                        .addCase(fa, function(e) {
                            e.audioPlay = !1;
                        })
                        .addCase(ja, function(e) {
                            e.audioPlay = !0;
                        });
                }),
                gb = function() {
                    return new Date().getTime();
                },
                Cb = Object(Ae.c)({}, function(e) {
                    return e
                        .addCase(Rs, function(e, n) {
                            var t,
                                r,
                                a = n.payload,
                                i = a.chainId,
                                c = a.from,
                                o = a.hash,
                                s = a.approval,
                                u = a.summary;
                            if (null === (t = e[i]) || void 0 === t ? void 0 : t[o])
                                throw Error("Attempted to add existing transaction.");
                            var l = null !== (r = e[i]) && void 0 !== r ? r : {};
                            (l[o] = {
                                hash: o,
                                approval: s,
                                summary: u,
                                from: c,
                                addedTime: gb(),
                            }),
                            (e[i] = l);
                        })
                        .addCase(Ss, function(e, n) {
                            var t = n.payload.chainId;
                            e[t] && (e[t] = {});
                        })
                        .addCase(Us, function(e, n) {
                            var t,
                                r = n.payload,
                                a = r.chainId,
                                i = r.hash,
                                c = r.blockNumber,
                                o = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
                            o &&
                                (o.lastCheckedBlockNumber ?
                                    (o.lastCheckedBlockNumber = Math.max(
                                        c,
                                        o.lastCheckedBlockNumber
                                    )) :
                                    (o.lastCheckedBlockNumber = c));
                        })
                        .addCase(As, function(e, n) {
                            var t,
                                r = n.payload,
                                a = r.hash,
                                i = r.chainId,
                                c = r.receipt,
                                o = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
                            o && ((o.receipt = c), (o.confirmedTime = gb()));
                        });
                }),
                wb =
                ((yb = {
                        independentField: ws.INPUT,
                        typedValue: "",
                    }),
                    Object(w.a)(yb, ws.INPUT, {
                        currencyId: "",
                    }),
                    Object(w.a)(yb, ws.OUTPUT, {
                        currencyId: "",
                    }),
                    Object(w.a)(yb, "recipient", null),
                    yb),
                kb = Object(Ae.c)(wb, function(e) {
                    return e
                        .addCase(Es, function(e, n) {
                            var t,
                                r = n.payload,
                                a = r.typedValue,
                                i = r.recipient,
                                c = r.field,
                                o = r.inputCurrencyId,
                                s = r.outputCurrencyId;
                            return (
                                (t = {}),
                                Object(w.a)(t, ws.INPUT, {
                                    currencyId: o,
                                }),
                                Object(w.a)(t, ws.OUTPUT, {
                                    currencyId: s,
                                }),
                                Object(w.a)(t, "independentField", c),
                                Object(w.a)(t, "typedValue", a),
                                Object(w.a)(t, "recipient", i),
                                t
                            );
                        })
                        .addCase(ks, function(e, n) {
                            var t,
                                r = n.payload,
                                a = r.currencyId,
                                i = r.field,
                                c = i === ws.INPUT ? ws.OUTPUT : ws.INPUT;
                            return a === e[c].currencyId ?
                                Object(V.a)(
                                    Object(V.a)({}, e), {},
                                    ((t = {
                                            independentField: e.independentField === ws.INPUT ? ws.OUTPUT : ws.INPUT,
                                        }),
                                        Object(w.a)(t, i, {
                                            currencyId: a,
                                        }),
                                        Object(w.a)(t, c, {
                                            currencyId: e[i].currencyId,
                                        }),
                                        t)
                                ) :
                                Object(V.a)(
                                    Object(V.a)({}, e), {},
                                    Object(w.a)({}, i, {
                                        currencyId: a,
                                    })
                                );
                        })
                        .addCase(Ts, function(e) {
                            var n;
                            return Object(V.a)(
                                Object(V.a)({}, e), {},
                                ((n = {
                                        independentField: e.independentField === ws.INPUT ? ws.OUTPUT : ws.INPUT,
                                    }),
                                    Object(w.a)(n, ws.INPUT, {
                                        currencyId: e[ws.OUTPUT].currencyId,
                                    }),
                                    Object(w.a)(n, ws.OUTPUT, {
                                        currencyId: e[ws.INPUT].currencyId,
                                    }),
                                    n)
                            );
                        })
                        .addCase(Is, function(e, n) {
                            var t = n.payload,
                                r = t.field,
                                a = t.typedValue;
                            return Object(V.a)(
                                Object(V.a)({}, e), {}, {
                                    independentField: r,
                                    typedValue: a,
                                }
                            );
                        })
                        .addCase(Ns, function(e, n) {
                            var t = n.payload.recipient;
                            e.recipient = t;
                        });
                }),
                Tb = {
                    independentField: Ls.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: "",
                },
                Ib = Object(Ae.c)(Tb, function(e) {
                    return e
                        .addCase(Ks, function() {
                            return Tb;
                        })
                        .addCase(Gs, function(e, n) {
                            var t = n.payload,
                                r = t.field,
                                a = t.typedValue;
                            return t.noLiquidity ?
                                r === e.independentField ?
                                Object(V.a)(
                                    Object(V.a)({}, e), {}, {
                                        independentField: r,
                                        typedValue: a,
                                    }
                                ) :
                                Object(V.a)(
                                    Object(V.a)({}, e), {}, {
                                        independentField: r,
                                        typedValue: a,
                                        otherTypedValue: e.typedValue,
                                    }
                                ) :
                                Object(V.a)(
                                    Object(V.a)({}, e), {}, {
                                        independentField: r,
                                        typedValue: a,
                                        otherTypedValue: "",
                                    }
                                );
                        });
                }),
                Eb = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null,
                },
                Nb = {
                    lastInitializedDefaultListOfLists: kc,
                    byUrl: Object(V.a)(
                        Object(V.a)({},
                            kc.reduce(function(e, n) {
                                return (e[n] = Eb), e;
                            }, {})
                        ), {},
                        Object(w.a)({}, wc, {
                            error: null,
                            current: Tc,
                            loadingRequestId: null,
                            pendingUpdate: null,
                        })
                    ),
                    selectedListUrl: wc,
                },
                Rb = Object(Ae.c)(Nb, function(e) {
                    return e
                        .addCase(Xe.pending, function(e, n) {
                            var t = n.payload,
                                r = t.requestId,
                                a = t.url;
                            e.byUrl[a] = Object(V.a)(
                                Object(V.a)({
                                        current: null,
                                        pendingUpdate: null,
                                    },
                                    e.byUrl[a]
                                ), {}, {
                                    loadingRequestId: r,
                                    error: null,
                                }
                            );
                        })
                        .addCase(Xe.fulfilled, function(e, n) {
                            var t,
                                r,
                                a = n.payload,
                                i = a.requestId,
                                c = a.tokenList,
                                o = a.url,
                                s =
                                null === (t = e.byUrl[o]) || void 0 === t ?
                                void 0 :
                                t.current,
                                u =
                                null === (r = e.byUrl[o]) || void 0 === r ?
                                void 0 :
                                r.loadingRequestId;
                            if (s) {
                                if (Object(Qe.c)(s.version, c.version) === Qe.a.NONE) return;
                                (null !== u && u !== i) ||
                                (e.byUrl[o] = Object(V.a)(
                                    Object(V.a)({}, e.byUrl[o]), {}, {
                                        loadingRequestId: null,
                                        error: null,
                                        current: s,
                                        pendingUpdate: c,
                                    }
                                ));
                            } else
                                e.byUrl[o] = Object(V.a)(
                                    Object(V.a)({}, e.byUrl[o]), {}, {
                                        loadingRequestId: null,
                                        error: null,
                                        current: c,
                                        pendingUpdate: null,
                                    }
                                );
                        })
                        .addCase(Xe.rejected, function(e, n) {
                            var t,
                                r = n.payload,
                                a = r.url,
                                i = r.requestId,
                                c = r.errorMessage;
                            (null === (t = e.byUrl[a]) || void 0 === t ?
                                void 0 :
                                t.loadingRequestId) === i &&
                                (e.byUrl[a] = Object(V.a)(
                                    Object(V.a)({}, e.byUrl[a]), {}, {
                                        loadingRequestId: null,
                                        error: c,
                                        current: null,
                                        pendingUpdate: null,
                                    }
                                ));
                        })
                        .addCase(en, function(e, n) {
                            var t = n.payload;
                            (e.selectedListUrl = t), e.byUrl[t] || (e.byUrl[t] = Eb);
                        })
                        .addCase(Ze, function(e, n) {
                            var t = n.payload;
                            e.byUrl[t] || (e.byUrl[t] = Eb);
                        })
                        .addCase($e, function(e, n) {
                            var t = n.payload;
                            e.byUrl[t] && delete e.byUrl[t],
                                e.selectedListUrl === t &&
                                (e.selectedListUrl = Object.keys(e.byUrl)[0]);
                        })
                        .addCase(Je, function(e, n) {
                            var t,
                                r = n.payload;
                            if (!(null === (t = e.byUrl[r]) || void 0 === t ?
                                    void 0 :
                                    t.pendingUpdate))
                                throw new Error(
                                    "accept list update called without pending update"
                                );
                            e.byUrl[r] = Object(V.a)(
                                Object(V.a)({}, e.byUrl[r]), {}, {
                                    pendingUpdate: null,
                                    current: e.byUrl[r].pendingUpdate,
                                }
                            );
                        })
                        .addCase(mb, function(e) {
                            if (e.lastInitializedDefaultListOfLists) {
                                if (e.lastInitializedDefaultListOfLists) {
                                    var n = e.lastInitializedDefaultListOfLists.reduce(function(
                                                e,
                                                n
                                            ) {
                                                return e.add(n);
                                            },
                                            new Set()),
                                        t = kc.reduce(function(e, n) {
                                            return e.add(n);
                                        }, new Set());
                                    kc.forEach(function(t) {
                                            n.has(t) || (e.byUrl[t] = Eb);
                                        }),
                                        e.lastInitializedDefaultListOfLists.forEach(function(n) {
                                            t.has(n) || delete e.byUrl[n];
                                        });
                                }
                            } else(e.byUrl = Nb.byUrl), (e.selectedListUrl = void 0);
                            e.lastInitializedDefaultListOfLists = kc;
                        });
                }),
                Sb = {
                    independentField: Ol.LIQUIDITY_PERCENT,
                    typedValue: "0",
                },
                Ab = Object(Ae.c)(Sb, function(e) {
                    return e.addCase(Cl, function(e, n) {
                        var t = n.payload,
                            r = t.field,
                            a = t.typedValue;
                        return Object(V.a)(
                            Object(V.a)({}, e), {}, {
                                independentField: r,
                                typedValue: a,
                            }
                        );
                    });
                }),
                Ub = Object(Ae.c)({
                        callResults: {},
                    },
                    function(e) {
                        return e
                            .addCase(Yr, function(e, n) {
                                var t,
                                    r = n.payload,
                                    a = r.calls,
                                    i = r.chainId,
                                    c = r.options,
                                    o = (c = void 0 === c ? {} : c).blocksPerFetch,
                                    s = void 0 === o ? 1 : o,
                                    u = e.callListeners ?
                                    e.callListeners :
                                    (e.callListeners = {});
                                (u[i] = null !== (t = u[i]) && void 0 !== t ? t : {}),
                                a.forEach(function(e) {
                                    var n,
                                        t,
                                        r = Fr(e);
                                    (u[i][r] = null !== (n = u[i][r]) && void 0 !== n ? n : {}),
                                    (u[i][r][s] =
                                        (null !== (t = u[i][r][s]) && void 0 !== t ? t : 0) +
                                        1);
                                });
                            })
                            .addCase(qr, function(e, n) {
                                var t = n.payload,
                                    r = t.chainId,
                                    a = t.calls,
                                    i = t.options,
                                    c = (i = void 0 === i ? {} : i).blocksPerFetch,
                                    o = void 0 === c ? 1 : c,
                                    s = e.callListeners ?
                                    e.callListeners :
                                    (e.callListeners = {});
                                s[r] &&
                                    a.forEach(function(e) {
                                        var n = Fr(e);
                                        s[r][n] &&
                                            s[r][n][o] &&
                                            (1 === s[r][n][o] ? delete s[r][n][o] : s[r][n][o]--);
                                    });
                            })
                            .addCase(Wr, function(e, n) {
                                var t,
                                    r = n.payload,
                                    a = r.chainId,
                                    i = r.fetchingBlockNumber,
                                    c = r.calls;
                                (e.callResults[a] =
                                    null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                                c.forEach(function(n) {
                                    var t = Fr(n),
                                        r = e.callResults[a][t];
                                    if (r) {
                                        var c;
                                        if (
                                            (null !== (c = r.fetchingBlockNumber) && void 0 !== c ?
                                                c :
                                                0) >= i
                                        )
                                            return;
                                        e.callResults[a][t].fetchingBlockNumber = i;
                                    } else
                                        e.callResults[a][t] = {
                                            fetchingBlockNumber: i,
                                        };
                                });
                            })
                            .addCase(Vr, function(e, n) {
                                var t,
                                    r = n.payload,
                                    a = r.fetchingBlockNumber,
                                    i = r.chainId,
                                    c = r.calls;
                                (e.callResults[i] =
                                    null !== (t = e.callResults[i]) && void 0 !== t ? t : {}),
                                c.forEach(function(n) {
                                    var t = Fr(n),
                                        r = e.callResults[i][t];
                                    r &&
                                        r.fetchingBlockNumber === a &&
                                        (delete r.fetchingBlockNumber,
                                            (r.data = null),
                                            (r.blockNumber = a));
                                });
                            })
                            .addCase(Hr, function(e, n) {
                                var t,
                                    r = n.payload,
                                    a = r.chainId,
                                    i = r.results,
                                    c = r.blockNumber;
                                (e.callResults[a] =
                                    null !== (t = e.callResults[a]) && void 0 !== t ? t : {}),
                                Object.keys(i).forEach(function(n) {
                                    var t,
                                        r = e.callResults[a][n];
                                    (null !==
                                        (t =
                                            null === r || void 0 === r ? void 0 : r.blockNumber) &&
                                        void 0 !== t ?
                                        t :
                                        0) > c ||
                                        (e.callResults[a][n] = {
                                            data: i[n],
                                            blockNumber: c,
                                        });
                                });
                            });
                    }
                ),
                Bb = ["user", "transactions"],
                Pb = Object(fb.load)({
                    states: Bb,
                });
            Pb.user &&
                (Pb.user.userDarkMode = (function() {
                    var e = null;
                    try {
                        var n = localStorage.getItem(ma);
                        n && (e = JSON.parse(n));
                    } catch (t) {
                        console.error(t);
                    }
                    return e;
                })());
            var _b = Object(Ae.a)({
                reducer: {
                    application: jb,
                    user: xb,
                    transactions: Cb,
                    swap: kb,
                    mint: Ib,
                    burn: Ab,
                    multicall: Ub,
                    lists: Rb,
                },
                middleware: [].concat(
                    Object(se.a)(
                        Object(Ae.d)({
                            thunk: !1,
                        })
                    ), [
                        Object(fb.save)({
                            states: Bb,
                        }),
                    ]
                ),
                preloadedState: Pb,
            });
            _b.dispatch(mb());
            var Db = _b;

            function Lb(e) {
                var n = new k.a(e);
                return (n.pollingInterval = 15e3), n;
            }
            var Mb = Object(g.b)(Oe),
                Fb = function(e) {
                    var n = e.children;
                    return Object(r.jsx)(g.a, {
                        getLibrary: Lb,
                        children: Object(r.jsx)(Mb, {
                            getLibrary: Lb,
                            children: Object(r.jsx)(x.a, {
                                store: Db,
                                children: Object(r.jsx)(Vd, {
                                    children: Object(r.jsx)(s.s, {
                                        children: n,
                                    }),
                                }),
                            }),
                        }),
                    });
                },
                zb = (t(468), t(178)),
                Yb = t(275),
                qb = t.n(Yb),
                Wb = t(276),
                Vb = t.n(Wb);
            zb.a
                .use(qb.a)
                .use(Vb.a)
                .use(mt.a)
                .init({
                    backend: {
                        loadPath: "./locales/{{lng}}.json",
                    },
                    react: {
                        useSuspense: !0,
                    },
                    fallbackLng: "en",
                    preload: ["en"],
                    keySeparator: !1,
                    interpolation: {
                        escapeValue: !1,
                    },
                });
            zb.a;
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1),
                window.addEventListener("error", function() {
                    var e;
                    null === (e = localStorage) ||
                        void 0 === e ||
                        e.removeItem("redux_localstorage_simple_lists");
                }),
                o.a.render(
                    Object(r.jsx)(a.StrictMode, {
                        children: Object(r.jsxs)(Fb, {
                            children: [
                                Object(r.jsxs)(r.Fragment, {
                                    children: [
                                        Object(r.jsx)(ob, {}),
                                        Object(r.jsx)(cb, {}),
                                        Object(r.jsx)(pb, {}),
                                        Object(r.jsx)(bb, {}),
                                    ],
                                }),
                                Object(r.jsx)(s.t, {}),
                                Object(r.jsx)(p, {}),
                                Object(r.jsx)(tb, {}),
                            ],
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [
        [485, 3, 4]
    ],
]);
//# sourceMappingURL=main.3bd3548e.chunk.js.map