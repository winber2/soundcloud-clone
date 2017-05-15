## Component Hierarchy

**Logged In Home Page**
  - NavigationContainer
  - BodyContainer
    + SideBarContainer
      + FollowSuggestionContainer
      + SongSuggestionContainer
    + SongFeedContainer
      + SongContainer
    + DiscoverContainer
  - SongPlayerContainer

**Home Page**
  - HomePageInfoContainer
    + SignUpForm
    + CreateAccountForm
    + HomePageDetail
  - TrendingSongsContainer
    + SearchBar
    + SongContainer

**Upload Image**
  - NavigationContainer
  - BodyContainer
    + UploadImageContainer

**Profile Page**
  - NavigationContainer
  - BodyContainer
    + ProfileHeaderContainer
    + TracksContainer
      - SongContainer
    + PlaylistsContainer
      - PlaylistInfoContainer
    + RepostsContainer
      - SongContainer
    + SideBarContainer
      - SideBarDescription
      - SongSuggestionContainer

**Song Page**
  - NavigationContainer
  - BodyContainer
    + SongContentContainer
    + CommentsListContainer
      - ArtistInfo
      - Comments
    + SideBarContainer
      - SideBarDescription
      - SongSuggestionContainer

**Search**
  - NavigationContainer
  - BodyContainer
    + SearchContainer
      - SearchSidebar
      - SongContainer
      - PlaylistContainer
      - ProfileContainer

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Home Page" |
| "/stream" | "Logged In Home Page > SongFeedContainer" |
| "/discover" | "Logged In Home Page > DiscoverContainer" |
| "/users/songs/:songId" | "Song Page" |
| "/users/:userId/tracks" | "Profile Page > TracksContainer" |
| "/users/:userId/playlists" | "Profile Page > PlaylistsInfoContainer" |
| "/users/:userId/reposts" | "Profile Page > RepostsContainer" |
| "/upload" | "Upload Image" |
| "/search" | "Search" |
