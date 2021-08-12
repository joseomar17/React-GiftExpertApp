import React, { useState } from "react";
import PropTypes from 'prop-types'


export const AddCategory = ({ setcategories }) => {

  const [inputvalue, setinputvalue] = useState('');

  const handleInputchange = (e) => {

    setinputvalue(e.target.value);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if(inputvalue.trim().length > 2){
        setcategories((cats) => [inputvalue,...cats]);
        setinputvalue('');
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputvalue} onChange={handleInputchange} />
    </form>
  );

  
};


AddCategory.propTypes={

    setcategories:PropTypes.func.isRequired
}


