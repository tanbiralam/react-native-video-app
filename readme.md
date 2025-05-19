# Auro: React Native Video Sharing App

Auro is a cross-platform video sharing app built with React Native and Expo. Users can sign up, upload videos with prompts and thumbnails, browse trending and latest videos, search for content, and manage their profile. The app uses Appwrite for backend services and NativeWind (Tailwind CSS for React Native) for styling.

## Features

- **Authentication**: Sign up and sign in with email and password
- **Video Upload**: Upload videos with a title, prompt, and thumbnail
- **Feed**: Browse all videos and trending/latest uploads
- **Search**: Search for videos by title
- **Profile**: View your uploaded videos and profile info
- **Responsive UI**: Styled with NativeWind (Tailwind CSS)
- **Appwrite Integration**: Handles authentication, storage, and database

## Screens

- **Home**: Personalized feed, trending/latest videos, search bar
- **Create**: Upload new videos with thumbnail and prompt
- **Profile**: User info, uploaded videos, logout
- **Bookmark**: (Placeholder for future feature)
- **Search**: Search results for videos by title
- **Auth**: Sign In and Sign Up screens

## Tech Stack

- **React Native** (with Expo)
- **Appwrite** (cloud backend)
- **NativeWind** (Tailwind CSS for React Native)
- **expo-av** (video playback)
- **expo-image-picker** (media selection)
- **expo-router** (navigation)

## Getting Started

### Prerequisites

- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repo:
   ```bash
   git clone <repo-url>
   cd react-native-video-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Expo development server:
   ```bash
   npm start
   # or
   expo start
   ```
4. Run on your device:
   - Android: `npm run android`
   - iOS: `npm run ios`
   - Web: `npm run web`

### Appwrite Setup

- The app is pre-configured for Appwrite Cloud. To use your own backend, update the `lib/appwrite.js` config with your Appwrite project credentials.

## Folder Structure

- `app/` - Main app screens and navigation
- `components/` - Reusable UI components
- `constants/` - Static assets and constants
- `context/` - Global state management
- `lib/` - Appwrite integration and hooks
- `assets/` - Images, icons, fonts

## Customization

- **Styling**: Uses Tailwind classes via NativeWind. See `tailwind.config.js` for theme customization.
- **Fonts**: Poppins font family loaded in `app/_layout.jsx`.

## Scripts

- `npm start` - Start Expo server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run in browser

## License

MIT
