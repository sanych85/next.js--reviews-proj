
import Image from 'next/image';
import {Htag, Button, P, Tag, Rating} from '../components';
import {useState, useEffect} from "react"
import { Layout, withLayout } from '../layout/Layout';
 function Home() {
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
    </>
  );
}

export default withLayout (Home)