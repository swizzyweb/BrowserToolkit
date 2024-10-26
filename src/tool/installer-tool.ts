// import { Axios } from "axios";
import { Tool,  IToolInstaller } from '@swizzyweb/browser-toolkit-interface';

// Let's get rid of the axios dependency for now...
// export interface RemoteToolInstallerProps {
//     axios: Axios;
// }


export interface InstallToolProps {
    url: string;
}

// export class RemoteToolInstaller implements Tool {
//     readonly axios: Axios;
//     readonly name: string = "InstallerTool";
//     constructor(props: RemoteToolInstallerProps) {
//         this.axios = props.axios;
//     }

//     async installTool(installToolProps: InstallToolProps) {
//         const result = await this.axios.get(installToolProps.url);
//         if(result.status != 200) {
//             console.error(`Install failed while retrieving tool with status code ${result.status}`);
//             return;
//         }

//         console.log('Retreived tool code successfully, embedding...');
//         this.embedScript(result.data);

//     }

//     private embedScript(scriptContent: string) {
//         const scriptElement = document.createElement('script');
//         scriptElement.textContent = scriptContent;
//         document.appendChild(scriptElement);

//     }
    
// }
//
/*
export interface IToolInstaller extends Tool {
	
};
*/
export class EasyRemoteToolInstaller implements IToolInstaller {
    readonly name: string = "InstallerTool";
    constructor(props: any) {

    }
    

    async installTool(installToolProps: InstallToolProps) {
        this.embedScript(installToolProps.url);
    }

    private embedScript(scriptUrl: string) {
        const scriptElement = document.createElement('script');
        scriptElement.src = scriptUrl;
        document.body.appendChild(scriptElement);

    }
    
}
