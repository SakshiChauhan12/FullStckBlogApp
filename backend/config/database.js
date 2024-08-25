const mongoose=require('mongoose');
require("dotenv").config();//to feed .env into process but first install .env
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
       
    })
    .then(()=>console.log("db connection is successful")
)
.catch((error)=>{
    console.log("issue in db connection");
    console.error(error.message);

    process.exit(1);
})

}
module.exports=dbConnect;