# sales_app
The application can be tested at: https://iguanaiza.github.io/sales_app/

**Work in progress.**

About
---------------
 **The application** is designed to simulate a call-centre's sales platform. It is supposed to be handled by an agent gathering the necessary data from the customer during a phone call. The original idea comes from my previous work - I wanted to recreate the design of the app used there. Originally the application takes the customer's data from the database - like name, address or contact (phone, email) and then updates it if necessary - according to the data gathered from the customer (depending on the closing status). The application is just a layout and is not connected to any database.

 **The header** contains the data about the record loaded - the project's name, the database's name (list name), the phone number etc. + the logo of the main project.

 **The body** contains the customer's data and some additional fields depending on the sale (like if the delivery is postponed, the details about the sale, the product's selection). Some of this data is repeated in the "verification" div, which is displayed when the "next" button is clicked. Under the verification, there are two buttons - "back" (return to the form) and "confirm sale" (save the sale and send the data to the database).

 **The footer** contains other options - "no sale" when customer doesn't want to buy anything (with a pop-up listing the reasons for that appearing afterwards), "other" when there is no sale but not depending on customer (like a bad number) and "callback" used if the call was interrupted..

Project progress
---------------
Header **[done]**:
- the data in the project consists of the values hardcoded in the html table, but each value has it's own ID **[done]**
- the project's logo **[done]**

Body:
- product selection **[done]** (a separate .js file for the product list)
- the form: still missing a few inputs, the basic validiation is done
- the "next" button: clickable, moves the user to the verification,  still needs the proper positioning
- the verificaton page **[done]**
- the "back" button: clickable, moves the user to the form, still needs the proper positioning
- the"confirm" button: requires adding some kind of an action like a confirmation of saving the sale, still needs the proper positioning

Footer:
- the "no sale" button: requires adding a pop-up with a '"no" reasons' list (one to select), still needs the proper positioning
- the '"no" reasons' list: doesn't exists yet
- the "other" button: requires adding some kind of an action like a confirmation of the saving of the record, still needs the proper positioning
- the "callback" button: requires adding some kind of an action like a confirmation of the recalling, still needs the proper positioning
