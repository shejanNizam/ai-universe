import React from "react";

const Modal = (props) => {
  // console.log(props);
  const { image_link, description, integrations, features } = props.singleData;
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card lg:card-side bg-base-100 ">
            <div className="card-body">
              <h2 className="card-title text-white">{description}</h2>
            </div>
            <figure>
              <img
                className="w-full h-96 rounded-xl"
                src={image_link && image_link[0]}
                alt="Album"
              />
            </figure>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
