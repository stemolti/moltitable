import React, { useState, useRef } from 'react';
import Cell from './Cell';
import ColumnHeader from './ColumnHeader';
import RowHeader from './RowHeader';
import ContextMenu from './ContextMenu';
import { initializeTable, updateCellContent} from '../utils/tableUtils';

const Table = () => {
  const [tableData, setTableData] = useState(initializeTable(3, 5));
  const [selectedCell, setSelectedCell] = useState(null);
  const [editingCell, setEditingCell] = useState(null);
  const [contextMenu, setContextMenu] = useState({ isVisible: false, position: { x: 0, y: 0 } });

  const tableRef = useRef(null);

  const handleCellClick = (rowIndex, colIndex) => {
    setSelectedCell({ rowIndex, colIndex });
    setEditingCell(null);
  };

  const handleCellDoubleClick = (rowIndex, colIndex) => {
    setEditingCell({ rowIndex, colIndex });
  };

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({ isVisible: true, position: { x: event.clientX, y: event.clientY } });
  };

  const handleDocumentClick = () => {
    setContextMenu({ isVisible: false, position: { x: 0, y: 0 } });
  };

  const handleCellContentChange = (rowIndex, colIndex, newContent) => {
    setTableData(updateCellContent(tableData, rowIndex, colIndex, newContent));
  };

  // Add event listeners for clicking outside and resizing cells
  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div ref={tableRef} onContextMenu={handleContextMenu} className="relative">
      <div className="grid grid-cols-5 gap-1">
        {tableData[0].map((_, colIndex) => (
          <ColumnHeader key={colIndex} colIndex={colIndex} />
        ))}
        {tableData.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <RowHeader rowIndex={rowIndex} />
            {row.map((cell, colIndex) => (
              <Cell
                key={colIndex}
                content={cell}
                isSelected={selectedCell && selectedCell.rowIndex === rowIndex && selectedCell.colIndex === colIndex}
                isEditing={editingCell && editingCell.rowIndex === rowIndex && editingCell.colIndex === colIndex}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
                onContentChange={(newContent) => handleCellContentChange(rowIndex, colIndex, newContent)}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      {contextMenu.isVisible && (
        <ContextMenu position={contextMenu.position} />
      )}
    </div>
  );
};

export default Table;
