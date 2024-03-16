// 1-get_list_student_ids.js
function getListStudentIds(array) {
    if (!Array.isArray(array)) {
      return [];
    }
  
    return array.map(item => item.id);
  }
  
  export default getListStudentIds;
  