const init = {list:[]}
export const reducer = (state=init,{type,payload})=>{
     if(type == "add_data"){
          state = {...state,list:payload}
     }
}