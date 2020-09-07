## Shopify Challenge: The Shoppies

- User can search through OMDB movie database by title, year, and production type (movie, series, episode)
- User can nominate a movie for the major event
- Nominations will show on the right side of the screen
- User can remove a nomination from their list
- User can only nominate 5 movies
- User's nominations are saved in browser in case they want to continue nominating movies later on

### Tech Stack:

- React
- Redux with Thunk
- antdesign

### Notes:

- This is a custom webpack/babel project, NOT created by create-react-app.
- 100% Hooks used in React, Redux, and antdesign; class components or Higher Order Components (HOC) are not used anywhere.
- Responsiveness is provided by antdesign's breakpoints.
- Search bar and Nominations side bar are both sticky. When user is scrolling through the search list, they sit still on the screen.
- Movie posters are not shown in smaller screens.
- Redux store is integrated into Redux DevTools Chrome Extension. State changes can be followed in the extension.
