
# READ THIS FIRST

This is a 5 minute read that helps you understand most of the in-and-outs of SDX.

## What is SDX? 

**SDX** stands for **Sensor Data Exchange**, a centralized sensor data exchange platform for the Whole-of-Government (WOG). It is part of the Strategic National Project under Smart Nation Solutions Platform (SNSP).

**SDX** enables government agencies to:

- Publish and subscribe real-time sensor data using a self-service portal both government intranet and government commercial cloud.

- Share unclassified (potentially up to restricted) sensor data with government sector organisations.

## What is MQTT?

Message Queue Telemetry Transport (MQTT), is a publish-subscribe-based messaging protocol based on ISO standard ISO/IEC PRF 20922. It works over TCP/IP. It is designed to be light weight for small, low power, and low bandwidth device communication. MQTT is the most common protocol used in Internet Of Things (IOT).

## What is the difference between SDX and APEX?

Both **SDX** and **APEX** are self-service data sharing platform for the Whole-of-Government.

**APEX** enables users to directly communicate in terms of requesting and granting access to APIs. It acts as a centralized and secure API gateway.

It uses request-response architecture, each client opens a direct connection to each server, because the client request data directly from the server. A one to one distribution process.

For example, SMS to send message to a recipient. Another example, you want news. One way to get information is you go directly to the store to buy newspaper or a telephone call to which someone is called and you answer the call.

For more information about **APEX**, refer to this [link](https://www.developer.gov.sg/technologies/data-and-apis/apex). 

**SDX**, a messaging exchange platform enables government agencies to share real-time information. 

It uses pub-sub model which allows clients to publish and subscribe to a channel and receives messages as they become available. A one to many distribution process.

For example, Whatsapp application or you want to hear a news on a radio then you tune in to a channel.

**SDX** uses a pub-sub transport messaging protocol (MQTT) which is commonly used for internet of things (IoT).

One advantage of **SDX**, it is good for heavy traffic and lightweight networks. It reduces network load with client and data with latest data.

You can check relevant information about request-response versus publish-subscribe [here](https://blog.opto22.com/optoblog/request-response-vs-pub-sub-part-1) and which one to use [here](https://blog.opto22.com/optoblog/request-response-vs-pub-sub-part-2).



