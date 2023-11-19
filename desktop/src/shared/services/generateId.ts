


let _generateId = 0;
export const generateId = (): string => {
  _generateId += 1;
  const timestamp = new Date().getMilliseconds();
  const randomStr = Math.random().toString(36)
  const id = `${timestamp}-${randomStr}-${_generateId}`
  return id;
}