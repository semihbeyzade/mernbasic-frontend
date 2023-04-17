import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, employees } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>
			<p>There are {employees.length} employees.</p>
		</div>
	);
};
