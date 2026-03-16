import { APP_VERSION } from "./app";
import { GITHUB_URL } from "./links";

/**
 * Lien de téléchargement de l'APK Android via GitHub Releases.
 * Construit automatiquement à partir de la version actuelle de l'app.
 *
 * Convention attendue côté releases :
 * - Tag: v{APP_VERSION}
 * - Fichier: love4you-v{APP_VERSION}.apk
 */
export const ANDROID_APK_URL = `${GITHUB_URL}/releases/download/v${APP_VERSION}/love4you-v${APP_VERSION}.apk`;

