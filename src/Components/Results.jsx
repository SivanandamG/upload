import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Results (){
     const [search,setSearch] = useState([]);
     const {q} = useParams();
     const [d,setd] = useState([]);
     const [v,setv] = useState(q);
     useEffect(()=>{
          var s = [];
          fetch(`https://fast-reef-22226.herokuapp.com/data`).then(res=>res.json()).then((res)=>{setd(res);return res.map((a)=>{ if(a.title.startsWith(q)){
               s.push(a);
              return setSearch(s);
               // return;
          }return;})});
     },[q]);
     function sortbyaz(){
          search.sort(function(a, b) {
               if (a.author < b.author) {
                 return -1;
               }
               if (a.author > b.author) {
                 return 1;
               }
               return 0;
             });
     }
     function sortbyza(){
          setSearch(search.sort(function (a, b) {
               return a.value - b.value;
             }));
     }function sortbydd(){
          setSearch(search.sort(function (a, b) {
               return b.creation_date - a.creation_date;
             }))
     }function sortbyda(){
        setSearch(search.sort(function (a, b) {
               return a.creation_date - b.creation_date;
             }));
     }function sortbyqa(){
          console.log(search);
        var d =   search.sort(function (a, b) {
               return a.quality - b.quality;
             })
          setSearch(d)
     }function sortbyqd(){
          console.log(search);
        var d =   search.sort(function (a, b) {
             console.log(a,b);
               return b.quality - a.quality;
             })
          setSearch(d)
     }
     return(<div>
     <h1>Google</h1><input type="text" value={v} onChange={(e)=>{setv(e.target.value)}} /> <button onClick={()=>{var s = [];d.map((a)=>{if(a.title.startsWith(v)){ s.push(a);setSearch(s);}})}} >Search</button><br />
     <button onClick={sortbyaz}>SortBy:A-Z</button>     <button onClick={sortbyza}>SortBy:Z-A</button><button onClick={sortbyda}>SortBy:Date(Asc)</button><button onClick={sortbydd}>SortBy:Date(Desc)</button><button onClick={sortbyqa}>SortBy:Quality(Asc)</button><button onClick={sortbyqd}>SortBy:Quality(Desc)</button><button>Sort:Explicity</button>
     {search.map((a)=>{
          // console.log(a);
          return(<div key={a.id}>
               <p color="grey">{a.url}</p>
               <Link to={a.url} ><p>{a.title}</p></Link>
               <p><b> author:</b>{a.author}</p>
               <p><b>description:</b>{a.description}</p>
               <p><b>quality:</b>{a.quality}%, <b>createDate:</b>{a.creation_date}, <b>explicit:</b>{a.explicit?"Yes":"No"}</p>
               </div>
               );
     })}
     </div>);
}

