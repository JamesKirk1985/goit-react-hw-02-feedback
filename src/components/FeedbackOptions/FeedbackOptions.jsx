import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>        
        <button className={css.buttonGood } type="button" onClick={onLeaveFeedback}>{ options.positive}</button>
      <button className={css.buttonNeutral } type="button" onClick={onLeaveFeedback}>{ options.neutral}</button>
      <button className={css.buttonBad } type="button" onClick={onLeaveFeedback}>{ options.negative}</button>
        </>
    )
}