export default {
  ADD_T(state) {
    const newNote = {
      text: '新建文本',
      favorite: false
    }
    state.notes.push(newNote)
    state.activeNote = newNote
  },
  DELETE_T(state) {
    state.notes.shift(1)
  },
}
