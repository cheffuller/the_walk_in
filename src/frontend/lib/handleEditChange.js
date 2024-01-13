export const handleEditChange = (object, key, setState) => {
    return (e) => {
      setState({ ...object, [key]: e.target.value });
    };
  };