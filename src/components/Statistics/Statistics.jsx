import css from './Statistics.module.css'
export const Statistics = (
    { good,
        neutral,
        bad,
        total,
        positivePercentage }
) => {
    return (<>
        <h2 className={css.title}>Statistics</h2>
        <p className={css.statistic}>Good: {good}</p>
        <p className={css.statistic}>Neutral: {neutral}</p>
        <p className={css.statistic}>Bad: {bad}</p>
        <p className={css.statistic}>Total: {total}</p>
        <p className={css.statistic}>Positive feedback: {positivePercentage} %</p>
    </>)
}
