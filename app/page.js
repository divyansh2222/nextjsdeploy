"use client"


export default function Home() {

const  handleclick = async()=>{
    let data={
    name:"shubham ",
    role: "Coder"
    }
let apii = await fetch('api/add', {method:"POST", 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
let res = await apii.json()
console.log(res)
 }

  return (
   <div className="absolute  ">

     <button onClick={handleclick}> Click on me </button>
    </div>
  );
}
