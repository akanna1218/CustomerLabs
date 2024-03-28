// SchemaDropdown.js
import React from 'react';

const SchemaDropdown = ({ schemas, newSchema,onChange, handleAddNewSchema }) => {
  return (
    <div className='add-schema'>
      <select style={{ width: '80%',height:"30px" }} value={newSchema} onChange={onChange}>
        <option value="">Add Schema to  Segment</option>
        {schemas.map((schema) => (
          <option key={schema.value} value={schema.value} >{schema.label}</option>
        ))}
      </select>
      <br></br>
      <button onClick={handleAddNewSchema}>+ Add new schema</button>
    </div>
  );
};

export default SchemaDropdown;
