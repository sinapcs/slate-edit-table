import expect from 'expect';

export default function(plugin, editor) {
  const cursorBlock = editor.value.document.getDescendant('anchor');
  editor.moveToRangeOfNode(cursorBlock);

  const initialPosition = editor.getPosition();

  editor.run('onKeyDown', {
    key: 'Tab',
    preventDefault() {},
    stopPropagation() {},
  });

  const position = editor.getPosition();

  // Same row
  expect(position.getRowIndex()).toEqual(initialPosition.getRowIndex());
  // Moved to next column
  expect(position.getColumnIndex()).toEqual(
    initialPosition.getColumnIndex() + 1
  );

  return editor;
}
