/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=||
[|]     Component name: client_definition.js
[|]     Description:    Define the client (PLC).  This means the IP address, the registers
[|]                     to be read, and other details.
[|]     Born on:        7 November 2017
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=||
[*/
/*]
[|] || ==================== ||
[|]        DEPENDENCIES
[|] || ==================== ||
[*/
const modbus = require('node-modbus')
/*]
[|] || ======================= ||
[|]       Client definition
[|] || ======================= ||
[|]
[|] Connect to the client PLC [See IP lists for potential clients]
[|] [i] this is hl22, so the IP address is 192.168.16.153
[*/
const client = modbus.client.tcp.complete({
    'host': '192.168.16.153',
    'port': 502,
    'autoReconnect': true,
    'reconnectTimeout': 15000,
    'timeout': 2000,
    'unitId': 1,
    'logLabel': 'ModbusClientTCP', /* label to identify in log files */
    'logLevel': 'debug', /* for less log use: info, warn or error */
    'logEnabled': false
})
/*]
[|] Connect to client.
[*/
client.connect()
/*]
[|] END
[*/
