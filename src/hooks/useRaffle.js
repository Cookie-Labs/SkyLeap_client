import { userState } from '@states/userState';
import { useRecoilValue } from 'recoil';
import useCaver from '@hooks/useCaver';
import { RAFFLE_ABI } from '@hooks/useABI';

const RAFFLE_ADDR = process.env.REACT_APP_CYPRESS_RAFFLE_ADDR;

export default function useRaffle() {
  return {};
}
