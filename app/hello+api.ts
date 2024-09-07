export function GET() {
	return Response.json({ message: 'Hello from GET' });
}

export async function POST(request: Request) {
	const { name } = await request.json();
	return Response.json({ message: `Hello ${name} from POST` });
}
