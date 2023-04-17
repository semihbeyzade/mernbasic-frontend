import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageEmployees = () => {
	const { appTitle, employees } = useContext(AppContext);

	return (
		<div className="pageEmployees">
			<Helmet>
				<title>{appTitle} - Info</title>
			</Helmet>
			<div className="content">
				{employees.map(employee => {
					return (
						<div className="employee">
							<div className="fullName">{employee.firstName} {employee.lastName}</div>
						</div>
					)
				})}
			</div>
		</div>
	);
};
