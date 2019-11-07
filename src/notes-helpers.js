
export const findFolder = (folders=[], folderid) =>
  folders.find(folder => folder.id.toString() === folderid)

export const findNote = (notes=[], noteId) =>
  notes.find(note => note.id.toString() === noteId)

export const getNotesForFolder = (notes=[], folderid) => ( 
  (!folderid)
    ? notes
    : notes.filter(note => note.folderid.toString() === folderid)
)

export const countNotesForFolder = (notes=[], folderid) =>
  notes.filter(note => note.folderid === folderid).length
