In this week you are going to create a user database table and a form that can be used to add entries to the table. 

1. Creating a table
Create an HTML table that contains the username and email text columns and one column that shows if the user is an admin or not depicted either by an X (admin) or - (not admin).

Populate the table with at least 2 rows of data.

Example table:


Username	Email	Admin
Webmaster	example@email.com	X
User123	example@email.com	-
AnotherUser222	example@email.com	-
2. Adding custom data to the table
Create a form, in which the user can fill information that is going to be added into the table.
The form should have the following input fields:

Text input for username with an id of "input-username"
Text input for email with an id of "input-email"
Checkbox for the admin status with an id of "input-admin"
Button for submitting data with an id of "submit-data"
When the "submit-data" button is pressed, the data in the form should be appended to the table.

Note! If you use the <form> element, make sure to add the event.preventDefault() to prevent the site from refreshing.



3. Emptying the table
Create a button with an id of "empty-table" that empties the table when clicked.



4. Editing existing data
Edit the form logic so that if the username in the form already exists in the table, instead of adding the form data to the table, the data for that row is edited instead.



5. Adding images
The user should be able to add an image for the user. Add a file input to the form with an id of "input-image" and implement the ability to “upload” the file and display it in the fourth column of the table. The image should have the following properties:

Width: 64 pixels
Height: 64 pixels


Useful reading
event.preventDefault()

URL.createObjectURL()

Last modified: Thursday, 7 September 2023, 2:33 PM
