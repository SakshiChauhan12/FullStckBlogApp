//import
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
const CreateBlog = () => {

    // 1. Create a new blog form: title, content, sector, author
    // 2. Create a state for each form field
    // 3. Update the input field to be required, set value as that of the state
    // 3.1 add an onChange event to update the state of the target field
    // 3.2 add a placeholder to the input field
    // 3.3 Display the states of the form fields below the form
    // 4. Create a submit button
    // 5. Add an onSubmit event to the form
    // 6. Create a handleSubmit function to handle the form submission
    // 7. Prevent the default form submission
    // 8. Create a blog object with the form field states
    // 9. Log the blog object to the console
    // 10 Make a POST request to the API with the blog object
    // 10. Clear the form after submission

    // 11: Add timeout to the form submission fetch API to simulate a slow network
    // 12. create a pending state for the submit button
    // 13. change the state of the button to pending when the form is submitted
    // 14.change the state of the button to active when the form is submitted
    // HW: add a spinner to the button when the state is pending
   const[title,setTitle]=useState();
   const[content,setContent]=useState();
   const[sector,setSector]=useState('Health');
   const[author,setAuthor]=useState();
   const[pending,setPending]=useState(false);
   const navigate=useNavigate()
   function clickHandler(e){
       setPending(true);
       const blog={title,content,sector,author};
         console.log(blog);
         setTimeout(()=>{
            fetch('http://localhost:4000/api/blogs',{
                method:'POST',
                headers:{"Content-Type":"Application/json"},
                body:JSON.stringify(blog)

            }).then((res)=>{
                console.log('New Blog added');
                setPending(false);
                navigate('/blogs');
            }).catch((err)=>{
                console.log('Error:',err);
                setPending(false);

            })
         },2000)

   }
//    function handleSubmit(e){
//          e.preventDefault();
//          setPending(true);
//             const blog={title,content,sector,author};
//             console.log(blog);
//             setTimeout(()=>{
//             fetch('http://localhost:3099/blogs',{
//                 method:'POST',
//                 headers:{"Content-Type":"application/json"},
//                 body:JSON.stringify(blog)
//             }).then((res)=>{
//                 console.log('New Blog added');
//                 //clear the form
//                 // setTitle('');
//                 // setContent('');
//                 // setAuthor('');
//                 // setSector('Health');
//                 setPending(false)
//             //    navigate('-1')
//                navigate('/blogs');
                

//             })
//             .catch((err)=>{
//                 console.log('Error:',err);
//                 setPending(false)
//             });
//         },5000)
            
//    }
    return (
        <section className='formsection'>
            <h2 class="heading">
                Create a new Blog
            </h2>
            <form >
                <label className='titlelabel'>Title</label>
                <input className='titleinput'
                    type="text"
                    required
                   
                    value={title}
                    placeholder='Enter your blog title here'
                    onChange={(e)=>{
                        //extract the value
                        const value=e.target.value;
                        //update the state
                        setTitle(value);
                        
                    }}
                />
                <br /> <br />
                <label className='contentlabel'>Content</label>
                <textarea
                    required
                    className='contentinput'
                    value={content}
                    placeholder='Enter your blog content here'
                    onChange={(e)=>{
                        //extract the value
                        const value=e.target.value;
                        //update the state
                        setContent(value);
                        
                    }}
                >
                </textarea>
                <br /> <br />
                <label className='sectorlabel'>Sector</label>
                <select
                    required
                    className='sectorinput'
                    value={sector}
                    onChange={(e)=>{
                        //extract the value
                        const value=e.target.value;
                        //update the state
                        setSector(value);}
                    }
                  
                >
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                </select>
                <br /> <br />
                <label className="authorlabel">Author</label>
                <input
                    type="text"
                    required
                    className="authorinput"
                    value={author}
                    placeholder='Enter your blog author here'
                    onChange={(e)=>{
                        //extract the value
                        const value=e.target.value;
                        //update the state
                        setAuthor(value);
                        
                    }}
                />
                <br /> <br />
                {!pending&&<button 
               className="add"
               onClick={(e)=>{clickHandler(e)}}
                >Add Blog</button>}
                {pending&&<button disabled>Saving post Please Wait</button>}
            </form>
            <h2 className='sheading'>Input for form</h2>
            <p className='stitle'>Title:{title}</p>
            <p className='scontent'>Content:{content}</p>
            <p className='ssector' >Sector:{sector}</p>
            <p className='sauthor'>Author:{author}</p>

           
        </section>
    );
}

export default CreateBlog;



























/*

import { useState } from 'react';

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [sector, setSector] = useState('Health');
    const [author, setAuthor] = useState('');
    const [pending, setPending] = useState(false);

    // 1. Create a new blog form: title, content, sector, author
    // 2. Create a state for each form field
    // 3. Update the input field to be required, set value as that of the state
    // 3.1 add an onChange event to update the state of the target field
    // 3.2 add a placeholder to the input field
    // 3.3 Display the states of the form fields below the form
    // 4. Create a submit button
    // 5. Add an onSubmit event to the form
    // 6. Create a handleSubmit function to handle the form submission
    // 7. Prevent the default form submission
    // 8. Create a blog object with the form field states
    // 9. Log the blog object to the console
    // 10 Make a POST request to the API with the blog object
    // 10. Clear the form after submission

    // 11: Add timeout to the form submission fetch API to simulate a slow network
    // 12. create a pending state for the submit button
    // 13. change the state of the button to pending when the form is submitted
    // 14.change the state of the button to active when the form is submitted
    // HW: add a spinner to the button when the state is pending

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, content, sector, author };
        console.log(blog);

        setPending(true);

        setTimeout(() => {
            fetch('http://localhost:3099/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                setPending(false);
                console.log('New Blog added');
            })
                .catch((err) => {
                    setPending(false);
                    console.log('Error: ', err);
                });
        }, 1000);

        // Clear the form after submission
        setTitle('');
        setContent('');
        setSector('Health');
        setAuthor('');
    }

    return (
        <section>
            <h2>
                Create a new Blog
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter your blog title here'
                />
                <br /> <br />
                <label>Content</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Enter your blog content here'
                >
                </textarea>
                <br /> <br />
                <label >Sector</label>
                <select
                    required
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                >
                    <option value="Health">Health</option>
                    <option value="Finance">Finance</option>
                </select>
                <br /> <br />
                <label>Author</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Enter the author name'
                />
                <br /> <br />
                {!pending && <button>Add Blog</button>}
                {pending && <button disabled>Adding Blog...</button>}
            </form>
            <h4>For Details</h4>
            <p>Title: {title}</p>
            <p>Content: {content}</p>
            <p>Sector: {sector}</p>
            <p>Author: {author}</p>
        </section>
    );
}

export default CreateBlog;


*/