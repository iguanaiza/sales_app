# sales_app
https://iguanaiza.github.io/sales_app/

Simple sales app - no PHP used, just layout.
Work in progress.
---------------
About:
The app is designed for callcenter industry. The original idea comes from my previous work - I wanted to recreate the app design.
Originally app takes customer's data from database - like name, address, contact and then updates it if necesarry (depending on closing status). This project hasn't any relation with database - it's just layout.

Header contains data about the lead loaded - project name, list name, phone number etc. + logo of the main project.

The body contains customer's data + some additional fields depending on sale (like postpone delivery, detailes about sale, product selection). Some of this data is reprinted in "verification" div, which is displayed when "next" button is clicked. Under the verification there are 2 buttons - "back" (return to form) and "confirm sale" (save sale and send data to database). 

The footer contains other options - "no sale" when customer doesn't want to buy anything (then the pop-up with no reasons listed appears), "other" when there is no sale but not depending on customer (like bad number) and "callback" - used when the call is interrupted.

Project progress:
---------------
Header **[done]**:
- project data is just some values hardcoded in the html table, but each <td> has it's own ID **[done]**
- project logo **[done]**

Body:
- form: still missing few inputs and validiation (like additional fields depending on other data)
- button "next": clickable, moves user to verification, needs positioning
- verificaton page **[done]**
- button "back": clickable, moves user to form, needs positioning
- button "confirm": needs to add some kind of action like confirmation of saving sale, needs positioning

Footer:
- button "no sale": needs to add pop-up with few 'no reasons', still needs positioning
- button "other": needs to add some kind of action like confirmation of saving record, needs positioning
- button "callback": needs to add some kind of action like confirmation of recalling, needs positioning
