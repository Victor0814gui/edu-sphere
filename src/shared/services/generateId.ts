


let _idGerate = 0;
export const nerageteId = (): string => {
  _idGerate += 1;
  const timestamp = new Date().getMilliseconds();
  console.log(timestamp)
  const randomStr = Math.random().toString(36)
  const id = `${timestamp}-${randomStr}-${_idGerate}` // Concatena o timestamp com a string aleatória
  return id;
}