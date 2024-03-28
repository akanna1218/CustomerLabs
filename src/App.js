// App.js
import React, { useState ,useEffect} from 'react';
import SaveSegmentButton from './Mycomponents/SaveSegmentButton ';
import SegmentForm from './Mycomponents/SegmentForm';
import SchemaDropdown from './Mycomponents/SchemaDropdown';
import SelectedSchemas from './Mycomponents/SelectedSchemas';
import axios from "./axios/things";
import SendApi from './Mycomponents/SendApi';

const App = () => {


  
  // uncomment for checking the data transfer to temporary server
  
  // useEffect(() => {
  //   const fetch_data = async () => {
  //     try {
  //       const response = await axios.get("/");                                                                                                                    
  //       console.log(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.status);
  //       } else {
  //         console.log(err.message);
  //       }
  //     } 
  //   };
  //   fetch_data();
  // },[]);


  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]); //note
  const [newSchema, setNewSchema] = useState('');
  const [schemas, setSchemas] = useState([
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ]);
  const [showComponents, setShowComponents] = useState(false);


  const handleSaveSegment = () => {
    setShowComponents(true);

  };


  const handleSave = async() => {
    const data = {
      segment_name: segmentName,
      schema: selectedSchemas.map(selectedSchema => {
        const matchedSchema = schemas.find(schema => schema.value === selectedSchema);
        return matchedSchema ? { [matchedSchema.value]: matchedSchema.label } : null;
      }).filter(Boolean), // Filter out any null values
    };
    // const postApi = await axios.post("/", data);   // uncomment for checking the data transfer to temporary server
    
    setSegmentName('');
    setSelectedSchemas([]);
    console.log(data);                                // For demonstration, replace with actual API call
  };

  const handleCancel = () => {
    setSegmentName('');
    setSelectedSchemas([]);
    setShowComponents(false);
  }

  const handleAddNewSchema = () => {
    if (newSchema !== '') {
      setSelectedSchemas([...selectedSchemas, newSchema]);
      setNewSchema('');
    }
  };

  const handleSchemaChange = (updatedSchemas) => {
    setSelectedSchemas(updatedSchemas);
  };

  return (
    <div className='App'>
      
      <SaveSegmentButton 
      handleSaveSegment={handleSaveSegment} />

      {showComponents && (

        <div className='saving-segment'>
          <h1>Saving Segment</h1>
          <SegmentForm 
          setSegmentName={setSegmentName} 
          segmentName={segmentName}  />
          
          <SelectedSchemas
            selectedSchemas={selectedSchemas}
            schemas={schemas}
            handleSchemaChange={handleSchemaChange} />
          <SchemaDropdown
            schemas={schemas}
            newSchema={newSchema}
            onChange={(e) => setNewSchema(e.target.value)}
            handleAddNewSchema={handleAddNewSchema}
          />
          <SendApi
            onAddSchema={segmentName}
            handleCancel={handleCancel}
            handleSave={handleSave} />
        </div>
      )}
    </div>
  );
};

export default App;

