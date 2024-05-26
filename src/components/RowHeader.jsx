
const RowHeader = ({ rowIndex }) => {
  return (
    <div className="w-8 h-8 border bg-gray-200 flex justify-center items-center">
      {rowIndex + 1}
    </div>
  );
};

export default RowHeader;
