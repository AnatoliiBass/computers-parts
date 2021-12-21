
import { addCategory, updateCategory } from './Redux/state'
import state from './Redux/state'
import { renderMainTree } from './render'

window.state = state

renderMainTree(state, addCategory, updateCategory)

