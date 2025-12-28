acode.registerCommand({
  name: "PHP Prettiers: Format",
  exec: () => {
    const editor = acode.getActiveEditor();
    if (!editor) return;

    let code = editor.getValue();

    code = code
      .replace(/\r\n/g, "\n")
      .replace(/\s*{\s*/g, " {\n")
      .replace(/\s*}\s*/g, "\n}\n")
      .replace(/;\s*/g, ";\n")
      .replace(/\n{2,}/g, "\n")
      .replace(/^\s+/gm, "")
      .replace(/\t/g, "  ");

    editor.setValue(code.trim());
  }
});
