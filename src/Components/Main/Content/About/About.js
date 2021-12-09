import Title from "../../../UI/Title/Title"
import { about, image } from "./About.module.css"
import imgParts from "./Assets/parts.jpg"
const About = () => {
   return (
      <section className={about}>
         <Title size="h3" seo="h2" description="About us" />
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo natus eaque provident odit expedita odio animi nisi, deleniti atque excepturi recusandae reiciendis repellendus sunt suscipit accusantium ratione minima similique dolores accusamus aspernatur! Illum illo necessitatibus non ab sunt eum numquam harum eligendi vero, exercitationem sint eius facere magni earum inventore.
         </p>
         <div className={image}>
            <img src={imgParts} alt="Computer parts foto" />
         </div>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo natus eaque provident odit expedita odio animi nisi, deleniti atque excepturi recusandae reiciendis repellendus sunt suscipit accusantium ratione minima similique dolores accusamus aspernatur! Illum illo necessitatibus non ab sunt eum numquam harum eligendi vero, exercitationem sint eius facere magni earum inventore.
         </p>
      </section>
   )
}

export default About