# Exercise 1 - Generating an SAP Fiori Elements App

In this exercise, we will create a **Custom App** application leveraging the **Flexible Programming Model** available with SAP Fiori elements floorplans for OData V4. The scenario is based on the given SAP Cloud Application Programming Model sample service.
To get started, we will make usage of the **SAP Fiori tools Application Generator**.

## Exercise 1.1 Using the SAP Fiori tools Application Generator

In the **SAP Business Application Studio**, the **Welcome page** is shown.

\(1\) Click **Start from template** .

![](./images/image1.png)

If the Welcome page is not shown, you can start the **Template Wizard** via the Command Palette
(menu View -\>Find Command... or ctrl+shift+p(Win)/cmd+shift+p(Mac))\
In the search field, type **Open Template Wizard**.\
Choose the corresponding list entry.

(2) Click on tile **SAP Fiori application**.

(3) Click **Start**.

![](./images/image3.png)

(4) In the wizard step **Template Selection**, click on the tile **Custom Page**, then click next (5).

![](./images/image5.png)

(6) In the wizard step **Datasource and Service Selection**, open the dropdown list.

![](./images/image9.png)

(7)  Select **Use a Local CAP Project**.

![](./images/image11.png)

(8)  Click the **Browse for folder** icon to select the **CAP project folder path**.

![](./images/image13.png)

(9) Select folder **teched2022-DT181** and click ![Open](./images/image16.png).

![](./images/image15.png)

(10) Open the **OData service** dropdown.

![](./images/image17.png)

(11) Select **TravelService (Node.js)**

![](./images/image18.png)

(12) Click ![](./images/image8.png).

![](./images/image20.png)

(13)  In the wizard step **Entity Selection**, open drop-down **Main Entity**, and select **Travel.** Click ![](./images/image8.png).

![](./images/image21.png)

In the wizard step **Project Attributes**, add the following attributes to the application project:

- **Module Name**: managetravels\
(module name has to match exactly for some of the subsequent exercises to work properly)

- **Application Title**: Manage Travels\
(or a title by your choice)

- **Application Namespace**: sap.fe.cap\
(namespace has to match exactly for some of the subsequent exercises to work properly)

- **Minimum SAPUI5 version**: Choose version 1.113.0\
 (This SAPUI5 version has some features required for some of the subsequent exercises to work properly)

- Select **Configure Advanced Options** then **Add javasript code assist libraries to your project**

(14) Click ![](./images/image24.png).

![](./images/image23.png)

This will start the app generation.\
When finished, you can review the generated artifacts in the **Explorer** pane of SAP Business Application Studio.\
The generated artifacts are located in folder **app/managetravels** (the path reflects the module name you have entered during app generation).

(15) Click **Open Page Map** on tab **Application Information** that is automatically displayed after app generation.

![](./images/image25.png)

(16) On the page map a Custom Page tile is shown. Click icon **Configure Page** ![](./images/image28.png).

![](./images/image27.png)

(17) the corresponding XML view is opened to the side.

![](./images/image29.png)

Both custom page XML View and controller had been created by the app generator. The files are located in folder **app/managetravels/ext/main**.\
The custom page is configured as the default starting page in the application manifest routing section. Please note that the custom view is wrapped into the **Flexible Programming Model component** provided by SAP Fiori elements. This ensures that the custom page runs on the SAP Fiori elements framework and enables the usage of building blocks.

![](./images/image31.png)

## Exercise 1.3 Starting the App

After completing these steps we will have started the generated app.

Besides the common way of starting a CAP service via **cds watch**, another convenient way to start the service and app at the same time is to add an npm script with corresponding parametrization to file package.json of the root folder.

In the following exercises, we will extend the app based on xml views and fragments. We need to make sure that the browser view cache is deactivated during testing our development, so that changes applied to the xml fragments get properly updated when refreshing the UI.

Instead of using **cds watch** in the terminal in order to start the service, we will use the watch script that has been added to file **package.json** by the app generator. The script contains additional parameter **sap-ui-xx-viewCache=false** added to the app start Url.\
If **cds watch** is already running in a terminal, please end it by pressing keyboard keys **control+c**, otherwise the default port 4004 will already be in use by the existing server process.

\(18\) Click **Preview Application** on tab **Application Information**.

![](./images/image30.png)

If the tab is closed, you can open it again by selecting the Fiori Tools icon in the side bar and then the Application Information icon.

![](./images/applicationinfo.png)

This opens a dropdown at the top offering all **cds run** and **cds watch** based scripts maintained in the scripts section of file **package.json**.\
(19) Select npm script **watch-managetravels** 

![](./images/image32.png)

This runs the service in an Application Modeler terminal session and automatically starts the Fiori application in a new browser session.\
The empty custom app page is shown.

![](./images/image34.png)

- If the preview doesn't get opened in a new tab, check if the pop-ub blocker of your browser prevented that.\
Make sure you enable pop-ups
for SAP Business Application Studio, then restart with **Preview Application** as described above.

## Usage of Guided Answers extension by SAP for Trouble Shooting

If you are experiencing an issue with the application preview you can use the **Guided Answers extension by SAP** within your IDE to\
help with troubleshooting. The Guided Answers extension by SAP is **interactive documentation** designed to help users by guiding them\
through tasks via a series of questions. You simply answer the questions presented to you to find the correct solution to your problem.\
You can access the Guided Answer extension by SAP through the IDE command palette using the command ‘SAP: Open Guided Answers’.

![](./images/ga1.png)

You then can then search for the problem you are experiencing, for example, search for **‘Application Preview’** or **‘SAP Fiori Tools’**\
and then select the Guided Answer that best fits your issue. 

![](./images/ga2.png)

Step through the Guide by answering the questions or options presented to you.

![](./images/ga3.png)

![](./images/ga4.png)

When using Application Studio in Chrome for the first time, one common reason for that the preview doesn't get opened in a new tab is that the pop-ub blocker of your browser prevented that.\
Please check under **Reason 3** below how to get this resolved.

![](./images/ga5.png)
## Summary

You've now successfully generated a SAP Fiori elements application of type Flexible Programming Model.

Continue to - [Exercise 2 - Flexible Programming Model: Using Fiori Elements Building Blocks on a Custom Page](../ex2/README.md)