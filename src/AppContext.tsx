import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IEmployee } from './interfaces';

const employeesUrl = 'https://localhost:3322';

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
		setEmployees([
			{
				id: 1,
				firstName: 'John',
				lastName: 'Taylor',
				title: 'President'
			},
			{
				id: 2,
				firstName: 'Sue',
				lastName: 'Taylor',
				title: 'Sales Member'
			}
		])
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				employees
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
