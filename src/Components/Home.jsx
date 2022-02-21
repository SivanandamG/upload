import { useEffect, useState } from "react"
import {useDispatch} from "react-redux";
import { add_data } from "../Redux/actions";
export default function Home (){
     const [search,setSearch] = useState("");
     const dispatch = useDispatch();
     const handleSearch = (e)=>{
          if(e.key == "enter"){
               // e.pre
               console.log(search);
          }
          setSearch(e.target.value);
     }
     useEffect(()=>{
          var s = [];
          fetch(`https://fast-reef-22226.herokuapp.com/data`)
          .then(res=>res.json())
          .then((res)=>{ const data = add_data(res);dispatch(data)});
     },[]);
    return( 
         
         <div>
              <form action={`/search/${search}`} onChange={(e)=>{e.preventDefault();}}>
            <label htmlFor=""><h1> Google</h1></label>  <input onChange={(e)=>{e.preventDefault(); handleSearch(e)}} type="text" />
            </form>
          </div>         
    )
}