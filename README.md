# 🎬 Movies App

A responsive movie browser built with **React + TypeScript** using **The Movie Database (TMDb) API**.  
Users can explore _Now Playing_ and _Top Rated_ movies, search for specific titles, and view detailed movie information — all with asynchronous image loading and a polished UI built entirely with SCSS (no UI libraries).

---

## 🌐 Live Demo

➡️ **[https://movies-app-git-main-ngoctrungbes-projects.vercel.app/](https://movies-app-git-main-ngoctrungbes-projects.vercel.app/)**

> Note: If the above link does not work, you may also try the previous temporary deployment:  
> [https://movies-app-chi-lac.vercel.app/](https://movies-app-chi-lac.vercel.app/)

---

## ✨ Features & User Stories

### ✅ Required

- [x] User can view a list of movies currently playing in theaters.
- [x] Poster images load asynchronously.
- [x] Add a tab bar for **Now Playing** and **Top Rated** movies.
- [ ] Add a search bar.
- [x] User can view movie details by tapping on a cell.
- [x] User sees a loading state while waiting for API response.
- [x] User sees an error message when there is a network error.
- [x] Simple responsive layout.

### 🌟 Optional

- [x] Implement segmented control to switch between **list view** and **grid view**.
- [ ] Fade-in animation for images.
- [x] Lazy load movie posters.
- [x] Custom highlight and selection effects for movie cards.
- [ ] Skeleton loading for smoother UX.
- [x] Enhanced responsiveness for mobile, tablet, and desktop.

### 🚀 Additional Features

- 🌙 **Dark mode** toggle for better viewing experience.

---

## 🛠️ Tech Stack

- **React 18** + **TypeScript**
- **Vite** build tool
- **SCSS** for custom styling (no UI frameworks)
- **TMDb API** for movie data:
  - GET https://api.themoviedb.org/3/movie/now_playing
  - GET https://api.themoviedb.org/3/movie/top_related
  - GET https://api.themoviedb.org/3/movie/{movie_id}
  - GET https://api.themoviedb.org/3/search/movie

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone git@github.com:NgocTrungBe/movies-app.git
cd movies-app

# 2. Install dependencies
npm install

# 3. Create a .env file and add your TMDb read access token
# (get one from https://www.themoviedb.org/settings/api)
VITE_TMDB_ACCESS_TOKEN=your_read_access_token

# 4. Start the development server
npm run dev

# 5. Open your browser at:
http://localhost:5173
```

📦 Repository

GitHub: https://github.com/NgocTrungBe/movies-app

📜 License

Copyright [2016] [Ngọc Trung Bế]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
