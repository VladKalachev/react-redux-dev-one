import {articles as defaultArcicles} from '../fixtures'

export default (atctileState = defaultArcicles, action) => {
  const {type} = action
  switch (type) {
    case "DELETE_ARTICLE": return atctileState
  }

  return atctileState
}
