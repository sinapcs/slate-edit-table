import expect from 'expect';

export default function(editor) {
  const blockStart = editor.value.document.getDescendant('anchor');
  editor.moveToEndOfNode(blockStart);

  editor.run('onKeyDown', {
    key: 'Enter',
    preventDefault() {},
    stopPropagation() {},
  });

  expect(editor.value.startBlock.type).toBe('paragraph');

  return editor;
}
