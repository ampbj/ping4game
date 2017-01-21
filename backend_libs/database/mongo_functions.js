module.exports = (mPool) =>{
    return{
        getScalaValues(user) {
            return mPool.collection("users")
                .findOne({userId: user.id})
                .then((result) =>{
                    
                })
        }
    }
}