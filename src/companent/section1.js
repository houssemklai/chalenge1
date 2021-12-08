import img0 from '../John-Doe.jpg'
function Section (){
    return(
    <div>
          <h1>Hello, my name is</h1>
        
        <span class="rotate textimportant">John doe</span>,<br />
        and i make horrible websites.
      
      <img className="avatar" src={img0} alt="jhondoe" />
      </div>
    )   
    }
    export default Section