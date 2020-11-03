# FAQs about General

This includes general questions about SDX, publish-subscribe-based messaging protocol or MQTT, and difference of SDX to APEX. 

## What is SDX? 

**SDX** stands for **Sensor Data Exchange**, a centralized sensor data exchange platform for the Whole-of-Government (WOG). It is part of the Strategic National Project under Smart Nation Sensor Platform (SNSP).

**SDX** enables government agencies to:

- Publish and subscribe real-time sensor data using a self-service portal both government intranet and government commercial cloud.

- Share unclassified (potentially up to restricted) sensor data with government sector organisations.

## What is MQTT?

Message Queue Telemetry Transport (MQTT), is a publish-subscribe-based messaging protocol based on ISO standard ISO/IEC PRF 20922. It works over TCP/IP. It is designed to be lightweight for small, low power, and low bandwidth device communication. MQTT is the most common protocol used in Internet Of Things (IOT).

## What is the difference between SDX and APEX?

Both **SDX** and **APEX** are self-service data sharing platform for the Whole-of-Government.

**APEX** enables users to directly communicate in terms of requesting and granting access to APIs. It acts as a centralized and secure API gateway.

It uses request-response architecture, each client opens a direct connection to each server, because the client request data directly from the server. A one-to-one distribution process.

The equivalent is like SMS used for sending message to a recipient. Another example, is newspapers where you go to a store to buy or get it delivered to your house.

For more information about **APEX**, refer to this [link](https://www.developer.gov.sg/technologies/data-and-apis/apex). 

**SDX**, a messaging exchange platform enables government agencies to share real-time information. 

It uses pub-sub model which allows clients to publish and subscribe to a channel and receives messages as they become available. A one-to-many distribution process.

The equivalent is like WhatsApp mobile app where you can group chats. Another example is radio news where you tune in to a channel.

**SDX** uses a pub-sub transport messaging protocol (MQTT) which is commonly used for Internet of Things (IoT).

One advantage of **SDX**, it is good for frequent traffic and lightweight networks. It reduces network load and clients are pushed the latest data.

You can check relevant information about request-response versus publish-subscribe [here](https://blog.opto22.com/optoblog/request-response-vs-pub-sub-part-1) and which one to use [here](https://blog.opto22.com/optoblog/request-response-vs-pub-sub-part-2).



