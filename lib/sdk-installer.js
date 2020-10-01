"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.installAndroidSdk = void 0;
const exec = __importStar(require("@actions/exec"));
const DEFAULT_PLATFORM_VERSION = 29;
const DEFAULT_BUILD_TOOLS_VERSION = '29.0.2';
function installAndroidSdk(platform, buildTools) {
    return __awaiter(this, void 0, void 0, function* () {
        const sdkmanager = `${process.env.ANDROID_HOME}/tools/bin/sdkmanager`;
        const platformVersion = platform || DEFAULT_PLATFORM_VERSION;
        const buildToolsVersion = buildTools || DEFAULT_BUILD_TOOLS_VERSION;
        console.log('Installing build tools, platform tools, and platform.');
        console.log(process.env);
        yield exec.exec(`ls -al /usr/local/lib/android/sdk/platform-tools`);
        // sdkmanager missing on default GitHub Actions build machines
        //await exec.exec(`bash -c \\"${sdkmanager} --install 'build-tools;${buildToolsVersion}' platform-tools 'platforms;android-${platformVersion}' > /dev/null"`);
    });
}
exports.installAndroidSdk = installAndroidSdk;
