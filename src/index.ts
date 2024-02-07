import extract from "extract-zip";
import { join } from "path";

export function hello(): string {
    return "Hello, world!";
};

export async function scaffold(projectLocation: string): Promise<void> {
    await extract(join("resources", "testcontent.zip"), { dir: projectLocation });
} 