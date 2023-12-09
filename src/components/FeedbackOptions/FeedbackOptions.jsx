import css from './FeedbackOptions.module.css'
export const FeedbackOptions =({onLeaveFeedback, options}) => {  
    
    return (
      <>
        {Object.keys(options).map(
          (item, i) => {
            return(
              <button
            key={i}    
            className={css.button}
            type="button"
            onClick={onLeaveFeedback}>
            {item}
          </button>  )          
          }
        )}
      </>         
      )  
}