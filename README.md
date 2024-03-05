# JustEat Restaurant Finder 

### TABLE OF CONTENTS :
* Installation Guide
* Diagrams
* Any improvements I'd make to my solution

## Installation Guide 



### Server Side API instructions
The server-side api can be found here:
https://github.com/Yasmin-H/_RestaurantFinder_BackEnd
<em>more explanation in the repo but I decided to set up a proxy server on my backend that forwards requests to the JustEat API.</em>

* Software needed to run the API: 
	* IntelliJ and Java (version 17)
	* Postman

* Installation instructions:
	* Git clone from the server side API Repo.
	* You can type in `http://localhost:8080/restaurants/EC4M7RF
` in your browser or Postman, for example, to see the  data where'EC4M7RF' can be replaced with any UK Postcode. More details can be found in the backend repo
	

## Client-side Instructions 
The client-side server can be obtained with the following information:

* Ensure that the following software	has been downloaded:
   * Visual Studio Code

* Libraries installation
    * npm i (installs basic node libraries)
    

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Component Diagram 

![Component Diagram ](https://github.com/Yasmin-H/Restaurant_Finder/blob/ba62c9f769804311448d836641aa30295805bb00/src/Restaurant_Finder_Diagram.png)



## Improvements  

* Investigating the API in more detail to see if I could fetch the API directly from the browser (URL)
* Investing more time in the UI (User Interface)  - making it more visually appealing, and responsive and incorporating media queries
* Sort the restaurants by rating or how close they are to the Postcode
