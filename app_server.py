# Import libraries 
import http.server 
import socketserver
import sys, os
  
# Defining PORT number 
PORT = 8080
ADDRESS = "192.168.99.200"
  
# Creating handle 
Handler = http.server.SimpleHTTPRequestHandler

os.chdir("term")
  
# Creating TCPServer 
http = socketserver.TCPServer((ADDRESS, PORT), Handler) 
  
# Getting logs 
print(f"serving at address: {ADDRESS}, port: {PORT}") 
while True:
	try:
		http.serve_forever()
	except KeyboardInterrupt:
		http.socket.close()
		print("\nServer closed")
		break



