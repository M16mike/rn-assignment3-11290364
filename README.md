# rn-assignment3-11290364
This README file describes the Category and Task components used within a mobile application.

1. Category Component

A Category represents a broad grouping of related tasks. It helps users organize their tasks into meaningful buckets.

Allows users to create new categories.
Allows users to edit existing categories (name, color, icon).
Provides a way to display a list of all categories.
Can be linked to tasks, allowing users to assign tasks to specific categories.

2. Task Component

A Task represents a specific action item that needs to be completed.

Allows users to create new tasks.
Allows users to edit existing tasks (title, description, due date, completed status, category).
Provides a way to display a list of tasks, filtered by various criteria (e.g., all tasks, completed tasks, tasks due today, tasks belonging to a specific category).
Allows users to mark tasks as completed or incomplete.
Relationships:

A Category can have many Tasks.
A Task can belong to one Category (or no category).
Implementation:

These components can be implemented in various ways depending on the chosen mobile development framework (e.g., Android, iOS). They can be represented as data models in object-oriented programming languages or stored in a database.

This file provides a basic overview of the Category and Task components. Specific details regarding implementation and functionalities will vary depending on the application's design and requirements.

