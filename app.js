let todos = [{
  name:"Complete lesson",
  complete: false
},{
  name:"Drink a cup of tea",
  complete: true
},{
  name:"Get a job",
  complete: false
}];

new Vue({
  el:`#app`,
  template:"#app-template",

  data:()=>(
    {
      todos,
      text:``,
      showComplete:true
    }
  ),

  computed:{
    filteredTodos(){
      return this.todos.filter(todo=>this.showComplete ? true : !todo.complete);
    },
    submitIsDisabled(){
      return this.text == "";
    }
  },

  methods:{
    addTodo(){
      todos.push({
        name:this.text,
        complete:false
      });

      this.text = ``;
    },
  }
});
