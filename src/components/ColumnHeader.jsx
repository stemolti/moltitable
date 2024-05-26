
const ColumnHeader = ({ colIndex }) => {
  return (
    <div className="w-24 h-8 border bg-gray-200 flex justify-center items-center">
      {String.fromCharCode(65 + colIndex)}
    </div>
  );
};

export default ColumnHeader;
