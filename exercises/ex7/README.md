# Exercise 7 - Guided Development: Adding Building Block Chart

In this exercise, we will learn how to use **Guided Development** to add a **chart building block** to the object page custom section.
You will also learn how to implement the chart's selection event handler in order to show additional information on the UI.
The chart building block to be added to the custom section will show aggregated **bookings per customer for all airlines**, complementing the **Customer VIP Status**
scenario.\
File **db/Schema.cds** (1) contains view **BookedFlights** and an association to it in entity **Travel** (2) which we will use as data source for the chart.

![](./images/image1.png)

In order for the chart to retrieve data, the service requires **oData V4 aggregate transformation capabilities**.\
In file **app/capabilities.cds** (3) you can find the corresponding **aggregation capabilities annotations** (4).

![](./images/image3.png)

**Annotation explanation**:

- Collection **Transformations** lists all supported transformations for the entity container.
- Collection **GroupableProperties** contains the properties of the annotated entity that can be used in a **groupby** transformation.
- Collection **AggregatableProperties** contains the properties of the annotated entity that can be used for aggregation
- Collection **Analytics.AggregatedProperties** defines the aggregate expression with an aggregation method for the aggregatable property.

## Exercise 7.1 - Use Guided Development to Add Building Block Chart

(5) Click on ![](./images/image6.png).

(6) Click on **Open Application Information** ![](./images/image7.png).

![](./images/image5.png)

(7) Click on tile **Open Guided Development**.

![](./images/image8.png)

(8) Enter **Chart Building Block** in the search field and click on the corresponding guide (9).
![](./images/image10.png)

(10) Click **Start Guide**.

![](./images/image12.png)

**Set the following property values**:

(11) **CDS File**: ![](./images/image15.png)

![](./images/image14.png)

(12) **Service**: ![](./images/image17.png)

![](./images/image16.png)

(13) **Entity**: ![](./images/image19.png)

![](./images/image18.png)

(14) **Chart Qualifier**: **My Chart**

![](./images/image20.png)

(15) **Dimensions Entity Property**: ![](./images/image22.png)

![](./images/image21.png)

(16) Click ![](./images/image24.png).

![](./images/image23.png)

(17) Second **Dimensions Entity Property**: ![](./images/image26.png)

![](./images/image25.png)

(18) For the second dimension **AirlineID**, switch **Dimension Role** to **Series**.

![](./images/image27.png)

(19) **Measures Entity Property**: ![](./images/image30.png).

![](./images/image29.png)

(20) Click ![](./images/image32.png).

![](./images/image31.png)

(21) The annotation is applied to annotation file **app/managetravels/annotations.cds**.

![](./images/image33.png)

The annotation defines the **chart type**, the **measure** and the **dimensions** to be used for visualization of the aggregated data.\
The aggregated property **CountFlights** is defined as the **measure**.\
Properties **to_Customer_Customer_ID** and **AirlineID** are defined as the **grouping dimensions**.\
The aggregation result for the current Travel's bookings is enriched with aggregated bookings data for all other airlines.\
This is done in a custom handler in file **srv/travel-service.js**, section **Exercise 7: Custom Section Chart Building Block**.

(22) Move to step 2 of the development guide by clicking ![](./images/image36.png).

![](./images/image35.png)

**Set the following property values**:

(23) **View or Fragment File**: ![](./images/image38.png)

![](./images/image37.png)

(24) **Building Block ID**: **myChart**

![](./images/image39.png)

(25) **Service**: **TravelService**.

![](./images/image40.png)

(26) **Entity**: ![](./images/image42.png)

![](./images/image41.png)

(27) **Navigation Path**: **to_BookedFlights**

![](./images/image43.png)

(28) **Chart Qualifier**: ![](./images/image45.png)

![](./images/image44.png)

(29) **Aggregation Path**: ![](./images/image47.png)\
This defines the position in the XML Fragment where the reference to building block Chart is to be added.

![](./images/image46.png)

(30) **Selection Change Function**: **handler.onChartSelectionChanged**\
We will implement the handler in the next exercise.

![](./images/image48.png)

(31) **Chart Personalization**: select **Type** and **Item**

![](./images/image49.png)

In the snippet preview pane, you can now check the properties defined for the building block Chart:

- **id** of the chart control
- **contextPath** defining the absolute path from root entity **Travel** and association **to_BookedFlights**
- **metaPath** defining the relative path to the UI.Chart annotation in the metamodel
- **personalization** for chart configuration options
- **selection mode** set to single selection

(32) Click ![](./images/image52.png).

![](./images/image51.png)

(33) Click ![](./images/image54.png).

![](./images/image53.png)

Open file **app/managetravels/webapp/ext/fragment/CustomSection.fragment.xml**.\
In the UI, the chart shall be shown next to the table in the same container, sharing the space mutually.

(34) Change the **default span** of the grid control to

```js
defaultSpan='L6 M12 S12'
```

![](./images/image55.png)

(35) Switch the order of lines **macros:Chart** and **macros:Table** so that the Chart will be displayed to the left.

![](./images/image57.png)

(36) Switch to the browser preview window. The chart is shown next to the table.

![](./images/image59.png)

## Exercise 7.3: Implementing the Chart's Selection Change Handler

The **chart building block API** allows implementing a **selection change handler** which is triggered when a chart segment is selected.\
We will use the event to show additional information in a small popover.\
The **popover fragment sample** is provided in the project.\
We need to move it to the **app folder** in order to make usage of it.

 Open project folder **app/test-resources/ext/fragment**.\
 Drag and drop file **Popover.fragment.xml** (37) to folder **app/managetravels/webapp/ext/fragment** (38).

![](./images/image61.png)

(39) Confirm dialog by clicking ![](./images/image64.png).

![](./images/image63.png)

Now we need to add the Popover fragment as a dependent control to the Custom Sections grid control.\
Go back to file **app/managetravels/webapp/ext/fragment/CustomSection.fragment.xml**\
(40) Add the following xml snippet as shown in the screenshot below.

```js
  <l:dependents>
    <core:Fragment fragmentName="sap.fe.cap.managetravels.ext.fragment.Popover" type="XML"/>			
  </l:dependents>	
```

![](./images/image65.png)

Now we need to implement the chart selection event handler.
(41) Open file **app/managetravels/webapp/ext/CustomSection.js**.\
The file was created along with the custom section we added in exercise 6.\
Replace the file content with the following code snippet.

```js
sap.ui.define(["sap/ui/model/json/JSONModel"], function (JSONModel) {
  "use strict";

  return {
    onChartSelectionChanged: function (oEvent) {
      if (oEvent.getParameter("selected")) {
        this.editFlow
          .getView()
          .setModel(
            new JSONModel(oEvent.getParameter("data")[0].data),"popup");


        // get Popover from xml fragment dependents
        this._oPopover = oEvent.getSource().getParent().getDependents()[0];
        if (this._oPopover) {
        // open popover at selected chart segment
          this._oPopover.openBy(
            oEvent.getParameter("data")[0].target
          );
        }
      }
    },
  };
});

```

![](./images/image67.png)

## Exercise 7.4 Testing the Chart's Event Handler

Switch to the preview browser tab.\
(42) Select a chart segment in order to display the popover with additional information about the VIP Customer program per airline.

![](./images/image69.png)

We will now check for other flight connections for the customer's preferred airlines according to the aggregated bookings shown in the chart.\
(43) Click ![](./images/image71.png).

![](./images/image70.png)

In this example, customer **Gueldenpfennig (000553)** has a preference for  **Sunset Wings** which is shown with the most bookings to in the chart.\
Clicking (44) opens a dropdown list with flight connections for the same flight date.

![](./images/image72.png)

(45) Select a list item for the customer's preferred airline.

![](./images/image74.png)

(46) Click ![](./images/image77.png).

![](./images/image76.png)

Verify that the both the chart (47) and the micro chart table column (48) have been updated.

![](./images/image78.png)

## Summary

We've now successfully added a @UI.Chart annotation to the service and added the **chart building block** to the custom section's XML fragment by using Guided Development.\
We've implemented the chart's **event handler** in order to show a popover with additional information when a chart segment is selected.

Continue to - [Exercise 8 - Flexible Programming Model: Changing the Edit Flow by Implementing a Controller Extension](../ex8/README.md)
