
// SelectedSchemas.js
import React from 'react';

const SelectedSchemas = ({ selectedSchemas, schemas, handleSchemaChange }) => {

  const handleSelectedSchemaChange = (e, index) => {
    const updatedSchemas = [...selectedSchemas];
    console.log(updatedSchemas)
    updatedSchemas[index] = e.target.value;
    handleSchemaChange(updatedSchemas);
  };
  const handleRemoveSchema = (index) => {
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas.splice(index, 1);
    handleSchemaChange(updatedSchemas);
  };

  return (
    <div className='selected-schemas'>
      <h3>Selected Schemas:</h3>
      <div className='drop'>
        {selectedSchemas.map((schema, index) => (
          <div  key={index} style={{ marginBottom: '5px' }}>
            <select style={{ width: '80%',height:"30px",padding:'0px 50px'}}  value={schema} onChange={(e) => handleSelectedSchemaChange(e, index)}>
              <option  value="">Select Schema</option>

              {schemas.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>

              ))}
            </select>
            <button id='x' onClick={() => handleRemoveSchema(index)}>-</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedSchemas;

