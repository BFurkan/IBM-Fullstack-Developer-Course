# Budget Allocation Application

## Overview
Welcome to the Budget Allocation Application repository. This project is a front-end application developed.

## Features
- **Budget Allocation Validation:**
  - Accepts only numbers in the allocation field.
  - The number does not exceed the remaining budget.

- **Editable Budget Value:**
  - Editable budget field with increasing and decreasing value by 10.
  - Does not allow an amount lower than the amount spent so far.
  - Upper limit set to 20,000.

- **Dropdown to Change Currency:**
  - Currency label in the appropriate place.
  - Editable currency dropdown list.
  - Four values: $ Dollar, 室, ⯬॥ in the dropdown list.
  - Stylized dropdown list.

- **Currency Prefix:**
  - Added to the Change allocation textbox.
  - Added to the budget value textbox.

- **Change Event of Currency Dropdown:**
  - On the change of the dropdown value, all currency representations on the screen change.

- **Decrease and Increase Buttons:**
  - Decrease button for all departments in the allocation, beside increase by 10.
  - On click, the value decreases by 10.
  - Stylized + and - buttons.

## Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm start`
