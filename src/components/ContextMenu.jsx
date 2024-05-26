
const ContextMenu = ({ position }) => {
  const handleOptionClick = (option) => {
    console.log(option);
    // Add logic for handling context menu options
  };

  return (
    <div
      className="absolute bg-white shadow-md p-2"
      style={{ top: position.y, left: position.x }}
    >
      <div className="cursor-pointer p-1" onClick={() => handleOptionClick('Question')}>Question</div>
      <div className="cursor-pointer p-1" onClick={() => handleOptionClick('Editor')}>Editor</div>
      <div className="cursor-pointer p-1" onClick={() => handleOptionClick('True/False')}>True/False</div>
      <div className="cursor-pointer p-1" onClick={() => handleOptionClick('Select')}>Select</div>
      <div className="cursor-pointer p-1" onClick={() => handleOptionClick('Color')}>Color</div>
    </div>
  );
};

export default ContextMenu;

