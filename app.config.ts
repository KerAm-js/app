import { type ExpoConfig } from "@expo/config-types";
import { withAppDelegate, type ConfigPlugin } from "expo/config-plugins";

const config: ExpoConfig = {
  name: "my-app",
  slug: "my-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  plugins: [
    [
      "expo-camera",
      {
        cameraPermission: "Allow $(Duna) to access your camera.",
      },
    ],
    [
      "expo-image-picker",
      {
        photosPermission:
          "The app accesses your photos to let you share them with your friends.",
      },
    ],
  ],
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    bundleIdentifier: "com.amirkerimov.duna",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  extra: {
    mapKitApiKey: "dd0d1820-4d5e-4610-843e-29edc36c5352",
  },
};

const withYandexMaps: ConfigPlugin = (config) => {
  return withAppDelegate(config, async (config) => {
    const appDelegate = config.modResults;

    // Add import
    // if (
    //   !appDelegate.contents.includes(
    //     "#import <YandexMapsMobile/YMKMapKitFactory.h>"
    //   )
    // ) {
    //   // Replace the first line with the intercom import
    //   appDelegate.contents = appDelegate.contents.replace(
    //     /#import "AppDelegate.h"/g,
    //     `#import "AppDelegate.h"\n#import <YandexMapsMobile/YMKMapKitFactory.h>`
    //   );
    // }

    // const mapKitMethodInvocations = [
    //   `[YMKMapKit setApiKey:@"${config.extra?.mapKitApiKey}"];`,
    //   `[YMKMapKit setLocale:@"ru_RU"];`,
    //   `[YMKMapKit mapKit];`,
    // ]
    //   .map((line) => `\t${line}`)
    //   .join("\n");

    // Add invocation
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    // if (!appDelegate.contents.includes(mapKitMethodInvocations)) {
    //   appDelegate.contents = appDelegate.contents.replace(
    //     /\s+return YES;/g,
    //     `\n\n${mapKitMethodInvocations}\n\n\treturn YES;`
    //   );
    // }

    return config;
  });
};

export default withYandexMaps(config);
