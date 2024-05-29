---
title: "Connection reset by peer"
sidebar:
  label: Connection reset
---

As [asked and answered at StackOverflow](https://stackoverflow.com/questions/1434451/what-does-connection-reset-by-peer-mean),
`Connection reset by peer` means your web server forcefully closes/interrupts the connection.

It may be caused by a network interrupt or a fatal error of your web server.

Web server restarts may also cause this error.

If the problem is persistent after an exact time e.g. after 60 or 300 seconds, 
then probably there is some timeout limit or network firewall on your web server that forces your web server to close the connection. 
In this case please contact your hosting provider and ask them to check and increase the timeout limit for you.