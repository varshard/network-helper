# Setting up an AP

For ease of configuration, we will use `create_ap`, which is using `hostapd` and `dnsmasq` to create an AP under the hood.

Follow instruction from [https://github.com/lakinduakash/linux-wifi-hotspot/blob/master/src/scripts/README.md](lakinduakash/linux-wifi-hotspot).

## Installation create_ap

1. Dependencies
	1. hostapd
	1. dnsmasq
	1. iptables

1. Clone and compile `linux-wifi-hotspot`, which contains `create_ap`

	```bash
	git clone https://github.com/lakinduakash/linux-wifi-hotspot
	cd linux-wifi-hotspot/src/scripts
	make install
	```

## Start the access point

### Discovering network interface name.

```bash
iw dev
```

It tend to be `wlan0`, but it could be something else.

### Start an AP with no passphrase

```bash
sudo create_ap <wireless_interface_name> <internet_interface_name> <SSID>
```

**Example**

If I want to create an AP named `MyNetwork` that connect to the internet with eth0, and provide wireless access with `wlan0`, then my command would look like this.

```bash
sudo create_ap wlan0 eth0 MyNetwork 
```

### Start an AP with a passphrase(password)

```bash
sudo create_ap wlan0 eth0 MyProtectedNetwork password 
```

### Start a hidden AP

```bash
sudo create_ap wlan0 eth0 MyProtectedNetwork password --hidden
```

### Start with 5Ghz band (it's 2.4Ghz by default)

```
sudo create_ap wlan0 eth0 MyProtectedNetwork password --freq-band 5
```

