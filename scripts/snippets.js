import * as fs from 'fs'

const DIRS = ['src/routes/find-pet', 'src/routes/await', 'src/routes/post', 'src/routes/ssr']
const SNIPPET_PLACEHOLDER = '<div class="code-snippet" />'
const PET_LIST_NAME = 'PetsList.svelte'
const PET_LIST_PATH = `src/components/${PET_LIST_NAME}`

function prepareSvelteSource(content) {
    return content
        .replace(SNIPPET_PLACEHOLDER, '')
        .replace('</script>', '<\\/script>')
        .replace(/<style[\s\S]+<\/style>/, '')
}

const petListContent = prepareSvelteSource(fs.readFileSync(PET_LIST_PATH, 'utf8'))

for (let dirName of DIRS) {
    const pageSvelte = `${dirName}/+page.svelte`
    const pageServer = `${dirName}/+page.server.ts`

    let serverContent = ''
    if (fs.existsSync(pageServer)) {
        serverContent = fs.readFileSync(pageServer, 'utf8')
    }

    const content = fs.readFileSync(pageSvelte, 'utf8')
    const snippetPlaceholder = '<div class="code-snippet" />'
    const sourceCode = prepareSvelteSource(content)
    const hasPetList = sourceCode.indexOf(PET_LIST_NAME) > -1

    let extraJS = '<script lang="ts">\nconst pageCode = `\n' + sourceCode + '`\n'
    if (serverContent !== '') {
        extraJS += 'const serverCode = `\n' + serverContent + '`\n'
    }
    if (hasPetList) {
        extraJS += 'const petListCode = `\n' + petListContent + '`\n'
    }
    extraJS += "import CodeSnippet from '$components/CodeSnippet.svelte';\n"

    let prop = `[{ path: "${pageSvelte}", code: pageCode`
    if (serverContent !== '') {
        prop += `}, { path: "${pageServer}", code: serverCode`
    }
    if (hasPetList) {
        prop += `}, { path: "${PET_LIST_PATH}", code: petListCode`
    }
    prop += '}]'

    const newContent = content
        .replace('<script lang="ts">', extraJS)
        .replace(snippetPlaceholder, '<CodeSnippet snippets={' + prop + '} />')

    console.log(`Tweaking ${pageSvelte}`)
    fs.writeFileSync(pageSvelte, newContent)
}
