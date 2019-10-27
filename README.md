# MSIS Project
This repository is for Team 14 DS final project in the MSIS program.

## Our Project: Build a system for Oconee County Fire Department

Website link: http://ec2-52-205-252-72.compute-1.amazonaws.com/index.html

Approach:
Our design is basically one many to many relationship which is split further into two 1:n relationship. We have three main entities: Members, Certifications and Enrollments

Our application will be able to add, edit and delete members, certifications as well as enrollments. Multiple certifications can be assigned to each members. We have also provided two reports: a) members with expired certification; b) list of members based on their radio number and station number.

Features:
1- We have added an auto-fill functionality on the form so that it would assist user to fill form faster
2- Certain form fields are "required" and would be notify user to fill in the details before submitting the transform
3- Tables are sortable
4- HTML pages are designed using bootstrap and external css
5- Application is deployed to the cloud
6- A member cannot be deleted if she/he is assigned with a certification. Similarly, in the case of certification, it cannot be deleted if a member is enrolled in it.
7- To avoid human error, we have provided dropdowns in the form to make it more intuitive as well.

Instructions:
1- For active status, we would use 1 or 0 as an input to define the validity.
2- The editable fields are build based on the relevance of the business situation. For example, a member could change address, radio number, station number and even position and hence these fields are provided in the form to edit member records.
3- To edit member/certification, please click on the record. It will automatically populate the existing details in the edit form.
