import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date;
}

const MessageSchema: Schema<Message> = new Schema({
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifieCode:string;
    verifeCodeExpires:Date;
    isVerified:boolean;
    isAcceptedMessages:boolean;
    messages:Message[];
}

const UserSchema:Schema<User> = new Schema({
    username:{
        type:String,
        require:[true,"Username required"],
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        require:[true,"Email required"],
        trim:true,
        unique:true,
        match:[/^\S+@\S+\.\S+$/,"Invalid email address"],
    },
    password:{
        type:String,
        require:[true,"Password required"],
    },
    verifieCode:{
        type:String,
        default:"",
        required:[true,"Verification code required"],
    },
    verifeCodeExpires:{
        type:Date,
        required:[true,"Verification code expiration date required"],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptedMessages:{
        type:Boolean,
        default:true,
    },
    messages:{
        type:[MessageSchema],
    }
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);

export default UserModel;