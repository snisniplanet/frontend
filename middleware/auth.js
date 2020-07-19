export default function(context) {
  if (!context.store.getters['user/id']) {
    context.redirect('/enter')
  }
}
