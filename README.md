# sales_app
The application can be tested at: https://iguanaiza.github.io/sales_app/

Simple sales app - no PHP used, just layout.
**Work in progress.**

About
---------------
  **The application** is designed to simulate a call-centre's sales' platform. It is supposed to be handled by an agent gathering the necessary data from the customer during a phone call. The original idea comes from my previous work - I wanted to recreate the app design.
  Originally the application takes the customer's data from the database - like name, address or contact (phone, email) and then updates it if necesarry - according to the data gatehred from the customer (depending on closing status). The application is just a layout and is not connected to any database.

  **The header** contains the data about the record loaded - the project's name, the database's name (list name), the phone number etc. + the logo of the main project.

  **The body** contains the customer's data and some additional fields depending on the sale (like postponed delivery, detailes about the sale, the product's selection). Some of this data is repeated in "verification" div, which is displayed when "next" button is clicked. Under the verification there are two buttons - "back" (return to the form) and "confirm sale" (save the sale and send the data to the database).

  **The footer** contains other options - "no sale" when customer doesn't want to buy anything (with a pop-up listing the reasons for that appearing afterwards), "other" when there is no sale but not depending on customer (like a bad number) and "callback" when used if the call was interrupted.

Project progress
---------------
Header **[done]**:
- project data is just some values hardcoded in the html table, but each <td> has it's own ID **[done]**
- project logo **[done]**

Body:
- product selection: doesn't exist yet
- form: still missing few inputs and validiation (like additional fields depending on other data)
- button "next": clickable, moves user to verification, needs positioning
- verificaton page **[done]**
- button "back": clickable, moves user to form, needs positioning
- button "confirm": needs to add some kind of action like confirmation of saving sale, needs positioning

Footer:
- button "no sale": needs to add pop-up with few 'no reasons', still needs positioning
- 'no reasons': : doesn't exist yet
- button "other": needs to add some kind of action like confirmation of saving record, needs positioning
- button "callback": needs to add some kind of action like confirmation of recalling, needs positioning
