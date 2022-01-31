const multer=require('multer')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'./public/teacherPp');
    },
    filename:(req,file,cb)=>{
    cb(null,file.fieldname,+""+Date.now()+""+file.originalname);
    }
    })

    var upload = multer({storage:storage,
    limits:{
    fileSize:3000000,
    }});
    

    module.exports=upload
    
    
    