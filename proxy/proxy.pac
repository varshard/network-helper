 function FindProxyForURL(url, host) {
        if (
            isInNet(myIpAddress(), "127.0.0.0", "255.0.0.0") ||
            isInNet(myIpAddress(), "10.0.0.0", "255.0.0.0") ||
            isInNet(myIpAddress(), "192.168.0.0", "255.255.255.0") ||
            isInNet(myIpAddress(), "172.16.0.0", "255.240.0.0") ||
            isInNet(myIpAddress(), "74.125.28.141", "255.255.255.255") ||
            shExpMatch(shExpMatch, "2607:f8b0:400e:c04::8d") ||
            shExpMatch(shExpMatch, "fc00:101:ca7:*")) {
            return "DIRECT";
        } else {
            if (shExpMatch(url, "http:*"))
                return "PROXY proxy.host:3128" ;
            if (shExpMatch(url, "https:*"))
                return "PROXY proxy.host:3130" ;
            if (shExpMatch(url, "ftp:*"))
                return "PROXY proxy.host:3128" ;
            return "DIRECT";
        }
    }
