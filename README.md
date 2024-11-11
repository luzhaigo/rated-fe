## Website

You can access the website at [Rated-fe](https://rated-fe.vercel.app/).

## Completed Features

### Application Features

- The app uses Next.js for server-side rendering.
- Navigation is controlled through URL search parameters (e.g., `?page=2`), implementing server-side pagination for the table, with each page displaying 15 exchanges.
- CSS modules are used to style the app.
- The app displays the required columns in a styled table format.
- Clicking on a table row opens the respective exchange’s URL in a new browser tab.
- The table styling is inspired by the layout of [Rated Explorer](https://explorer.rated.network/?network=mainnet&view=pool&timeWindow=1d&page=1&pageSize=15&poolType=all).
- A dark theme is enabled by default, with theme-switching functionality that stores the theme preference in a cookie.
- The app’s UI follows Rated’s color palette and font choices.
- Responsive design ensures the table is viewable on mobile devices.
- If there are any errors while fetching data from the API, an appropriate error message is displayed to the user.
- React components are tested using `@testing-library/react` and `msw`.

### Additional Details

- The app is deployed on Vercel.
