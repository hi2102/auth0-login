import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function Home() {
	const { user, error, isLoading } = useUser();
	if (isLoading) return <div>loading ...</div>;
	if (error) return <div>{error.message}</div>;
	if (user) {
		return (
			<>
				<h1>Welcome {user.name}!</h1>
				<Link href='/api/auth/logout'>
					<button>Logout</button>
				</Link>
			</>
		);
	}
	return (
		<Link href='/api/auth/login'>
			<button>LogIn</button>
		</Link>
	);
}
