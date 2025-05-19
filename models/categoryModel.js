const mongoose=require('mongoose');

const CreateSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'Name is required'],
        unique:[true,'Category must be unique'],
        minlegth:[3,'Too short'],
        maxlength:[32,'Too long']
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String
},
    {timestamps:true},
)

let CreateModel=mongoose.model('Category',CreateSchema)

module.exports=CreateModel;