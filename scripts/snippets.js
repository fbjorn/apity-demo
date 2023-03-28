// const fs = require('fs');
import * as fs from 'fs';

const DIRS = ['src/routes/ssr'];

for (let dirName of DIRS) {
	const files = fs.readdirSync(dirName);
	for (let f of files) {
		if (!f.startsWith('+page.sve')) {
			continue;
		}
		const path = `${dirName}/${f}`;
		const content = fs.readFileSync(path, 'utf8');
		const snippetPlaceholder = '<div class="code-snippet"/>';
		const sourceCode = content.replace(snippetPlaceholder, '').replace('</script>', '<\\/script>');

		const extraImport = "import CodeSnippet from '$components/CodeSnippet.svelte';\n";
		const extraJS = '<script lang="ts">\nconst code = `\n' + sourceCode + '`\n' + extraImport;
		const newContent = content
			.replace('<script lang="ts">', extraJS)
			.replace(snippetPlaceholder, '<CodeSnippet {code} />');
		console.log(newContent);

		fs.writeFileSync(path, newContent);
	}
}
