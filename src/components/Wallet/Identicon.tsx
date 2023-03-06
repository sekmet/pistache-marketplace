import Jazzicon from '@sekmet/jazzicon';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';

export default function Identicon({ iconSize = 36 }: { iconSize: number }) {
  const { address } = useAccount();
  const ref = useRef<HTMLDivElement>();
  const accountUser = address;

  useEffect(() => {
    if (accountUser && ref.current) {
      ref.current.innerHTML = '';
      ref.current.appendChild<any>(
        Jazzicon(iconSize, parseInt(accountUser.slice(2, 10), iconSize))
      );
    }
  }, [accountUser]);

  return (
    <div
      style={{ borderRadius: '1.125rem', backgroundColor: 'transparent' }}
      ref={ref as any}
    />
  );
}
