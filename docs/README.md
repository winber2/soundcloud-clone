# Stratosphere

[Heroku link][heroku] **Note:** This should be a link to your production site

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com/b/ALgfuX0Q/freshernote

## Minimum Viable Product

Stratosphere is a web application inspired by Soundcloud built using Ruby on Rails
and React/Redux. At its core, it will be a music sharing site, where users can
upload, favorite, and share songs with a world-wide audience. This particular
project will aim to satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Songs
- [ ] Playlists
- [ ] Favorites
- [ ] Comments
- [ ] Followers
- [ ] Infinite Scroll
- [ ] Production README [sample](docs/production_readme.md)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day)

**Objective:** Functioning rails project with front-end Authentication.
Have a basic functioning home page.

### Phase 2: Songs Model, API, and components (1 day)

**Objective:** Songs can be created, read, edited and destroyed through
the API. Have a basic functioning logged-in home page.

### Phase 3: Playing Songs and Song Page (2 days)

**Objective:** Songs will play on a progress bar continuously and can be
manipulated by player controls. Songs will have their own song show page.

### Phase 4: Comments (1 day)

**Objective:** Songs will have many comments that can be created, edited, or deleted through an API

### Phase 5: User Pages (2 day)

**Objective:** Users will have their own profile pages which can be

### Phase 6: Add Wave Forms and Images / Styling (1 day)

**Objective:** Add wave forms and images to songs container. Style to a
semi-professional level.

### Bonus Features

### Phase 7: Playlists (1 days)

**Objective:** Songs can belong to many Playlists that can be created, read, edited and destroyed through the API.

### Phase 8: Infinite scroll for songs (1 day)

**Objective:** Add infinite scroll to songs

### Phase 9: Favorites and Followers (1 days)

**Objective:** Add favorites functionality for songs, and follower
functionality for artists.
