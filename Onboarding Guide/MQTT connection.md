**Generate Cert**

### Set up MQTT connections ###

After creating a new project, go to **Connections** tab. This tab shows the **connection strings** and **SSL certificates** to setup MQTT connection. 

- Cert status - Active, Expired
- Unique MQTT URL
- Unique MQTT Client ID
- Client key
- Client secret
- SSL Certificate chain
- SSL Client certificate
- SSL Private key - this box will be shown once 
- Private key password - you will receive this in your email.

![Image not Available](/assets/Fig36.png)

**Note**: User need to copy and save all the 3 SSL certs as .pem file using a text editor.

If user didn't save the certs file for the first time, user can regenerate the certs by clicking "Generate new certificate" button.

![Image not Available](/assets/Fig99f.png)

User will receive a **Private key password** through email and use that password in the **Client key passphrase** for your MQTT client set up.

![Image not Available](/assets/Fig38.png)

 User can receive the email for **project cert expires soon**!

 User will receive the **Project cert expires soon!** email, 30 days before the 3 certs expires!
 
 
 - After the certs have expired, user will still receive the **project expired!** email for the next 7 days.
 
![Image not Available](/assets/Fig99e.png)

From the portal, user can click the **Generate new certificate** button to start using the MQTT client again.


 

