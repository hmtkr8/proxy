function FindProxyForURL(url, host) {
    return "PROXY 192.168.0.101:3128; PROXY 127.0.0.1:3128; DIRECT";
}
