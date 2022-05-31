export const isUserAuthenticated = (req, res, next) => {
    console.log("GOOGLEEEE", req);
    if(req.user){
        next();
    } else{
        res.send(null);
    }
}