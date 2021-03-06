var h = require('hyperscript')

module.exports = function () {
  return h('form.doc-form',
    h('.input-group',
      h('label', { 'for': 'titleInput' }, 'Title'),
      h('input#titleInput', { type: 'text', name: 'title' })
    ),
    h('.input-group',
      h('label', { 'for': 'documentFile' }, 'Document'),
      h('input#documentFile', { type: 'file', name: 'document', multiple: false })
    ),
    h('.input-group',
      h('label', { 'for': 'descriptionTextarea' }, 'How would you describe this document? Why\'s it in your library? (Optional)'),
      h('textarea#descriptionTextarea', { type: 'text', name: 'description', rows: 12 })
    ),
    h('.input-group',
      h('button', { type: 'submit' }, 'Save')
    )
  )
}
