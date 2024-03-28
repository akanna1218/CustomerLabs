// SaveSegmentButton.js
import React from 'react';

const SaveSegmentButton = ({ handleSaveSegment }) => {
  return (
    <div className='view-audience'>
    <h1>view Audience</h1>
    <button onClick={handleSaveSegment}>
      Save Segment
      </button>
    </div>
  );
};

export default SaveSegmentButton;
