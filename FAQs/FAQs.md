
# READ THIS FIRST

This is a 5 minute read that helps you understand most of the in-and-outs of SDX.

## What is SDX? 

**SDX** stands for **Sensors Data Exchange**, a centralized sensor data exchange platform for the Whole-of-Government (WOG). It is part of the Strategic National Project under Smart Nation Solutions Platform (SNSP).

**SDX** enables government agencies and individuals to:

- Publish and subscribe real-time sensor data using a self-service portal both government intranet and government commercial cloud.

- Share unclassified (potentially up to restricted) sensor data with government sector organisations and individuals.

## Why is my MQTT connection disconnecting?

You are using duplicate MQTT Client ID across your different MQTT connection. MQTT Client ID must be unique. You can generate one using a UUID.

## What are the inputs required to connect to SDX broker?

Inputs required to connect to SDX broker:

1. Unique MQTT Client ID
2. Client key
3. Client secret
4. SSL CA file
5. SSL Client cert
6. SSL private key
7. Private key password 

All required and obtainable from the SDX Portal.

## Why am I unable to subscribe to a topic on my MQTT client?

Check that you have subscribed to the topic via SDX Portal. If the topic requires approval, check that the subscription request is approved.      

## Why I cannot see a topic in the Browse topics page?

Check with the publisher if the topic visibility is own agency and WOG. If you are in the same organisation (or team) as the publisher, and the visibility is own agency, you should be able to see the topic.

## How can I find out who is the publisher of the topic?

GGo to Browse topics page and click the topic that you need to find out who the publisher is. You can see the Publisher Created by ID in the Topic Details page.

## How can I contact the publisher of the topic?

Use the Publisher Created by ID from the Topic Details page  and email to contact Publisher about this topic.

## Can I subscribe to my own topics?

You cannot subscribe to topics published by the same project. The same project is not allowed to subscribe to its own topics.

## Why my MQTT client cannot connect to SDX?

Make sure you have provided your IP address for the team to open the firewall.

Check the connection settings on your client and ensure that the passwords are entered correctly.

Check your SSL certificates are in valid format. Refer to this  [page](https://www.ssl247.com/kb/ssl-certificates/troubleshooting/certificate-matches-private-key) on how to check. 

For example, check the private key file is ok using this command:

openssl rsa –noout –modulus –in <file>.key | openssl md5

## Does the topic pattern have a maximum length?

The topic pattern has a maximum level of up to 8 levels. The total maximum length of the topic pattern is X characters.

## What are the character restrictions on the topic pattern?

While creating a topic, the name must not have any slash (/), dot (.), or special characters. 

Letters, numbers, space, dash (-), and underscore (_) are allowed.
