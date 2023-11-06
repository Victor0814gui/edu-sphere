
type Data = {
  message: string
}

export async function GET() {

  return Response.json({ message: 'John Doe' })
};