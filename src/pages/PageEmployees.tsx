import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageEmployees = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<div className="pageEmployees">
			<Helmet>
				<title>{appTitle} - Info</title>
			</Helmet>
			<div className="content">
				<p>this is the employees page</p>
			</div>
		</div>
	);
};
