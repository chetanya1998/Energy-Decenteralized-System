class TransactionPool:
    def __init__(self):
        self.transaction_map = {}


    def set_transaction(self,transaction):
        """
        Set a transaction in the transaction pool.
        """
        self.transaction_map[transaction.id] = transaction

    def existing_transaction(self,address):

        """
        Find a transaction generated by the address in the transaction pool
        """
        for transaction in self.transaction_map.values():
            if transaction.input['address'] == address:
                return transaction

    def transaction_data(self):
        """
        Return the transaction of the transaction pool represented in their
        json serialized form.
        """

        transaction_values = self.transaction_map.values()
        return list(map(
                lambda transaction:transaction.to_json(),
                self.transaction_map.values()
        ))

    def clear_blockchain_transactions(self,blockchain):
        """
        delete blockchain recorded transactions from the transaction pool.
        """
        for block in blockchain.chain:
            for transaction in block.data:
                try:
                    del self.transaction_map[transaction['id']]
                except KeyError:
                    pass
