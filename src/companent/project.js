import img1 from '../proj1.jpg'
import img2 from '../proj2.jpg'
import img3 from '../proj3.jpg'
import img4 from '../proj4.jpg'
function Project (){
const arr=[{title:"project 1", img:img1}, {title:"project 2", img:img2},{title:"project 3", img:img3},{title:"project 4", img:img4}]
    return(
        <section classeName ="projects">

      { arr.map(el=> 
          <div className="project-card">
            <img src={el.img} alt="project" />
            <h3>{el.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
          </div>)
          }
          
          
        
      </section>
      
    )   
    }
    export default Project