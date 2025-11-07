import express from "express"
import cors from "cors"

const app = express()


app.use(express.json())
app.use(cors(
    {
         origin: [
            "http://localhost:5173",
            "http://localhost:5174",
            "http://localhost:3000",
            // add production url 
            "http://72.61.6.58:5173"
        ],
        credentials: true , 
    
    }
   
))


// API route

app.get("/api/message" , (req, res) => {
    res.json({message: "Hello , from Ashish's server"});
});


const PORT = 4000

app.listen(PORT,"0.0.0.0", () => console.log(`server is running at http://localhost:${PORT}`))
