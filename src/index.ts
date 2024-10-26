import { BrowserToolkit } from "./browser-toolkit";
import { EasyRemoteToolInstaller } from "./tool/installer-tool";
// import { SpeechToolInstaller } from "./tool/speech-tool";

const toolkit = new BrowserToolkit({});

// SpeechToolInstaller.install(toolkit);

(window as any).BrowserToolkit = toolkit;

toolkit.addTool(new EasyRemoteToolInstaller({}));