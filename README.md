```markdown
# React Native Video App (Auro)

Auro is a cross-platform video sharing application built with React Native and Expo. It allows users to sign up, upload videos with prompts and thumbnails, browse trending and latest videos, search for content, and manage their profile. The app utilizes Appwrite for backend services and NativeWind (Tailwind CSS for React Native) for styling.

## Features

*   **Authentication:** Secure sign-up and sign-in functionality with email and password.
*   **Video Upload:**  Seamlessly upload videos, including a descriptive title, prompt, and eye-catching thumbnail.
*   **Video Feed:** Explore a curated feed showcasing all videos, categorized as trending or latest uploads for easy discovery.
*   **Search Functionality:** Efficiently search for videos by title, enabling users to quickly find the content they desire.
*   **User Profiles:**  Personalized profile pages where users can view their uploaded videos and account information.
*   **Responsive UI:** Modern and adaptable user interface designed with NativeWind (Tailwind CSS for React Native), ensuring optimal viewing across various devices.
*   **Appwrite Integration:** Leverages Appwrite for robust backend services, including authentication, storage, and database management.
*   **Media Selection:**  Utilizes `expo-image-picker` for easy and intuitive media selection from the device's gallery.
*   **Video Playback:** Employs `expo-av` for reliable and efficient video playback within the application.

## Installation

Follow these steps to get the application up and running on your local machine:

### Prerequisites

*   **Node.js & npm (or yarn):**  Ensure you have Node.js and npm (or yarn) installed. You can download them from [nodejs.org](https://nodejs.org/).
*   **Expo CLI:** Install the Expo CLI globally using npm:

    ```bash
    npm install -g expo-cli
    ```
    Or, using yarn:
    ```bash
    yarn global add expo-cli
    ```

### Steps

1.  **Clone the Repository:** Clone the repository to your local machine using Git:

    ```bash
    git clone <your-repo-url>
    cd react-native-video-app
    ```

2.  **Install Dependencies:** Install the required dependencies using npm or yarn:

    ```bash
    npm install
    ```
    Or, using yarn:
    ```bash
    yarn install
    ```

3.  **Start the Expo Development Server:** Start the Expo development server using npm or yarn:

    ```bash
    npm start
    ```
    Or, using yarn:
    ```bash
    yarn start
    ```

    This will open the Expo DevTools in your browser.

4.  **Run on your Device or Emulator:**
    *   **Android:**  Run the application on an Android device or emulator using:

        ```bash
        npm run android
        ```
        Or, using yarn:

        ```bash
        yarn android
        ```

    *   **iOS:** Run the application on an iOS device or emulator (requires macOS and Xcode) using:

        ```bash
        npm run ios
        ```
        Or, using yarn:

        ```bash
        yarn ios
        ```
    *   **Web:** Run the application in a web browser using:

        ```bash
        npm run web
        ```
        Or, using yarn:

        ```bash
        yarn web
        ```

## Usage

Once the app is running, you can:

*   **Sign up or sign in:** Create a new account or log in with existing credentials.
*   **Browse the video feed:**  Explore the "Home" screen for a curated selection of videos.
*   **Upload a video:**  Navigate to the "Create" screen to upload your own videos, adding a title, prompt, and thumbnail.
*   **Search for videos:** Use the search bar to find videos based on their title.
*   **Manage your profile:** View your uploaded videos and profile information on the "Profile" screen.

## Configuration

### Appwrite Setup

The application is pre-configured to connect to the Appwrite Cloud.  To use your own Appwrite instance, follow these steps:

1.  **Create an Appwrite Project:** Create a new project in your Appwrite console.
2.  **Update Appwrite Credentials:**  Locate the `lib/appwrite.js` file. This file contains the Appwrite configuration.
3.  **Modify the Configuration:** Update the `ENDPOINT`, `PROJECT_ID`, and any other relevant settings in `lib/appwrite.js` with your Appwrite project credentials.

    ```javascript
    // lib/appwrite.js
    import { Client, Account, Databases, Storage, Functions } from 'appwrite';

    const client = new Client();

    client
        .setEndpoint('YOUR_APPWRITE_ENDPOINT') // Replace with your Appwrite endpoint (e.g., 'https://cloud.appwrite.io/v1')
        .setProject('YOUR_PROJECT_ID'); // Replace with your Appwrite project ID

    export const account = new Account(client);
    export const databases = new Databases(client);
    export const storage = new Storage(client);
    export const functions = new Functions(client);
    export { ID } from 'appwrite';
    ```

**Important:** Ensure your Appwrite project has the necessary databases, collections, and storage buckets configured to match the application's requirements. Refer to the Appwrite documentation for detailed instructions.

### Environment Variables (Optional)

You can use environment variables for sensitive information or to configure the app differently for various environments. You will need to install `react-native-dotenv`

```bash
npm install react-native-dotenv
```

Create a `.env` file at the root of your project and add your environment variables:

```
APPWRITE_ENDPOINT=YOUR_APPWRITE_ENDPOINT
APPWRITE_PROJECT_ID=YOUR_APPWRITE_PROJECT_ID
```

Update your `appwrite.js` file to read these environment variables

```javascript
// lib/appwrite.js
import { Client, Account, Databases, Storage, Functions } from 'appwrite';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from '@env'; // Import variables

const client = new Client();

client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export { ID } from 'appwrite';
```

You will also need to update your `metro.config.js` to recognize the `.env` file

```javascript
// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const { mergeConfig } = require('@react-native/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const { resolver: { assetExts } } = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer')
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg']
  }
};

module.exports = mergeConfig(defaultConfig, {
  resolver: {
    assetExts: [...assetExts, 'cjs']
  }
}, config);

```

## Folder Structure

```
react-native-video-app/
├── app/                 # Main app screens and navigation (using expo-router)
├── components/        # Reusable UI components
├── constants/         # Static assets and constants (e.g., colors, sizes)
├── context/           # Global state management using React Context
├── lib/               # Appwrite integration (client initialization, hooks)
├── assets/            # Images, icons, fonts
├── .gitignore         # Specifies intentionally untracked files that Git should ignore
├── app.json           # Expo app configuration
├── babel.config.js    # Babel configuration
├── metro.config.js    # Metro bundler configuration
├── package.json       # Project dependencies and scripts
├── README.md          # This file
└── tailwind.config.js # Tailwind CSS configuration
```

## Scripts

These scripts are defined in the `package.json` file for common development tasks:

*   `npm start` or `yarn start`: Starts the Expo development server.
*   `npm run android` or `yarn android`: Runs the application on an Android device or emulator.
*   `npm run ios` or `yarn ios`: Runs the application on an iOS device or emulator.
*   `npm run web` or `yarn web`: Runs the application in a web browser.

## Customization

*   **Styling:** The application utilizes NativeWind, which allows you to use Tailwind CSS classes directly within your React Native components. You can customize the styling by modifying the `tailwind.config.js` file.  Refer to the Tailwind CSS documentation for available classes and configuration options.
*   **Fonts:** The application loads the Poppins font family.  You can find the font definition in the `app/_layout.jsx` file.  To change the font, replace the Poppins font import and usage with your desired font family.
*   **Theming:** You can easily implement theming using React Context. Create a `ThemeContext` and use it to toggle between light and dark themes. Customize the theme colors in your `tailwind.config.js` file and reference them in your components using NativeWind.

## Contributing

We welcome contributions to the React Native Video App!  To contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes and write tests.
4.  Submit a pull request with a clear description of your changes.

Please adhere to the project's coding style and conventions.  All contributions will be reviewed by the project maintainers.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```