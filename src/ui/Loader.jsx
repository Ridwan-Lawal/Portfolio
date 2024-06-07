import { Puff } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <Puff
        visible={true}
        height="50"
        width="50"
        color="rgb(79, 153, 216)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
