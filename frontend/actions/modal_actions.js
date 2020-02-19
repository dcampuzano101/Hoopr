export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_MODAL = "OPEN_MODAL";

export const closeModal = () => {
  // debugger;
  return ({
    type: CLOSE_MODAL
  });
};

export const openModal = (modal, props) => {
  console.log(props);
  return({
    type: OPEN_MODAL,
    modal,
    props
  });
};

