import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {

    const override = {
        display: 'block',
        margin: '100px auto',

    }
  return (
    <ClipLoader
        color='#34d399'
        loading={loading}
        cssOverride={override}
        size={150}

      />
  );
};

export default Spinner;
