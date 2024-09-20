import React, { useState } from 'react';
        import { PublicKey } from '@solana/web3.js';

        const WalletPage: React.FC = () => {
        const [publicKey, setPublicKey] = useState<string>('');
        const [isValid, setIsValid] = useState<boolean | null>(null);

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputKey = event.target.value;
setPublicKey(inputKey);

        try {
                new PublicKey(inputKey);
setIsValid(true);
        } catch (e) {
setIsValid(false);
        }
                };

                return (
        <div className="bg-gray-200 flex flex-col items-center justify-center border border-gray-400 p-4">
            <h1 className="text-xl font-bold mb-4">Wallet Page</h1>
            <input
type="text"
value={publicKey}
onChange={handleInputChange}
className="p-2 border border-gray-400 rounded"
placeholder="Enter Solana public key"
        />
        {isValid !== null && (
                <p className={`mt-2 ${isValid ? 'text-green-500 font-bold' : 'text-red-500'}`}>
        {isValid ? 'Valid public key' : 'Invalid public key'}
                </p>
        )}
        </div>
        );
        };

export default WalletPage;
