import type { ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.codebysuraj.unitflow.dev";
  }

  if (IS_PREVIEW) {
    return "com.codebysuraj.unitflow.preview";
  }

  return "com.codebysuraj.unitflow";
};

const getAppName = () => {
  if (IS_DEV) {
    return "UnitFlow (Dev)";
  }

  if (IS_PREVIEW) {
    return "UnitFlow (Preview)";
  }

  return "UnitFlow";
};

export default {
  expo: {
    name: getAppName(),
    slug: "unitflow",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "expoapplicationservice",
    userInterfaceStyle: "dark",
    ios: {
      icon: "./assets/expo.icon",
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      predictiveBackGestureEnabled: false,
      package: getUniqueIdentifier(),
    },
    web: {
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          backgroundColor: "#09090b",
          android: {
            image: "./assets/images/splash-icon.png",
            imageWidth: 76,
          },
        },
      ],
      "expo-sqlite",
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
    extra: {
      router: {},
      eas: {
        projectId: "cd4af5da-4e82-489d-b80c-575676a5b7a6",
      },
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    updates: {
      url: "https://u.expo.dev/cd4af5da-4e82-489d-b80c-575676a5b7a6",
    },
  } satisfies ExpoConfig,
};