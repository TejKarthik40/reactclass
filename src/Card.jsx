
function Card({img,location,name}) {
  return (
    <>
    <div style={{border:"1px red solid",
        width:"300px",
        textAlign:"center",
        borderRadius:"10px"}}>
     <img  height={250} width={250} src={img} alt="" />
     <h1>{name}</h1>
     <h2>{location}</h2>
    </div>
    </>
  )
}

export default Card