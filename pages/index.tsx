
import { GetStaticProps } from 'next';
import Image from 'next/image';
import {Htag, Button, P, Tag, Rating} from '../components';
import {useState, useEffect} from "react"
import { withLayout } from '../layout/Layout';
import axios, {AxiosResponse} from "axios"
import { MenuItem } from '../Interfaces/menuInterface';
import Menu from '../layout/Menu/Menu';



 function Home({menu}:HomeProps) {
const [rating, setRating] = useState<number>(4)

  return (
    <>
    
        <Htag tag= "h1">dgdsgsd</Htag>
        <Button  appearance = "primary" arrow= "right" >Кнопка</Button>
        <Button appearance = "ghost" arrow = "right">Кнопка</Button>
        <P size = "s">dfdsfdsf</P>
        <P size = "m">dfdsfdsf</P>
        <P size = "l">dfdsfdsf</P>
        <Tag size = "s" color = "grey" className = "tag">маленький</Tag>
        <Tag size = "m" color = "primary" className = "tag">большой</Tag>
        <Tag size = "m" color = "green" className = "tag">большой</Tag>
        <Rating rating = {rating} isEditable setRating = {setRating}/>
        {/* {menu.map((m)=> {
          return <li key = {m._id.secondCategory}>{m._id.secondCategory}</li>
        })} */}
       
    </>
  );
}

export default withLayout (Home)

export const getStaticProps: GetStaticProps<HomeProps> = async()=> {
  const firstCategory = 0;
  const {data: menu}: AxiosResponse<MenuItem[]> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN +"/api/top-page/find", {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends  Record<string,unknown>{
  menu: MenuItem[];
  firstCategory: number;
}