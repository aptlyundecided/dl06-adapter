# Automation Direct Adapter for data collection purposes

Automation Direct provides cheap PLC's that are great for small pieces of production equipment.  But collecting detailed data from the machine can be difficult, without the use of an intermediary device.  This application is meant to make the various PLC's of the Automation Direct series more friendly with SCADA style networks.


### Quick Guidelines
* This repository should live in a directory on a computer inside the local network of a production machine.
* This machine should use a NAT device to cordon it's local communications from the Plant network, as well as other machine networks.
* The computer should be physically locked inside the cabinet.
* The ability to SSH needs to be removed from the computer.  We want this device as secure as possible.  For more information on security, please see the docs folder.
* This computer will run an HTTP server, and a Modbus Server.
* The HTTP server will be used to display information from within the PLC to troubleshooters
* The Modbus Server will be used to recieve data from the PLC.
* THe PLC should send a single modbus pulse to the server when it is ready to be 'read'.


### Future Features
Hoping to integrate a Python Library that will allow communication with AB SLC, micrologix, and compactlogix.

