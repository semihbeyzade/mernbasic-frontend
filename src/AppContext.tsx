import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IEmployee } from './interfaces';

const employeesUrl = 'http://localhost:3322';

interface IAppContext {
	appTitle: string;
	employees: IEmployee[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [employees, setEmployees] = useState<IEmployee[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${employeesUrl}/employees`);
			const _employees = response.data;
			setEmployees(_employees)
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				employees,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
