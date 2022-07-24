const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const AvatarSchema = new Schema({
    url: String,
    filename: String,
})

AvatarSchema.virtual("profilePic").get(function() {
    return this.url.replace("/upload", "/upload/w_250,h_250,c_fill")
  })

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname: String,
    lastname: String,
    avatar: AvatarSchema,
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);