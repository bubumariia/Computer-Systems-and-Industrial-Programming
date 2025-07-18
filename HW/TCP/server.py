import socket
s = socket.socket() # next create a socket object
print ("Socket successfully created" )
port = 12345 # reserve 12345 port but it can be anything
# Next bind to the port
# we have not typed any ip in the ip field
# instead we have inputted an empty string
# this makes the server listen to requests
# coming from other computers on the network
s.bind(('', port))
print ("socket binded to %s" %(port))
s.listen( 5) # put the socket into listening mode
print ("socket is listening" )
while True:
 c, addr = s.accept() #Establish connection with client.
 print ('Got connection from' , addr )
 c.send('Thanks for connection' .encode()) #encode into bytes

 c.close() # Close the connection with the client

 break # Leaving the loop once connection closed