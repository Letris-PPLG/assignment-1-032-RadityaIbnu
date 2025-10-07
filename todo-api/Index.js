import express from "express" ;

const app = express();
app.use(express.json());

// cek server
app.get("/" , (req , res) => {
    res.json({ msg:"API berjalan normal" , code:200 });
});

//ambil to do 
let belajar = [
  { id: 1, title: "Belajar Node.js", done: false },
  { id: 2, title: "Belajar Express.js", done: true }
]

app.get("/" , (req,res) => {
    res.json(belajar);
});

//add to do
app.post("/" , (req , res) => {
    const { title } = req.body;
    const newTodo = {id : belajar.length + "title", title: title};
    belajar.push(newTodo);
    res.status(201).json(newTodo)
})

app.get("/" , (res , req)=> {
    res.json(newTodo);
});


app.listen(3001 , () => console.log ("server running on http://localhost:3001"));