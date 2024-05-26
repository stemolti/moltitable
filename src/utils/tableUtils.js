export const initializeTable = (rows, cols) => {
  return Array.from({ length: rows }, () => Array(cols).fill(''));
};

export const updateCellContent = (tableData, rowIndex, colIndex, newContent) => {
  const newTableData = [...tableData];
  newTableData[rowIndex][colIndex] = newContent;
  return newTableData;
};
