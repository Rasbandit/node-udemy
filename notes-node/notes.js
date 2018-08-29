const addNote = (title, body) => {
  console.log('adding note:', title, body);
};

const getAll = () => {
  console.log('getting all:');
};

const getOne = title => {
  console.log('getting one:', title);
};

const removeOne = title => {
  console.log('removing item:', title);
};

module.exports = {
  addNote,
  getAll,
  getOne,
  removeOne,
};
