News App using React
This is a news application that displays the latest news from three countries: United States, Canada, and Australia. The project uses GNews API to collect data from each country's top headlines.

Technologies Used
The technologies used in this project include:

CSS
React
JSX
React-Router-Dom
Axios

Inspiration
The inspiration for this project came from my interest in current events and news. I wanted to create an application that can display news articles from multiple countries.

Approach Taken
The approach taken for this project was to use React's React-Router-Dom to enable multiple pages, allowing the user to navigate through different news articles and pages.

I created three states, one for each country, and used Axios to fetch the API endpoints. I set the state value to the API data, allowing me to pass the data to other pages. I used the useEffect hook to fetch the function containing the API data.

From there, I passed the state down to the list pages and mapped through the data to select the title and image properties. I also linked the list page to the page pages.

In the page pages, I used useParams to get the title parameter from the URL. I defined a new title by using the find() method on each datapoint array, which allows me to find the news article with the same title as the one in the URL. I created a Loaded() function to display the properties title, image, description, and content, and a loading function to display a "No news articles loading" message. Lastly, I used a ternary statement to display the data properties if the loaded state is true, and the loading message if it is not.

Installation Instructions and Link to Live Site
You can access the live site by clicking the following link:

https://marvelous-boba-e720ec.netlify.app

Stretch Goals/ Unsolved Problems
A search tab that allows users to search for news articles by country.
