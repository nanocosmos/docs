## Generating JSDoc API Documentation

To properly generate your API-Documentation for docusaurus use the `jsdoc2md` tool with the corresponding template from the `jsdoc2md_templates` Folder.

To generate the documentation in Markdown-Format, type:

```bash
jsdoc2md --template <templatename.hbs> --files <source_file.js> > <output.md>
```

An Example for the `nanoplayer.js`:
```bash
jsdoc2md --template nanoplayerjs_template.hbs --files nanoplayer.js  > nanoplayer_api.md
```

Now copy the generated MD-File into the destination folder under `docs/productname` and replace the old one.

