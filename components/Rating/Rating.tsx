import React, { useState, useEffect, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';
export const Rating = ({
  isEditable,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating)
  }, [rating]);

  const changeDisplay = (i:number)=> {
  
    if(!isEditable) return
    constructRating(i)
  }

  const onclick = (i:number)=> {
    if(!isEditable || !setRating) return
    setRating(i)
  }

  //обрботка нажатия пробела
  const handleSpace  =(i:number, e:KeyboardEvent<SVGElement>)=> {
    if(e.code !=="Space" || !setRating) return
    setRating(i)

  }

  const constructRating = (currentRating: number) => {
    const updatedarray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span  key={i}
        className={cn(styles.star, {
          [styles.filled]: i < currentRating,
          [styles.editable]:isEditable // класс editable будет добавлено только если свойство isEditable = true
      
        })}
        onMouseEnter = {()=>changeDisplay(i+1)}
        onMouseLeave = {()=>changeDisplay(rating)}
        onClick ={()=>onclick(i+1)}>
          <StarIcon
           
            
 
            tabIndex = {isEditable?0: -1}
            onKeyDown = {(e:KeyboardEvent<SVGElement>)=>isEditable && handleSpace(i+1, e)}
          
          />
        </span>
      );
    });
    setRatingArray(updatedarray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
