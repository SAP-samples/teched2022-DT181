# Getting Started - Setting up your Development Environment

If you don't have an **SAP BTP trial account** already, see this [tutorial](https://developers.sap.com/tutorials/hcp-create-trial-account.html).\
After activation, or if you already had an SAP account, go to the SAP [BTP Trial page](https://account.hanatrial.ondemand.com/) and click Log On.
## Setting Up SAP Business Application Studio

Depending on when you created the SAP BTP Trial account, the subscription to **SAP Business Application Studio** might already be added in the subaccount.\
If you are not subscribed to SAP Business Application Studio, follow [this step](https://developers.sap.com/tutorials/appstudio-onboarding.html#005500bf-bf4a-44cb-bbef-f2221d061b5c) to add the subscription to your subaccount.

## Accessing SAP Business Application Studio

On the **Welcome** screen, Click on the Quick Tool Access icon **SAP Business Application Studio**.

![Welcome SAP BTP Trial](../ex0/images/00_00_0020.png)

## Creating the Development Space

Click on the button **Create Dev Space**.

![Create Dev Space](../ex0/images/00_00_0030.png)

Enter a name for your development space and select application profile **Full Stack Cloud Application**.

![Select Profile](../ex0/images/00_00_0040.png)

In the lower right corner of the page press button **Create Dev Space**.

![confirm](../ex0/images/00_00_0050.png)<br>

Once your development space has status running, click on the development space name to open it.

![enter dev space](../ex0/images/00_00_0060.png)

## Getting the Sample Scenario

Get the GitHub repository clone Https Url from the repository's [landing page](https://github.com/SAP-samples/teched2022-DT181).\
Click on button **Code**, then click the copy icon.

![copy link](../ex0/images/00_00_0070.png)

In the dev space, we will see a **Welcome Page**.\
Click on tile **Clone from Git**.

![Click on link "Clone from Git"](../ex0/images/click-clone-from-git.png)

Alternatively, you can go via menu **View->Find Command...** and search for command **git clone**.

![command git clone](../ex0/images/cloneCommand.png)

Paste the repository link into the input field.

```abap
https://github.com/SAP-samples/teched2022-DT181.git
```

![Enter the github repository URL](../ex0/images/enter-github-repository.png)

If asked, select repository location.

![Select repository location](../ex0/images/select_repo_location.png)

When the cloning is finished, open the cloned repository.

![Open cloned repository](../ex0/images/open_clone_repo.png)

Alternatively, you can open a workspace via the file menu.

![open workspace](../ex0/images/00_00_0065.png)

Select folder path **/home/user/projects/teched2022-DT181/** and click **Ok**. This will restart SAP Business Application Studio.

![select ws folder](../ex0/images/00_00_0066.png)

In the **Explorer** pane on the left side of SAP Business Application Studio, you should see the workspace content.

![select ws folder](../ex0/images/wsopen.png)

## Summary

With the setup procedure done, you now have completed:

- Setting up the SAP Business Technology Platform trial account
- Access to SAP Business Application Studio
- Creation of your development space
- Setting up the sample OData V4 service in SAP Business Application Studio

Continue to - [Exercise 1 - Generating an SAP Fiori Elements App](../ex1/README.md)