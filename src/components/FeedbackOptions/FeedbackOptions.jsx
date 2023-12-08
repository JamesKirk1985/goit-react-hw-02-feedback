import { Component } from 'react'
import css from './FeedbackOptions.module.css'
export class FeedbackOptions extends Component  {
  state = {
    options: ["Good", "Neutral", "Bad"]
  }
  render() {    
    return (
      <>
        {this.state.options.map(
          (item, i) => {
            return(
              <button
            key={i}    
            className={css.button}
            type="button"
            onClick={this.props.onLeaveFeedback}>
            {item}
          </button>  )          
          }
        )}
      </>         
      )
  }
}