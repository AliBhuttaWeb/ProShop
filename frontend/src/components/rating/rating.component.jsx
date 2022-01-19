import style from './rating.module.css';

export const Rating = ({rating}) => {
    return <>
        <div className={style.rating}>
           <i className={"fas "+
                    (rating >= 0.5 ? (rating >= 1 ? 'fa-star' : 'fa-star-half-alt') : '')
                }>
           </i>

           <i className={"fas "+
                    (rating >= 1.5 ? (rating >= 2 ? 'fa-star' : 'fa-star-half-alt') : '')
                }>
           </i>

           <i className={"fas "+
                    (rating >= 2.5 ? (rating >= 3 ? 'fa-star' : 'fa-star-half-alt') : '')
                }>
           </i>

           <i className={"fas "+
                    (rating >= 3.5 ? (rating >= 4 ? 'fa-star' : 'fa-star-half-alt') : '')
                }>
           </i>

           <i className={"fas "+
                    (rating >= 4.5 ? (rating >= 5 ? 'fa-star' : 'fa-star-half-alt') : '')
                }>
           </i>
       
        </div>
    </>
}