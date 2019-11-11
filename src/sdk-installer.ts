import * as exec from '@actions/exec';

const DEFAULT_PLATFORM_VERSION = 29;
const DEFAULT_BUILD_TOOLS_VERSION = '29.0.2';

export async function installAndroidSdk(platform: number, buildTools: string): Promise<void> {
  const sdkmanager = `${process.env.ANDROID_HOME}/tools/bin/sdkmanager`;
  const platformVersion = platform || DEFAULT_PLATFORM_VERSION;
  const buildToolsVersion = buildTools || DEFAULT_BUILD_TOOLS_VERSION;
  console.log('Installing build tools, platform tools, and platform.');
  console.log(process.env);
  await exec.exec(`ls -al /usr/local/lib/android/sdk/platform-tools`);
  // sdkmanager missing on default GitHub Actions build machines
  //await exec.exec(`bash -c \\"${sdkmanager} --install 'build-tools;${buildToolsVersion}' platform-tools 'platforms;android-${platformVersion}' > /dev/null"`);
}
