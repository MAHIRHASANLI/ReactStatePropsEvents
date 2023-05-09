import { useState } from "react";
const About = ()=>{
 
  let [newProduct, setNewProduct] = useState([])
  

  let [Name , setName] = useState("")
  let [Price , setPrice] = useState("")
  let [errorName, setErrorName] = useState("")
  let [errorPrice, setErrorPrice]  = useState("")
  function handleSubmit(e){
    e.preventDefault()
    if(Name.length < 5 || Price < 0){
      setErrorName("Bos mesaj daxil edirsiz!")
    }
    else{

      setNewProduct([...newProduct,{Name,Price}]);
      setName("");
      setPrice("");

}
  
    
   
  }
  function handleAdd(e){
    setName(e.target.value)
  
    if(e.target.value.length < 6 || !/[A-Z]/.exec(Name[0])) {
      setErrorName("Daxil etdiyiniz melumatin duzgunluyunnen emin olun!")
    }
    else{
        setErrorName("");
        console.log("kicik");
      }
  }
  function handlePriceAdd(e){
    setPrice(e.target.value)
    if (e.target.value<1) {
      setErrorPrice("Insafsiz bu qiymete meyve olar?")
    }
    else{
      setErrorPrice("")
    }
  }
    function handleSearch(e){
      if(e.target.value.trim()==""){
        setNewProduct(newProduct)  
      }
      else{
        let aboutproduct = newProduct.filter((product)=>
        product.Name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())
        )
        setNewProduct(aboutproduct)
      }
      
    }
    function handeSort(){
      let sortetproduct = [... newProduct.sort((a,b)=>a.Price-b.Price)]
      setNewProduct(sortetproduct)
    }
    function handleDelete(Name){
       let filterProduc=newProduct.filter((product)=>product.Name!==Name)
       setNewProduct(filterProduc)
    }
   function handleClear(){;
    setNewProduct("")
   }
  //  
    return(
        <div className="inputProduct">
        <input type="text" onChange={(e)=>handleSearch(e)} placeholder="Search!"/>
        <button className="btn btn-success" onClick={handeSort} type="submit">Sort</button>
        <ul className="ul">
          {newProduct && newProduct.map((product) => {
          return <li className="product" key= {product.Name}>Name: {product.Name} | Price: {product.Price} 
          <button className="btn btn-danger" onClick={()=>handleDelete(product.Name)}>Delete</button></li>
       })}
        </ul>
      <form onSubmit={(e)=>handleSubmit(e)} action="">
      <input name="Name" onChange={(e)=>handleAdd(e)} value={Name} type="text" placeholder="enter name"  />
        <input name="Price" onChange={(e)=>handlePriceAdd(e)} value={Price} type="number" placeholder="enter price"/>
        <button className="btn btn-success">Add</button>
      <p className="pp">{errorName}</p>
        <p className="pp">{errorPrice}</p>
      </form>
        <button  onClick={handleClear}>Clear All</button>
        </div>
    )
}
export default About

