import axios from "axios";

const POST_COFFEE = "POST_COFFEE";
const CHANGE_STATUS = "CHANGE_STATUS";
const DELETE_TASK = "DELETE_TASK";

/////////////////ACTIONS//////////////

const addCoffee = () => ({type: POST_COFFEE});

const changeStatus = (task) => ({type: CHANGE_STATUS, task});
const taskDelete = (slug) => ({type: DELETE_TASK, slug});


/////////////////REDUCER/////////////////////


export const postNewCoffeeCup = () => {
  // dispatch(addTask({title: task, metafields: [{value: false}], slug: formatSlug(task)}));
  console.log("Attempt Coffee Update")
  axios.post(`https://techdrone.us/coffee/update`)
    .then((response) => {
      console.log(response.data)
      return response.data;
    })
    .then((task) => {
      dispatch(addTask(task.object));
    }) 
    .catch((err) => {
      console.error.bind(err);
    })
};
