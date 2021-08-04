const Transaction = ({ transaction }) => {
  return (
    <li className="minus">
      {transaction.text}
      <span>{transaction.amount}</span>
    </li>
  );
};

export default Transaction;
