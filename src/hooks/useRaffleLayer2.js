import { useState, useEffect } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { RAFFLE_ABI } from '@hooks/useABI';

const RAFFLE_ADDR = process.env.REACT_APP_CYPRESS_RAFFLE_ADDR;

export default function useRaffleLayer2() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);

  const [presentRaffleLayer2, setPresentRaffleLayer2] = useState([]);
  const [pastRaffleLayer2, setPastRaffleLayer2] = useState([]);

  // only contract owner
  async function setRaffleLayer2(
    _tokenId,
    _endDate,
    _ticketLimit,
    _ticketTokenPrice,
  ) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .setRaffleLayer2(_tokenId, _endDate, _ticketLimit, _ticketTokenPrice)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  async function joinRaffleLayer2(_tokenId, _numberOfTickets) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .joinRaffleLayer2(_tokenId, _numberOfTickets)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function drawRaffleLayer2(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .drawRaffleLayer2(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function announcementWinnerLayer2(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .announcementWinnerLayer2(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function deleteRaffleLayer2(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .deleteRaffleLayer2(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  useEffect(() => {
    async function getAllRaffleLayer2() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(
          RAFFLE_ABI,
          RAFFLE_ADDR,
          {
            from: account,
          },
        );

        await myContract.methods
          .getAllRaffleLayer2(true)
          .call({ from: account })
          .then((result) => setPresentRaffleLayer2(result));

        await myContract.methods
          .getAllRaffleLayer2(false)
          .call({ from: account })
          .then((result) => setPastRaffleLayer2(result));
      }
    }

    getAllRaffleLayer2();
  }, [account, walletType, caver]);

  return {
    setRaffleLayer2,
    joinRaffleLayer2,
    drawRaffleLayer2,
    announcementWinnerLayer2,
    deleteRaffleLayer2,
    presentRaffleLayer2,
    pastRaffleLayer2,
  };
}
