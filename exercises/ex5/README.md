# Exercise 5 - Page Map: Add Micro Chart Table Column

In this exercise we will a table column of type micro chart by using the Fiori tools Page Map.\
The micro chart shall show the Customer VIP Status per booking, based on all cumulated bookings for the corresponding airline.

The data required for the micro chart are already provided in the service model in file **db/schema.cds** (1) as an extension to the **Booking** entity (2).

![mydevspace - SAP Business Application Studio - Google Chrome](images/image1.png "mydevspace - SAP Business Application Studio - Google Chrome")

The properties are annotated with **@Core.Computed**, which means that the values are calculated in a read handler implementation for entity **Booking**
in file **srv/travel-service.js** (3), section **Exercise 5: Data for Bookings table micro chart** (4).

![mydevspace - SAP Business Application Studio - Google Chrome](images/image4.png "mydevspace - SAP Business Application Studio - Google Chrome")

With the optional property **Criticality**, the coloring of the radial chart is defined.\
In order to add a micro chart to a table, you have to define an annotation of type **@UI.DataPoint**. Its mandatory properties are **value** and a **target value**.\
The data point needs to be referenced in the **measure attributes** of annotation **@UI.Chart**.\
Chart type **#Donut** displays a **radial chart**. Properties **Measures** and **MeasureAttributes** are mandatory.

(5) In the Page Map table section click on **Add Columns** ![](./images/image8.png).

(6) Select **Add Chart Column**.

![](./images/image7.png)

(7) For the **Chart Type**, select **Radial**.

![](./images/image10.png)

(8) For **Value** select property **BookedFlights**.

![](./images/image12.png)

(9) For **Target Value** select **VIPCustomerBookings**.

![](./images/image14.png)

(10) Click ![](./images/image17.png).

![](./images/image16.png)

(11) Drag column **BookedFlights** and (12) drop below column **AirlinePicUrl**.

![](./images/image18.png)

We now define how the color of the chart should be calculated by defining the criticality property.\
(13) In the property pane for chart column **BookedFlights**, open drop-down **Criticality Source** and choose **Property**.

![](./images/image20.png)

(14) In dialog **Define Property**, select property **EligibleForPrime**.

![](./images/image22.png)

(15) Click ![](./images/image25.png).

![](./images/image24.png)

(16) On column **BookedFlights** Click **Navigate to source code** ![](./images/image27.png).

![](./images/image26.png)

(17) This opens up the corresponding **UI.DataFieldForAnnotation** definition.

![](./images/image28.png)

 (18) It refers to a **UI.Chart** annotation that was also generated:

![](./images/image30.png)

Switch to the preview browser tab.\
(19) On the Object Page, the table now shows the micro chart column.

![](./images/image31.png)



## Summary

You've now successfully added a micro chart column to the table by using the Page Map.

Continue to - [Exercise 6 - Flexible Programming Model: Replace Table Section with a Custom Section](../ex6/README.md)