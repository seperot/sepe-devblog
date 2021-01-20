---
title: Simple Reusable Dialog for Android
date: "2020-04-08"
featuredImage: './images/dialogbig.jpg'
---
A small native Android/Kotlin library that helps build dialogs with however many buttons in however many styles you want.
<!-- end -->

#What is it
![Bot](./images/dialogsmol.png)

Android dialogs can be a bit of a faffy affair, this small lib gives you a range of customability while staying native so a lower risk of compatability issues down the road.

##Latest version for gradle
implementation 'com.github.seperot:SimpleReusableDialog:1.5'

#How to use it
![Bot](./images/howitworks.png)

##Example button

 ```btndemo.setOnClickListener {
        registerButton(
            getString(
                R.string.dialog_one_button_one),
                R.color.colorPrimary,
                android.R.color.white,
                object : ReusableDialogListener {
                    override fun onDialogButtonClick
                    dialogFragment: DialogFragment, index: Int) {
                        dialogFragment.dismiss()
                    }})

            ReusableDialog.dialogCancelable(false)

            ReusableDialog.createDialogInstance(
                getString(R.string.dialog_one), 
                getString(R.string.dialog_one_text), 
                null).show(
                supportFragmentManager, null
            )
        }
```

##Working parts

###registerButton
RegisterButton adds a button to the next time you call createDialogInstance it has four parts

* buttonTitle: The text the button shows
* buttonBackground: The button background color, things like R.color or android.R.color work
* textColor: The button text color, again things like R.color or android.R.color work
* dialogButtonListener: The button onClickListener, this has to be called in the following format currently until I can figure out how to make it look nicer

#dialogCancelable
A simple boolean that turns on or off the users ability to cancel out of the dialog without choosing an option. This also needs to be done before you call createDialogInstance and will reset after use true = they can cancel, false = they cannot cancel This also works for the back button

#createDialogInstance
Calls the dialog and shows it to the user, grabs any registered buttons and checks if the dialog is cancelable or not then displays. Has three fields

* title: The dialog title
* infoText: The dialog content
* topIcon: The icon at the top of the Dialog, set as null to remove from Dialog

Finally be sure to add ".show(supportFragmentManager, null)" At the end to display the dialog

As you can see in this second example, you can expand this to as many buttons as you like

```btndemo2.setOnClickListener {
            registerButton(
                getString(R.string.dialog_two_button_one),
                R.color.colorPrimary,
                android.R.color.black,
                object: ReusableDialogListener {
                    override fun onDialogButtonClick(
                        dialogFragment: DialogFragment, 
                        index: Int) {
                    dialogFragment.dismiss()
                    Toast.makeText(
                        applicationContext, 
                        getString(R.string.toast_one), 
                        Toast.LENGTH_LONG).show()
                }})

            registerButton(
                getString(R.string.dialog_two_button_two),
                R.color.colorPrimaryDark,
                android.R.color.white,
               object: ReusableDialogListener {
                   override fun onDialogButtonClick(
                       dialogFragment: DialogFragment, 
                       index: Int) {
                       dialogFragment.dismiss()
                       Toast.makeText(
                           applicationContext,
                           getString(R.string.toast_two),
                           Toast.LENGTH_LONG
                       ).show()
                   }})

            ReusableDialog.createDialogInstance(
                getString(R.string.dialog_two),
                getString(R.string.dialog_two_text),
                R.drawable.pupcat
            ).show(
                supportFragmentManager, null
            )
        }
```

#Planned features
![Bot](./images/plan.png)
Add a setting for custom button margin
Add a setting for custom button padding
Add set dialog size and scroll

#Check out the library here
![Bot](./images/library.png)
https://github.com/seperot/SimpleReusableDialog
