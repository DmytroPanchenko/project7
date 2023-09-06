/*
 * Table Block
 * Recreate a table
 * https://www.hlx.live/developer/block-collection/table
 */

function buildCell(rowIndex, colIndex) {
  const cell = colIndex ? document.createElement('td') : document.createElement('th');
  //const cell = document.createElement('td');
  if (!colIndex) cell.setAttribute('scope', 'col');
  return cell;
}

export default async function decorate(block) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  table.append(/*thead,*/ tbody);
  [...block.children].forEach((child, i) => {
    const row = document.createElement('tr');
    tbody.append(row);
    //if (i) tbody.append(row);
    // else thead.append(row);
    [...child.children].forEach((col, j) => {
      const cell = buildCell(i, j);
      cell.innerHTML = col.innerHTML;
      row.append(cell);
    });
  });
  block.innerHTML = '';
  block.append(table);
}
