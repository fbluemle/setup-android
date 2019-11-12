import * as core from '@actions/core';
import {installAndroidSdk} from './sdk-installer';
import * as exec from '@actions/exec';

async function run() {
  try {
    const platformInput = core.getInput('platform', {required: true});
    const platform = Number(platformInput);
    console.log(`Platform level: ${platform}`);

    const buildToolsInput = core.getInput('build-tools');
    const buildTools = String(buildToolsInput);
    console.log(`Build tools: ${buildTools}`);

    const script = core.getInput('script');

    console.log('Installing Android SDK...');
    await installAndroidSdk(platform, buildTools);

    console.log('Executing script...');
    await exec.exec(`${script}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
