# Carousel Demo App

# React Native Carousel Demo App

![home-screen-android](https://github.com/janaka120/Carousel-demo-app/blob/splash-screen/src/assets/images/screenshots/home-screen-android.png)
![home-screen-ios](https://github.com/janaka120/Carousel-demo-app/blob/splash-screen/src/assets/images/screenshots/home-screen-ios.png)

## Getting started

1. Install React Native as described at [https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)
2. Clone this repository
3. Run `npm install` or `yarn`, all required components will be installed automatically

   ### iOS

   1. Run `pod install` from `news-feed/ios` folder
   2. Start XCode and open generated `.xcworkspace`

   ### Android

   no steps required

4. It is recommended to run `npx react-native start` command from root project directory.
5. Run your project from XCode (`Cmd+R`) for iOS, or use `npx react-native run-android` to run your project on Android.

## Demo project dependencies

The demo project uses the following third-party dependencies:

- "react-navigation" - to support navigation
- "axios" - Promise based HTTP client
- "redux toolkit" - managing application state
- "react-native-bootsplash" - implement splash screen during app startup

## Sample Images

Loading images realtime by using [Pixabay REST API](https://pixabay.com/api/docs/). Images are randomly display in the Carousel.
