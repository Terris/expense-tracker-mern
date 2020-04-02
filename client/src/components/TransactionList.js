import React, { useContext, useEffect, Fragment } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
	const { transactions, getTransactions } = useContext(GlobalContext);

	useEffect(() => {
		getTransactions();
	}, []);

	return (
		<Fragment>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => <Transaction key={transaction._id} transaction={transaction} />)}
			</ul>
		</Fragment>
	);
};
