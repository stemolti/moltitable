import React, { useState, useRef, useEffect } from 'react';

const Cell = ({ content, isSelected, isEditing, onClick, onDoubleClick, onContentChange }) => {
  const [cellContent, setCellContent] = useState(content);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleContentChange = (event) => {
    setCellContent(event.target.value);
  };

  const handleBlur = () => {
    onContentChange(cellContent);
  };

  return (
    <div
      className={`w-24 h-8 border ${isSelected ? 'border-blue-500' : 'border-gray-300'} ${isEditing ? 'bg-yellow-100' : 'bg-white'}`}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={cellContent}
          onChange={handleContentChange}
          onBlur={handleBlur}
          className="w-full h-full px-1"
        />
      ) : (
        <span className="block w-full h-full p-1">{cellContent}</span>
      )}
    </div>
  );
};

export default Cell;
