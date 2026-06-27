import { idx,main_img,loc_name,data_abt, place_name } from "./list_obj"

export function Main_Content(){
  

  return(<div id="main_content">
  {idx.map((id,index)=>{return(<div className="division" key={id}><div className="image"><img src={main_img[index]} className="img"/></div>
  <div className="content">
    <div className="basic">
    <p className="loc_name">{loc_name[index]}</p>
    <a href={data_abt[index]} className="Maps">View in Google Maps</a>
    </div>
    <h2>{place_name[index]}</h2><div className="basic_2">
    <p className="data_abt">{data_abt[index]}</p>
    </div>
  </div>
  </div>)})}

  </div>)
}