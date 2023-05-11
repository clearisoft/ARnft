import http.server, ssl
import socket

def get_host_ip():
    ip = '127.0.0.1'
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(('8.8.8.8', 80))
        ip = s.getsockname()[0]
    finally:
        s.close()
    return ip

server_address = (get_host_ip(), 443)
print('url is ' + server_address[0])

httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket,
                               server_side=True,
                               certfile='./cert.pem',
                               keyfile="./key.pem")
httpd.serve_forever()
