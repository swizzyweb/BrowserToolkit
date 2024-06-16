import { IBrowserToolkit, Tool } from 'browser-toolkit-interface';

export interface BrowseToolkitProps {

}

export class BrowserToolkit implements IBrowserToolkit {
    tools: Map<string, Tool>;
    constructor(props: BrowseToolkitProps) {
        this.tools = new Map<string, Tool>();
    }

    addTool(tool: Tool) {
        this.tools.set(tool.name, tool);
    }

    getTool(toolName: string): Tool | undefined {
        return this.tools.get(toolName);
    }

    getToolsNames() {
        let toolNames = [];
        for(let key in this.tools.keys) {
            toolNames.push(key);
        }

        return toolNames;
    }

    printTools() {
        this.getToolsNames().forEach((name) => console.log(name));
    }
}