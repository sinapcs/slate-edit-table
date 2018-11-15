// @flow

import TablePosition from './TablePosition';
import type Options from '../options';

/**
 * Are the selection start and end outside a table.
 */
function isSelectionOutOfTable(opts: Options, editor): boolean {
    const {value} = editor;
    const {selection} = value;

    if (!selection.start.key) return false;

    const startPosition = TablePosition.create(opts, value.document, selection.start.key);
    const endPosition = TablePosition.create(opts, value.document, selection.end.key);

    // Only handle events in tables
    return !startPosition.isInTable() && !endPosition.isInTable();
}

export default isSelectionOutOfTable;
