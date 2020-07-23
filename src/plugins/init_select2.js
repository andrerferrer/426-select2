// IMPORT THE PLUGIN
// How? documentation
import $ from 'jquery';
import 'select2';

// CREATE THE FUNCTION
// name of the function is the name of the file
const initSelect2 = () => {
  const options = { 
    width: '100%'
  };
  $('.select2').select2(options);
}

// EXPORT THE FUNCTION
export { initSelect2 }
