import React from "react";

const SingleCard = (props) => {
  // console.log(props);
  const { id, image, features, name, published_in } = props?.value;
  const { setUniqueId } = props;

  return (
    <>
      <div className="card w-96 glass ">
        <figure>
          <img className="w-80 h-48 rounded-lg" src={image} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Features</h2>
          {features.map((feature, index) => (
            <p>
              {" "}
              {index + 1}. {feature}{" "}
            </p>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between  items-center">
            <div>
              <h1 className="text-3xl font-bold"> {name} </h1>
              <div className="flex gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>
                <p> {published_in} </p>
              </div>
            </div>
            <label
              onClick={() => setUniqueId(id)}
              htmlFor="my-modal-5"
              className="cursor-pointer bg-rose-200	 rounded-full p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
