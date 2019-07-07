import React from 'react';

export default function FormField(props) {
   return (
      <div className="form-group w-100 row">
         <label className="col-sm-2" htmlFor="name">
            {props.label}
         </label>
         <input
            className="form-control col-sm-10"
            onChange={props.onChange}
            name={props.fieldName}
            type="text"
            value={props.name}
         />
      </div>
   );
}
