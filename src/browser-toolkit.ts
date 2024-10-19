import { IBrowserToolkit, Tool } from '@swizzyweb/browser-toolkit-interface';
import { BrowserLogger, ILogger } from '@swizzyweb/swizzy-common';
export interface BrowseToolkitProps {
	logger?: ILogger;
}

export type Collection<V> = { [key: string]: V };

export class BrowserToolkit implements IBrowserToolkit {
    logger: ILogger;
	tools: Collection<Tool>;
    constructor(props: BrowseToolkitProps) {
    	this.logger = props.logger??new BrowserLogger();
        this.tools = {};
    }

    addTool(tool: Tool): void {
        this.tools[tool.name] = tool;
    }

    getTool(toolName: string): Tool | undefined {
        return this.tools[toolName];
    }

	getTools(): Collection<Tool> {
		return this.tools;
	}

    getToolsNames(): string[] {
        let toolNames = [];
        for(let key in this.tools.keys) {
            toolNames.push(key);
        }

        return toolNames;
    }

    printTools(): void {
    	this.logger.info(`BrowserToolkitTools: ${JSON.stringify(this.tools)}`);
        //Object.entries(this.tools).forEach((entry) => this.logger.info(entry);
    }
}
