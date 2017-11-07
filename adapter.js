/*]
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=||
[|]     Component name: adapter.js
[|]     Description:    Modular adapter program for a DL06 Unit
[|]     Born on:        7 November 2017
[|]     Author:         Alex Wilson
[|] ||=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=||
[*/
/*]
[|] DEPENDENCIES
[*/
const stampit = require('stampit')
/*]
[|] || ------------------------------------------ ||
[|]         Define Communications Functions
[|] || ------------------------------------------ ||
[*/
const Comms = stampit({
    methods: {
        /*]
        [|] retrieve 'coils' or c-bits from the PLC
        [*/
        get_coils (client, start_location, length) {
            return new Promise(function (res, rej) {
                client.readCoils(start_location, length)
                    .then(function (response) {
                        if (typeof response.coils === 'undefined') {
                            rej('err')
                        } else {
                            res(response.coils)
                        }
                    })
            })
        },
        /*]
        [|] get a single memory register from the client PLC.
        [*/ 
        get_register (client, location) {
            return new Promise(function (res, rej) {
                client.readHoldingRegisters(location, 1)
                    .then(function (response) {
                        if (typeof response.register === 'undefined') {
                            rej('err')
                        } else {
                            res(response.register[0])
                        }
                    })
            })
        },
        /*]
        [|] get multiple memory registers from the client PLC. [No more than 100 per request for the DL06]
        [*/ 
        get_registers (client, start_location, length) {
            return new Promise(function (res, rej) {
                client.readHoldingRegisters(start_location, length)
                    .then(function (response) {
                        if (typeof response.register === 'undefined') {
                            rej('err')
                        } else {
                            res(response.register)
                        }
                    })
            })
        }
    }
})
/*]
[|] MODULE DEFINITION
[*/
module.exports = {
    new_DL06: stampit(Comms),
    PLC: this.new_DL06()
}
/*]
[|] END
[*/
