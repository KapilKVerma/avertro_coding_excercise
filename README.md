# avertro_coding_exercise

Coding Exercise Description

The challenge of this exercise is to create a web application to create 'Strategic Business Objectives' using reactjs framework and necessary libraries/packages.

Requirements:

- To create the UI of the applicaton with the given Figma design.
- Create strategic business objectives form with objective title, start date, end date and key measures.
- A user can only add up to 3 objectives with the form.
- Each objective in the form can have maximum 3 key measures.
- Valid the field for input data.
- End date should be after the start date of an objective.
- Host the application and upload the code to a git repository

Solution:

- Libraries/Packages used:

        - bootstrap and react-boostrap : For template design
        - formik and yup: For form validations
        - uuid: To generate unique id
        - react-icons: For icons
        - react-datepicker: To create custom date form field

- Development process:

        - Created new react app using npx create-react-app
        - Created header using avertro logo
        - Created body containing 'Set security strategy'
        - Created custom 'Mission & Vision' and 'Strategic Business Objectives' tabs
        - Created custom body for each tab
        - Structured the 'Stratgic Business Objectives' body  with 'Stratgic Business Objectives'
          and 'New Objective Form' components.
        - 'Stratgic Business Objectives' body shows the list of all the objective, and each
          objective tile consists the option to delete the objective.
        - Created the 'New Objectives Form' consists with title, start date, end date and key
          measures fields.
        - 'New Objectives Form' fuctionalities:
                - Allows user to add up to 3 objectives at once dynamically.
                - Each objective can have upto 3 key measures dynamically.
        - Created custom alert system to show pop over using modals for feedback messages
