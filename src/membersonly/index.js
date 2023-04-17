import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

export default function members() {
	return <h1>MEMBERS ONLY!</h1>;
}

export const getServerSideProps = withPageAuthRequired();
