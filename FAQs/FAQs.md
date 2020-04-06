
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

## Why I cannot see a topic in Browse page?

Check with the publisher if the topic visibility is own agency and WOG. If you are in the same organisation (or team) as the publisher, and the visibility is own agency, you should be able to see the topic.

## How can I find out who is the publisher of the topic?

Go to Browse topics page and click the topic you need to find out the publisher contact in the topic details page. You can see Publisher created by ID in the topic details page.

## How can I contact the publisher of the topic?

Use publisher created by ID from the topic details page  and email to contact publisher about this topic.

## Can I subscribe to my own topics?

You cannot subscribe to topics published by the same project. The same project is not allowed to subscribe to its own topics.

## Is SDX secured?

## Is publishing government information in SDX system secured? 

## How can I set up and connect to MQTT Client?

## What is MQTT Client? 

## What happens if I forgot to copy the SSL certificates when setting up to MQTT Client?

## How can I publish my sensor data to on-prem?

## What types of support does the SENSE Team offers?

## What should I do if I forget my SDX account password?

## Can I make changes to my subscription details such as delivery address, email address and phone numbers?

## Where do I find more documents that can help?

## How long is my account activated?

## How do I suggest changes to this user guide?

Our user guide is hosted by OpenDoc and is written in Markdown, which is a laymen-friendly language. The code for our user guide is open-sourced, and you may visit our Github repository, and send us a Pull Request if you have corrections or suggestions to the guide.

## What is MQTT and how it works?

## Can MQTT work without internet?

## Does MQTT required internet?
