import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

import { MemlC } from 'meml'
import pretty from 'pretty'

const content = `(head
    (title "Hello world")
)
(body
    (h1 "Hello world")
)`

const reset = () => {
  MemlC.hadError = false
  MemlC.errors = ''
}

const editorTextArea = document.getElementById('editor')
const output = document.getElementById('output')
const src = document.getElementById('src')
const error = document.getElementById('errors')

const recompile = () => {
  const memlc = new MemlC()
  reset()

  const compiled = memlc.translate(editor.getValue(), 'null.meml')
  output.innerHTML = compiled
  src.innerText = pretty(compiled)
  error.innerText = MemlC.errors || ''
}

let editor = CodeMirror(editorTextArea, {
  lineNumbers: true,
  value: content,
})

setInterval(recompile, 500)
