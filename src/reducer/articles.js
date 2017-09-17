import {articles as defaultArcicles} from '../fixtures'
import {DELETE_ARTICLE} from '../constants'

export default (atctileState = defaultArcicles, action) => {
  const {type, payload } = action
  console.log(payload)
  switch (type) {
    case DELETE_ARTICLE: return atctileState.filter(article => article.id !== payload.id)
  }

  return atctileState
}
