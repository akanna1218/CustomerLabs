// SegmentForm.js

const SegmentForm = ({ setSegmentName, segmentName }) => {

  

  return (
    <div className='segment-form'>
      <label style={{"fontSize":"large"}}>Enter the Name of the Segment</label>
      <input type="text" value={segmentName}  placeholder={'Name of the segment'} onChange={(e) => setSegmentName(e.target.value)} />
    <p style={{"fontSize":"16px"}}> To save your segment,you need to add the schemas to build the query</p>
    </div>
  );
};

export default SegmentForm;
