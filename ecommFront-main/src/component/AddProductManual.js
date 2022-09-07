import React,{useEffect,useState} from 'react' 
import {useParams,Link } from 'react-router-dom';
import Header from '../header/Header';
import Sidebarr from '../sidebar/Sidebar';
import VendorSidebar from '../sidebar/VendorSidebar';
import Footer from '../footer/Footer';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import "../product.css";

export default function ProductView() {
  let { type,id,productId } = useParams();
	const auth = useSelector(state=>state.auth);
  const email = auth?.user?.email;
  const role = auth?.user?.role;

  const [chooseFile,setimages] = useState([]); 

  const [product,setProduct] = useState([]);

  const [name, setname] = useState();
  const [item_code, setitem_code] = useState();
  const [description, setdescription] = useState();
  const [retail_unite_of_meassure, setretail_unite_of_meassure] = useState();
  const [regular_price, setregular_price] = useState();
  const [sale_price, setsale_price] = useState();
  const [tax_class, settax_class] = useState();
  const [dimensions, setdimensions] = useState();
  const [color, setcolor] = useState();
  const [age, setage] = useState();
  const [brand, setbrand] = useState();
  const [stock_status, setstock_status] = useState();
  const [vendor, setvendor] = useState();
  const [product_manufacturer_code, setproduct_manufacturer_code] = useState();
  const [product_cat, setproduct_cat] = useState();
  const [properties, setproperties] = useState();
  const [properties_en, setproperties_en] = useState();
  const [composition, setcomposition] = useState();
  const [composition_en, setcomposition_en] = useState();
  const [components, setcomponents] = useState();
  const [components_en, setcomponents_en] = useState();
  const [collectionn, setcollectionn] = useState();
  const [ordering, setordering] = useState();
  const [origine, setorigine] = useState();

   const categoryValue = useSelector(state=>state?.category)


 

  // Stock .... 
   
  const updateProduct=async(id)=>{
     const formData = new FormData();
      Object.values(chooseFile).forEach(file=>{
      console.log(file)
      formData.append("multiFile", file);
    }); 

    formData.append("email",email) 
    formData.append("role",role)
    formData.append("name",name)
    formData.append("item_code",item_code)
    formData.append("description",description)
    formData.append("retail_unite_of_meassure",retail_unite_of_meassure)
    formData.append("regular_price",regular_price)
    formData.append("sale_price",sale_price)
    formData.append("tax_class",tax_class)
    formData.append("dimensions",dimensions)
    formData.append("color",color)
    formData.append("age",age)
    formData.append("brand",brand)
    formData.append("stock_status",stock_status)
    formData.append("vendor",vendor)
    formData.append("product_manufacturer_code",product_manufacturer_code)
    formData.append("product_cat",product_cat)
    formData.append("properties",properties)
    formData.append("properties_en",properties_en)
    formData.append("composition",composition)
    formData.append("composition_en",composition_en)
    formData.append("components",components)
    formData.append("components_en",components_en)
    formData.append("collectionn",collectionn)
    formData.append("ordering",ordering)
    formData.append("origine",origine)


   
      
    const res = await axios.post("http://localhost:5000/api/addproductmanual",formData, {headers: {
          'Content-Type': 'multipart/form-data'
        }});
    if(res.status===200){
      alert("Product Add Successfull");
    }
  }

console.log(product);

  const createCategoryList=(categories,options=[])=>{
    for(var category of categories){
      options?.push({value:category._id,name:category.name});
      if(category?.children?.length>0){
        createCategoryList(category?.children,options)
      }
    } 
    return options;
  }



	return (
		<div>
		<div className="sidebar-mini skin-green-light">
		<div className="wrapper"> 
  		  <Header/> 
  		  {auth?.user?.role==="Vendor"?<VendorSidebar/>:<Sidebarr/>}
         <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <h1>
        Edit Product
        <small>it all starts here</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li>
          <a href="#">Examples</a>
        </li>
        <li className="active">Blank page</li>
      </ol>
    </section>
    {/* Main content */}




    <section className="content">
      <div className="box box-default xpadding"> 

    <div className="box-body xbox">
    <div className="row">
    
      <div className="col-md-4"> 
  <h2>Add Product Description</h2>
  </div>
  </div>
  </div>
  <div className="box-body xbox">
    <div className="row">
      <div className="col-md-4"> 
          <label>name</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1}  
            onChange={(e)=>setname(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>item_code</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setitem_code(e.target.value)}
            aria-hidden="true"
          />  
      </div>

      <div className="col-md-4"> 
          <label>Category</label>
          <select
            onChange={(e)=>setdescription(e.target.value)}
            aria-hidden="true"
             className="form-control select2 select2-hidden-accessible"
          >
          <option>Choose Categories</option>
        {
          createCategoryList(categoryValue?.categories?.categoryList).map(dt=>(

        <option key={dt?._id} value={dt?.value}>{dt.name}</option>
            ))
      }
          </select>  
      </div>

      <div className="col-md-4"> 
          <label>description</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setdescription(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>retail_unite_of_meassure</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setretail_unite_of_meassure(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>regular_price</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setregular_price(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>sale_price</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setsale_price(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>tax_class</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>settax_class(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>dimensions</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setdimensions(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>color</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcolor(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>age</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setage(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>brand</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setbrand(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>stock_status</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setstock_status(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>vendor</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setvendor(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>product_manufacturer_code</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setproduct_manufacturer_code(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>product_cat</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setproduct_cat(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>properties</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setproperties(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>properties_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setproperties_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>composition</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcomposition(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>composition_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcomposition_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>components</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcomponents(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>components_en</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcomponents_en(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>collectionn</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setcollectionn(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>ordering</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setordering(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      <div className="col-md-4"> 
          <label>origine</label>
          <input
            type="text"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            onChange={(e)=>setorigine(e.target.value)}
            aria-hidden="true"
          />  
      </div>
      
     
      
    </div>
  </div>

  <div className="">

    <div className="box-body xbox">
    <div className="row">

      <div className="col-md-4"> 
  <h2>Add Product Stock</h2>
  </div>
  </div>
  </div>
    <div className="box-body xbox">
    <div className="row">
      <div className="col-md-4"> 
          <label>images</label>
          <input
            type="file"
            className="form-control select2 select2-hidden-accessible"
            style={{ width: "100%" }}
            data-select2-id={1}
            tabIndex={-1} 
            multiple 
            name="multiFile"
            onChange={(e)=>setimages(e.target.files)}
            aria-hidden="true"
          />  
      </div>
 
      </div>
      </div>
   
  </div>


  <div className="box-footer">

  <button className="btn btn-success" onClick={(e)=>updateProduct()}>Add Products</button>
  </div>
</div>

    </section>
    {/* /.content */}
  </div>
 
<Footer/> 
    
</div>

      
    </div>
		</div>
	)
}