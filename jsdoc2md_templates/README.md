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



> > **NOTE:**
> >
> > In case you get the following Error: `"JSDOC_ERROR: The command-line option "template" requires a value."`, execute the command **without** the `--template <templatename.hbs>` option. Try again **with** the `--template <templatename.hbs>` option and it should work as expected.