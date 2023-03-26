import React, {useState, useEffect} from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
import {useRouter} from 'next/router'
import {AiFillFileExcel} from 'react-icons/ai'
import {BiLoaderCircle} from 'react-icons/bi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const badData = () => toast('secretary name, secretary number, College name, and filename are must!!');

const goodData = () => toast('data sent successfully');


const Profile = ({users}) => {

  const[showLoader, setShowLoader] = useState(false)


  const router = useRouter()
    // console.log(users)
    const { data: session } = useSession()
    const { push, asPath } = useRouter()


    


    const [college, setCollege] = useState("")
    const [file, setFile] = useState("")
    const [pname, setPname] = useState("")
    const [pnumber, setPnumber] = useState("")

    const [myuserdata, setMyuserData] = useState([])
 
	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' })

		push(data.url)
	}
    
    const handleSubmit = async (e) => {
        // console.log("hello for now")
        setShowLoader(true)
        e.preventDefault()
        //  notify()
        if (college !== "" && file !== "" && pname !== "" && pnumber !== "") {
        let data = await fetch("https://aahvan-2023.vercel.app//api/user", {
          
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: session.user.email,
                college: college, 
                filename: file,
                pname: pname,
                pnumber: pnumber,
            })
        })

        goodData()
        
      } else {
        badData()
         //const notify = () => toast("secretary name, secretary number, College name, and filename are must!!")
       
      }
       setShowLoader(false)

    }

    // const fetchUser = async () => {
    //   // setLoading(true);
  
    //   try {
    //     const response = await fetch(`http://localhost:3000/api/user/${session.user.email}`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     });
  
    //       const result = await response.result.json();
    //       console.log(result)
    //       // setMyuserData(result.result);
       
    //   } catch (err) {
    //     alert(err);
    //   } 
    // };
  
    // useEffect(() => {
    //   fetchUser();
    // }, []);


    
	const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`)
  return (
    <>
    {
        session ? (<div
        className='w-full h-full bg-[#101010] text-white flex flex-col items-center font-inter'
        >
        <span
        className='text-2xl pt-4 font-bold text-[#FFB124] pb-10'
        >Welcome, {session.user.name}</span>
        <div
        className='w-10/12 px-10 py-5'
        >
        Welcome to AAHVAN - 23'. This is our registration portal and we request you to submit your details below.
        <br />
        We require you to send us the details of your student participants in a excel sheet along with edit access <br />
        It should strictly follow the format of the given sample file
        <button onClick={()=>window.open('https://docs.google.com/spreadsheets/d/1TMIBwcX1R7j8uTpjXrejuE-zATzzCAcm9fwQ8R6As9g/edit?usp=sharing','_blank')}
        className="bg-[#FFB124] border-2 border-[#FFB124] text-black py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#FFB124] transition duration-200 ease-in-out flex my-4 px-1 self-center"><AiFillFileExcel
          fontSize={25}
        /> Sample File here </button>
          <div
          className='text-2xl font-bold text-[#FFB124] pb-5 stencil uppercase'
          >Profile</div>
          {/* <p>Your info : </p>
         
          <p>college : {myuserdata.filter((user) => user.email === session?.user?.email)[0].college} </p>
          <p>last uploaded file : {myuserdata.filter((user) => user.email === session?.user?.email)[0].filename}</p> */}
         
        
        </div>
       
        <form onSubmit={handleSubmit} 
        className='w-10/12 px-10 py-5 bg-[#1F1F1F] rounded-md flex flex-col gap-5'
        >

            <label>
              Sports Secretary Name
            </label>
            <input
            className="w-full bg-transparent border-2 py-2 px-2 rounded-lg border-[#BDA54F] outline-none"
              type="text" value={pname} onChange={(e)=>setPname(e.target.value)}
            />

            <label>
              Sports Secretary Number
            </label>
            <input
            className="w-full bg-transparent border-2 py-2 px-2 rounded-lg border-[#BDA54F] outline-none"
              type="text" value={pnumber} onChange={(e)=>setPnumber(e.target.value)}
            />


            <label>
              College
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-2 py-2 px-2 rounded-lg border-[#BDA54F] outline-none"
              value={college} onChange={(e)=>setCollege(e.target.value)}
            />

            <label>
              File  - (add the link of the google excel sheet of the team)
            </label>
            <input
            className="w-full bg-transparent border-2 py-2 px-2 rounded-lg border-[#BDA54F] outline-none"
              type="text" value={file} onChange={(e)=>setFile(e.target.value)}
            />

           
<div className="flex py-auto">
            <button 
          //  onClick={notify}
            type="submit" className='bg-[#FFB124] border-2 border-[#FFB124] text-black py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#FFB124] transition duration-200 ease-in-out w-full max-w-[300px] self-center'>
              Submit
              <ToastContainer />
            </button>
            <BiLoaderCircle className={(showLoader) ? "animate-spin my-auto mx-3": "hidden"} fontSize={45}/>
            </div>
        </form>
        <div className='w-10/12 px-10'>
          <button onClick={handleSignOut}
            className='bg-[#FFB124] border-2 border-[#FFB124] text-black py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#FFB124] transition duration-200 ease-in-out w-full max-w-[300px] text-xl mb-10'
          >
              Sign Out
          </button>
        </div>
         </div>) : (<> 
         <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-center'>
             <h1 className='text-6xl font-bold stencil text-[#FFB124] pb-10 uppercase'>Profile</h1>
              <p
              className='text-2xl font-thin font-inter'
              >You are not logged in</p>
              <button onClick={handleSignIn}
              className='bg-[#FFB124] border-2 border-[#FFB124] text-black py-3 rounded-md mt-5 font-inter font-semibold hover:bg-transparent hover:text-[#FFB124] transition duration-200 ease-in-out w-full max-w-[300px]'
              >Sign In</button>
         </div>
        </>)
    }


     </>
  )
}

export default Profile

// export async function getStaticProps(context){
//     const { data: session } = useSession()

//     const client = await MongoClient.connect(`${process.env.MONGODB_URI}`)
//     const todoCollection = client.db("wtf").collection("users")
//     const myuser = await todoCollection.findOne({email: session?.user?.email})
//     client.close()
//     return {
//       props:{
//         users : {
//             name: myuser.name,
//             email: myuser.email,
//             filename: myuser.filename,
//             college:myuser.college,
//             image: myuser.image,
//             id: myuser._id.toString()
//           }
//       },
//       revalidate: 60
//     }
//   }