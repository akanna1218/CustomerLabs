
const SendApi = ({handleSave,handleCancel}) => {
  return (
    <div className='send-form'>
      <button className='save-button' onClick={handleSave}>Save the segment</button>
      <button  className='cancel-button' onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default SendApi