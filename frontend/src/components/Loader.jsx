import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <div className="flex justify-center items-center h-40">
      <ClipLoader color="#facc15" loading={loading} size={50} />
    </div>
  );
};

export default Loader;
