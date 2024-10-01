# Vpn Setup

### Step 1 (Installation)
Install the open vpn for windows according to your setup from `https://openvpn.net/community-downloads/`.

### Step 2 (Setup Enviornment Variable for openvpn)

Navigate to Your `C:\Program Files\OpenVPN\bin` and checkout if `openvpn-gui.exe` exists in it along with other files.

Search windows for enviornment variables > Click on Enviornment Variables Button > Scroll to path in system variables > Click Edit > Click New > Paste the Verified `C:\Program Files\OpenVPN\bin` in it.

Thats how we are done with enviornment variable setup.

### Step 3 (Setup Document directory for vpn files)

Paste the folder in documents mentioned in this directory named with `openvpn-config`.

### Step 4 (Run the openvpn)

Open the terminal with administrtor access.

Navigate to `openvpn-config` directory in your documents folder & copy the link.

Run command with `openvpn --config Paste Your Link`

### Step 5 (Login to OpenVPN)

UserName : `Shivprasad.Kounsalye`
Password : `gnroKEwBXnRMkPLFJg6c`

### Step 6 (Check Status)

Go to `https://ldap.devpayever.com/login` & Checkout if Payever login page is visible, If you are getting error, means your vpn is not running correctly. 

Checkout the setup & Resolve the setup.

### Login after setup

When you are done with setup and able to see payever login page, Repeat `Step 4 + Step 5` for running the vpn again whenever you restart the laptop or when you want to rerun the open vpn again.






