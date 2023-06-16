import useContribute from "../hooks/useContribute";

const MessageError = () => {
  const { error } = useContribute();
  return (
    <div className="py-4 border text-center border-red-500 bg-red-100 text-red-600">
      <p className="">{error}</p>
    </div>
  );
};

export default MessageError;
