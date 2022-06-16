## View Cat Breeds
A React web application to fetch all the cat breeds from: https://api.thecatapi.com/v1/breeds of Cat API and functionalities of this app are below:
	a. Display fetched Cats with pagination.
	b. Appropriate loader is implemented while loading breeds.
	c. Search Breeds by any property on search field.
	d. Sort fetched cats on a given page.
## Project Status
All the mentioned functionalities are complete

Framework Used:
	1. React JS, Axios 
Pre requisites:
	1.NPM/Node JS environment
	
## Installation and Setup Instructions

Source code URL: https://github.com/LickyHoney/CatAPI.git

###Steps to run it locally:

  1.Clone down this repository. You will need git, `node` and `npm` installed globally on your machine.  
	git clone https://github.com/LickyHoney/CatAPI.git
  2.Get into folder
	cd CatAPI
  3.Installation:
	npm install`
  4.Start the application.
	npm start
  5.To Visit App:
	http://localhost:3000

## View Demo
URL:  https://lucent-medovik-83bfbb.netlify.app/


#### Navigate to pages:
 
Click page 4
 

## Reflection
- This weeklong assignment is to review my development capabilities. Project goals included using technologies learned up until this point and familiarizing myself with documentation for full stack development.  
We have used Visual studio code and tested on chrome browser on a Mac laptop. We have deployed using a free hosting service on Netlify. Final app url link<>
This app featured to display cat breeds from Cat API. I started this process by using the `create-react-app` boilerplate and `redux`. Consumed Cat API breeds collection using Axios library and used CSS to format the gallery-based UI
The features were straight forward. API consumption was smooth. But API lacks sorting functionality. So, we sorted the data in frontend on individual page than sending a sort parameter in API (which is a general practice). We have displayed cat breed images in a gallery of cards. It was challenging to shrink the images to a card size which resulted in larger cards, and we need to zoom out in browser settings for a better view. With more time and material better UI could be possible.
