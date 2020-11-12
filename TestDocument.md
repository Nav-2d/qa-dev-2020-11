## Test Document

### Environment setup

- Run `yarn start` in the roor folder of the application
- Navigate to `http://localhost:3000/` in browser window to open the application.

### Default elements on application load

Purpose: Ensure that the application contains default elements on load.

1. Verify the title `Items` is present.
2. Verify the default list items are present.
3. Verify the list items text.
4. Verify `Remove` button.
5. Verify the label `Title` is present.
6. Verify Title text field is blank by default.
7. Verify the validation tooltip is present.
8. Verify `Add Item` button is present.

Expected Result:
All default elements are present and visible on application load.

### Add a new item to the list on Add Item button click

Purpose: Ensure that the user can add an item to the list successfully on Add Item button click.

1. Select Title text field.
2. Enter valid text between 10 to 20 characters into the text field.
3. Click Add Item Button.

Expected Result: The text entered in step 3 is added to the bottom of the list and has a Remove button attached to it.

### Add a new item to the list on pressing Enter key

Purpose: Ensure that the user can add an item to the list successfully on pressing Enter key from keyboard.

1. Select Title text field.
2. Enter valid text between 10 to 20 characters into the text field.
3. Press Enter.

Expected Result: The text entered in step 3 is added to the bottom of the list and has a Remove button attached to it.

### Set text field to blank after adding new Item

Purpose: Ensure that the Title text field is set to blank after adding a new item.

1. Select Title text field.
2. Enter valid text between 10 to 20 characters into the text field.
3. Press Enter.
4. Observe the Title text field.

Expected Result: The Title text field is set to blank.

### Remove an item from the list

Purpose: Ensure that the user can remove an item from the list.

1. Click "Remove" button for a list item.

Expected Result:
The List item is removed from the list.

### Error Checking - Item Title is blank

Purpose: Ensure that the user is not allowed to add an empty list item.

1. Select the Title text field.
2. Clear the Title text field.
3. Click Add Item button.

Expected Result: The Item is not added to the list and an error message is visible, "Title must be at least 10 characters."

### Error Checking - Item Title is not long enough

Purpose: Ensure the user is not allowed to add an item shorter than 10 characters.

1. Select the Title text field.
2. Enter a text less than 10 characters.
3. Click Add Item button.

Expected Result: The Item is not added to the list and an error message is visible, "Title must be at least 10 characters."

### Error Checking - Item Title exceeds the limit

Purpose: Ensure the user is not allowed to add an item longer than 20 characters.

1. Select the Title text field.
2. Enter a text longer than 20 characters.
3. Click Add Item button.

Expected Result: The Item is not added to the list and an error message is visible, "Title can be at most 20 characters."
