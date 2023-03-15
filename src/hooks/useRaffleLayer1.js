import { useState, useEffect } from 'react';
import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { RAFFLE_ABI } from '@hooks/useABI';

const RAFFLE_ADDR = process.env.REACT_APP_CYPRESS_RAFFLE_ADDR;

export default function useRaffleLayer1() {
  const { caver } = useCaver();
  const { account, walletType } = useRecoilValue(userState);

  const [presentRaffleLayer1, setPresentRaffleLayer1] = useState([]);
  const [pastRaffleLayer1, setPastRaffleLayer1] = useState([]);

  async function setRaffleLayer1(
    _tokenId,
    _endDate,
    _ticketLimit,
    _ticketPrice,
  ) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );
      // BigNumber 대신 string 형태로 넣어줌
      const _tokenValue = String(_ticketPrice * 10 ** 18)
      await myContract.methods
        .setRaffleLayer1(_tokenId, _endDate, _ticketLimit, _tokenValue)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  async function joinRaffleLayer1(_tokenId, _numberOfTickets) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .joinRaffleLayer1(_tokenId, _numberOfTickets)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function drawRaffleLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .drawRaffleLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function announcementWinnerLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .announcementWinnerLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  // only contract owner
  async function deleteRaffleLayer1(_tokenId) {
    if (walletType === 'Kaikas') {
      const myContract = await new caver.klay.Contract(
        RAFFLE_ABI,
        RAFFLE_ADDR,
        {
          from: account,
        },
      );

      await myContract.methods
        .deleteRaffleLayer1(_tokenId)
        .send({ from: account, gas: 0xf4240 });
    }
  }

  useEffect(() => {
    async function getAllRaffleLayer1() {
      if (walletType === 'Kaikas') {
        const myContract = await new caver.klay.Contract(
          RAFFLE_ABI,
          RAFFLE_ADDR,
          {
            from: account,
          },
        );

        await myContract.methods
          .getAllRaffleLayer1(true)
          .call({ from: account })
          .then((result) => setPresentRaffleLayer1(result));

        await myContract.methods
          .getAllRaffleLayer1(false)
          .call({ from: account })
          .then((result) => setPastRaffleLayer1(result));
      }
    }

    getAllRaffleLayer1();
  }, [account, walletType, caver]);

  return {
    setRaffleLayer1,
    joinRaffleLayer1,
    drawRaffleLayer1,
    announcementWinnerLayer1,
    deleteRaffleLayer1,
    presentRaffleLayer1,
    pastRaffleLayer1,
  };
}
