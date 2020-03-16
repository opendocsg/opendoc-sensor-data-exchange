
# Projects

A project is a piece of planned work or activity where you can organize and arrange topics that you intend to publish and wish to subscribe to.

It contains connection strings and SSL certifications to set up a connection to MQTT. MQTT stands for Message Queuing Telemetry Transport. It is a publish/subscribe protocol where you can publish and receive messages as a client, often called a “broker”. The job of an MQTT broker is to filter messages based on topic, and then distribute them to subscribers. There is no direct connection between a publisher and subscriber. All clients can publish (broadcast) and subscribe (receive).

To publish your relevant information, you must first create your own project to create a topic and subscribe to your own topic. A topic cannot be duplicated  and cannot published and subscribed to the same project again.

Both publisher and subscriber can create a project. Both publisher and subscriber need to have a project before both can publish or subscribe to any topic. Only the publisher can create a topic.

You can create new project by clicking **Create** button on the top right of the Browse Topics page and select **New Project**.


![Image not Available](/assets/Fig31.png)

Or, click **Projects** from the left side navigation bar.

![Image not Available](/assets/Fig32.png)


## Create New Project ##

To create new project:

**Step 1:**	Click **Create Project**. The Projects page is displayed. 

   **Note:** *For your first project, you will see this page as shown below.*

![Image not Available](/assets/Fig33.png)


**Step 2:**	Enter the following information.
  - Project Name
  - Project Duration
  - Description

![Image not Available](/assets/Fig34.png)


The newly created project appears in the **Projects** page > **Overview** tab. Click **Save**.

![Image not Available](/assets/Fig35.png)



In the Projects page, displays the project name, date created, number of publication and subscription. It also includes the following tabs:

- Overview – Displays the details of the project.
- Connections – Displays the details to set up and connect to MQTT Client.
- My topics – Displays the topic that you have published to this project and the total number of topics published by this project. 
  **Note:** *This tab is only available for a Publisher only.*
  
- Subscribed topics – Displays the topic that you have subscribed by this project and the total number of topics subscribed by this project.


## Set up MQTT Connections ##

After creating a new project, this tab shows the connection strings and SSL certificates to setup connections to MQTT. 

![Image not Available](/assets/Fig36.png)


Certificates:

- Certificate chain
- Client certificate
- Private key 

  **Note:** *The Private key only appears once. You must copy and save the certificates in a text editor file.*
 
 Alternatively, click **Generate certificate** button.

![Image not Available](/assets/Fig37.png)
  
  
  You will receive a password through email and use that password in the Client key passphrase field.

![Image not Available](/assets/Fig38.png)


To set up MQTT Client connection:

**Step 1:**	Copy the certificates in a Text Editor and save each file separately.

**Step 2:**	Now, open MQTT Client.

![Image not Available](/assets/Fig39.png)


**Step 3:** Click Create MQTT Client.

A Publisher can create MQTT connection using the certificates generated and with the password from the email inbox.

**Step 4:** Set up MQTT connections with the following:

- MQTT Client Name – Name is not specific and can give random name
- Protocol - Select protocol. For example, *mqtt/tls*
- Host - Enter host name. For example, *sdx.sensors.gov.sg*

- Upload each file you copied in a Text Editor in the following fields: 
  - CA file
  - Client certificate file
  - Client key file

- Enter the password received from the email inbox in the Client key passphrase field

![Image not Available](/assets/Fig40.png)


- Click **Save** and connected successfully.

![Image not Available](/assets/Fig41.png)


**Step 5:** Using MQTT client, a publisher published a topic.

- Copy the topic path and fill into the **Topic to publish** field in MQTT client. For example: *govtech-ndmrcHUWg/Topic-temperature*
- Click **Subscribe** button
- Subscriber is ready to receive data for this topic

![Image not Available](/assets/Fig42.png)



## My Topics ##

After creating a project, create your first topic. The **My Topics** tab is only available for a Publisher. This tab shows the topic that have been published on this project.


To create a topic:

**Step 1:** Navigate to **Projects** page > **My topics** tab. Click **Create Topic**.


![Image not Available](/assets/Fig43.png)


**Step 2:** Select from the option who can see the topic. Click **Next**.

- All government agencies
- Only my agency

![Image not Available](/assets/Fig44.png)


**Step 3:**	Select data classification. Click **Next**.

![Image not Available](/assets/Fig45.png)


**Step 4:**	Select the project and enter topic name. Click **Next**.

![Image not Available](/assets/Fig46.png)


**Step 5:**	Fill in the following details of the topic.

- Description – Enter description to the topic
- Tags – Add tags to the topic maximum of 5 tags
- Is approval needed for subscription requests?
  - Yes – Approval is needed from publisher before you subscribe 
  - No – Allows free access to the topic and no approval needed from the publisher
- Also publish on SDX on-prem?
  - Yes – Refer to the steps in **Publish Topic on SDX On-Premises** and continue 
  - No

![Image not Available](/assets/Fig47.png)


**Step 6:** Click **Create**. The new topic is created successfully.


You can see the newly created topic being added in **Projects** page > **My topics** tab.

![Image not Available](/assets/Fig49.png)


### Publish Topic on SDX On-Premises ###

To publish topic on SDX on-premises:

**Step 1:**	Click **Yes** in Also publish on SDX on-prem? field.

**Step 2:**	Select the project code and name. 

**Step 3:**	Click **Create**.

![Image not Available](/assets/Fig50.png)


You can add more topics within the topic on your own project by selecting from topic folder or subfolder and clicking the ![Image not Available](/assets/icon9.png) icon.

### Add Topic ###

To add new topic:

**Step 1:**	Navigate to Projects and select topic folder or subfolder in **My topics** tab. 

**Step 2:**	Click ![Image not Available](/assets/icon9.png) icon and click **New Topic**. A new window appears to create new topic.


![Image not Available](/assets/Fig48.png)


**Step 3:**	Enter topic name and click **Create Topic**.

![Image not Available](/assets/Fig52.png)


The newly created topic is added successfully in the Topic Details page.

![Image not Available](/assets/Fig53.png)


### Edit Topic ###

To edit topic:

**Step 1:**	Navigate **Projects** > **My topics**. 

**Step 2:**	Select a topic to edit and the Topic Details page displayed. 

**Step 3:**	Click **Edit**. A new window appears to edit the details of the topic.


![Image not Available](/assets/Fig54.png)


**Step 4:** Click **Update**.

## Subscribed Topics ##

Both publisher and subscriber can subscribe to a topic. Both publisher and subscriber can view the Subscribed topics tab.

To subscribe to a topic:

**Step 1:**	Navigate to **Projects** page > **Subscribed topics** tab. Click **Browse Topics**.

![Image not Available](/assets/Fig55.png)


**Step 2:**	Select the topic card that you want to subscribe.

![Image not Available](/assets/Fig56.png)


**Step 3:**	Once the topic card is selected, the Topic Details page is displayed. Click **Subscribe**.


![Image not Available](/assets/Fig57.png)


**Step 4:**	Select a project to subscribe to the topic. Click **Subscribe**.

![Image not Available](/assets/Fig58.png)


**Step 5:**	Go back to **Projects** and click **Subscribed topics** tab. The new subscription is added to the subscribed topics.


![Image not Available](/assets/Fig59.png)



