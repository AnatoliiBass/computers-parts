import { Typography } from "@mui/material"
import Title from "../../../UI/Title/Title"
import { contacts, info } from "./Contacts.module.css"

const Contacts = () => {
   return (
      <section className={contacts}>
         <Title size="h3" seo="h2" description="Contact us" />
         <div className={info}>
            <Typography>Our adress: <a href="https://www.google.com.ua/maps/place/%D0%9D%D1%8C%D1%8E-%D0%99%D0%BE%D1%80%D0%BA,+%D0%A1%D0%A8%D0%90/@40.6971494,-74.2598765,10z/data=!3m1!4b1!4m5!3m4!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!8m2!3d40.7127753!4d-74.0059728?hl=ru">USA, New York</a></Typography>
            <Typography>Our phone: <a href="tel:+380730000000">+380730000000</a></Typography>
            <Typography>Our email: <a href="mailto:comp.parts@gmail.com">comp.parts@gmail.com</a></Typography>
         </div>
         <Title size="h4" seo="h2" description="Your questions or propouses" />
      </section>
   )
}

export default Contacts