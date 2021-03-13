
export function convertSnaps<T>(snaps) {

  return <T[]>snaps.map(snap => {
    return {
      docId: snap.payload.doc.id,
      ...snap.payload.doc.data()
    };
  })
}

