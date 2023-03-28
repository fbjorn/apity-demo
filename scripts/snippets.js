import * as fs from 'fs';

const DIRS = ['src/routes/find-pet', 'src/routes/await', 'src/routes/post', 'src/routes/ssr'];

for (let dirName of DIRS) {
	const pageSvelte = `${dirName}/+page.svelte`;
	const pageServer = `${dirName}/+page.server.ts`;

	let serverContent = '';
	if (fs.existsSync(pageServer)) {
		serverContent = fs.readFileSync(pageServer, 'utf8');
	}

	const content = fs.readFileSync(pageSvelte, 'utf8');
	const snippetPlaceholder = '<div class="code-snippet" />';
	const sourceCode = content
		.replace(snippetPlaceholder, '')
		.replace('</script>', '<\\/script>')
		.replace(/<style[\s\S]+<\/style>/, '');

	let extraJS = '<script lang="ts">\nconst pageCode = `\n' + sourceCode + '`\n';
	if (serverContent !== '') {
		extraJS += 'const serverCode = `\n' + serverContent + '`\n';
	}
	extraJS += "import CodeSnippet from '$components/CodeSnippet.svelte';\n";

	let prop = `[{ path: "${pageSvelte}", code: pageCode`;
	if (serverContent !== '') {
		prop += `}, { path: "${pageServer}", code: serverCode`;
	}
	prop += '}]';

	const newContent = content
		.replace('<script lang="ts">', extraJS)
		.replace(snippetPlaceholder, '<CodeSnippet snippets={' + prop + '} />');

	console.log(`Tweaking ${pageSvelte}`);
	fs.writeFileSync(pageSvelte, newContent);
}
