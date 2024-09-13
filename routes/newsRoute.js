const expres=require('express');
const router=expres.Router();
const axios=require('axios');
// GET https://gnews.io/api/v4/search?q=example&apikey=ad5b498090132991820a1226048488f2
// https://gnews.io/api/v4/top-headlines

router.post('/getNews', async(req, res)=>{

    try{
        const Query=req.body;
  console.log(Query);
        // let page=Query.page||1;
        // let limit=5;
    
        const response=await axios.get("https://gnews.io/api/v4/top-headlines",{
           params:{
            category:Query.category||"general",
           
            lang:Query.lang||"en",
                category:Query.category||"general",
                country:Query.country,
                from:Query.from,
                to:Query.to,
                q:Query.q,
                apikey:process.env.API_KEY_A,
                
             max:"100"
            }
        })

        // console.log(response.data);
        // const startIndex = (page - 1) * limit;
        // const endIndex = page * limit;
        // const paginatedData = response.data.articles.slice(startIndex, endIndex);
        // console.log(response.data);
        res.status(200).json(response.data);
      


    }catch(error){
        console.log(error);
        res.end();
    }


})


router.post('/searchNews', async(req, res)=>{
    const Query=req.body;
// let page=Query.page||1;
// let limit=5;
    try{
        const response=await axios.get("https://gnews.io/api/v4/search",{
           params:{
           
           in:"title,description,content",
            lang:Query.lang||"en",
                category:Query.category||"general",
                country:Query.country,
                sortby:Query.sortBy,
                from:Query.from,
                to:Query.to,
                q:Query.q,
                apikey:process.env.API_KEY_A,
                
             max:"100"
            }
        })
        // const startIndex = (page - 1) * limit;
        // const endIndex = page * limit;
        // const paginatedData = response.data.articles.slice(startIndex, endIndex);
        // console.log(response.data);
        res.status(200).json(response.data);


    }catch(error){
        console.log(error);
        res.end();
    }


})

module.exports=router;