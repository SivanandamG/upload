import { useEffect, useState } from "react"
import {useDispatch} from "react-redux";
import { add_data } from "../Redux/actions";
export default function Home (){
     const [search,setSearch] = useState("");
     const dispatch = useDispatch();
     useEffect(()=>{
          fetch(`https://fast-reef-22226.herokuapp.com/data`)
          .then(res=>res.json())
          .then((res)=>{return dispatch(add_data(res))});
     },[]);
     const handleSearch = (e)=>{
          if(e.key === "enter"){
               // e.pre
               console.log(search);
          }
          setSearch(e.target.value);
     }
    return( 
         <div>
              <form action={`/search/${search}`} onChange={(e)=>{e.preventDefault();}}>
            <label htmlFor=""><h1> Google</h1></label>  <input onChange={handleSearch} type="text" />
            </form>
          </div>         
    )
}