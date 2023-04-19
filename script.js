const obj = [
    {
        "nome":"joão",
        "idade":24
    },
    {
        "nome":"andré",
        "idade":18
    }
]
//converter de OBJETO para JSON
const jsonData = JSON.stringify(obj)
console.log(jsonData)

//converter de JSON para OBJETO
const objData = JSON.parse(jsonData)
console.log(objData)

objData.map((nome,idade)=>{
    console.log(nome,idade)
})