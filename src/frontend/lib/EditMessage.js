const EditMessage = ({message}) => {
  if (message) {
    return (
      <div className='text-center mt-3' style={{ color: 'red' }}>
        {message}
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditMessage;
